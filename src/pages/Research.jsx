import MarineBackground from '../components/MarineBackground'
import useAOS from '../hooks/useAOS'
import './Research.css'

const RESEARCH_AREAS = [
  { n:'01', e:'🌊', h:'Marine Biodiversity', p:"Study of species diversity within marine ecosystems, with emphasis on understudied benthic zone dwellers and their ecological roles.", tags:['Species Survey','Ecology'] },
  { n:'02', e:'⚡', h:'Electric Ray Biology', p:"Exploration of Torpediniformes — electric rays that inhabit shallow Indian coastal waters — focusing on electrogenic anatomy and conservation.", tags:['Torpediniformes','Physiology'] },
  { n:'03', e:'🪸', h:'Coral Reef Ecology', p:"Investigating the health, taxonomic diversity, and climate vulnerability of coral reef systems along India's rich coastal environments.", tags:['Reef Systems','Taxonomy'] },
  { n:'04', e:'🌡️', h:'Climate Change Impact', p:"Examining how rising temperatures, acidification, and habitat degradation affect marine biodiversity and species survival.", tags:['Climate','Conservation'] },
  { n:'05', e:'🎣', h:'Sustainable Fisheries', p:"Researching the impact of bycatch, artisanal fishing, and policy reform on declining ray populations along India's east coast.", tags:['Fisheries','Policy'] },
  { n:'06', e:'📢', h:'Science Communication', p:"Bridging research and public understanding — translating technical marine science into accessible narratives.", tags:['Public Engagement','Writing'] },
]

const RAY_FACTS = [
  { e:'⚡', strong:'200 Volts', s:'Maximum electric shock to stun prey or deter predators' },
  { e:'🌊', strong:'Benthic Dwellers', s:"Found in shallow coastal waters along India's east coast" },
  { e:'⚠️', strong:'Near Threatened', s:'Nearly half of all electric ray species at risk of extinction' },
  { e:'🦈', strong:'Shark Relatives', s:'Closely related to sharks through evolutionary lineage' },
  { e:'🐣', strong:'Slow Reproduction', s:'Slow reproductive cycles worsen their conservation outlook' },
  { e:'🏛️', strong:'Studied in Chennai', s:'Research by Prof. Amit Kumar at Sathyabama Institute' },
]

export default function Research() {
  useAOS()

  return (
    <main>
      {/* Page Header */}
      <div className="page-header">
        <MarineBackground />
        <div className="orb-bg orb-1" /><div className="orb-bg orb-2" />
        <div className="container">
          <div className="section-tag">Research</div>
          <h1>Scientific Contributions</h1>
          <p>Connecting science communication with academic integrity through ORCID and beyond.</p>
        </div>
      </div>

      {/* ORCID */}
      <section className="orcid-section">
        <div className="container">
          <div className="orcid-card" data-aos="fade-up">
            <div className="orcid-badge-box">
              <span className="orcid-symbol">⊜</span>
              <span className="orcid-label">ORCID</span>
            </div>
            <div className="orcid-info">
              <h2>ORCID Researcher Profile</h2>
              <p className="orcid-id">0000-0001-9003-0972</p>
              <p>
                An internationally recognized researcher identifier, ORCID connects
                Kunjulakshmi's scientific contributions to the global academic ecosystem,
                documenting research outputs and affiliations in marine ecology and science communication.
              </p>
              <a
                href="https://orcid.org/0000-0001-9003-0972"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary"
                style={{ marginTop: '20px', display: 'inline-flex' }}
              >
                View ORCID Profile →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="research-areas">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Focus Areas</div>
            <h2 className="section-title">Research Interests</h2>
          </div>
          <div className="research-grid">
            {RESEARCH_AREAS.map((r, i) => (
              <div key={r.h} className="research-card" data-aos="fade-up" data-aos-delay={String((i % 3) * 100)}>
                <div className="rc-number">{r.n}</div>
                <div className="rc-icon">{r.e}</div>
                <h3>{r.h}</h3>
                <p>{r.p}</p>
                <div className="rc-tags">
                  {r.tags.map(t => <span key={t} className="meta-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electric Ray Spotlight */}
      <section className="spotlight-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Species Focus</div>
            <h2 className="section-title">The Electric Ray — A Study in Wonder</h2>
          </div>
          <div className="spotlight-grid">
            <div className="spotlight-facts" data-aos="fade-right">
              <h3>Torpediniformes — Key Facts</h3>
              <div className="fact-list">
                {RAY_FACTS.map(f => (
                  <div key={f.strong} className="fact-item">
                    <div className="fi-icon">{f.e}</div>
                    <div className="fi-text">
                      <strong>{f.strong}</strong>
                      <span>{f.s}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="spotlight-visual" data-aos="fade-left">
              <div className="ray-viz">
                <div className="ray-glow" />
                <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="ray-svg">
                  <defs>
                    <radialGradient id="rg" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(6,182,212,0.3)" />
                      <stop offset="100%" stopColor="rgba(6,182,212,0.05)" />
                    </radialGradient>
                  </defs>
                  <path d="M100 20 Q150 0 185 40 Q170 55 100 60 Q30 55 15 40 Q50 0 100 20Z"
                    fill="url(#rg)" stroke="rgba(6,182,212,0.6)" strokeWidth="1.5" />
                  <path d="M100 60 Q103 80 107 105 Q101 100 100 112 Q99 100 93 105 Q97 80 100 60Z"
                    fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.4)" strokeWidth="1.2" />
                  <circle cx="86" cy="35" r="4" fill="rgba(56,189,248,0.5)" stroke="rgba(6,182,212,0.8)" strokeWidth="1" />
                  <circle cx="114" cy="35" r="4" fill="rgba(56,189,248,0.5)" stroke="rgba(6,182,212,0.8)" strokeWidth="1" />
                  <path d="M70 30 L65 38 L72 38 L67 46" stroke="#facc15" strokeWidth="2" strokeLinecap="round" fill="none"
                    style={{ animation: 'boltFlash 2s ease-in-out infinite' }} />
                  <path d="M130 30 L135 38 L128 38 L133 46" stroke="#facc15" strokeWidth="2" strokeLinecap="round" fill="none"
                    style={{ animation: 'boltFlash 2s ease-in-out infinite 0.4s' }} />
                </svg>
                <div className="ray-pulses">
                  <div className="ray-pulse p1" /><div className="ray-pulse p2" /><div className="ray-pulse p3" />
                </div>
                <div className="ray-label">Electric Ray<br /><em>Torpediniformes</em></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn */}
      <section className="linkedin-sec">
        <div className="container">
          <div className="linkedin-card" data-aos="fade-up">
            <div className="li-icon">in</div>
            <div className="li-info">
              <h3>LinkedIn Professional Profile</h3>
              <p>Connect with Kunjulakshmi on LinkedIn for professional collaborations, research opportunities, and science communication projects.</p>
              <a
                href="https://www.linkedin.com/in/kunjulakshmi-k-3221b423a"
                target="_blank" rel="noopener noreferrer"
                className="btn-outline"
                style={{ marginTop: '16px', display: 'inline-flex' }}
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
