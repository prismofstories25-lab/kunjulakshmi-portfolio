import MarineBackground from '../components/MarineBackground'
import useAOS from '../hooks/useAOS'
import './Research.css'

const PUBLICATIONS = [
  { 
    date: 'November 2025', journal: 'Zootaxa',
    title: 'Rediscovery of the genus Atyopsis Chace, 1983 (Decapoda: Atyidae) in mainland India following a 72-year gap',
    doi: '10.11646/zootaxa.5722.4.7', link: 'https://doi.org/10.11646/zootaxa.5722.4.7'
  },
  { 
    date: 'April 2025', journal: 'Journal of Crustacean Biology',
    title: 'Review of research trends and gaps in the biology of freshwater shrimps of the genus Caridina H. Milne Edwards, 1837 (Decapoda: Caridea: Atyidae)',
    doi: '10.1093/jcbiol/ruaf023', link: 'https://doi.org/10.1093/jcbiol/ruaf023'
  },
  { 
    date: 'January 2024', journal: 'Proceedings of the Marine Biology Research Symposium',
    title: 'Diversity of Brackish Water Ornamental Shrimps of Coastal Karnataka',
    doi: null, link: null
  },
  { 
    date: 'July 2023', journal: 'Thalassas: An International Journal of Marine Sciences',
    title: 'A New Species of the Genus Dendronephthya Kükenthal 1905 (Octocorallia: Alcyonacea: Nephtheidae) and Associated Crustaceans From Covelong, Chennai, India',
    doi: '10.1007/s41208-023-00580-3', link: 'https://doi.org/10.1007/s41208-023-00580-3'
  },
  { 
    date: 'October 2022', journal: 'Zootaxa',
    title: 'Macrobrachium irwini sp. nov., a new species of freshwater shrimp from Western Ghats, India (Caridea: Palaemonidae)',
    doi: '10.11646/zootaxa.5194.3.5', link: 'https://doi.org/10.11646/zootaxa.5194.3.5'
  }
]

const SHRIMP_FACTS = [
  { e:'🦐', strong:'High Biodiversity', s:'Carcinology focuses on incredibly diverse crustacean traits' },
  { e:'🔍', strong:'Rediscoveries', s:"Atyopsis genus found again in mainland India after 72 years" },
  { e:'🌟', strong:'New Species', s:'Describing previously unknown species like Macrobrachium irwini' },
  { e:'🧬', strong:'Morphology + Genetics', s:'Combining microscopy with molecular ecology for accuracy' },
  { e:'🌊', strong:'Ecosystem Indicators', s:'Shrimp populations heavily indicate freshwater/marine health' },
  { e:'🧪', strong:'Collaborative Lab', s:'Research conducted within Dr. Amit Kumar’s Marine Biology Lab' },
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
          <div className="section-tag">Research & Publications</div>
          <h1>Scientific Contributions</h1>
          <p>Connecting rigorous taxonomy and carcinology with open academic integrity.</p>
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
                documenting research outputs and affiliations spanning taxonomy, crustacean biology, and marine ecology.
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

      {/* Publications List */}
      <section className="research-areas">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Bibliography</div>
            <h2 className="section-title">Peer-Reviewed Publications</h2>
          </div>
          <div className="pub-timeline">
            {PUBLICATIONS.map((pub, i) => (
              <div key={i} className="research-card pub-card-wide" data-aos="fade-up" data-aos-delay={String((i % 3) * 100)}>
                <div className="rc-number">{pub.date}</div>
                <div className="rc-journal">{pub.journal}</div>
                <h3>{pub.title}</h3>
                {pub.doi && (
                  <div className="pub-links">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="doi-link">
                      <strong>DOI:</strong> {pub.doi}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crustacean Spotlight */}
      <section className="spotlight-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Species Focus</div>
            <h2 className="section-title">The Wonders of Carcinology</h2>
          </div>
          <div className="spotlight-grid">
            <div className="spotlight-facts" data-aos="fade-right">
              <h3>Shrimps, Crabs & Crustaceans</h3>
              <p style={{color: '#8ab4c8', marginBottom: '24px', lineHeight: 1.6}}>
                My primary research space involves uncovering new species, analyzing morphology under the scope, 
                and resolving complex crustacean taxonomy across freshwater and marine ecosystems.
              </p>
              <div className="fact-list">
                {SHRIMP_FACTS.map(f => (
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
                  
                  {/* Stylized Shrimp representation */}
                  <path d="M40 70 Q 80 30 130 50 Q 160 70 170 50" fill="none" stroke="rgba(6,182,212,0.6)" strokeWidth="8" strokeLinecap="round" />
                  <path d="M40 70 Q 60 75 80 90" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="3" strokeLinecap="round" />
                  <path d="M60 60 Q 80 65 100 80" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="160" cy="55" r="4" fill="rgba(56,189,248,0.9)" />
                  <path d="M160 55 Q 180 30 190 60 M165 52 Q 195 20 185 70" fill="none" stroke="rgba(56,189,248,0.6)" strokeWidth="1.5" />
                  
                </svg>
                <div className="ray-pulses">
                  <div className="ray-pulse p1" /><div className="ray-pulse p2" /><div className="ray-pulse p3" />
                </div>
                <div className="ray-label">Decapoda: Caridea<br /><em>Freshwater & Marine Shrimps</em></div>
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
