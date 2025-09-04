import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - MagnusOS.ai Healthcare Data Protection',
  description: 'Learn how MagnusOS.ai protects your privacy and healthcare data. Our comprehensive privacy policy outlines our commitment to data security, HIPAA compliance, and patient privacy protection.',
  keywords: 'privacy policy, healthcare data protection, HIPAA compliance, patient privacy, data security, MagnusOS privacy, healthcare data privacy',
  openGraph: {
    title: 'Privacy Policy - MagnusOS.ai Healthcare Data Protection',
    description: 'Our commitment to protecting your privacy and healthcare data with industry-leading security measures.',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy and the security of healthcare data are our top priorities. Learn how we protect and handle your information.
          </p>
        </div>

        {/* Key Privacy Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl p-8 border border-primary-100">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">HIPAA Compliant</h3>
            <p className="text-gray-600 text-center">
              Full compliance with HIPAA regulations and healthcare data protection standards to ensure patient privacy and data security.
            </p>
          </div>

          <div className="bg-gradient-to-br from-healthcare-50 to-primary-50 rounded-2xl p-8 border border-healthcare-100">
            <div className="w-16 h-16 bg-healthcare-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">End-to-End Encryption</h3>
            <p className="text-gray-600 text-center">
              All healthcare data is encrypted in transit and at rest using industry-leading encryption standards and security protocols.
            </p>
          </div>
        </div>

        {/* Privacy Policy Content Placeholder */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Privacy Commitment</h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                At MagnusOS.ai, we understand the critical importance of protecting healthcare data and patient privacy. 
                Our privacy policy is designed to be transparent about how we collect, use, and protect your information 
                while maintaining the highest standards of security and compliance.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Healthcare data necessary for providing our services</li>
                <li>Contact information for communication and support</li>
                <li>Usage data to improve our platform and services</li>
                <li>Technical data for system optimization and security</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How We Protect Your Data</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Advanced encryption for all data transmission and storage</li>
                <li>Regular security audits and compliance assessments</li>
                <li>Access controls and authentication protocols</li>
                <li>Secure data centers with physical and digital security measures</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Right to access your personal and healthcare data</li>
                <li>Right to request corrections or updates to your information</li>
                <li>Right to data portability and transfer</li>
                <li>Right to request deletion of your data (where applicable)</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-healthcare-50 rounded-xl border border-primary-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Full Privacy Policy Coming Soon</h3>
              <p className="text-gray-600 mb-4">
                We are finalizing our comprehensive privacy policy document that will include detailed information about 
                data collection, processing, storage, and your rights as a user of our healthcare technology platform.
              </p>
              <p className="text-gray-600">
                For immediate questions about privacy and data protection, please contact our privacy team at 
                <span className="font-medium text-primary-600"> privacy@magnusos.ai</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
