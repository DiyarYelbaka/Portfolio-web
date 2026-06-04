import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Reveal from '../Reveal/Reveal'
import { assetUrl } from '../../utils/assetUrl'
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

/** public/projects/{id}/1.{ext} — sol | 2 — orta | 3 — sağ */
const projectScreens = (id, ext = 'webp') =>
  [1, 2, 3].map((n) => assetUrl(`projects/${id}/${n}.${ext}`))

const projects = [
  {
    id: 'plan4m',
    title: 'Plan4M',
    highlight: 'Spor salonu ekosistemi — üye, antrenör ve ödeme tek platformda.',
    desc: 'Enterprise gym management: scheduling, payments, reporting ve çok kiracılı mimari.',
    tag: 'Enterprise',
    year: '2024',
    screens: projectScreens('plan4m'),
    accent: 'cyan',
    stack: ['React Native', 'TypeScript', 'Redux'],
    metrics: ['Multi-tenant', 'Ödeme', 'Raporlama'],
    featured: true,
  },
  {
    id: 'easyfinai',
    title: 'EasyFinAI',
    highlight: 'Sesli komut ve AI destekli kişisel finans yönetimi.',
    desc: 'Gelir–gider, bütçe analizi, Apple/Google Pay ve yapay zeka asistanı.',
    tag: 'Fintech / AI',
    year: '2024',
    screens: projectScreens('easyfinai'),
    accent: 'purple',
    stack: ['Expo', 'OpenAI', 'Zustand'],
    metrics: ['Voice UI', 'AI', 'Payments'],
  },
  {
    id: 'futbo',
    title: 'Futbo',
    highlight: 'Kulüp operasyonları için uçtan uca yönetim modülleri.',
    desc: 'Antrenman planlama, oyuncu takibi ve finansal operasyonlar tek uygulamada.',
    tag: 'Sports',
    year: '2023',
    screens: projectScreens('futbo'),
    accent: 'blue',
    stack: ['React Native', 'GraphQL', 'Maps'],
    metrics: ['Modüler', 'Takvim', 'Finans'],
  },
  {
    id: 'vgen',
    title: 'V-Gen',
    highlight: 'Gerçek zamanlı enerji piyasası ve yüksek trafik veri akışı.',
    desc: 'Santral optimizasyonu ve canlı veri stream mimarisi ile enterprise mobil panel.',
    tag: 'Energy',
    year: '2023',
    screens: projectScreens('vgen'),
    accent: 'green',
    stack: ['RN CLI', 'WebSocket', 'Charts'],
    metrics: ['Real-time', 'Dashboard', 'Scale'],
  },
  {
    id: 'cartech',
    title: 'Cartech AI',
    highlight: 'AI ile görsel segmentasyon ve akıllı ilan yönetimi.',
    desc: 'Otomotiv ilanlarında arka plan kaldırma ve görsel zenginleştirme pipeline\'ı.',
    tag: 'Automotive / AI',
    year: '2023',
    screens: projectScreens('cartech'),
    accent: 'amber',
    stack: ['Vision AI', 'Camera', 'Upload'],
    metrics: ['Segmentation', 'ML', 'Listing'],
  },
]

const SLOTS = ['left', 'center', 'right']

const ProjectDevice = ({ image, title, size = 'md', slot = 'center' }) => (
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
            aria-label={`${title} ekran ${slot}`}
          />
          <div className="project-device__glass" aria-hidden="true" />
        </div>
      </div>
    </div>
  </div>
)

const ProjectDevices = ({ project, size = 'md' }) => {
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
        />
      ))}
    </div>
  )
}

const ProjectCard = ({ project }) => (
  <article className={`project-card project-card--${project.accent}`}>
    <div className="project-card__glow" aria-hidden="true" />

    <div className="project-card__layout">
      <div className="project-card__device-col">
        <ProjectDevices project={project} size="lg" />
      </div>
      <div className="project-card__body">
        <div className="project-card__top">
          {project.featured ? (
            <span className="project-card__badge">Öne çıkan</span>
          ) : (
            <span className="project-card__top-slot" aria-hidden="true" />
          )}
          <span className="project-card__year">{project.year}</span>
        </div>
        <span className="project-card__tag">{project.tag}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__highlight">{project.highlight}</p>
        <p className="project-card__desc">{project.desc}</p>
        {project.metrics?.length > 0 && (
          <ul className="project-card__metrics">
            {project.metrics.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        )}
        <div className="project-card__stack">
          {project.stack.map((t) => (
            <span key={t} className="project-card__pill">{t}</span>
          ))}
        </div>
        <a href="#" className="project-card__cta">
          Detayları gör
          <span className="material-symbols-outlined">arrow_outward</span>
        </a>
      </div>
    </div>
  </article>
)

const Projects = () => {
  const slideCount = projects.length
  const cloneEndIndex = slideCount + 1
  const sliderItems = useMemo(() => buildSliderItems(projects), [])
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
        <span className="projects-showcase__eyebrow">Portfolio</span>
        <h2 className="projects-showcase__title">
          Seçilmiş <span className="projects-showcase__title-accent">projeler</span>
        </h2>
        <p className="projects-showcase__subtitle">
          Her ürün için üç ekran görüntüsü — mobil mockup içinde önizlenir.
        </p>
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
                aria-label="Önceki proje"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                type="button"
                className="projects-slider__arrow"
                onClick={goNext}
                aria-label="Sonraki proje"
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
            aria-label="Seçilmiş projeler"
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
                  <ProjectCard project={item.project} />
                </div>
              ))}
            </div>
          </div>

          <div className="projects-slider__footer">
            <div className="projects-slider__dots" role="tablist" aria-label="Proje seç">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  className={`projects-slider__dot ${index === realIndex ? 'projects-slider__dot--active' : ''}`}
                  aria-selected={index === realIndex}
                  aria-label={`${project.title} — slayt ${index + 1}`}
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
