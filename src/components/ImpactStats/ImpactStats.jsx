import { useTranslation } from 'react-i18next'
import Reveal from '../Reveal/Reveal'
import './ImpactStats.css'

const STAT_KEYS = ['years', 'products', 'scale', 'focus']
const STAT_VALUES = ['3+', '10+', '∞', '100%']

const ImpactStats = () => {
  const { t } = useTranslation()

  return (
    <section className="impact-stats container" aria-label={t('stats.ariaLabel')}>
      <div className="impact-stats__grid">
        {STAT_KEYS.map((key, i) => (
          <Reveal key={key} className="impact-stat" delay={i * 80}>
            <span className="impact-stat__value">{STAT_VALUES[i]}</span>
            <span className="impact-stat__label">{t(`stats.${key}.label`)}</span>
            <span className="impact-stat__sub">{t(`stats.${key}.sub`)}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default ImpactStats
