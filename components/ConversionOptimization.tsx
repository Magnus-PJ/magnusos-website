'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function ConversionOptimization() {
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [showScrollPrompt, setShowScrollPrompt] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitIntent) {
        setShowExitIntent(true)
        // Track exit intent
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'exit_intent', {
            event_category: 'conversion',
            event_label: 'exit_intent_popup',
          })
        }
      }
    }

    // Scroll depth tracking
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      
      if (scrollPercent > 50 && !hasScrolled) {
        setHasScrolled(true)
        setShowScrollPrompt(true)
        // Track scroll depth
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'scroll_depth_50', {
            event_category: 'engagement',
            event_label: 'scroll_prompt_triggered',
          })
        }
      }
    }

    // Time-based prompts
    const timePrompt = setTimeout(() => {
      if (!showScrollPrompt && !showExitIntent) {
        setShowScrollPrompt(true)
        // Track time-based prompt
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'time_based_prompt', {
            event_category: 'conversion',
            event_label: '30_second_prompt',
          })
        }
      }
    }, 30000) // 30 seconds

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timePrompt)
    }
  }, [showExitIntent, showScrollPrompt, hasScrolled])

  const handleCTAClick = (source: string) => {
    // Track CTA clicks
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'conversion',
        event_label: source,
        value: 1,
      })
    }
  }

  const handleDemoRequest = (source: string) => {
    // Track demo requests
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'demo_request', {
        event_category: 'conversion',
        event_label: source,
        value: 1,
      })
    }
  }

  return (
    <>
      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Wait! Don't Miss Out
              </h3>
              <p className="text-gray-600 mb-6">
                Get a free demo of MagnusOS.ai and see how our AI-powered healthcare platform can transform your organization.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    handleDemoRequest('exit_intent_popup')
                    setShowExitIntent(false)
                  }}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
                >
                  Get Free Demo
                </button>
                <button
                  onClick={() => setShowExitIntent(false)}
                  className="w-full text-gray-600 py-2 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Prompt */}
      {showScrollPrompt && (
        <div className="fixed bottom-4 right-4 bg-primary-600 text-white p-4 rounded-xl shadow-lg z-40 max-w-sm">
          <div className="flex items-start space-x-3">
            <div className="flex-1">
              <h4 className="font-semibold mb-1">Ready to Transform Healthcare?</h4>
              <p className="text-sm text-primary-100 mb-3">
                See how MagnusOS.ai can revolutionize your healthcare operations.
              </p>
              <button
                onClick={() => {
                  handleCTAClick('scroll_prompt')
                  setShowScrollPrompt(false)
                }}
                className="bg-white text-primary-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-50 transition-colors duration-200"
              >
                Learn More
              </button>
            </div>
            <button
              onClick={() => setShowScrollPrompt(false)}
              className="text-primary-200 hover:text-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Enhanced CTA Buttons */}
      <div className="hidden">
        {/* These will be used to enhance existing CTAs */}
        <button
          onClick={() => handleCTAClick('hero_section')}
          className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-200"
        >
          Explore Solutions
        </button>
        
        <button
          onClick={() => handleDemoRequest('hero_section')}
          className="border border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors duration-200"
        >
          Schedule Demo
        </button>
      </div>
    </>
  )
}
