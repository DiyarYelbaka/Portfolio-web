import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './i18n'
import './styles/global.css'

const revealIcons = () => {
  document.documentElement.classList.add('icons-ready')
}

const iconFontReady = document.fonts?.load
  ? document.fonts.load('500 24px "Material Symbols Outlined"')
  : Promise.resolve()

Promise.all([iconFontReady, document.fonts?.ready].filter(Boolean))
  .then(revealIcons)
  .catch(revealIcons)

setTimeout(revealIcons, 4000)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
