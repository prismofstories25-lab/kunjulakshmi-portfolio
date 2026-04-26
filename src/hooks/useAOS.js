import { useEffect } from 'react'

export default function useAOS() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    const els = document.querySelectorAll('[data-aos]')
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
