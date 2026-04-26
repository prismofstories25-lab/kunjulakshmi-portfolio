import MarineBackground from '../components/MarineBackground'
import useAOS from '../hooks/useAOS'
import './Research.css'

const PUBLICATIONS = [
  { 
    date: '2022', journal: 'Zootaxa, 5914(3): 416-425',
    title: 'Kunjulakshmi, K., Santos, M. A., Prakash, S. Macrobrachium irwini sp. nov., a new species of freshwater shrimp from Western Ghats, India (Caridea: Palaemonidae)',
    doi: null, link: null
  },
  { 
    date: '2023', journal: 'Thalassas: An International Journal of Marine Sciences, 39(2), 839-846',
    title: 'Kunjulakshmi, K., Prakash, S., & Kumar, A. A new species of the genus Dendronephthya Kükenthal 1905 (Octocorallia: Alcyonacea: Nephtheidae) and associated crustaceans from Covelong, Chennai, India.',
    doi: null, link: null
  },
  { 
    date: '2024', journal: 'Proceedings of the Marine Biology Research Symposium (pp. 8-24)',
    title: 'Kunjulakshmi, K., Santos, M. A., & Prakash, S. Diversity of Brackish Water Ornamental Shrimps of Coastal Karnataka.',
    doi: 'ISBN 978-93-83409-83-9', link: null
  },
  { 
    date: '2025', journal: 'Journal of Crustacean Biology',
    title: 'Kunjulakshmi, K & Prakash, S. Review of research trends and gaps in the biology of freshwater shrimps of the genus Caridina H. Milne Edwards, 1837.',
    doi: '10.1093/jcbiol/ruaf023', link: 'https://doi.org/10.1093/jcbiol/ruaf023'
  },
  { 
    date: '2025', journal: 'Zootaxa',
    title: 'Kunjulakshmi, K., Santos, M. A., Prakash, S. Rediscovery of the genus Atyopsis Chace, 1983 (Decapoda: Atyidae) in mainland India following a 72-year gap.',
    doi: '10.11646/zootaxa.5722.4.7', link: 'https://doi.org/10.11646/zootaxa.5722.4.7'
  },
  { 
    date: 'Preprint', journal: 'Preprint Archive',
    title: 'Amit Kumar, Kunjulakshmi, K., M S Silpa. A systematic review of the ocean acidification research in India: research trends, gaps and recommendations.',
    doi: '10.64898/2026.01.30.702760', link: 'https://doi.org/10.64898/2026.01.30.702760'
  }
].reverse() // Show newest first

const GRANTS = [
  {
    amount: '£5,947', tag: 'The Rufford Foundation, London',
    title: 'Assessing the conservation priority of freshwater ornamental shrimps (Family: Atyidae and Palaemonidae) from the Central Western Ghats, India',
    status: 'Completed (1st Rufford Small Grant)'
  },
  {
    amount: '$1,000', tag: 'Association for Tropical Biology and Conservation',
    title: 'Assessing the conservation priority of freshwater shrimps (Family Atyidae and Palaemonidae) from the Central Western Ghats, India',
    status: 'Completed (Seed Research Grant)'
  },
  {
    amount: '₹25,000', tag: 'A.P.J Abdul Kalam Foundation',
    title: 'Diversity, Aquarium trade and Conservation of freshwater ornamental shrimps (Family: Atyidae) from Western Ghats, Karnataka',
    status: 'Completed (Young Research Fellowship)'
  }
]

export default function Research() {
  useAOS()

  return (
    <main>
      <div className="page-header">
        <MarineBackground />
        <div className="orb-bg orb-1" /><div className="orb-bg orb-2" />
        <div className="container">
          <div className="section-tag">Impact & Output</div>
          <h1>Research &amp; Grants</h1>
          <p>Highlighting funded fieldwork, conservation biology, and major journal publications.</p>
        </div>
      </div>

      {/* Grants Section */}
      <section className="grants-section" style={{padding: '80px 0', background: '#050d1a'}}>
         <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Funding & Awards</div>
            <h2 className="section-title">Secured Research Grants</h2>
          </div>
          <div className="grants-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
            {GRANTS.map((g, i) => (
              <div key={i} className="grant-card" data-aos="fade-up" data-aos-delay={String(i*100)} style={{background: 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(0,114,198,0.04))', border: '1px solid rgba(6,182,212,0.2)', borderRadius: '24px', padding: '32px', position: 'relative'}}>
                <div style={{color: '#a78bfa', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px'}}>{g.tag}</div>
                <h3 style={{fontSize: '1.2rem', marginBottom: '16px', lineHeight: 1.4}}>{g.title}</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px'}}>
                  <span style={{fontSize: '1.4rem', fontWeight: 800, color: '#f0c671'}}>{g.amount}</span>
                  <span style={{background: 'rgba(76,175,80,0.1)', color: '#4caf50', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600}}>{g.status}</span>
                </div>
              </div>
            ))}
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
                <h3 style={{fontFamily: 'var(--font-sans)', fontWeight: 500, fontStyle: 'italic', color: '#e0f2fe', fontSize: '1.1rem'}}>{pub.title}</h3>
                {pub.doi && (
                  <div className="pub-links">
                    {pub.link ? (
                       <a href={pub.link} target="_blank" rel="noopener noreferrer" className="doi-link">
                         <strong>DOI/ISBN:</strong> {pub.doi}
                       </a>
                    ) : (
                       <span style={{color: '#8ab4c8', fontSize: '0.9rem'}}><strong>ISBN:</strong> {pub.doi}</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORCID */}
      <section className="orcid-section" style={{background: '#0b2545'}}>
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
    </main>
  )
}
