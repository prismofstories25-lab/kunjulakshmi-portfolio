import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import MarineBackground from '../components/MarineBackground'
import useAOS from '../hooks/useAOS'
import './Home.css'

const PHRASES = [
  'Research Scholar',
  'Marine Ecologist',
  'Shrimp Taxonomist',
  'Science Communicator',
]

const PROFILE_IMG = 'https://pbs.twimg.com/profile_images/1752758109863575552/AAGtZhIv_400x400.jpg'

function useTypewriter(phrases) {
  const [text, setText] = useState('')
  const state = useRef({ phrase: 0, char: 0, deleting: false, pause: false })

  useEffect(() => {
    let timer
    function tick() {
      const { phrase, char, deleting, pause } = state.current
      const current = phrases[phrase]
      if (pause) {
        state.current.pause = false
        timer = setTimeout(tick, 1800)
        return
      }
      if (!deleting) {
        const next = char + 1
        setText(current.slice(0, next))
        state.current.char = next
        if (next === current.length) { state.current.deleting = true; state.current.pause = true }
        timer = setTimeout(tick, 80)
      } else {
        const next = char - 1
        setText(current.slice(0, next))
        state.current.char = next
        if (next === 0) {
          state.current.deleting = false
          state.current.phrase = (phrase + 1) % phrases.length
        }
        timer = setTimeout(tick, 40)
      }
    }
    tick()
    return () => clearTimeout(timer)
  }, [])

  return text
}

