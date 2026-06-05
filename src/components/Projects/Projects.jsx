import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../Reveal/Reveal'
import { getProjectsWithScreens } from '../../data/projectsMeta'
import './Projects.css'

const AUTOPLAY_MS = 5500
const SLIDE_TRANSITION_MS = 680

const buildSliderItems = (items) => [
  { project: items[items.length - 1], key: `${items[items.length - 1].id}-clone-start` },
  ...items.map((p) => ({ project: p, key: p.id })),
  { project: items[0], key: `${items[0].id}-clone-end` },
]

const toRealIndex = (trackIndex, len) => {
  if (trackIndex <= 0) return len - 1
  if (trackIndex >= len + 1) return 0
  return trackIndex - 1
}

const SLOTS = ['left', 'center', 'right']

const ProjectDevice = ({ image, title, size = 'md', slot = 'center', screenLabel }) => (
  <div className={`project-device project-device--${size} project-device--${slot}`}>
    <div className="project-device__stage">
      <div className="project-device__iphone">
        {slot === 'center' && (
          <>
            <span className="project-device__btn project-device__btn--action" aria-hidden="true" />
            <span className="project-device__btn project-device__btn--vol-up" aria-hidden="true" />
            <span className="project-device__btn project-device__btn--vol-down" aria-hidden="true" />
            <span className="project-device__btn project-device__btn--power" aria-hidden="true" />
          </>
        )}
        <div className="project-device__bezel">
          <div
            className="project-device__screen"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={screenLabel}
          />
          <div className="project-device__glass" aria-hidden="true" />
        </div>
      </div>
    </div>
  </div>
)

const ProjectDevices = ({ project, size = 'md', screenLabelFn }) => {
  const screens = project.screens ?? [project.image, project.image, project.image]

  return (
    <div className={`project-devices project-devices--${size}`}>
      <div className="project-devices__floor" aria-hidden="true" />
      {SLOTS.map((slot, i) => (
        <ProjectDevice
          key={slot}
          image={screens[i]}
          title={project.title}
          size={size}
          slot={slot}
          screenLabel={screenLabelFn(project.title, slot)}
        />
      ))}
    </div>
  )
}

