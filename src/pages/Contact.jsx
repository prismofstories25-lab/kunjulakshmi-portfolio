import { useState } from 'react'
import MarineBackground from '../components/MarineBackground'
import useAOS from '../hooks/useAOS'
import './Contact.css'

const CHANNELS = [
  { icon:'𝕏', name:'X (Twitter)', handle:'@KKunjulakshmi', href:'https://x.com/KKunjulakshmi' },
  { icon:'in', name:'LinkedIn', handle:'Kunjulakshmi K', href:'https://www.linkedin.com/in/kunjulakshmi-k-3221b423a' },
  { icon:'⊜', name:'ORCID', handle:'0000-0001-9003-0972', href:'https://orcid.org/0000-0001-9003-0972' },
]

export default function Contact() {
  useAOS()
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <main>
      <div className="page-header">
        <MarineBackground />
        <div className="orb-bg orb-1"/><div className="orb-bg orb-2"/>
        <div className="container">
          <div className="section-tag">Connect</div>
          <h1>Let's Dive In Together</h1>
          <p>Open to collaborations, academic discussions, and research connections.</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info" data-aos="fade-right">
              <h2 className="section-title">Say Hello <em>🌊</em></h2>
              <p>Whether you're a fellow marine researcher, event organizer, or simply curious about crustacean taxonomy — I'd love to connect. Let's collaborate on projects or discuss field surveys.</p>
              
              <div style={{display:'flex', alignItems:'center', gap:'16px', background:'rgba(255,255,255,0.04)', padding:'16px 20px', borderRadius:'16px', marginBottom:'24px'}}>
                  <div style={{fontSize:'1.5rem'}}>✉️</div>
                  <div>
                     <div style={{fontSize:'0.85rem', color:'#8ab4c8', fontWeight:600}}>Email Me At</div>
                     <a href="mailto:Oceanography2021@gmail.com" style={{color:'#e0f2fe', fontWeight:600}}>Oceanography2021@gmail.com</a>
                  </div>
              </div>

              <div className="contact-channels">
                {CHANNELS.map(c => (
                  <a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer" className="channel-card">
                    <div className="ch-icon">{c.icon}</div>
                    <div className="ch-info">
                      <span className="ch-name">{c.name}</span>
                      <span className="ch-handle">{c.handle}</span>
                    </div>
                    <span className="ch-arrow">→</span>
                  </a>
                ))}
              </div>
              <div className="availability-badge">
                <div className="avail-dot" />
                <span>Open to academic collaborations &amp; science outreach projects</span>
              </div>
            </div>

            <div className="contact-form-col" data-aos="fade-left">
              <div className="contact-form-card">
                <h3>Send a Message</h3>
                <p>Fill out the form and I'll get back as soon as the tide allows 🌊</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input id="name" type="text" placeholder="Jane Oceanographer" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" placeholder="hello@ocean.world" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject">
                      <option value="">Select a topic...</option>
                      <option>Research Collaboration</option>
                      <option>Conference / Workshop</option>
                      <option>Grant Discussion</option>
                      <option>Science Outreach</option>
                      <option>Just Saying Hello</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows={5} placeholder="I'd love to discuss marine biodiversity..." />
                  </div>
                  <button type="submit" className="btn-primary" style={{width:'100%',justifyContent:'center'}}>Send Message 🌊</button>
                  {sent && <div className="form-success">🌊 Message sent! Kunjulakshmi will get back to you soon.</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional References */}
      <section className="collab-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Academic Network</div>
            <h2 className="section-title">Professional References</h2>
          </div>
          <div className="collab-grid" style={{gridTemplateColumns: '1fr 1fr 1fr'}}>
            {[
              {
                name: 'Dr. S. Prakash',
                role: 'Associate Professor and Head',
                loc: 'Centre for Climate Change Studies, Sathyabama Institute of Science and Technology, Chennai',
                email: 'prakash.cccs@sathyabama.ac.in',
                phone: '9498380513'
              },
              {
                name: 'Dr. K. Sivakumar',
                role: 'Professor',
                loc: 'Department of Environment and Ecology, Pondicherry University',
                email: 'ksivakumar@pondiuni.ac.in',
                phone: '9412058129'
              },
              {
                name: 'Dr. K. A. Subramanian',
                role: 'Scientist E and Officer In-charge',
                loc: 'Southern Regional Centre, Zoological Survey of India, Chennai',
                email: 'subbu.ka@zsi.gov.in',
                phone: '9088039540'
              }
            ].map((ref, idx) => (
              <div key={idx} className="collab-card" data-aos="zoom-in" data-aos-delay={String(idx*100)} style={{textAlign: 'left', padding: '32px'}}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '4px'}}>{ref.name}</h4>
                <p style={{color: '#06b6d4', fontWeight: 600, fontSize: '0.85rem', marginBottom: '16px'}}>{ref.role}</p>
                <p style={{fontSize: '0.9rem', marginBottom: '24px'}}>{ref.loc}</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <a href={`mailto:${ref.email}`} style={{fontSize: '0.85rem', color: '#e0f2fe', display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <span>✉️</span> {ref.email}
                  </a>
                  <a href={`tel:+91${ref.phone}`} style={{fontSize: '0.85rem', color: '#e0f2fe', display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <span>📞</span> +91 {ref.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
