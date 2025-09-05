'use client'

import { useState, useEffect } from 'react'
import { DocumentTextIcon, ChartBarIcon, AcademicCapIcon, LightBulbIcon } from '@heroicons/react/24/outline'

export default function AdvancedContentStrategy() {
  const [activeTab, setActiveTab] = useState('whitepapers')

  const contentTypes = {
    whitepapers: {
      title: 'Healthcare AI Whitepapers',
      icon: DocumentTextIcon,
      content: [
        {
          title: 'The Future of Healthcare AI: A Comprehensive Guide',
          description: 'Explore how AI is revolutionizing healthcare delivery, patient care, and operational efficiency.',
          keywords: ['healthcare AI', 'artificial intelligence healthcare', 'AI medical technology'],
          readTime: '15 min read',
          category: 'Technology'
        },
        {
          title: 'HIPAA Compliance in AI-Powered Healthcare Systems',
          description: 'Complete guide to maintaining HIPAA compliance while leveraging AI technologies.',
          keywords: ['HIPAA compliance', 'healthcare AI security', 'medical data protection'],
          readTime: '12 min read',
          category: 'Compliance'
        },
        {
          title: 'ROI Analysis: Healthcare AI Implementation',
          description: 'Quantify the return on investment for healthcare AI implementations.',
          keywords: ['healthcare AI ROI', 'AI implementation cost', 'healthcare technology ROI'],
          readTime: '10 min read',
          category: 'Business'
        }
      ]
    },
    caseStudies: {
      title: 'Success Stories',
      icon: ChartBarIcon,
      content: [
        {
          title: 'Regional Hospital: 40% Efficiency Increase with HIS',
          description: 'How a regional hospital transformed operations with MagnusOS HIS implementation.',
          keywords: ['HIS success story', 'hospital efficiency', 'healthcare transformation'],
          readTime: '8 min read',
          category: 'Case Study'
        },
        {
          title: 'Radiology Center: 60% Faster Report Generation',
          description: 'Radiology center achieves faster report generation with AI-powered RIS.',
          keywords: ['RIS implementation', 'radiology AI', 'medical imaging efficiency'],
          readTime: '6 min read',
          category: 'Case Study'
        },
        {
          title: 'Laboratory: 50% Reduction in Turnaround Time',
          description: 'Laboratory achieves significant efficiency gains with LIS implementation.',
          keywords: ['LIS implementation', 'laboratory efficiency', 'lab automation'],
          readTime: '7 min read',
          category: 'Case Study'
        }
      ]
    },
    guides: {
      title: 'Implementation Guides',
      icon: AcademicCapIcon,
      content: [
        {
          title: 'Complete HIS Implementation Guide',
          description: 'Step-by-step guide to implementing Hospital Information Systems.',
          keywords: ['HIS implementation', 'hospital software setup', 'healthcare IT implementation'],
          readTime: '20 min read',
          category: 'Guide'
        },
        {
          title: 'RIS Integration Best Practices',
          description: 'Best practices for Radiology Information System integration.',
          keywords: ['RIS integration', 'radiology software', 'medical imaging systems'],
          readTime: '18 min read',
          category: 'Guide'
        },
        {
          title: 'Healthcare AI Security Checklist',
          description: 'Comprehensive security checklist for healthcare AI implementations.',
          keywords: ['healthcare AI security', 'medical data security', 'AI compliance'],
          readTime: '14 min read',
          category: 'Security'
        }
      ]
    },
    insights: {
      title: 'Industry Insights',
      icon: LightBulbIcon,
      content: [
        {
          title: '2024 Healthcare AI Trends',
          description: 'Latest trends and predictions for healthcare AI in 2024.',
          keywords: ['healthcare AI trends', 'medical AI 2024', 'healthcare technology trends'],
          readTime: '12 min read',
          category: 'Trends'
        },
        {
          title: 'Digital Transformation in Healthcare',
          description: 'How digital transformation is reshaping healthcare delivery.',
          keywords: ['digital healthcare', 'healthcare transformation', 'medical digitalization'],
          readTime: '16 min read',
          category: 'Transformation'
        },
        {
          title: 'AI Ethics in Healthcare',
          description: 'Ethical considerations for AI implementation in healthcare.',
          keywords: ['AI ethics healthcare', 'medical AI ethics', 'healthcare AI responsibility'],
          readTime: '13 min read',
          category: 'Ethics'
        }
      ]
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Advanced Content Strategy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare AI content designed to establish thought leadership and capture high-value search traffic.
          </p>
        </div>

        {/* Content Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(contentTypes).map(([key, type]) => {
              const Icon = type.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === key
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{type.title}</span>
                </button>
              )
            })}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes[activeTab as keyof typeof contentTypes].content.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.keywords.slice(0, 3).map((keyword, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Benefits */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            SEO Benefits of Advanced Content Strategy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <DocumentTextIcon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Long-tail Keywords</h4>
              <p className="text-sm text-gray-600">Capture specific healthcare AI queries</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <ChartBarIcon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Authority Building</h4>
              <p className="text-sm text-gray-600">Establish thought leadership</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <AcademicCapIcon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Featured Snippets</h4>
              <p className="text-sm text-gray-600">Optimize for Google snippets</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <LightBulbIcon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Link Building</h4>
              <p className="text-sm text-gray-600">Attract high-quality backlinks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
