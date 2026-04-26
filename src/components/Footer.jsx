import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/writing', label: 'Writing' },
  { to: '/research', label: 'Research' },
  { to: '/contact', label: 'Contact' },
]

const SOCIAL = [
  { href: 'https://x.com/KKunjulakshmi', label: 'X (Twitter)' },
  { href: 'https://www.linkedin.com/in/kunjulakshmi-k-3221b423a', label: 'LinkedIn' },
  { href: 'https://orcid.org/0000-0001-9003-0972', label: 'ORCID' },
  { href: 'https://thecuriosityquotient.substack.com', label: 'Substack' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <NavLink to="/" className="nav-logo footer-logo">
              <span className="logo-text">Kunjulakshmi </span>
              <span className="logo-accent">K.</span>
            </NavLink>
            <p>Science communicator. Marine ecology enthusiast. Storyteller.</p>
            <p className="footer-tagline">"That Shrimply Amazing Girl!"</p>
          </div>
          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              {NAV_LINKS.map(l => (
                <li key={l.to}><NavLink to={l.to}>{l.label}</NavLink></li>
              ))}
            </ul>
          </div>
          <div className="footer-links">
            <h4>Connect</h4>
            <ul>
              {SOCIAL.map(s => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Kunjulakshmi K. All rights reserved.</p>
          <p className="footer-credit">Made with 🌊 &amp; curiosity</p>
        </div>
      </div>
    </footer>
  )
}
