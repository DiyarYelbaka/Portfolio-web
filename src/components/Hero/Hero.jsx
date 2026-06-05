import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../Reveal/Reveal'
import Marquee from '../Marquee/Marquee'
import { assetUrl } from '../../utils/assetUrl'
import './Hero.css'

const PROFILE = {
  name: 'Diyar Yelbaka',
  image: assetUrl('profile.jpg'),
  imageFallback: assetUrl('profile-placeholder.svg'),
}

const Hero = () => {
  const { t } = useTranslation()
  const [imgSrc, setImgSrc] = useState(PROFILE.image)

  const handleImageError = () => {
    setImgSrc(PROFILE.imageFallback)
  }

  return (
    <section className="hero-ref" id="about">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow--primary" />
      <div className="hero-glow hero-glow--cyan" />

      <Reveal>
        <div className="hero-profile">
          <img
            src={imgSrc}
            alt={PROFILE.name}
            className="hero-profile__img"
            width={120}
            height={120}
            onError={handleImageError}
          />
        </div>
      </Reveal>

      <Reveal delay={80}>
        <p className="hero-name">{PROFILE.name}</p>
      </Reveal>

      <Reveal delay={140}>
        <h1 className="hero-title-ref">
          <span className="hero-title-gradient">React Native</span>
          <span className="hero-title-line">Developer</span>
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <p className="hero-bio">{t('hero.bio')}</p>
      </Reveal>

      <Reveal delay={260}>
        <div className="hero-actions-ref">
          <a href="#projects" className="btn-primary-ref">
            {t('hero.projects')}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a href="#contact" className="btn-secondary-ref">
            {t('hero.contact')}
          </a>
        </div>
      </Reveal>

      <Reveal delay={320}>
        <Marquee />
      </Reveal>
    </section>
  )
}

export default Hero