const ProjectCard = ({ project, t }) => {
  const metrics = t(`projects.items.${project.id}.metrics`, { returnObjects: true })

  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-card__glow" aria-hidden="true" />

      <div className="project-card__layout">
        <div className="project-card__device-col">
          <ProjectDevices
            project={project}
            size="lg"
            screenLabelFn={(title, slot) => t('projects.screen', { title, slot })}
          />
        </div>
        <div className="project-card__body">
          <div className="project-card__top">
            {project.featured ? (
              <span className="project-card__badge">{t('projects.featured')}</span>
            ) : (
              <span className="project-card__top-slot" aria-hidden="true" />
            )}
            <span className="project-card__year">{project.year}</span>
          </div>
          <span className="project-card__tag">{t(`projects.items.${project.id}.tag`)}</span>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__highlight">{t(`projects.items.${project.id}.highlight`)}</p>
          <p className="project-card__desc">{t(`projects.items.${project.id}.desc`)}</p>
          {Array.isArray(metrics) && metrics.length > 0 && (
            <ul className="project-card__metrics">
              {metrics.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          )}
          <div className="project-card__stack">
            {project.stack.map((tech) => (
              <span key={tech} className="project-card__pill">{tech}</span>
            ))}
          </div>
          <div className="project-card__stores">
            <a
              href={project.stores.appStore}
              className="project-card__store"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — ${t('projects.appStore')}`}
            >
              <span className="material-symbols-outlined" aria-hidden="true">phone_iphone</span>
              {t('projects.stores.appStore')}
            </a>
            <a
              href={project.stores.playStore}
              className="project-card__store"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — ${t('projects.googlePlay')}`}
            >
              <span className="material-symbols-outlined" aria-hidden="true">shop</span>
              {t('projects.stores.googlePlay')}
            </a>
            {project.website && (
              <a
                href={project.website}
                className="project-card__store"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — ${t('projects.website')}`}
              >
                <span className="material-symbols-outlined" aria-hidden="true">language</span>
                {t('projects.stores.web')}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  const { t, i18n } = useTranslation()
  const projects = useMemo(() => getProjectsWithScreens(), [i18n.language])
  const slideCount = projects.length
  const cloneEndIndex = slideCount + 1
  const sliderItems = useMemo(() => buildSliderItems(projects), [projects])
  const [trackIndex, setTrackIndex] = useState(1)
  const [instant, setInstant] = useState(false)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(0)
  const trackRef = useRef(null)

  const realIndex = toRealIndex(trackIndex, slideCount)

  const goTo = useCallback((index) => {
    const next = ((index % slideCount) + slideCount) % slideCount
    setInstant(false)
    setTrackIndex(next + 1)
  }, [slideCount])

  const goNext = useCallback(() => {
    setTrackIndex((i) => {
      if (i >= cloneEndIndex) {
        setInstant(true)
        return 1
      }
      return i + 1
    })
  }, [cloneEndIndex])

  const goPrev = useCallback(() => {
    setTrackIndex((i) => {
      if (i <= 0) {
        setInstant(true)
        return slideCount
      }
      return i - 1
    })
  }, [slideCount])

  useEffect(() => {
    if (trackIndex !== 0 && trackIndex !== cloneEndIndex) return undefined

    const track = trackRef.current
    if (!track) return undefined

    let settled = false
    const snapToReal = () => {
      if (settled) return
      settled = true
      setInstant(true)
      setTrackIndex((current) => {
        if (current === cloneEndIndex) return 1
        if (current === 0) return slideCount
        return current
      })
    }

    const onEnd = (e) => {
      if (e.target !== track || e.propertyName !== 'transform') return
      snapToReal()
    }

    track.addEventListener('transitionend', onEnd)
    const fallback = window.setTimeout(snapToReal, SLIDE_TRANSITION_MS + 80)

    return () => {
      track.removeEventListener('transitionend', onEnd)
      window.clearTimeout(fallback)
    }
  }, [trackIndex, cloneEndIndex, slideCount])

  useEffect(() => {
    if (!instant) return undefined
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setInstant(false))
    })
    return () => cancelAnimationFrame(id)
  }, [instant, trackIndex])

  useEffect(() => {
    if (paused) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return undefined

    const timer = window.setInterval(() => {
      setTrackIndex((i) => {
        if (i >= cloneEndIndex) {
          setInstant(true)
          return 1
        }
        return i + 1
      })
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [paused, cloneEndIndex])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 50) goPrev()
    else if (delta < -50) goNext()
  }

  return (
    <section className="projects-showcase container" id="projects">
      <div className="projects__space" aria-hidden="true" />
      <div className="projects-showcase__bg" aria-hidden="true" />

      <Reveal className="projects-showcase__header">
        <span className="projects-showcase__eyebrow">{t('projects.eyebrow')}</span>
        <h2 className="projects-showcase__title">
          {t('projects.title')} <span className="projects-showcase__title-accent">{t('projects.titleAccent')}</span>
        </h2>
        <p className="projects-showcase__subtitle">{t('projects.subtitle')}</p>
      </Reveal>

      <Reveal className="projects-slider-wrap" delay={100}>
        <div
          className="projects-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
          }}
        >
          <div className="projects-slider__toolbar">
            <span className="projects-slider__counter" aria-live="polite">
              {String(realIndex + 1).padStart(2, '0')}
              <span className="projects-slider__counter-sep">/</span>
              {String(projects.length).padStart(2, '0')}
            </span>
            <div className="projects-slider__controls">
              <button
                type="button"
                className="projects-slider__arrow"
                onClick={goPrev}
                aria-label={t('projects.prev')}
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                type="button"
                className="projects-slider__arrow"
                onClick={goNext}
                aria-label={t('projects.next')}
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div
            className="projects-slider__viewport"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-roledescription="carousel"
            aria-label={t('projects.carousel')}
          >
            <div
              ref={trackRef}
              className={`projects-slider__track ${instant ? 'projects-slider__track--instant' : ''}`}
              style={{ '--slide-index': trackIndex }}
            >
              {sliderItems.map((item, index) => (
                <div
                  key={item.key}
                  className={`projects-slider__slide ${index === trackIndex ? 'projects-slider__slide--active' : ''} ${Math.abs(index - trackIndex) === 1 ? 'projects-slider__slide--peek' : ''}`}
                  aria-hidden={index !== trackIndex}
                >
                  <ProjectCard project={item.project} t={t} />
                </div>
              ))}
            </div>
          </div>

          <div className="projects-slider__footer">
            <div className="projects-slider__dots" role="tablist" aria-label={t('projects.selectProject')}>
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  className={`projects-slider__dot ${index === realIndex ? 'projects-slider__dot--active' : ''}`}
                  aria-selected={index === realIndex}
                  aria-label={t('projects.slide', { title: project.title, index: index + 1 })}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
            <div
              className={`projects-slider__progress ${paused ? 'projects-slider__progress--paused' : ''}`}
              aria-hidden="true"
            >
              <span
                key={realIndex}
                className="projects-slider__progress-bar"
                style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Projects