function useCounter(target, visible) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!visible) return
    const start = performance.now()
    const dur = 1600
    function step(now) {
      const p = Math.min((now - start) / dur, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(e * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [visible, target])
  return count
}

function StatCard({ count, label, icon, delay }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef()
  const c = useCounter(count || 0, visible)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div className="stat-card" ref={ref} data-aos="fade-up" data-aos-delay={delay}>
      {count ? <div className="stat-number">{c}</div> : <div className="stat-icon">{icon}</div>}
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Home() {
  useAOS()
  const typed = useTypewriter(PHRASES)
  const [imgErr, setImgErr] = useState(false)

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">
         <div className="hero-bg">
          <MarineBackground />
          <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />
          <div className="wave-container">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
              <defs><path id="wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/></defs>
              <g>
                <use href="#wave" x="48" y="0" fill="rgba(6,182,212,0.07)" style={{animation:'waveMove 10s linear infinite'}}/>
                <use href="#wave" x="48" y="3" fill="rgba(6,182,212,0.05)" style={{animation:'waveMove 13s linear infinite'}}/>
                <use href="#wave" x="48" y="5" fill="rgba(6,182,212,0.03)" style={{animation:'waveMove 16s linear infinite'}}/>
              </g>
            </svg>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-badge"><span className="badge-dot" /> Centre for Climate Change Studies · Sathyabama Institute</div>
          <h1 className="hero-title">
            <span className="title-line">Kunjulakshmi</span>
            <span className="title-highlight">K.</span>
          </h1>
          <p className="hero-tagline">
            <span className="typewriter">{typed}</span>
          </p>
          <p className="hero-desc">
            Research Scholar specializing in biological oceanography, marine molecular ecology, and the taxonomy of freshwater ornamental shrimps across the Western Ghats and Indian coastline.
          </p>
          <div className="hero-actions">
            <Link to="/research" className="btn-primary">Explore Research <span>→</span></Link>
            <Link to="/about" className="btn-ghost">View Academic Profile</Link>
          </div>
          <div className="hero-scroll-hint">
            <div className="scroll-mouse"><div className="scroll-wheel" /></div>
            <span>Scroll to explore</span>
          </div>
        </div>
        <div className="floating-icon icon-fish">🦐</div>
        <div className="floating-icon icon-ray">🦀</div>
        <div className="floating-icon icon-coral">🪸</div>
        <div className="floating-icon icon-wave">🔬</div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatCard count={6} label="Peer-Reviewed Publications" delay="0" />
            <StatCard count={3} label="Research Grants Awarded" delay="100" />
            <StatCard count={14} label="Symposiums & Events Organized" delay="200" />
            <StatCard icon="🏆" label="Veronica Rodrigues Award Winner" delay="300" />
          </div>
        </div>
      </section>

      {/* ── ABOUT SNAPSHOT ── */}
      <section className="about-snapshot">
        <div className="container">
          <div className="about-snap-grid">
            <div className="about-snap-text" data-aos="fade-right">
              <div className="section-tag">Academic Profile</div>
              <h2 className="section-title">Bridging Taxonomy <em>&amp; Conservation</em></h2>
              <p>
                I am Kunjulakshmi K, a Research Scholar at the Centre for Climate Change Studies, Sathyabama Institute of Science and Technology. Following my M.Sc. in Marine Science from Goa University, I have dedicated my career to marine ecology and carcinology.
              </p>
              <p>
                My fundamental research assesses the conservation priority of freshwater ornamental shrimps in the Central Western Ghats. My projects have been generously supported by the <strong>Rufford Foundation</strong> and the <strong>Association for Tropical Biology and Conservation (ATBC)</strong>.
              </p>
              <div className="about-tags">
                {['🦐 Atyidae & Palaemonidae','🔬 Crustacean Taxonomy','🎓 Biological Oceanography','🌍 Climate Change Studies','🌊 Field Sampling'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <Link to="/about" className="btn-primary">View Full CV →</Link>
            </div>
            <div className="about-snap-visual" data-aos="fade-left">
              <div className="profile-photo-stack">
                <div className="profile-photo-glow" />
                <div className="profile-photo-ring ring-a" />
                <div className="profile-photo-ring ring-b" />
                <div className="profile-photo-wrap">
                  {!imgErr
                    ? <img src={PROFILE_IMG} alt="Kunjulakshmi K" className="profile-photo" onError={() => setImgErr(true)} />
                    : <div className="avatar-fallback">KK</div>
                  }
                </div>
                <div className="profile-photo-badge top-badge">🎓 M.Sc. Marine Science</div>
                <div className="profile-photo-badge bottom-badge">🌊 Research Assistant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED RESEARCH & GRANTS ── */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Key Projects</div>
            <h2 className="section-title">Conservation in the Western Ghats</h2>
            <p className="section-subtitle">Evaluating the impact of ornamental trade on endemic freshwater species</p>
          </div>
          <div className="writing-grid">
            <article className="writing-card featured-card" data-aos="fade-up">
              <div className="article-category">🔬 Rufford Foundation Grant</div>
              <h3>Assessing the Conservation Priority of Freshwater Ornamental Shrimps (Family: Atyidae and Palaemonidae)</h3>
              <p>Backed by the 1st Rufford Small Grant (£5,947), this ongoing field research project targets the Central Western Ghats. We utilize intensive field surveys and biodiversity assessments to map vulnerable shrimp populations, bridging localized taxonomy with global conservation priorities.</p>
              <div className="article-meta">
                <span className="meta-tag">The Rufford Foundation, London</span>
                <span className="meta-tag">Status: Completed</span>
              </div>
              <Link to="/research" className="article-link">View All Grants <span>→</span></Link>
            </article>
            <div className="writing-side">
              {[
                { cat:'🦐 ATBC Seed Grant', h:'Freshwater Shrimps of Western Ghats', p:'Secondary research focusing heavily on Family Atyidae and Palaemonidae in central Indian regions ($1000).' },
                { cat:'🏆 APJ Abdul Kalam Fellowship', h:'Diversity & Aquarium Trade', p:'Investigating the conservation impact of the ornamental aquarium trade on specific Atyidae populations in Karnataka (₹25,000).' },
                { cat:'🔍 Major Publication', h:'Rediscovery of Atyopsis', p:'Co-authored the formal rediscovery of the Atyopsis genus in mainland India after 72 years.' },
              ].map((item, i) => (
                <article key={item.h} className="writing-card-small" data-aos="fade-up" data-aos-delay={String(i*100)}>
                  <div className="article-category">{item.cat}</div>
                  <h4>{item.h}</h4>
                  <p>{item.p}</p>
                  <Link to="/research" className="small-link">View Details →</Link>
                </article>
              ))}
            </div>
          </div>
          <div className="section-cta" data-aos="fade-up">
            <Link to="/research" className="btn-outline">View Full Bibliography</Link>
          </div>
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section className="topics-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Research Disciplines</div>
            <h2 className="section-title">Core Scientific Expertise</h2>
          </div>
          <div className="topics-grid">
            {[
              { e:'🦐', h:'Carcinology & Taxonomy', p:'Identification, description, and classification of freshwater and marine decapod crustaceans.' },
              { e:'🔬', h:'Biological Oceanography', p:'Extensive academic background from Goa University studying living marine resources and physical-biological interactions.' },
              { e:'🌍', h:'Climate Change Studies', p:'Assessing the vulnerability of marine populations (like coral arrays and benthic zones) to warming waters and acidification.' },
              { e:'📢', h:'Outreach & Ecosystem Dev', p:'Mentoring interns and organizing symposiums ranging from DNA Taxonomy courses to World Mosquito Day.' },
              { e:'🌊', h:'Field Survey Operations', p:'Extensive background conducting intensive coastal and riverine sampling trips in South India.' },
              { e:'🧪', h:'Molecular Ecology', p:'Applying advanced genetics (including Flow Cytometry) alongside Dr. Amit Kumar to map lineages.' },
            ].map((t, i) => (
              <div key={t.h} className="topic-card" data-aos="zoom-in" data-aos-delay={String(i*100)}>
                <div className="topic-emoji">{t.e}</div>
                <h3>{t.h}</h3>
                <p>{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONNECT ── */}
      <section className="connect-section">
        <div className="container">
          <div className="connect-card" data-aos="fade-up">
            <div className="connect-inner">
              <div className="connect-text">
                <h2>Collaborate & Connect</h2>
                <p>Always open to sharing datasets, academic collaborations, and expanding marine ecology initiatives globally.</p>
              </div>
              <div className="social-links">
                {[
                  { icon:'𝕏', name:'X (Twitter)', handle:'@KKunjulakshmi', href:'https://x.com/KKunjulakshmi' },
                  { icon:'in', name:'LinkedIn', handle:'Kunjulakshmi K', href:'https://www.linkedin.com/in/kunjulakshmi-k-3221b423a' },
                  { icon:'⊜', name:'ORCID', handle:'0000-0001-9003-0972', href:'https://orcid.org/0000-0001-9003-0972' },
                  { icon:'✉️', name:'Email', handle:'Oceanography2021@gmail.com', href:'mailto:oceanography2021@gmail.com' },
                ].map(s => (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link">
                    <div className="social-icon">{s.icon}</div>
                    <div><span className="social-name">{s.name}</span><span className="social-handle">{s.handle}</span></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
