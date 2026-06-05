import { useTranslation } from 'react-i18next'
import Reveal from '../Reveal/Reveal'
import './WhyHire.css'

const PILLAR_KEYS = [
  { key: 'ideaToStore', icon: 'rocket_launch' },
  { key: 'codeQuality', icon: 'architecture' },
  { key: 'performance', icon: 'bolt' },
]

const WhyHire = () => {
  const { t } = useTranslation()

  return (
    <section className="why-hire container" id="approach">
      <div className="why-hire__space" aria-hidden="true" />
      <Reveal className="why-hire__header">
        <span className="section-eyebrow">{t('whyHire.eyebrow')}</span>
        <h2 className="why-hire__title">
          <span className="text-accent">{t('whyHire.title')}</span>
        </h2>
        <p className="why-hire__subtitle">{t('whyHire.subtitle')}</p>
      </Reveal>

      <div className="why-hire__grid">
        {PILLAR_KEYS.map((item, i) => (
          <Reveal key={item.key} className="why-hire__card" delay={i * 100}>
            <div className="why-hire__icon-wrap">
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <h3>{t(`whyHire.pillars.${item.key}.title`)}</h3>
            <p>{t(`whyHire.pillars.${item.key}.desc`)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default WhyHire
