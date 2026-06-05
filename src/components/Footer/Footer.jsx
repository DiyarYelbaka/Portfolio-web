import { useTranslation } from 'react-i18next'
import Reveal from '../Reveal/Reveal'
import './Footer.css'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className="footer-wrapper">
      <section className="contact-section container" id="contact">
        <div className="contact-section__bg" aria-hidden="true" />

        <Reveal className="contact-section__header">
          <span className="contact-section__eyebrow">{t('footer.eyebrow')}</span>
          <h2 className="contact-section__title">
            {t('footer.title')} <span className="contact-section__title-accent">{t('footer.titleAccent')}</span>
          </h2>
          <p className="contact-section__subtitle">{t('footer.subtitle')}</p>
        </Reveal>

        <Reveal className="contact-card" delay={80}>
          <div className="contact-card__glow" aria-hidden="true" />

          <div className="contact-card__layout">
            <aside className="contact-card__aside">
              <p className="contact-card__aside-label">{t('footer.quickAccess')}</p>
              <a href="mailto:diyaryelbaka@gmail.com" className="contact-chip">
                <span className="material-symbols-outlined" aria-hidden="true">mail</span>
                diyaryelbaka@gmail.com
              </a>
              <span className="contact-chip contact-chip--muted">
                <span className="material-symbols-outlined" aria-hidden="true">location_on</span>
                {t('footer.location')}
              </span>
              <span className="contact-chip contact-chip--muted">
                <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
                {t('footer.response')}
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
                    {t('footer.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact-field__input"
                    placeholder={t('footer.form.namePlaceholder')}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="email" className="contact-field__label">
                    <span className="material-symbols-outlined" aria-hidden="true">alternate_email</span>
                    {t('footer.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact-field__input"
                    placeholder={t('footer.form.emailPlaceholder')}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="message" className="contact-field__label">
                  <span className="material-symbols-outlined" aria-hidden="true">chat</span>
                  {t('footer.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-field__input contact-field__input--area"
                  rows="5"
                  placeholder={t('footer.form.messagePlaceholder')}
                  required
                />
              </div>
              <button type="submit" className="contact-form__submit">
                {t('footer.form.submit')}
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
              <span className="footer-bar__meta">{t('footer.copyright')}</span>
            </div>
            <div className="footer-bar__links">
              <a href="mailto:diyaryelbaka@gmail.com">{t('footer.email')}</a>
              <a href="#" aria-label={t('footer.linkedin')}>LinkedIn</a>
              <a href="#" aria-label={t('footer.github')}>GitHub</a>
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  )
}

export default Footer
