import { useTranslation } from 'react-i18next'
import Reveal from '../Reveal/Reveal'
import './TechStack.css'

const MAIN_SKILL_KEYS = [
  { name: 'React Native', key: 'reactNative', icon: 'smartphone', color: 'primary' },
  { name: 'TypeScript', key: 'typescript', icon: 'code', color: 'blue' },
  { name: 'State Management', key: 'state', icon: 'dataset', color: 'purple' },
  { name: 'API Architecture', key: 'api', icon: 'api', color: 'white' },
]

const DETAIL_SKILL_KEYS = [
  { name: 'Clean Architecture', key: 'cleanArch', icon: 'architecture' },
  { name: 'Performance Ops', key: 'performance', icon: 'bolt' },
  { name: 'Native Integrations', key: 'native', icon: 'extension' },
  { name: 'Deployment & CI/CD', key: 'deploy', icon: 'rocket_launch' },
]

const TechStack = () => {
  const { t } = useTranslation()

  return (
    <section className="tech-stack-ref container" id="skills">
      <Reveal className="section-header-ref">
        <h2 className="section-title-ref">{t('tech.title')}</h2>
        <p className="section-subtitle-ref">{t('tech.subtitle')}</p>
      </Reveal>

      <div className="main-skills-grid">
        {MAIN_SKILL_KEYS.map((skill, index) => (
          <Reveal key={skill.name} className="main-skill-card" delay={index * 90}>
            <div className={`skill-icon-wrapper ${skill.color}`}>
              <span className="material-symbols-outlined">{skill.icon}</span>
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-desc">{t(`tech.main.${skill.key}.desc`)}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="detail-skills-glass" delay={120}>
        <div className="detail-skills-grid">
          {DETAIL_SKILL_KEYS.map((skill, index) => (
            <Reveal
              key={skill.name}
              className="detail-skill-item"
              delay={160 + index * 70}
            >
              <span className="material-symbols-outlined detail-icon">{skill.icon}</span>
              <div>
                <h4 className="detail-name">{skill.name}</h4>
                <p className="detail-desc">{t(`tech.detail.${skill.key}.desc`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default TechStack
