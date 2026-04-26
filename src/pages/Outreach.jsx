import MarineBackground from '../components/MarineBackground'
import useAOS from '../hooks/useAOS'
import './Outreach.css'

const EVENTS = [
  { date: 'Aug 20-22, 2025', name: '1st Indian Seagrass Conference' },
  { date: 'Jun 19-21, 2025', name: 'Integrative Taxonomy of Marine Organism' },
  { date: 'Apr 22, 2025', name: 'Earth Day Conservation Event' },
  { date: 'Feb 11, 2025', name: 'International Day of Girls and Women in Science' },
  { date: 'Oct 7, 2024', name: 'World Habitat Day' },
  { date: 'Aug 28-29, 2024', name: 'DNA Taxonomy and Phylogeny Course' },
  { date: 'Aug 8, 2024', name: 'World Mosquito Day Science Session' },
  { date: 'Jul 26, 2024', name: 'International Day for the Conservation of Mangrove Ecosystem' },
  { date: 'Jan 23-25, 2024', name: 'Marine Biology Research Symposium (MBRS 2024)' },
  { date: 'Aug 4-5, 2023', name: 'Hands-on training on DNA Taxonomy and Phylogeny' },
  { date: 'Mar 14, 2023', name: 'Online Symposium on the Batoids of India' },
  { date: 'Jan 4-6, 2023', name: 'Integrative Taxonomy for Marine Invertebrates Workshop' },
  { date: 'Feb 2, 2022', name: 'World Wetlands Day' }
]

const CONFERENCES = [
  { year: '2025', type: 'Oral', name: 'The Crustacean Society Summer Meeting', loc: 'Sorbonne University, France' },
  { year: '2025', type: 'Poster', name: 'The Animal Taxonomy Summit', loc: 'Zoological Survey of India, Kolkata' },
  { year: '2025', type: 'Oral', name: 'National Symposium on The Western Ghats', loc: 'Kongunadu College & ZSI' },
  { year: '2024', type: 'Symposium', name: 'Marine Biology Research Symposium (MBRS-2024)', loc: 'Sathyabama Institute' },
  { year: '2023', type: 'Poster', name: 'Student Conference on Conservation Science (SCCS)', loc: 'Bengaluru, India' },
  { year: '2023', type: 'Symposia', name: 'SMBE23 Symposia (Virtual)', loc: 'Ferrara, Italy' },
  { year: '2023', type: 'ATBC', name: '59ᵗʰ Annual Meeting of the ATBC', loc: 'Coimbatore, India' },
  { year: '2022', type: 'Symposia', name: 'GS6 SMBE Everywhere Global Symposia', loc: 'NCBS Bangaluru' },
]

export default function Outreach() {
  useAOS()
  return (
    <main>
      <div className="page-header">
        <MarineBackground />
        <div className="orb-bg orb-1"/><div className="orb-bg orb-3"/>
        <div className="container">
          <div className="section-tag">Community &amp; Science</div>
          <h1>Events &amp; Outreach</h1>
          <p>Imparting skills through mobilizing scientific symposia and active conference participation.</p>
        </div>
      </div>

      {/* Events Organized */}
      <section className="articles-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Leadership</div>
            <h2 className="section-title">Events Organized</h2>
            <p className="section-subtitle">Fostering collaboration across taxonomy, phylogenetics, and marine conservation.</p>
          </div>
          
          <div className="events-grid">
             {EVENTS.map((e, index) => (
                <div key={index} className="event-card" data-aos="fade-up" data-aos-delay={(index%3)*100}>
                   <div className="event-date">{e.date}</div>
                   <h4>{e.name}</h4>
                </div>
             ))}
          </div>

          <div className="section-header" style={{marginTop: '100px'}} data-aos="fade-up">
            <div className="section-tag">Global Presence</div>
            <h2 className="section-title">Conferences &amp; Presentations</h2>
          </div>
          
          <div className="conf-list">
             {CONFERENCES.map((c, index) => (
                 <div key={index} className="conf-card" data-aos="fade-right">
                    <div className="conf-type">{c.type}</div>
                    <div className="conf-main">
                        <h3>{c.name}</h3>
                        <p>{c.loc}</p>
                    </div>
                    <div className="conf-year">{c.year}</div>
                 </div>
             ))}
          </div>

          {/* Substack / Writing */}
          <div className="pub-banner" style={{marginTop: '80px', background: 'transparent', padding: 0}}>
             <div className="pub-card" data-aos="fade-up" style={{gridTemplateColumns: 'auto 1fr', padding: '40px'}}>
               <div className="pub-icon">✍️</div>
               <div className="pub-info">
                 <h3 style={{marginBottom: '12px'}}>The Curiosity Quotient</h3>
                 <p style={{fontSize: '0.95rem'}}>In addition to formal academic output, I maintain a science communication platform on Substack to translate complex marine ecology into narratives accessible to the general public.</p>
                 <a href="https://thecuriosityquotient.substack.com" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{marginTop:'20px',display:'inline-flex'}}>Read My Articles →</a>
               </div>
             </div>
          </div>

        </div>
      </section>
    </main>
  )
}
