'use client'

import { Metadata } from 'next'

interface StructuredDataProps {
  type?: 'organization' | 'software' | 'service' | 'article' | 'faq'
  data?: any
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MagnusOS.ai",
          "alternateName": "MagnusOS",
          "url": "https://magnusos.ai",
          "logo": "https://magnusos.ai/logo.png",
          "description": "AI-powered healthcare platform unifying HIS, CRM, Radiology, Labs, Fertility, Dental & more. Hybrid cloud + on-premise deployment for hospitals, clinics, and labs.",
          "foundingDate": "2024",
          "industry": "Healthcare Technology",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-800-MAGNUS-1",
            "contactType": "customer service",
            "availableLanguage": ["English", "Spanish", "Hindi"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressRegion": "California",
            "addressLocality": "San Francisco"
          },
          "sameAs": [
            "https://linkedin.com/company/magnusos-ai",
            "https://twitter.com/MagnusOS_AI",
            "https://facebook.com/MagnusOS.AI"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Healthcare Software Solutions",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "SoftwareApplication",
                  "name": "Hospital Information System (HIS)",
                  "applicationCategory": "HealthcareApplication",
                  "operatingSystem": "Web"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "SoftwareApplication",
                  "name": "Radiology Information System (RIS)",
                  "applicationCategory": "HealthcareApplication",
                  "operatingSystem": "Web"
                }
              }
            ]
          }
        }

      case 'software':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "MagnusOS.ai Healthcare Platform",
          "alternateName": "MagnusOS",
          "url": "https://magnusos.ai",
          "applicationCategory": "HealthcareApplication",
          "operatingSystem": "Web",
          "description": "AI-powered healthcare platform unifying HIS, CRM, Radiology, Labs, Fertility, Dental & more. HIPAA compliant, GDPR ready healthcare software.",
          "softwareVersion": "2.0",
          "datePublished": "2024-01-01",
          "dateModified": "2024-09-06",
          "author": {
            "@type": "Organization",
            "name": "MagnusOS.ai"
          },
          "publisher": {
            "@type": "Organization",
            "name": "MagnusOS.ai"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free demo available",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          },
          "featureList": [
            "AI-Powered Healthcare Management",
            "HIPAA Compliant",
            "GDPR Ready",
            "Hybrid Cloud Deployment",
            "Real-time Analytics",
            "Multi-specialty Support",
            "Integration Capabilities",
            "Mobile-First Design"
          ],
          "screenshot": "https://magnusos.ai/screenshot.png",
          "softwareRequirements": "Modern web browser",
          "memoryRequirements": "4GB RAM minimum",
          "storageRequirements": "10GB available space"
        }

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Healthcare Software Solutions",
          "description": "Comprehensive healthcare software solutions including HIS, RIS, laboratory management, pharmacy CRM, and specialty care systems.",
          "provider": {
            "@type": "Organization",
            "name": "MagnusOS.ai"
          },
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "serviceType": "Healthcare Technology",
          "category": "Healthcare Software",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Healthcare Solutions",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Hospital Information System",
                  "description": "Complete hospital management solution"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Radiology Information System",
                  "description": "AI-powered radiology workflow management"
                }
              }
            ]
          }
        }

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title || "Healthcare AI Innovation",
          "description": data?.description || "Latest insights on healthcare AI and digital transformation",
          "author": {
            "@type": "Organization",
            "name": "MagnusOS.ai"
          },
          "publisher": {
            "@type": "Organization",
            "name": "MagnusOS.ai",
            "logo": {
              "@type": "ImageObject",
              "url": "https://magnusos.ai/logo.png"
            }
          },
          "datePublished": data?.datePublished || "2024-09-06",
          "dateModified": data?.dateModified || "2024-09-06",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url || "https://magnusos.ai"
          },
          "image": data?.image || "https://magnusos.ai/article-image.jpg"
        }

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is MagnusOS.ai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MagnusOS.ai is an AI-powered healthcare platform that unifies HIS, CRM, Radiology, Labs, Fertility, Dental & more. It provides hybrid cloud + on-premise deployment for hospitals, clinics, and labs."
              }
            },
            {
              "@type": "Question",
              "name": "Is MagnusOS.ai HIPAA compliant?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, MagnusOS.ai is fully HIPAA compliant with encrypted data transmission, secure storage, and comprehensive audit trails to ensure patient data protection."
              }
            },
            {
              "@type": "Question",
              "name": "What healthcare specialties does MagnusOS.ai support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MagnusOS.ai supports multiple healthcare specialties including Hospital Management (HIS), Radiology (RIS), Laboratory, Pharmacy, Dental, Fertility, Cosmetology, and Nuclear Medicine."
              }
            },
            {
              "@type": "Question",
              "name": "Does MagnusOS.ai offer AI-powered features?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, MagnusOS.ai includes AI-powered features such as diagnostic assistance, workflow automation, predictive analytics, and intelligent reporting to enhance healthcare operations."
              }
            },
            {
              "@type": "Question",
              "name": "Can I get a free demo of MagnusOS.ai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer free demos of MagnusOS.ai. Contact our team to schedule a personalized demonstration of our healthcare platform tailored to your specific needs."
              }
            }
          ]
        }

      default:
        return {}
    }
  }

  const structuredData = getStructuredData()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
