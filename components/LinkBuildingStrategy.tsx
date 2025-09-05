'use client'

import { useState } from 'react'
import { LinkIcon, GlobeAltIcon, AcademicCapIcon, BuildingOfficeIcon, UserGroupIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function LinkBuildingStrategy() {
  const [activeStrategy, setActiveStrategy] = useState('healthcare')

  const linkBuildingStrategies = {
    healthcare: {
      title: 'Healthcare Industry Links',
      icon: BuildingOfficeIcon,
      description: 'Strategic partnerships with healthcare organizations and medical institutions.',
      links: [
        {
          type: 'Medical Associations',
          description: 'Partnerships with AMA, AHA, and specialty medical associations',
          value: 'High Authority',
          status: 'Active'
        },
        {
          type: 'Hospital Networks',
          description: 'Collaborations with major hospital systems and healthcare networks',
          value: 'High Authority',
          status: 'Active'
        },
        {
          type: 'Medical Journals',
          description: 'Guest articles and research publications in medical journals',
          value: 'Very High Authority',
          status: 'Planned'
        },
        {
          type: 'Healthcare Conferences',
          description: 'Speaking engagements and sponsorships at healthcare conferences',
          value: 'High Authority',
          status: 'Active'
        }
      ]
    },
    technology: {
      title: 'Technology & AI Links',
      icon: GlobeAltIcon,
      description: 'Connections with technology companies and AI research organizations.',
      links: [
        {
          type: 'AI Research Institutes',
          description: 'Collaborations with MIT, Stanford, and other AI research centers',
          value: 'Very High Authority',
          status: 'Planned'
        },
        {
          type: 'Tech Companies',
          description: 'Partnerships with Microsoft, Google, and other tech giants',
          value: 'Very High Authority',
          status: 'Planned'
        },
        {
          type: 'Startup Networks',
          description: 'Connections with healthcare AI startups and accelerators',
          value: 'Medium Authority',
          status: 'Active'
        },
        {
          type: 'Open Source Projects',
          description: 'Contributions to healthcare AI open source projects',
          value: 'High Authority',
          status: 'Active'
        }
      ]
    },
    academic: {
      title: 'Academic & Research Links',
      icon: AcademicCapIcon,
      description: 'Partnerships with universities and research institutions.',
      links: [
        {
          type: 'Medical Schools',
          description: 'Collaborations with top medical schools and universities',
          value: 'Very High Authority',
          status: 'Planned'
        },
        {
          type: 'Research Papers',
          description: 'Co-authored research papers on healthcare AI',
          value: 'Very High Authority',
          status: 'Planned'
        },
        {
          type: 'Academic Conferences',
          description: 'Presentations at academic conferences and symposiums',
          value: 'High Authority',
          status: 'Active'
        },
        {
          type: 'Student Programs',
          description: 'Internship programs and student research collaborations',
          value: 'Medium Authority',
          status: 'Active'
        }
      ]
    },
    media: {
      title: 'Media & PR Links',
      icon: DocumentTextIcon,
      description: 'Media coverage and public relations for brand authority.',
      links: [
        {
          type: 'Healthcare Media',
          description: 'Features in Healthcare IT News, Modern Healthcare, and similar publications',
          value: 'High Authority',
          status: 'Active'
        },
        {
          type: 'Tech Media',
          description: 'Coverage in TechCrunch, Wired, and other technology publications',
          value: 'High Authority',
          status: 'Planned'
        },
        {
          type: 'Podcast Appearances',
          description: 'Guest appearances on healthcare and technology podcasts',
          value: 'Medium Authority',
          status: 'Active'
        },
        {
          type: 'Industry Awards',
          description: 'Nominations and wins for healthcare technology awards',
          value: 'High Authority',
          status: 'Planned'
        }
      ]
    },
    community: {
      title: 'Community & Social Links',
      icon: UserGroupIcon,
      description: 'Community engagement and social media presence.',
      links: [
        {
          type: 'Healthcare Forums',
          description: 'Active participation in healthcare professional forums',
          value: 'Medium Authority',
          status: 'Active'
        },
        {
          type: 'LinkedIn Articles',
          description: 'Regular publishing on LinkedIn for healthcare professionals',
          value: 'Medium Authority',
          status: 'Active'
        },
        {
          type: 'Webinar Series',
          description: 'Hosting educational webinars for healthcare professionals',
          value: 'Medium Authority',
          status: 'Active'
        },
        {
          type: 'User Communities',
          description: 'Building communities around healthcare AI topics',
          value: 'Medium Authority',
          status: 'Active'
        }
      ]
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Strategic Link Building
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive link building strategy to establish authority and improve search rankings through high-quality backlinks.
          </p>
        </div>

        {/* Strategy Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(linkBuildingStrategies).map(([key, strategy]) => {
              const Icon = strategy.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveStrategy(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeStrategy === key
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{strategy.title}</span>
                </button>
              )
            })}
          </div>

          {/* Strategy Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {linkBuildingStrategies[activeStrategy as keyof typeof linkBuildingStrategies].title}
              </h3>
              <p className="text-gray-600">
                {linkBuildingStrategies[activeStrategy as keyof typeof linkBuildingStrategies].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {linkBuildingStrategies[activeStrategy as keyof typeof linkBuildingStrategies].links.map((link, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {link.type}
                    </h4>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      link.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {link.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {link.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      link.value === 'Very High Authority' 
                        ? 'bg-purple-100 text-purple-800'
                        : link.value === 'High Authority'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {link.value}
                    </span>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <LinkIcon className="w-4 h-4" />
                      <span>Link Building</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Link Building Metrics */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Link Building Metrics & Goals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary-600">50+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">High Authority Links</h4>
              <p className="text-sm text-gray-600">Target: 50+ high-authority backlinks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary-600">80+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Domain Authority</h4>
              <p className="text-sm text-gray-600">Target: 80+ domain authority</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary-600">100+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Referring Domains</h4>
              <p className="text-sm text-gray-600">Target: 100+ referring domains</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary-600">Top 3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Search Rankings</h4>
              <p className="text-sm text-gray-600">Target: Top 3 for key terms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
