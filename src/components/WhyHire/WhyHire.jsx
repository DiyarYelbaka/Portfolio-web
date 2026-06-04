import Reveal from '../Reveal/Reveal'
import './WhyHire.css'

const pillars = [
  {
    icon: 'rocket_launch',
    title: 'Fikirden mağazaya',
    desc: 'Mimari karar, geliştirme, test ve App Store / Play Store sürecine kadar tek elden sahiplenme.',
  },
  {
    icon: 'architecture',
    title: 'Kod kalitesi önce',
    desc: 'Clean Architecture, TypeScript ve ölçeklenebilir state — teknik borç biriktirmeden büyüyen codebase.',
  },
  {
    icon: 'bolt',
    title: 'Performans odaklı',
    desc: 'Render optimizasyonu, bellek yönetimi ve akıcı etkileşim — kullanıcı deneyimini önceleyen uygulamalar.',
  },
]

const WhyHire = () => {
  return (
    <section className="why-hire container" id="approach">
      <div className="why-hire__space" aria-hidden="true" />
      <Reveal className="why-hire__header">
        <span className="section-eyebrow">Çalışma yaklaşımım</span>
        <h2 className="why-hire__title">
          <span className="text-accent">Ne sunuyorum</span>
        </h2>
        <p className="why-hire__subtitle">
          Ürün odaklı geliştirme — mimariden mağaza yayınına kadar tutarlı ve sürdürülebilir bir süreç.
        </p>
      </Reveal>

      <div className="why-hire__grid">
        {pillars.map((item, i) => (
          <Reveal key={item.title} className="why-hire__card" delay={i * 100}>
            <div className="why-hire__icon-wrap">
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default WhyHire
