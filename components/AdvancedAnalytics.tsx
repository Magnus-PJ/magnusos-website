'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default function AdvancedAnalytics() {
  useEffect(() => {
    // Google Analytics 4
    const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with actual tracking ID
    
    // Load Google Analytics
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })

    // Enhanced E-commerce tracking
    gtag('config', GA_TRACKING_ID, {
      custom_map: {
        'custom_parameter_1': 'healthcare_specialty',
        'custom_parameter_2': 'user_role',
        'custom_parameter_3': 'organization_size',
      }
    })

    // Track page views
    const trackPageView = (url: string) => {
      gtag('config', GA_TRACKING_ID, {
        page_path: url,
      })
    }

    // Track custom events
    const trackEvent = (action: string, category: string, label?: string, value?: number) => {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }

    // Track persona selection
    const trackPersonaSelection = (persona: string) => {
      trackEvent('persona_selection', 'engagement', persona)
    }

    // Track demo requests
    const trackDemoRequest = (source: string) => {
      trackEvent('demo_request', 'conversion', source, 1)
    }

    // Track FAQ interactions
    const trackFAQInteraction = (question: string) => {
      trackEvent('faq_interaction', 'engagement', question)
    }

    // Track solution page views
    const trackSolutionView = (solution: string) => {
      trackEvent('solution_view', 'engagement', solution)
    }

    // Make tracking functions globally available
    ;(window as any).trackPersonaSelection = trackPersonaSelection
    ;(window as any).trackDemoRequest = trackDemoRequest
    ;(window as any).trackFAQInteraction = trackFAQInteraction
    ;(window as any).trackSolutionView = trackSolutionView

    // Track scroll depth
    let maxScroll = 0
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent
        trackEvent('scroll_depth', 'engagement', `${scrollPercent}%`)
      }
    }

    // Track time on page
    let startTime = Date.now()
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000)
      if (timeOnPage > 0 && timeOnPage % 30 === 0) {
        trackEvent('time_on_page', 'engagement', `${timeOnPage}s`)
      }
    }

    // Add event listeners
    window.addEventListener('scroll', trackScrollDepth)
    const timeInterval = setInterval(trackTimeOnPage, 30000)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', trackScrollDepth)
      clearInterval(timeInterval)
    }
  }, [])

  return null
}
