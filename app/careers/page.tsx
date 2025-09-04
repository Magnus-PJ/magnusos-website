import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Join MagnusOS.ai Healthcare Technology Team',
  description: 'Join the MagnusOS.ai team and help transform healthcare with AI-powered technology. Explore career opportunities in healthcare technology, AI development, and digital transformation.',
  keywords: 'healthcare technology careers, AI healthcare jobs, MagnusOS careers, healthcare software development, medical technology jobs, healthcare innovation careers',
  openGraph: {
    title: 'Careers - Join MagnusOS.ai Healthcare Technology Team',
    description: 'Join our mission to transform healthcare through AI-powered technology and innovation.',
    type: 'website',
  },
}

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Mission</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us transform healthcare through AI-powered technology and innovative solutions that improve patient outcomes worldwide.
          </p>
        </div>

        {/* Why Join Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mission-Driven</h3>
            <p className="text-gray-600 text-sm">Work on technology that directly improves patient care and healthcare outcomes</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-healthcare-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation First</h3>
            <p className="text-gray-600 text-sm">Be at the forefront of AI and healthcare technology innovation</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🌍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Impact</h3>
            <p className="text-gray-600 text-sm">Make a difference in healthcare systems around the world</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-healthcare-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">👥</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Great Team</h3>
            <p className="text-gray-600 text-sm">Work with passionate experts in healthcare and technology</p>
          </div>
        </div>

        {/* Company Culture */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Culture & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">We work together across teams to solve complex healthcare challenges</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-healthcare-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-healthcare-600 text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">We encourage creative thinking and cutting-edge solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Impact</h3>
              <p className="text-gray-600 text-sm">Every project we work on improves healthcare outcomes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-healthcare-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-healthcare-600 text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600 text-sm">We invest in our team's professional development and learning</p>
            </div>
          </div>
        </div>

        {/* Benefits & Perks */}
        <div className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl p-8 border border-primary-100 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Health & Wellness</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Comprehensive health insurance</li>
                <li>• Mental health support</li>
                <li>• Gym membership reimbursement</li>
                <li>• Flexible work arrangements</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Professional Development</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Conference attendance budget</li>
                <li>• Online learning subscriptions</li>
                <li>• Mentorship programs</li>
                <li>• Career advancement opportunities</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Work-Life Balance</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Unlimited PTO policy</li>
                <li>• Remote work options</li>
                <li>• Flexible hours</li>
                <li>• Team building events</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl p-12 border border-primary-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Senior AI/ML Engineer</h3>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">Full-time</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Lead development of AI-powered healthcare solutions using machine learning and deep learning technologies.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Python</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">TensorFlow</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">PyTorch</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Healthcare AI</span>
              </div>
              <p className="text-sm text-gray-500">San Francisco, CA • Remote OK</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Healthcare Product Manager</h3>
                <span className="inline-block px-3 py-1 bg-healthcare-100 text-healthcare-700 rounded-full text-xs font-medium">Full-time</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Lead product development for healthcare solutions with deep understanding of clinical workflows and regulations.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Product Strategy</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Healthcare</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">HIPAA</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Agile</span>
              </div>
              <p className="text-sm text-gray-500">San Francisco, CA • Hybrid</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Senior UX/UI Designer</h3>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">Full-time</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Design intuitive interfaces for healthcare professionals and patients with focus on accessibility and usability.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Figma</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Healthcare UX</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Accessibility</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Research</span>
              </div>
              <p className="text-sm text-gray-500">San Francisco, CA • Remote OK</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Sales Engineer</h3>
                <span className="inline-block px-3 py-1 bg-healthcare-100 text-healthcare-700 rounded-full text-xs font-medium">Full-time</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Help healthcare organizations understand and implement MagnusOS solutions with technical expertise and industry knowledge.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Healthcare Sales</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Technical Demo</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Integration</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Consulting</span>
              </div>
              <p className="text-sm text-gray-500">Multiple Locations • Travel Required</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">Don't see a position that matches your skills? We're always looking for talented individuals to join our mission.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-healthcare-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Send Us Your Resume
              </button>
              <button className="px-8 py-4 border-2 border-primary-500 text-primary-600 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-300">
                View All Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
