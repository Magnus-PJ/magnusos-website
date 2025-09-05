import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - MagnusOS.ai Healthcare Technology Platform',
  description: 'Read the terms of service for MagnusOS.ai healthcare technology platform. Understand our service agreements, user responsibilities, and platform usage guidelines.',
  keywords: 'terms of service, healthcare software terms, MagnusOS terms, service agreement, healthcare technology terms, platform usage guidelines',
  openGraph: {
    title: 'Terms of Service - MagnusOS.ai Healthcare Technology Platform',
    description: 'Terms and conditions for using MagnusOS.ai healthcare technology platform.',
    type: 'website',
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms of <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using MagnusOS.ai healthcare technology platform and services.
          </p>
        </div>

        {/* Key Terms Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl p-6 border border-primary-100 text-center">
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">📋</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Agreement</h3>
            <p className="text-gray-600 text-sm">Terms governing the use of our healthcare technology platform and services</p>
          </div>

          <div className="bg-gradient-to-br from-healthcare-50 to-primary-50 rounded-2xl p-6 border border-healthcare-100 text-center">
            <div className="w-12 h-12 bg-healthcare-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">⚖️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Compliance</h3>
            <p className="text-gray-600 text-sm">Healthcare regulations, data protection laws, and industry standards compliance</p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl p-6 border border-primary-100 text-center">
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🛡️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">User Responsibilities</h3>
            <p className="text-gray-600 text-sm">Guidelines for responsible use of our healthcare technology platform</p>
          </div>
        </div>

        {/* Terms Content Placeholder */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Terms Overview</h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                These Terms of Service govern your use of MagnusOS.ai healthcare technology platform and related services. 
                By accessing or using our platform, you agree to be bound by these terms and our privacy policy.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Acceptance of Terms</h3>
              <p>
                By using MagnusOS.ai services, you acknowledge that you have read, understood, and agree to be bound by 
                these terms and all applicable healthcare regulations and data protection laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Service Description</h3>
              <p>
                MagnusOS.ai provides healthcare technology solutions including hospital information systems, 
                radiology management, laboratory systems, and other healthcare management tools designed to 
                improve patient care and operational efficiency.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">User Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Comply with all applicable healthcare regulations and laws</li>
                <li>Maintain the confidentiality of patient data and system access credentials</li>
                <li>Use the platform only for legitimate healthcare purposes</li>
                <li>Report any security incidents or data breaches immediately</li>
                <li>Ensure proper training and authorization for all system users</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Data Protection and Privacy</h3>
              <p>
                All healthcare data processed through our platform is subject to strict privacy and security measures 
                in compliance with HIPAA, GDPR, and other applicable data protection regulations.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Service Availability</h3>
              <p>
                We strive to maintain high service availability but cannot guarantee uninterrupted access. 
                We will provide reasonable notice for scheduled maintenance and updates.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-healthcare-50 rounded-xl border border-primary-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Complete Terms Coming Soon</h3>
              <p className="text-gray-600 mb-4">
                We are finalizing our comprehensive terms of service document that will include detailed information about 
                service levels, liability, intellectual property, termination, and dispute resolution procedures.
              </p>
              <p className="text-gray-600">
                For questions about our terms of service, please contact our legal team at 
                <span className="font-medium text-primary-600"> legal@magnusos.ai</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

