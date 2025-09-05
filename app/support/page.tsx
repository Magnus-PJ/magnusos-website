import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support - MagnusOS.ai Healthcare Technology Help Center',
  description: 'Get help and support for MagnusOS.ai healthcare technology platform. Access documentation, tutorials, FAQs, and contact our support team for assistance.',
  keywords: 'MagnusOS support, healthcare technology help, platform documentation, technical support, user guide, healthcare software support',
  openGraph: {
    title: 'Support - MagnusOS.ai Healthcare Technology Help Center',
    description: 'Comprehensive support and documentation for MagnusOS.ai healthcare technology platform.',
    type: 'website',
  },
}

export default function SupportPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Support <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Center</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the help you need to make the most of MagnusOS.ai healthcare technology platform. 
            Access documentation, tutorials, and expert support.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl p-6 border border-primary-100 text-center">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📚</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
            <p className="text-gray-600 text-sm mb-4">Comprehensive guides and API documentation for all MagnusOS modules</p>
            <button className="text-primary-600 font-medium text-sm">Browse Docs</button>
          </div>

          <div className="bg-gradient-to-br from-healthcare-50 to-primary-50 rounded-2xl p-6 border border-healthcare-100 text-center">
            <div className="w-16 h-16 bg-healthcare-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🎥</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Tutorials</h3>
            <p className="text-gray-600 text-sm mb-4">Step-by-step video guides for common tasks and workflows</p>
            <button className="text-healthcare-600 font-medium text-sm">Watch Videos</button>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl p-6 border border-primary-100 text-center">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">❓</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">FAQ</h3>
            <p className="text-gray-600 text-sm mb-4">Quick answers to frequently asked questions about our platform</p>
            <button className="text-primary-600 font-medium text-sm">View FAQ</button>
          </div>

          <div className="bg-gradient-to-br from-healthcare-50 to-primary-50 rounded-2xl p-6 border border-healthcare-100 text-center">
            <div className="w-16 h-16 bg-healthcare-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💬</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 text-sm mb-4">Get instant help from our support team via live chat</p>
            <button className="text-healthcare-600 font-medium text-sm">Start Chat</button>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Support Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Getting Started</h3>
              <p className="text-gray-600 text-sm mb-4">Learn how to set up and configure your MagnusOS platform</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Initial setup and configuration</li>
                <li>• User account management</li>
                <li>• Basic navigation and features</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integration Help</h3>
              <p className="text-gray-600 text-sm mb-4">Connect MagnusOS with your existing healthcare systems</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• HL7/FHIR integration</li>
                <li>• PACS system connection</li>
                <li>• Third-party API setup</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Troubleshooting</h3>
              <p className="text-gray-600 text-sm mb-4">Common issues and their solutions</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Login and access issues</li>
                <li>• Performance optimization</li>
                <li>• Data sync problems</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Security & Compliance</h3>
              <p className="text-gray-600 text-sm mb-4">HIPAA compliance and security best practices</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• HIPAA compliance setup</li>
                <li>• User access controls</li>
                <li>• Data encryption settings</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Training Resources</h3>
              <p className="text-gray-600 text-sm mb-4">Training materials for your team</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Administrator training</li>
                <li>• End-user guides</li>
                <li>• Best practices documentation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">System Updates</h3>
              <p className="text-gray-600 text-sm mb-4">Information about platform updates and new features</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Release notes</li>
                <li>• New feature announcements</li>
                <li>• Update procedures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl p-12 border border-primary-100 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Need More Help?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you succeed with MagnusOS.ai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-healthcare-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Support
            </button>
            <button className="px-8 py-4 border-2 border-primary-500 text-primary-600 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-300">
              Schedule Training
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

