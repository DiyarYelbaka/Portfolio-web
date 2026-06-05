import Reveal from '../Reveal/Reveal'
import './TechStack.css'

const mainSkills = [
    { name: 'React Native', desc: 'CLI & Expo Expert', icon: 'smartphone', color: 'primary' },
    { name: 'TypeScript', desc: 'Typed Excellence', icon: 'code', color: 'blue' },
    { name: 'State Management', desc: 'Zustand, Redux, Recoil', icon: 'dataset', color: 'purple' },
    { name: 'API Architecture', desc: 'REST & GraphQL', icon: 'api', color: 'white' },
]

const detailSkills = [
    { name: 'Clean Architecture', desc: 'Sürdürülebilir, ölçeklenebilir ve bakımı kolay kurumsal kod tabanları kuruyorum.', icon: 'architecture' },
    { name: 'Performance Ops', desc: 'Render optimizasyonu, lifecycle yönetimi ve bellek verimliliği konularında uzmanım.', icon: 'bolt' },
    { name: 'Native Integrations', desc: 'Ödeme SDK\'ları, kamera, push bildirim ve platform API\'lerini React Native ile sorunsuz bağlıyorum.', icon: 'extension' },
    { name: 'Deployment & CI/CD', desc: 'Geliştirmeden App Store ve Play Store\'a kadar tüm süreci uçtan uca yönetiyorum.', icon: 'rocket_launch' },
]

const TechStack = () => {
    return (
        <section className="tech-stack-ref container" id="skills">
            <Reveal className="section-header-ref">
                <h2 className="section-title-ref">Teknoloji & Yetkinlik</h2>
                <p className="section-subtitle-ref">Performans, ölçeklenebilirlik ve kullanıcı deneyimi odaklı geliştirme.</p>
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
