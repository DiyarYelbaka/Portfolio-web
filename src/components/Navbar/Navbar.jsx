import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_ITEMS = [
  { href: '#about', label: 'Hakkımda', icon: 'person' },
  { href: '#skills', label: 'Yetenekler', icon: 'code_blocks' },
  { href: '#approach', label: 'Yaklaşımım', icon: 'auto_awesome' },
  { href: '#projects', label: 'Projeler', icon: 'folder_open' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`navbar-ref ${isMenuOpen ? 'menu-open' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-ref__shine" aria-hidden="true" />
      <div className="container nav-container">
        <a href="#" className="logo-group">
          <span className="logo-icon-wrap">
            <span className="material-symbols-outlined logo-icon">rocket_launch</span>
          </span>
          <h2 className="logo-text">Diyar Yelbaka</h2>
        </a>

        <nav className="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              <span className="material-symbols-outlined nav-link__icon">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn-hire-ref desktop-only">
            <span className="material-symbols-outlined">chat</span>
            Konuşalım
          </a>
          <button type="button" className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menü">
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link" onClick={closeMenu}>
              <span className="material-symbols-outlined nav-link__icon">{item.icon}</span>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-hire-ref" onClick={closeMenu}>
            <span className="material-symbols-outlined">chat</span>
            Konuşalım
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
