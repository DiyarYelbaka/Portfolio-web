const SUPPORTED = ['tr', 'en']

/** Tarayıcı diline göre tr | en — ikisi de yoksa en */
export const detectLanguage = () => {
  const stored = localStorage.getItem('locale')
  if (SUPPORTED.includes(stored)) return stored

  const browserLangs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  for (const lang of browserLangs) {
    const code = lang.split('-')[0].toLowerCase()
    if (SUPPORTED.includes(code)) return code
  }

  return 'en'
}
