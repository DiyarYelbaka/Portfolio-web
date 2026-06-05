import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import tr from '../locales/tr.json'
import en from '../locales/en.json'
import { detectLanguage } from './detectLanguage'

i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: tr },
    en: { translation: en },
  },
  lng: detectLanguage(),
  fallbackLng: 'en',
  supportedLngs: ['tr', 'en'],
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  localStorage.setItem('locale', lng)
})

document.documentElement.lang = i18n.language

export default i18n
