import { useState } from 'react'
import MarineBackground from '../components/MarineBackground'
import useAOS from '../hooks/useAOS'
import './Contact.css'

const CHANNELS = [
  { icon:'𝕏', name:'X (Twitter)', handle:'@KKunjulakshmi', href:'https://x.com/KKunjulakshmi' },
  { icon:'in', name:'LinkedIn', handle:'Kunjulakshmi K', href:'https://www.linkedin.com/in/kunjulakshmi-k-3221b423a' },
  { icon:'⊜', name:'ORCID', handle:'0000-0001-9003-0972', href:'https://orcid.org/0000-0001-9003-0972' },
  { icon:'✍', name:'Substack', handle:'The Curiosity Quotient', href:'https://thecuriosityquotient.substack.com' },
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
          <p>Open to collaborations, conversations, and curiosity-driven connections.</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info" data-aos="fade-right">
              <h2 className="section-title">Say Hello <em>🌊</em></h2>
              <p>Whether you're a fellow science communicator, researcher, event organizer, or simply curious about the ocean — I'd love to connect. Let's explore ideas, collaborate on projects, or just geek out about electric rays.</p>
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
                <span>Open to collaborations &amp; science communication projects</span>
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
                      <option>Collaboration Opportunity</option>
                      <option>Science Discussion</option>
                      <option>Event / Speaking</option>
                      <option>Media / Press</option>
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

      <section className="collab-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-tag">Open To</div>
            <h2 className="section-title">How We Can Work Together</h2>
          </div>
          <div className="collab-grid">
            {[
              { e:'🖊️', h:'Science Writing', p:'Articles, essays, and science reports for publications, events, or institutions.' },
              { e:'🎤', h:'Event Coverage', p:'Live reporting and post-event write-ups for science lectures and symposia.' },
              { e:'🔬', h:'Research Communication', p:'Translating scientific papers and findings into public-facing content.' },
              { e:'🌐', h:'Online Communities', p:'Building and engaging science communities through social media and newsletters.' },
            ].map((c,i) => (
              <div key={c.h} className="collab-card" data-aos="zoom-in" data-aos-delay={String(i*100)}>
                <div className="collab-icon">{c.e}</div>
                <h4>{c.h}</h4>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
