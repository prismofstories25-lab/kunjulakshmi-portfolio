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
          <h1>Academic Integrity &amp;<br/><em>Field Discoveries</em></h1>
          <p>M.Sc. Biological Oceanography | Research Scholar | Award-Winning Taxonomist</p>
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
                <div className="avatar-badge b1">🎓 M.Sc. Goa University</div>
                <div className="avatar-badge b2">🔬 Rufford Grantee</div>
                <div className="avatar-badge b3">🏆 TIFR Awardee</div>
              </div>
              <div className="about-socials">
                {[
                  { href:'mailto:oceanography2021@gmail.com', label:'✉️ Oceanography2021@gmail.com' },
                  { href:'https://orcid.org/0000-0001-9003-0972', label:'ORCID Profile' },
                  { href:'tel:+919767386585', label:'📞 +91 9767386585' },
                ].map(s => (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="social-pill">{s.label}</a>
                ))}
              </div>
            </div>

            <div className="about-text-col" data-aos="fade-left">
              <div className="section-tag">Educational Story</div>
              <h2 className="section-title">A Foundation in <em>Excellence</em></h2>
              <p>I am Kunjulakshmi K, currently serving as a <strong>Research Assistant</strong> at the Centre for Climate Change Studies, Sathyabama Institute of Science and Technology in Chennai, Tamil Nadu.</p>
              <p>My academic foundation was built at The Cochin College (Mahatma Gandhi University), where I earned my B.Sc. in Zoology. I then specialized heavily in marine studies, earning an <strong>M.Sc. in Marine Science (Biological Oceanography)</strong> from Goa University with a high CGPA of 8.55.</p>
              <p>Currently, my responsibilities encompass conducting rigorous field surveys along the Indian coast and Western Ghats, executing biodiversity assessments, and participating directly in grant-funded research. I have successfully secured highly competitive funding from the <strong>Rufford Foundation</strong> and the <strong>Association for Tropical Biology and Conservation (ATBC)</strong> for my work mapping and cataloging freshwater ornamental shrimps (Atyidae and Palaemonidae).</p>
              <p>Beyond publishing papers on new taxonomy, I actively mentor undergraduate interns and coordinate large-scale training sessions on field sampling and advanced laboratory methodologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="about-pillars">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Key Competencies</div>
            <h2 className="section-title">Academic Achievements</h2>
          </div>
          <div className="pillars-grid">
            {[
              { icon:'🏅', h:'Veronica Rodrigues Award', p:'Awarded in 2019 for perseverance in the pursuit of Science at the Tata Institute of Fundamental Research (TIFR), Mumbai.' },
              { icon:'🔬', h:'K S Krishnan Fellow', p:'Received the K S Krishnan Student Research Fellow Award (2017) for contributing to Collaborative Undergraduate Biological Education.' },
              { icon:'📚', h:'Professional Grants', p:'Recipient of the Rufford Small Grant, ATBC Seed Grant, and Dr. A.P.J Abdul Kalam Young Research Fellowship.' },
              { icon:'🌍', h:'International Memberships', p:'Active member of The Crustacean Society (2026), ASLO, Society for the Study of Evolution, and The Systematics Association (UK).' },
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
            <div className="section-tag">Education & Experience</div>
            <h2 className="section-title">Academic Trajectory</h2>
          </div>
          <div className="timeline">
            {[
              { date:'2016 – 2019', h:'B.Sc. in Zoology', p:'Graduated with highly commendable marks (7.68 CGPA) from The Cochin College, Mahatma Gandhi University, Kerala.', right:false },
              { date:'2017 & 2019', h:'TIFR Awards & Research', p:'Mentored at the Tata Institute of Fundamental Research (TIFR). Received the KS Krishnan Fellowship and the Veronica Rodrigues Award for academic excellence.', right:true },
              { date:'2019 – 2021', h:'M.Sc. in Biological Oceanography', p:'Earned Master\'s degree from the School of Earth, Ocean and Atmospheric Sciences, Goa University, achieving a CGPA of 8.55.', right:false },
              { date:'December 2021 – Present', h:'Research Assistant Role', p:'Joined the Centre for Climate Change Studies, Sathyabama Institute. Responsible for major field surveys, proposal writing, and mentoring.', right:true, current:true },
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
              { e:'🌍', t:'Member of the Society for the Study of Evolution (SSE)' },
              { e:'🧪', t:"Interned on the unexplored mangrove ecosystems of Goa (2021)" },
              { e:'🦠', t:'Completed INDO-US Flow Cytometry workshop in Bio-oceanography' },
              { e:'🎓', t:'Volunteered for ATBC2023 with specific fee-waiver achievements' },
              { e:'🔬', t:'Trained on the assembly and use of Fold Scope by Gov of India' },
              { e:'DNA', t:'Organizes high-level symposia on Integrative Marine Taxonomy' },
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
