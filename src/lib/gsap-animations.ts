'use client'

export const gsapAnimations = {
  // Hero fade-in with scale
  heroFadeIn: (element: HTMLElement | null) => {
    if (!element) return
    element.style.opacity = '0'
    element.style.transform = 'scale(0.95) translateY(10px)'

    requestAnimationFrame(() => {
      element.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
      element.style.opacity = '1'
      element.style.transform = 'scale(1) translateY(0)'
    })
  },

  // Card stagger animation
  cardStagger: (elements: HTMLElement[], delay = 0.1) => {
    elements.forEach((element, index) => {
      element.style.opacity = '0'
      element.style.transform = 'translateY(20px)'
      element.style.transition = `all 0.5s ease-out ${index * delay}s`

      requestAnimationFrame(() => {
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      })
    })
  },

  // Ingredient chip hover scale
  chipHoverScale: (element: HTMLElement | null) => {
    if (!element) return
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'scale(1.05)'
    })
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)'
    })
    element.style.transition = 'transform 0.2s ease-out'
  },

  // Chatbox slide-in with scale
  chatboxSlideIn: (element: HTMLElement | null) => {
    if (!element) return
    element.style.opacity = '0'
    element.style.transform = 'translateY(20px) scale(0.95)'

    requestAnimationFrame(() => {
      element.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
      element.style.opacity = '1'
      element.style.transform = 'translateY(0) scale(1)'
    })
  },

  // Section scroll animation
  sectionScrollAnimation: (element: HTMLElement | null) => {
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 },
    )

    element.style.opacity = '0'
    element.style.transform = 'translateY(20px)'
    element.style.transition = 'all 0.6s ease-out'
    observer.observe(element)
  },
}

export default gsapAnimations
