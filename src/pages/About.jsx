import { useState } from 'react'
import { Link } from 'react-router-dom'
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
          <h1>The Person Behind<br/>the <em>Curiosity</em></h1>
          <p>Science communicator navigating the ocean of knowledge, one story at a time.</p>
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
                <div className="avatar-badge b1">⚡ Electric Rays</div>
                <div className="avatar-badge b2">🪸 Coral Systems</div>
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
              <p>Hello! I'm <strong>Kunjulakshmi K</strong> — and yes, that self-description is entirely intentional. I'm equal parts marine ecology nerd, science communicator, and enthusiastic participant in curiosity-driven learning.</p>
              <p>My journey began with a simple but powerful realization: <em>science is most impactful when it can be felt, not just understood.</em> Whether writing about electric rays shocking prey at 200 volts, or the intricate architecture of coral reef ecosystems, my goal is to bring readers into the wonder before presenting the facts.</p>
              <p>Through <strong>The Curiosity Quotient</strong> on Substack, I cover science lectures, events, and discoveries — translating specialized knowledge into narratives that spark genuine curiosity and inspire community-driven action.</p>
              <p>I'm also listed on <strong>ORCID</strong> as a researcher, reflecting my commitment to contributing meaningfully to the academic and public understanding of marine biodiversity and conservation.</p>
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
              { icon:'🌊', h:'Ocean Advocacy', p:'Raising awareness for marine conservation, sustainable fishing, and protection of endangered species like electric rays facing habitat loss.' },
              { icon:'📢', h:'Science Access', p:'Science should never feel exclusive. I work to make knowledge accessible to everyone, removing jargon and building bridges between researchers and the public.' },
              { icon:'🧩', h:'Community Building', p:'Active in third spaces like Pint of Science Chennai, where community-driven curiosity is cultivated through lectures and shared wonder.' },
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
            <h2 className="section-title">Chapters of Curiosity</h2>
          </div>
          <div className="timeline">
            {[
              { date:'December 2021', h:'Joined X (Twitter)', p:'Began sharing science thoughts, marine ecology threads, and engaging with the global science community online.', right:false },
              { date:'The Curiosity Quotient', h:'Substack Writing', p:'Started contributing to The Curiosity Quotient — covering science events, lectures, and marine ecology stories for a growing readership.', right:true },
              { date:'Pint of Science', h:'Live Science Reporting', p:'Attended and wrote about "Shock in the Sea" — a landmark lecture on electric rays, marine biodiversity, and sustainable fishing in Chennai.', right:false },
              { date:'Ongoing', h:'ORCID Research Profile', p:'Maintaining an active ORCID researcher profile, connecting personal work with the global academic ecosystem.', right:true },
              { date:'Now', h:'Growing, Learning, Writing', p:'296+ posts, 166 followers, and a mission to keep making science feel alive — one electric story at a time.', right:false, current:true },
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
              { e:'⚡', t:'Fascinated by electric rays that produce 200V' },
              { e:'🍺', t:"Believes science is best enjoyed at Pint of View lectures" },
              { e:'🌊', t:'Seeks out third spaces for community & science discovery' },
              { e:'🦐', t:'Self-described as "That Shrimply Amazing Girl!" — proudly' },
              { e:'🎤', t:'Passionate about grassroots science communication in Chennai' },
              { e:'🔬', t:'Bridges marine science research with public storytelling' },
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
