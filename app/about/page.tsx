import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About MagnusOS.ai - AI-First Healthcare Technology Company',
  description: 'Learn about MagnusOS.ai, the leading AI-first healthcare technology company transforming digital hospitals with unified platforms, AI-powered solutions, and comprehensive healthcare management systems.',
  keywords: 'about MagnusOS, healthcare technology company, AI healthcare, digital hospital platform, healthcare innovation, medical software company',
  openGraph: {
    title: 'About MagnusOS.ai - AI-First Healthcare Technology Company',
    description: 'Discover our mission to transform healthcare through AI-powered technology and unified digital hospital platforms.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About MagnusOS.ai</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            MagnusOS.ai is pioneering the future of healthcare with AI-first technology solutions 
            that unify hospital operations, enhance patient care, and drive digital transformation 
            across the healthcare ecosystem.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-primary-50 to-healthcare-50 rounded-xl p-6 border border-primary-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Paul Joy</h3>
                  <p className="text-primary-600 font-medium mb-3">Founder & Chief Executive Officer</p>
                  <p className="text-gray-600">
                    Dr. Paul Joy brings over 15 years of experience in healthcare technology and digital transformation. 
                    As the visionary behind MagnusOS.ai, he has led the development of AI-first healthcare solutions 
                    that are transforming how hospitals and clinics operate worldwide.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-healthcare-50 to-primary-50 rounded-xl p-6 border border-healthcare-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Ambily</h3>
                  <p className="text-healthcare-600 font-medium mb-3">Chief Technology Officer</p>
                  <p className="text-gray-600">
                    Dr. Ambily leads our technical innovation with expertise in AI, machine learning, and healthcare 
                    interoperability. Her research in medical AI and her commitment to building secure, scalable 
                    healthcare platforms drives MagnusOS.ai's technological excellence.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, MagnusOS.ai emerged from a vision to solve the fragmentation in healthcare technology. 
                  Our founders recognized that hospitals and clinics were struggling with disconnected systems, 
                  inefficient workflows, and missed opportunities for AI-driven improvements.
                </p>
                <p>
                  Today, MagnusOS.ai serves healthcare organizations globally, from small clinics to large hospital networks. 
                  Our unified platform integrates seamlessly with existing systems while introducing cutting-edge AI 
                  capabilities that enhance patient care and operational efficiency.
                </p>
                <p>
                  We believe that technology should amplify human expertise, not replace it. Every feature in MagnusOS.ai 
                  is designed to support healthcare professionals in delivering better patient outcomes while reducing 
                  administrative burden.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-healthcare-50 rounded-2xl p-8 border border-primary-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🏥</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Patient-Centric</h3>
                <p className="text-gray-600 text-sm">Every solution is designed with patient outcomes as the primary focus</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-healthcare-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🔒</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600 text-sm">HIPAA, GDPR, and NDHM compliance built into every feature</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Innovation Driven</h3>
                <p className="text-gray-600 text-sm">Continuous innovation in AI and healthcare technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
