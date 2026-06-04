import Reveal from '../Reveal/Reveal'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <section className="contact-section container" id="contact">
        <div className="contact-section__bg" aria-hidden="true" />

        <Reveal className="contact-section__header">
          <span className="contact-section__eyebrow">İletişim</span>
          <h2 className="contact-section__title">
            Birlikte <span className="contact-section__title-accent">konuşalım</span>
          </h2>
          <p className="contact-section__subtitle">
            İzmir merkezli, remote-friendly. Mobil geliştirme veya mimari danışmanlık için mesaj bırakın.
          </p>
        </Reveal>

        <Reveal className="contact-card" delay={80}>
          <div className="contact-card__glow" aria-hidden="true" />

          <div className="contact-card__layout">
            <aside className="contact-card__aside">
              <p className="contact-card__aside-label">Hızlı erişim</p>
              <a href="mailto:diyaryelbaka@gmail.com" className="contact-chip">
                <span className="material-symbols-outlined" aria-hidden="true">mail</span>
                diyaryelbaka@gmail.com
              </a>
              <span className="contact-chip contact-chip--muted">
                <span className="material-symbols-outlined" aria-hidden="true">location_on</span>
                İzmir · Remote-friendly
              </span>
              <span className="contact-chip contact-chip--muted">
                <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
                Genelde 24 saat içinde dönüş
              </span>
            </aside>

            <form
              className="contact-form"
              action="mailto:diyaryelbaka@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="contact-form__row">
                <div className="contact-field">
                  <label htmlFor="name" className="contact-field__label">
                    <span className="material-symbols-outlined" aria-hidden="true">person</span>
                    Ad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact-field__input"
                    placeholder="Adınız"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="email" className="contact-field__label">
                    <span className="material-symbols-outlined" aria-hidden="true">alternate_email</span>
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact-field__input"
                    placeholder="ornek@mail.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="message" className="contact-field__label">
                  <span className="material-symbols-outlined" aria-hidden="true">chat</span>
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-field__input contact-field__input--area"
                  rows="5"
                  placeholder="Projenizden kısaca bahsedin..."
                  required
                />
              </div>
              <button type="submit" className="contact-form__submit">
                Mesaj gönder
                <span className="material-symbols-outlined" aria-hidden="true">send</span>
              </button>
            </form>
          </div>
        </Reveal>
      </section>

      <footer className="main-footer">
        <div className="container">
          <Reveal className="footer-bar" delay={100}>
            <div className="footer-bar__left">
              <span className="footer-bar__brand">Diyar Yelbaka</span>
              <span className="footer-bar__meta">© 2026 · React Native Developer</span>
            </div>
            <div className="footer-bar__links">
              <a href="mailto:diyaryelbaka@gmail.com">E-posta</a>
              <a href="#" aria-label="LinkedIn profili">LinkedIn</a>
              <a href="#" aria-label="GitHub profili">GitHub</a>
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  )
}

export default Footer
