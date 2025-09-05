'use client'

import { useState } from 'react'
import { MapPinIcon, PhoneIcon, GlobeAltIcon, BuildingOfficeIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function LocalSEOOptimization() {
  const [activeLocation, setActiveLocation] = useState('global')

  const locations = {
    global: {
      title: 'Global Healthcare AI Solutions',
      description: 'Serving healthcare organizations worldwide with AI-powered solutions.',
      locations: [
        {
          region: 'North America',
          countries: ['United States', 'Canada', 'Mexico'],
          offices: ['New York', 'San Francisco', 'Toronto'],
          languages: ['English', 'Spanish', 'French']
        },
        {
          region: 'Europe',
          countries: ['United Kingdom', 'Germany', 'France', 'Netherlands'],
          offices: ['London', 'Berlin', 'Paris', 'Amsterdam'],
          languages: ['English', 'German', 'French', 'Dutch']
        },
        {
          region: 'Asia Pacific',
          countries: ['India', 'Singapore', 'Australia', 'Japan'],
          offices: ['Mumbai', 'Singapore', 'Sydney', 'Tokyo'],
          languages: ['English', 'Hindi', 'Japanese', 'Chinese']
        },
        {
          region: 'Middle East & Africa',
          countries: ['UAE', 'South Africa', 'Saudi Arabia'],
          offices: ['Dubai', 'Cape Town', 'Riyadh'],
          languages: ['English', 'Arabic', 'Afrikaans']
        }
      ]
    },
    northAmerica: {
      title: 'North American Operations',
      description: 'Comprehensive healthcare AI solutions for North American markets.',
      locations: [
        {
          city: 'New York',
          state: 'NY',
          country: 'United States',
          services: ['HIS Implementation', 'RIS Solutions', 'Laboratory Systems'],
          compliance: ['HIPAA', 'FDA', 'CMS'],
          contact: '+1 (555) 123-4567'
        },
        {
          city: 'San Francisco',
          state: 'CA',
          country: 'United States',
          services: ['AI Research', 'Technology Innovation', 'Startup Partnerships'],
          compliance: ['HIPAA', 'FDA', 'CCPA'],
          contact: '+1 (555) 987-6543'
        },
        {
          city: 'Toronto',
          state: 'ON',
          country: 'Canada',
          services: ['Healthcare IT', 'Medical Software', 'Compliance Consulting'],
          compliance: ['PIPEDA', 'Health Canada', 'PHIPA'],
          contact: '+1 (416) 555-0123'
        }
      ]
    },
    europe: {
      title: 'European Operations',
      description: 'GDPR-compliant healthcare AI solutions for European markets.',
      locations: [
        {
          city: 'London',
          country: 'United Kingdom',
          services: ['NHS Integration', 'Healthcare AI', 'Medical Software'],
          compliance: ['GDPR', 'NHS Standards', 'MHRA'],
          contact: '+44 20 7946 0958'
        },
        {
          city: 'Berlin',
          country: 'Germany',
          services: ['Digital Health', 'AI Research', 'Healthcare Innovation'],
          compliance: ['GDPR', 'BfArM', 'German Medical Device Act'],
          contact: '+49 30 12345678'
        },
        {
          city: 'Paris',
          country: 'France',
          services: ['Healthcare IT', 'Medical AI', 'Digital Transformation'],
          compliance: ['GDPR', 'ANSM', 'French Healthcare Standards'],
          contact: '+33 1 42 86 83 26'
        }
      ]
    },
    asiaPacific: {
      title: 'Asia Pacific Operations',
      description: 'Localized healthcare AI solutions for Asia Pacific markets.',
      locations: [
        {
          city: 'Mumbai',
          country: 'India',
          services: ['NDHM Integration', 'ABHA Solutions', 'Healthcare AI'],
          compliance: ['NDHM', 'ABHA', 'Indian Medical Standards'],
          contact: '+91 22 1234 5678'
        },
        {
          city: 'Singapore',
          country: 'Singapore',
          services: ['Smart Health', 'AI Innovation', 'Healthcare Technology'],
          compliance: ['PDPA', 'HSA', 'Singapore Health Standards'],
          contact: '+65 6123 4567'
        },
        {
          city: 'Sydney',
          country: 'Australia',
          services: ['Healthcare AI', 'Medical Software', 'Digital Health'],
          compliance: ['Privacy Act', 'TGA', 'Australian Health Standards'],
          contact: '+61 2 1234 5678'
        }
      ]
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Local SEO Optimization
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive local SEO strategy to dominate healthcare AI searches in key markets worldwide.
          </p>
        </div>

        {/* Location Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(locations).map(([key, location]) => (
              <button
                key={key}
                onClick={() => setActiveLocation(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeLocation === key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
                }`}
              >
                {location.title}
              </button>
            ))}
          </div>

          {/* Location Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {locations[activeLocation as keyof typeof locations].title}
              </h3>
              <p className="text-gray-600">
                {locations[activeLocation as keyof typeof locations].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations[activeLocation as keyof typeof locations].locations.map((location, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <MapPinIcon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {'city' in location ? location.city : location.region}
                      </h4>
                      {'state' in location && location.state && (
                        <p className="text-sm text-gray-600">
                          {location.state}, {location.country}
                        </p>
                      )}
                      {'countries' in location && location.countries && (
                        <p className="text-sm text-gray-600">
                          {location.countries.join(', ')}
                        </p>
                      )}
                    </div>
                  </div>

                  {'services' in location && location.services && (
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Services:</h5>
                      <div className="flex flex-wrap gap-1">
                        {location.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 rounded text-xs bg-primary-100 text-primary-800"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {'compliance' in location && location.compliance && (
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Compliance:</h5>
                      <div className="flex flex-wrap gap-1">
                        {location.compliance.map((comp, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 rounded text-xs bg-green-100 text-green-800"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {'contact' in location && location.contact && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <PhoneIcon className="w-4 h-4" />
                      <span>{location.contact}</span>
                    </div>
                  )}

                  {'offices' in location && location.offices && (
                    <div className="mt-4">
                      <h5 className="font-medium text-gray-900 mb-2">Offices:</h5>
                      <p className="text-sm text-gray-600">
                        {location.offices.join(', ')}
                      </p>
                    </div>
                  )}

                  {'languages' in location && location.languages && (
                    <div className="mt-4">
                      <h5 className="font-medium text-gray-900 mb-2">Languages:</h5>
                      <p className="text-sm text-gray-600">
                        {location.languages.join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Local SEO Benefits */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Local SEO Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPinIcon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Local Visibility</h4>
              <p className="text-sm text-gray-600">Dominate local healthcare AI searches</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BuildingOfficeIcon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Trust & Authority</h4>
              <p className="text-sm text-gray-600">Build local healthcare authority</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <UserGroupIcon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Targeted Traffic</h4>
              <p className="text-sm text-gray-600">Attract relevant local customers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <GlobeAltIcon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Global Reach</h4>
              <p className="text-sm text-gray-600">Expand to international markets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
