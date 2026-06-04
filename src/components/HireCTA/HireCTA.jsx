import Reveal from '../Reveal/Reveal'
import './HireCTA.css'

const HireCTA = () => {
  return (
    <section className="hire-cta container" aria-label="İletişim daveti">
      <Reveal className="hire-cta__inner">
        <div className="hire-cta__glow" aria-hidden="true" />
        <div className="hire-cta__content">
          <h2 className="hire-cta__title">
            Bir proje fikriniz varsa konuşalım.
          </h2>
          <p className="hire-cta__desc">
            Mobil ürün, mimari danışmanlık veya ekip desteği — kısa bir mesajla başlayabiliriz.
          </p>
          <div className="hire-cta__actions">
            <a href="#contact" className="btn-shine btn-shine--primary">
              İletişime geç
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a href="mailto:diyaryelbaka@gmail.com" className="btn-shine btn-shine--ghost">
              diyaryelbaka@gmail.com
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default HireCTA
