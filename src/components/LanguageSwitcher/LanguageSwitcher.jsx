import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const setLang = (lng) => {
    if (lng !== i18n.language) i18n.changeLanguage(lng)
  }

  const current = i18n.language?.split('-')[0] ?? 'en'

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {['tr', 'en'].map((lng) => (
        <button
          key={lng}
          type="button"
          className={`lang-switch__btn ${current === lng ? 'lang-switch__btn--active' : ''}`}
          onClick={() => setLang(lng)}
          aria-pressed={current === lng}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
