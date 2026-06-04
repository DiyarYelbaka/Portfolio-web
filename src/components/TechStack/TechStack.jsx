import Reveal from '../Reveal/Reveal'
import './TechStack.css'

const mainSkills = [
    { name: 'React Native', desc: 'CLI & Expo Expert', icon: 'smartphone', color: 'primary' },
    { name: 'TypeScript', desc: 'Typed Excellence', icon: 'code', color: 'blue' },
    { name: 'State Management', desc: 'Zustand, Redux, Recoil', icon: 'dataset', color: 'purple' },
    { name: 'API Architecture', desc: 'REST & GraphQL', icon: 'api', color: 'white' },
]

const detailSkills = [
    { name: 'Clean Architecture', desc: 'Building sustainable, scalable, and maintainable enterprise codebases.', icon: 'architecture' },
    { name: 'Performance Ops', desc: 'Expert in render optimization, lifecycle management, and memory efficiency.', icon: 'bolt' },
    { name: 'AI Integration', desc: 'Experience with image processing, AI listings, and voice-driven finance apps.', icon: 'psychology' },
    { name: 'Deployment & CI/CD', desc: 'Full lifecycle management from development to App Store & Play Store.', icon: 'rocket_launch' },
]

const TechStack = () => {
    return (
        <section className="tech-stack-ref container" id="skills">
            <Reveal className="section-header-ref">
                <h2 className="section-title-ref">Teknoloji & Yetkinlik</h2>
                <p className="section-subtitle-ref">Kurumsal mobil ürünler için kanıtlanmış stack — hız, tip güvenliği ve sürdürülebilir mimari.</p>
            </Reveal>

            <div className="main-skills-grid">
                {mainSkills.map((skill, index) => (
                    <Reveal key={skill.name} className="main-skill-card" delay={index * 90}>
                        <div className={`skill-icon-wrapper ${skill.color}`}>
                            <span className="material-symbols-outlined">{skill.icon}</span>
                        </div>
                        <h3 className="skill-name">{skill.name}</h3>
                        <p className="skill-desc">{skill.desc}</p>
                    </Reveal>
                ))}
            </div>

            <Reveal className="detail-skills-glass" delay={120}>
                <div className="detail-skills-grid">
                    {detailSkills.map((skill, index) => (
                        <Reveal
                            key={skill.name}
                            className="detail-skill-item"
                            delay={160 + index * 70}
                        >
                            <span className="material-symbols-outlined detail-icon">{skill.icon}</span>
                            <div>
                                <h4 className="detail-name">{skill.name}</h4>
                                <p className="detail-desc">{skill.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Reveal>
        </section>
    )
}

export default TechStack
