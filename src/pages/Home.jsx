import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import MarineBackground from '../components/MarineBackground'
import useAOS from '../hooks/useAOS'
import './Home.css'

const PHRASES = [
  'Marine Researcher',
  'Carcinologist (Crustacean Study)',
  'Shrimp Taxonomist',
  'Science Communicator',
  '"That Shrimply Amazing Girl!"',
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
      {count ? <div className="stat-number">{c}+</div> : <div className="stat-icon">{icon}</div>}
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
          <div className="hero-badge"><span className="badge-dot" /> Carcinology · Taxonomy · Science Communication</div>
          <h1 className="hero-title">
            <span className="title-line">Kunjulakshmi</span>
            <span className="title-highlight">K.</span>
          </h1>
          <p className="hero-tagline">
            <span className="typewriter">{typed}</span>
          </p>
          <p className="hero-desc">
            Marine researcher in Dr. Amit Kumar's Lab at Sathyabama Institute, passionately exploring the world of crustaceans. Highlighting biodiversity through shrimp taxonomy and sharing the wonders of the deep through accessible science writing.
          </p>
          <div className="hero-actions">
            <Link to="/research" className="btn-primary">Explore Research <span>→</span></Link>
            <Link to="/writing" className="btn-ghost">Read My Writing</Link>
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
            <StatCard count={5} label="Peer-Reviewed Publications" delay="0" />
            <StatCard count={4} label="Discovered & Described Species" delay="100" />
            <StatCard icon="🔍" label="Shrimp Taxonomist" delay="200" />
            <StatCard icon="🔬" label="Marine Biology Lab" delay="300" />
          </div>
        </div>
      </section>

      {/* ── ABOUT SNAPSHOT ── */}
      <section className="about-snapshot">
        <div className="container">
          <div className="about-snap-grid">
            <div className="about-snap-text" data-aos="fade-right">
              <div className="section-tag">About Me</div>
              <h2 className="section-title">That <em>Shrimply Amazing</em> Girl!</h2>
              <p>
                I'm Kunjulakshmi — a curious carcinologist navigating the fascinating intersection of marine ecology,
                shrimp taxonomy, and science communication. Working under Dr. Amit Kumar's Marine Biology Lab, my research 
                involves extensive study of freshwater and marine crustaceans along the Indian coast and Western Ghats.
              </p>
              <p>
                Whether I'm formally documenting the rediscovery of the genus <em>Atyopsis</em> after 72 years, or writing engaging stories 
                for <strong>The Curiosity Quotient</strong> on Substack, my goal is to bridge the gap between 
                complex scientific discoveries and public wonder.
              </p>
              <div className="about-tags">
                {['🦐 Carcinology','🔬 Species Taxonomy','📖 Science Writing','🐚 Biodiversity','🧪 Molecular Ecology'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <Link to="/about" className="btn-primary">Full Story →</Link>
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
                <div className="profile-photo-badge top-badge">🦐 That Shrimply Amazing Girl!</div>
                <div className="profile-photo-badge bottom-badge">🌊 Sathyabama Institute Lab</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED WRITING & RESEARCH ── */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Featured Work</div>
            <h2 className="section-title">Discovering Hidden Crustaceans</h2>
            <p className="section-subtitle">Bridging rigorous taxonomy with accessible science communication</p>
          </div>
          <div className="writing-grid">
            <article className="writing-card featured-card" data-aos="fade-up">
              <div className="article-category">🔬 Taxonomy & Discovery</div>
              <h3>Rediscovery of the genus Atyopsis (Decapoda: Atyidae) in India</h3>
              <p>Following a 72-year gap, we rediscovered the genus Atyopsis in mainland India. This major taxonomic finding expands our understanding of freshwater shrimp distribution and highlights the importance of continued biodiversity surveys in aquatic ecosystems.</p>
              <div className="article-meta">
                <span className="meta-tag">Zootaxa Journal</span>
                <span className="meta-tag">2025</span>
              </div>
              <Link to="/research" className="article-link">View Publication <span>→</span></Link>
            </article>
            <div className="writing-side">
              {[
                { cat:'🦐 Carcinology', h:'Review of Caridina Freshwater Shrimps', p:'Analyzing research trends and identifying critical gaps in the biology of Caridina shrimps globally.' },
                { cat:'🔍 Taxonomy', h:'Macrobrachium irwini sp. nov.', p:'The discovery and formal description of a completely new species of freshwater shrimp from the Western Ghats.' },
                { cat:'🪸 Marine Ecology', h:'Dendronephthya corals & associated crustaceans', p:'Documenting new coral species and their intricate symbiotic relationships with crustaceans in Chennai.' },
              ].map((item, i) => (
                <article key={item.h} className="writing-card-small" data-aos="fade-up" data-aos-delay={String(i*100)}>
                  <div className="article-category">{item.cat}</div>
                  <h4>{item.h}</h4>
                  <p>{item.p}</p>
                  <Link to="/research" className="small-link">View Research →</Link>
                </article>
              ))}
            </div>
          </div>
          <div className="section-cta" data-aos="fade-up">
            <Link to="/research" className="btn-outline">View All Publications</Link>
          </div>
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section className="topics-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Explore</div>
            <h2 className="section-title">What Sparks My Curiosity</h2>
          </div>
          <div className="topics-grid">
            {[
              { e:'🦐', h:'Carcinology', p:'Extensive taxonomic and morphological study of both freshwater and marine crustaceans.' },
              { e:'🔬', h:'Molecular Ecology', p:'Utilizing genetic tools alongside morphology to precisely identify and map crustacean lineages.' },
              { e:'🪸', h:'Benthic Ecosystems', p:'Studying the life lurking at the bottom of aquatic bodies — from crabs to elusive shrimp species.' },
              { e:'📢', h:'Science Communication', p:'Translating jargon-rich science into accessible, emotionally resonant stories on Substack.' },
              { e:'🌊', h:'Biodiversity Surveys', p:'Conducting field surveys along the Indian coast and Western Ghats to monitor species health.' },
              { e:'🧪', h:'Academic Collaboration', p:'Working within Dr. Amit Kumar\'s lab to tackle broad interdisciplinary challenges in marine ecology.' },
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
                <h2>Let's Discover Together</h2>
                <p>Follow along as I uncover new species and dive deeper into the world of carcinology and storytelling.</p>
              </div>
              <div className="social-links">
                {[
                  { icon:'𝕏', name:'X (Twitter)', handle:'@KKunjulakshmi', href:'https://x.com/KKunjulakshmi' },
                  { icon:'in', name:'LinkedIn', handle:'Kunjulakshmi K', href:'https://www.linkedin.com/in/kunjulakshmi-k-3221b423a' },
                  { icon:'⊜', name:'ORCID', handle:'0000-0001-9003-0972', href:'https://orcid.org/0000-0001-9003-0972' },
                  { icon:'✍', name:'Substack', handle:'The Curiosity Quotient', href:'https://thecuriosityquotient.substack.com' },
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
