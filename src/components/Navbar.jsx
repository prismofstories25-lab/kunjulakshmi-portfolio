import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <span className="logo-text">Kunjulakshmi </span>
          <span className="logo-accent">K.</span>
        </NavLink>

        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <NavLink to="/" className={({isActive})=>`nav-link${isActive?' active':''}`} end>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>`nav-link${isActive?' active':''}`}>About</NavLink>
          <NavLink to="/writing" className={({isActive})=>`nav-link${isActive?' active':''}`}>Writing</NavLink>
          <NavLink to="/research" className={({isActive})=>`nav-link${isActive?' active':''}`}>Research</NavLink>
          <NavLink to="/contact" className={({isActive})=>`nav-link nav-cta${isActive?' active':''}`}>Connect</NavLink>
        </div>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
