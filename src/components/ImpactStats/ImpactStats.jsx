import Reveal from '../Reveal/Reveal'
import './ImpactStats.css'

const stats = [
  { value: '3+', label: 'Yıl', sub: 'Enterprise mobil geliştirme' },
  { value: '10+', label: 'Ürün', sub: 'Canlıya alınmış uygulama' },
  { value: '∞', label: 'Ölçek', sub: 'Modüler, sürdürülebilir mimari' },
  { value: '100%', label: 'Odak', sub: 'TypeScript & sürdürülebilir kod' },
]

const ImpactStats = () => {
  return (
    <section className="impact-stats container" aria-label="Özet metrikler">
      <div className="impact-stats__grid">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} className="impact-stat" delay={i * 80}>
            <span className="impact-stat__value">{stat.value}</span>
            <span className="impact-stat__label">{stat.label}</span>
            <span className="impact-stat__sub">{stat.sub}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default ImpactStats
