'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import GameChanger from './components/GameChanger'
import CoreFeatures from './components/CoreFeatures'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      const header = document.querySelector('.header') as HTMLElement
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = 'rgba(255, 255, 255, 0.95)'
          header.style.backdropFilter = 'blur(10px)'
        } else {
          header.style.background = 'white'
          header.style.backdropFilter = 'none'
        }
      }
    }

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      const href = target.getAttribute('href')
      if (href && href.startsWith('#') && href !== '#') {
        e.preventDefault()
        const targetElement = document.querySelector(href)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement
        if (entry.isIntersecting) {
          target.style.opacity = '1'
          target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .feature-item').forEach(el => {
      const element = el as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(30px)'
      element.style.transition = 'all 0.6s ease'
      observer.observe(el)
    })

    // Add event listeners
    window.addEventListener('scroll', handleScroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
      observer.disconnect()
    }
  }, [])

  return (
    <main>
      <Header />
      <Hero />
      <GameChanger />
      <CoreFeatures />
      <CTASection />
      <Footer />
    </main>
  )
}
