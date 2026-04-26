import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import MarineBackground from '../components/MarineBackground'
import useAOS from '../hooks/useAOS'
import './Home.css'

const PHRASES = [
  'Science Communicator',
  'Marine Ecology Enthusiast',
  'Storyteller & Writer',
  'Curiosity-Driven Researcher',
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
          <div className="hero-badge"><span className="badge-dot" /> Marine Science · Science Communication · Writing</div>
          <h1 className="hero-title">
            <span className="title-line">Kunjulakshmi</span>
            <span className="title-highlight">K.</span>
          </h1>
          <p className="hero-tagline">
            <span className="typewriter">{typed}</span>
          </p>
          <p className="hero-desc">
            Science communicator &amp; writer passionate about the underwater world's wonders —
            turning complex marine ecology and science into stories everyone can feel curious about.
          </p>
          <div className="hero-actions">
            <Link to="/writing" className="btn-primary">Explore My Writing <span>→</span></Link>
            <Link to="/about" className="btn-ghost">Learn More</Link>
          </div>
          <div className="hero-scroll-hint">
            <div className="scroll-mouse"><div className="scroll-wheel" /></div>
            <span>Scroll to explore</span>
          </div>
        </div>
        <div className="floating-icon icon-fish">🐟</div>
        <div className="floating-icon icon-ray">🦈</div>
        <div className="floating-icon icon-coral">🪸</div>
        <div className="floating-icon icon-wave">🌊</div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatCard count={296} label="Posts & Threads" delay="0" />
            <StatCard count={166} label="Followers on X" delay="100" />
            <StatCard icon="📝" label="Science Writer" delay="200" />
            <StatCard icon="🔬" label="ORCID Researcher" delay="300" />
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
                I'm Kunjulakshmi — a curious soul navigating the fascinating intersection of marine ecology,
                science communication, and storytelling. My work bridges the gap between complex scientific
                discoveries and public understanding.
              </p>
              <p>
                Through <strong>The Curiosity Quotient</strong> on Substack, I cover science events, lectures,
                and marine biodiversity stories that spark wonder and drive awareness for ocean conservation.
              </p>
              <div className="about-tags">
                {['🌊 Marine Ecology','🔬 Science Communication','📖 Writing','🐚 Biodiversity','🦑 Marine Life'].map(t => (
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
                <div className="profile-photo-badge bottom-badge">🌊 @KKunjulakshmi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED WRITING ── */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Featured Work</div>
            <h2 className="section-title">Stories From the Deep</h2>
            <p className="section-subtitle">Science communication that bridges curiosity and knowledge</p>
          </div>
          <div className="writing-grid">
            <article className="writing-card featured-card" data-aos="fade-up">
              <div className="article-category">🌊 Marine Ecology</div>
              <h3>An Electric Sunday: Science Lecture from Chennai's Pint of View</h3>
              <p>Professor Amit Kumar's "Shock in the Sea" delved into coral reefs, the evolution of marine biodiversity, and healthy fishing practices — all from the perspective of an electric ray.</p>
              <div className="article-meta">
                <span className="meta-tag">The Curiosity Quotient</span>
                <span className="meta-tag">Substack</span>
              </div>
              <a href="https://thecuriosityquotient.substack.com/p/an-electric-sunday-pov-lecture-from" target="_blank" rel="noopener noreferrer" className="article-link">Read Article <span>→</span></a>
            </article>
            <div className="writing-side">
              {[
                { cat:'🐠 Biodiversity', h:'Marine Biodiversity & Climate Change', p:'Exploring how climate change threatens the rich tapestry of ocean life.' },
                { cat:'🎙️ Science Events', h:'Pint of Science — Chennai Dispatches', p:'Live coverage and reflections from Chennai\'s most exciting science events.' },
                { cat:'⚡ Marine Life', h:'Electric Rays — Nature\'s Shock Artists', p:'Diving deep into the biology of Torpediniformes and their 200-volt secrets.' },
              ].map(item => (
                <article key={item.h} className="writing-card-small" data-aos="fade-up">
                  <div className="article-category">{item.cat}</div>
                  <h4>{item.h}</h4>
                  <p>{item.p}</p>
                  <Link to="/writing" className="small-link">View Writing →</Link>
                </article>
              ))}
            </div>
          </div>
          <div className="section-cta" data-aos="fade-up">
            <Link to="/writing" className="btn-outline">View All Writing</Link>
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
              { e:'🌊', h:'Marine Ecology', p:'Understanding the intricate web of ocean life, from microbes to megafauna' },
              { e:'🪸', h:'Coral Reef Systems', p:'Biodiversity hotspots under threat — why they matter and how to protect them' },
              { e:'⚡', h:'Electric Marine Life', p:'The shocking world of electric rays, their anatomy, physiology, and survival' },
              { e:'📢', h:'Science Communication', p:'Translating jargon-rich science into accessible, emotionally resonant stories' },
              { e:'🎣', h:'Sustainable Fishing', p:'Advocating for responsible practices that protect ocean biodiversity' },
              { e:'🌡️', h:'Climate & Oceans', p:'How global warming reshapes the underwater world we\'re only beginning to understand' },
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
                <h2>Let's Explore Together</h2>
                <p>Follow along as I dive deeper into the ocean of science, stories, and curiosity.</p>
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
