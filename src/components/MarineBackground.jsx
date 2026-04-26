import { useEffect, useRef } from 'react'

const SHRIMP_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" fill="none">
  <path d="M5 15 Q15 5 25 12 Q35 20 45 10 Q52 5 56 15" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
  <path d="M45 10 Q48 4 50 8" stroke="#06b6d4" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
  <path d="M45 10 Q49 6 52 11" stroke="#06b6d4" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
  <path d="M5 15 L2 10 M5 15 L1 14 M5 15 L2 18" stroke="#38bdf8" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
  <path d="M15 10 L13 6 M20 12 L18 8 M25 12 L22 8" stroke="#06b6d4" stroke-width="1" stroke-linecap="round" opacity="0.4"/>
  <circle cx="56" cy="15" r="2.5" fill="#38bdf8" opacity="0.8"/>
  <circle cx="57" cy="14" r="1" fill="#0ea5e9" opacity="0.9"/>
</svg>`

const CRAB_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" fill="none">
  <ellipse cx="30" cy="20" rx="14" ry="10" fill="rgba(6,182,212,0.15)" stroke="#06b6d4" stroke-width="2" opacity="0.7"/>
  <path d="M16 20 Q10 15 5 20" stroke="#06b6d4" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M44 20 Q50 15 55 20" stroke="#06b6d4" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M22 12 Q15 5 20 5 M38 12 Q45 5 40 5" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
  <circle cx="20" cy="5" r="1.5" fill="#0ea5e9"/>
  <circle cx="40" cy="5" r="1.5" fill="#0ea5e9"/>
  <path d="M20 28 Q15 35 25 35 M40 28 Q45 35 35 35" stroke="#06b6d4" stroke-width="1.5" stroke-linecap="round"/>
</svg>`

export default function MarineBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.innerHTML = ''

    // Shrimps
    for (let i = 0; i < 6; i++) {
      const w = document.createElement('div')
      w.innerHTML = SHRIMP_SVG
      Object.assign(w.style, {
        position: 'absolute',
        width: '60px',
        left: \`\${Math.random() * 90 + 5}%\`,
        top: \`\${Math.random() * 80 + 5}%\`,
        opacity: String(0.08 + Math.random() * 0.12),
        animation: \`shrimpSwim \${8 + Math.random() * 10}s ease-in-out infinite\`,
        animationDelay: \`\${Math.random() * 8}s\`,
        pointerEvents: 'none',
        filter: 'drop-shadow(0 0 4px rgba(6,182,212,0.3))',
      })
      el.appendChild(w)
    }

    // Crabs
    for (let i = 0; i < 4; i++) {
      const w = document.createElement('div')
      w.innerHTML = CRAB_SVG
      Object.assign(w.style, {
        position: 'absolute',
        width: '50px',
        left: \`\${Math.random() * 85 + 5}%\`,
        top: \`\${Math.random() * 85 + 5}%\`,
        opacity: String(0.06 + Math.random() * 0.1),
        animation: \`rayGlide \${14 + Math.random() * 12}s ease-in-out infinite\`,
        animationDelay: \`\${Math.random() * 10}s\`,
        pointerEvents: 'none',
        filter: 'drop-shadow(0 0 8px rgba(6,182,212,0.2))',
      })
      el.appendChild(w)
    }

    // Particles
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div')
      const size = 2 + Math.random() * 3
      Object.assign(p.style, {
        position: 'absolute',
        width: \`\${size}px\`, height: \`\${size}px\`,
        background: '#06b6d4', borderRadius: '50%',
        left: \`\${Math.random() * 100}%\`,
        opacity: '0',
        animation: \`particleFloat \${8 + Math.random() * 15}s linear infinite\`,
        animationDelay: \`\${Math.random() * 10}s\`,
        pointerEvents: 'none',
      })
      el.appendChild(p)
    }

    // Bubbles
    for (let i = 0; i < 10; i++) {
      const b = document.createElement('div')
      const size = 10 + Math.random() * 18
      b.innerHTML = \`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8" fill="none" stroke="rgba(6,182,212,0.4)" stroke-width="1.5"/><circle cx="7" cy="7" r="2" fill="rgba(255,255,255,0.15)"/></svg>\`
      Object.assign(b.style, {
        position: 'absolute',
        width: \`\${size}px\`,
        left: \`\${Math.random() * 100}%\`,
        bottom: \`\${Math.random() * 30}%\`,
        opacity: '0',
        animation: \`bubbleRise \${6 + Math.random() * 8}s ease-in infinite\`,
        animationDelay: \`\${Math.random() * 12}s\`,
        pointerEvents: 'none',
      })
      el.appendChild(b)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}
    />
  )
}
