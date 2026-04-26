import { useState } from 'react'
import MarineBackground from '../components/MarineBackground'
import useAOS from '../hooks/useAOS'
import './About.css'

const PROFILE_IMG = 'https://pbs.twimg.com/profile_images/1752758109863575552/AAGtZhIv_400x400.jpg'

export default function About() {
  useAOS()
  const [imgErr, setImgErr] = useState(false)

  return (
    <main>
      <div className="page-header">
        <MarineBackground />
        <div className="orb-bg orb-1"/><div className="orb-bg orb-2"/>
        <div className="container">
          <div className="section-tag">About Me</div>
          <h1>Beyond the Microscope:<br/>The <em>Curiosity</em> of a Carcinologist</h1>
          <p>Science communicator and taxonomy researcher exploring the unseen dimensions of crustacean life.</p>
        </div>
      </div>

      {/* Intro */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-avatar-col" data-aos="fade-right">
              <div className="avatar-container">
                <div className="avatar-ring ring-outer"/>
                <div className="avatar-ring ring-inner"/>
                <div className="avatar-circle">
                  {!imgErr
                    ? <img src={PROFILE_IMG} alt="Kunjulakshmi K" className="avatar-photo" onError={() => setImgErr(true)} />
                    : <span className="avatar-initials">KK</span>
                  }
                </div>
                <div className="avatar-badge b1">🦐 Carcinology</div>
                <div className="avatar-badge b2">🔬 Taxonomy</div>
                <div className="avatar-badge b3">📝 TCQ Writer</div>
              </div>
              <div className="about-socials">
                {[
                  { href:'https://x.com/KKunjulakshmi', label:'𝕏 @KKunjulakshmi' },
                  { href:'https://orcid.org/0000-0001-9003-0972', label:'ORCID Profile' },
                  { href:'https://thecuriosityquotient.substack.com', label:'The Curiosity Quotient' },
                ].map(s => (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="social-pill">{s.label}</a>
                ))}
              </div>
            </div>

            <div className="about-text-col" data-aos="fade-left">
              <div className="section-tag">My Story</div>
              <h2 className="section-title">"That <em>Shrimply Amazing</em> Girl!"</h2>
              <p>Hello! I'm <strong>Kunjulakshmi K</strong> — a passionate marine researcher and carcinologist working in Dr. Amit Kumar's Marine Biology Lab at the Sathyabama Institute of Science and Technology.</p>
              <p>My academic core is heavily rooted in taxonomy and molecular ecology. Most of my days are spent examining the intricate morphology of crustaceans (shrimps, crabs) and working to accurately classify marine and freshwater biodiversity. I've had the thrill of discovering completely new species to science, like the <em>Macrobrachium irwini</em> from the Western Ghats, and documenting the rediscovery of the genus <em>Atyopsis</em> in mainland India after a 72-year gap!</p>
              <p>Alongside my formal lab work, my journey is driven by a deep conviction: <em>science is most impactful when it can be felt, not just understood.</em> Through <strong>The Curiosity Quotient</strong> on Substack, I translate the rigid, jargon-dense world of academia into narratives that spark genuine curiosity and inspire community-driven wonder.</p>
              <p>Whether I'm staring through a microscope at a shrimp's rostrum or writing about coastal ecosystems, my goal remains the same: revealing the profound beauty of aquatic life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="about-pillars">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">What Drives Me</div>
            <h2 className="section-title">My Core Pillars</h2>
          </div>
          <div className="pillars-grid">
            {[
              { icon:'🔬', h:'Taxonomic Accuracy', p:'Thorough morphological and molecular examination to correctly identify, describe, and classify complex crustacean species.' },
              { icon:'📢', h:'Science Access', p:'Science should never feel exclusive. I work to make marine knowledge accessible to everyone, removing jargon and building bridges.' },
              { icon:'🌊', h:'Field to Lab', p:'Bridging the gap between active field surveys in locations like the Western Ghats to rigorous laboratory analysis in Chennai.' },
              { icon:'✍️', h:'Thoughtful Writing', p:'Every piece I write makes you feel something before you think something — because emotion is the gateway to lasting understanding.' },
            ].map((p, i) => (
              <div key={p.h} className="pillar-card" data-aos="fade-up" data-aos-delay={String(i*100)}>
                <div className="pillar-icon">{p.icon}</div>
                <h3>{p.h}</h3>
                <p>{p.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-journey">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Journey</div>
            <h2 className="section-title">Chapters of Discovery</h2>
          </div>
          <div className="timeline">
            {[
              { date:'October 2022', h:'First Major Species Discovery', p:'Published the formal description of Macrobrachium irwini sp. nov., a completely new freshwater shrimp species discovered in the Western Ghats (Zootaxa).', right:false },
              { date:'July 2023', h:'Advancing Anthozoan Ecology', p:'Co-authored research on a new species of the Dendronephthya genus and its associated crustaceans in Chennai.', right:true },
              { date:'The Curiosity Quotient', h:'Substack Writing', p:'Began actively translating the marine ecology world into accessible essays, stories, and event coverage for the public.', right:false },
              { date:'April 2025', h:'Global Review of Caridina', p:'Published a comprehensive review mapping the research trends and gaps in the biology of freshwater shrimps of the genus Caridina globally.', right:true },
              { date:'November 2025', h:'A 72-Year Rediscovery', p:'Confirmed and documented the rediscovery of the Atyopsis shrimp genus in mainland India, closing a seven-decade taxonomic gap.', right:false, current:true },
            ].map((item, i) => (
              <div key={i} className={`timeline-item${item.right?' right':''}`} data-aos={item.right?'fade-left':'fade-right'}>
                <div className={`timeline-dot${item.current?' dot-current':''}`}/>
                <div className={`timeline-content${item.current?' current':''}`}>
                  <div className="timeline-date">{item.date}</div>
                  <h3>{item.h}</h3>
                  <p>{item.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="about-facts">
        <div className="container">
          <div className="facts-grid">
            {[
              { e:'🦐', t:'Self-described as "That Shrimply Amazing Girl!" — proudly' },
              { e:'🔬', t:"Can spend hours debating tiny morphological traits under a scope" },
              { e:'🌊', t:'Thrives in the field gathering samples across India’s aquatic systems' },
              { e:'✍️', t:'Loves unpacking academic papers into fun, readable stories' },
              { e:'🧠', t:'Combines molecular ecology with traditional physical taxonomy' },
              { e:'🧪', t:'Proud member of Dr. Amit Kumar’s Marine Biology Lab in Chennai' },
            ].map(f => (
              <div key={f.t} className="fact-card" data-aos="zoom-in">
                <div className="fact-emoji">{f.e}</div>
                <h4>{f.t}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
