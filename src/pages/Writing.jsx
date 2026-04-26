import { Link } from 'react-router-dom'
import MarineBackground from '../components/MarineBackground'
import useAOS from '../hooks/useAOS'
import './Writing.css'

const ARTICLES = [
  { cat:'🪸 Marine Ecology', h:'Coral Reef Biodiversity', p:'Coral reefs host 25% of all ocean species. These underwater cities face unprecedented threats from bleaching, pollution, and temperature rise.' },
  { cat:'⚡ Marine Biology', h:'Electric Ray — Nature\'s Living Battery', p:'How do rays produce 200 volts? The anatomy, physiology, and evolutionary advantage of Torpediniformes.' },
  { cat:'🎙️ Science Events', h:"Chennai's Third Spaces for Science", p:"From Pint of View to Pint of Science — a guide to Chennai's growing ecosystem of science communication events." },
  { cat:'🌡️ Climate & Ocean', h:'Climate Change & Marine Biodiversity', p:'How rising ocean temperatures, acidification, and overfishing combine to form an existential threat to ocean species.' },
  { cat:'🎣 Sustainability', h:'Bycatch & Artisanal Fishing Reform', p:'Indiscriminate fishing harms non-targeted species like rays. Individual-level solutions and sustainable practices.' },
  { cat:'🧬 Taxonomy', h:'Fish, Rays & Sharks — Untangling Evolution', p:'Did you know rays are closely related to sharks? A journey through marine taxonomy showing evolutionary connections.' },
]

export default function Writing() {
  useAOS()
  return (
    <main>
      <div className="page-header">
        <MarineBackground />
        <div className="orb-bg orb-1"/><div className="orb-bg orb-3"/>
        <div className="container">
          <div className="section-tag">My Writing</div>
          <h1>Stories From the Deep</h1>
          <p>Science communication that makes you feel something before it makes you think something.</p>
        </div>
      </div>

      {/* TCQ Banner */}
      <section className="pub-banner">
        <div className="container">
          <div className="pub-card" data-aos="fade-up">
            <div className="pub-icon">✍️</div>
            <div className="pub-info">
              <h3>The Curiosity Quotient</h3>
              <p>My primary writing home — a Substack publication dedicated to making science accessible, exciting, and community-driven.</p>
              <a href="https://thecuriosityquotient.substack.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{marginTop:'16px',display:'inline-flex'}}>Visit Substack →</a>
            </div>
            <div className="pub-stats">
              {[{n:'TCQ',l:'Publication'},{n:'🌊',l:'Marine Focus'},{n:'📖',l:'Science Events'}].map(s=>(
                <div key={s.l} className="pub-stat"><span className="ps-num">{s.n}</span><span className="ps-label">{s.l}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="articles-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Featured</div>
            <h2 className="section-title">Spotlight Article</h2>
          </div>
          <div className="article-featured-card" data-aos="fade-up">
            <div className="afc-label">✨ Featured Article</div>
            <div className="afc-content">
              <div className="afc-meta">
                <span className="meta-tag">🌊 Marine Ecology</span>
                <span className="meta-tag">🎤 Science Events</span>
                <span className="meta-tag">The Curiosity Quotient</span>
              </div>
              <h2>An Electric Sunday: Science Lecture from Chennai's Pint of View</h2>
              <p>In my hunt for third spaces in Chennai, I stumbled upon the city's very own chapter of Pint of View. Professor Amit Kumar's "Shock in the Sea" lecture delved into the basics of coral reefs, the evolution of marine biodiversity, and healthy fishing practices — all from the perspective of an electric ray.</p>
              <p>The audience learned about <em>Torpediniformes</em> — electric rays dwelling in shallow Indian coastal waters — capable of generating up to 200 volts of electrical shock.</p>
              <div className="afc-highlights">
                {['⚡ 200V electric ray biology explored','🪸 Coral reef taxonomy explained','🎣 Sustainable fishing & bycatch awareness','🏙️ Chennai\'s Bhola & Blonde venue'].map(h=>(
                  <div key={h} className="afc-highlight"><span className="highlight-icon">{h.charAt(0)}</span><span>{h.slice(2)}</span></div>
                ))}
              </div>
              <a href="https://thecuriosityquotient.substack.com/p/an-electric-sunday-pov-lecture-from" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{marginTop:'28px',display:'inline-flex'}}>Read Full Article →</a>
            </div>
            <div className="afc-visual">
              <div className="afc-electric-visual">
                <div className="electric-ring r1"/><div className="electric-ring r2"/><div className="electric-ring r3"/>
                <div className="electric-center">
                  <span style={{fontSize:'2.5rem'}}>⚡</span>
                  <span style={{fontSize:'0.85rem',color:'#06b6d4',fontWeight:600}}>Shock in the Sea</span>
                </div>
              </div>
            </div>
          </div>

          <div className="section-header" data-aos="fade-up" style={{marginTop:'80px'}}>
            <div className="section-tag">More Stories</div>
            <h2 className="section-title">Topics I Write About</h2>
          </div>
          <div className="articles-grid">
            {ARTICLES.map((a, i) => (
              <article key={a.h} className="article-card" data-aos="fade-up" data-aos-delay={String((i%3)*100)}>
                <div className="article-category">{a.cat}</div>
                <h3>{a.h}</h3>
                <p>{a.p}</p>
                <a href="https://thecuriosityquotient.substack.com" target="_blank" rel="noopener noreferrer" className="article-link">Explore on Substack <span>→</span></a>
              </article>
            ))}
          </div>

          <div className="writing-cta-box" data-aos="fade-up">
            <h3>Read All My Writing</h3>
            <p>All published articles are available on The Curiosity Quotient Substack.</p>
            <a href="https://thecuriosityquotient.substack.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Visit The Curiosity Quotient →</a>
          </div>
        </div>
      </section>
    </main>
  )
}
