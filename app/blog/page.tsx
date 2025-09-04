import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - MagnusOS.ai Healthcare Technology Insights',
  description: 'Stay updated with the latest insights, trends, and innovations in healthcare technology, AI in healthcare, and digital transformation from the MagnusOS.ai team.',
  keywords: 'healthcare technology blog, AI healthcare insights, digital health trends, healthcare innovation, medical technology news, healthcare AI research',
  openGraph: {
    title: 'Blog - MagnusOS.ai Healthcare Technology Insights',
    description: 'Latest insights and trends in healthcare technology and AI innovation.',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Healthcare <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest trends, innovations, and insights in healthcare technology and AI-powered solutions.
          </p>
        </div>

        {/* Featured Article */}
        <div className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl p-8 border border-primary-100 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">Featured</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Future of AI in Healthcare: Trends and Predictions for 2025</h2>
              <p className="text-gray-600 mb-6">
                Explore how artificial intelligence is transforming healthcare delivery, from diagnostic assistance to personalized treatment plans, 
                and what healthcare organizations need to know to stay ahead of the curve in this rapidly evolving landscape.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span>By Dr. Paul Joy</span>
                <span>•</span>
                <span>January 15, 2025</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/50 text-gray-600 rounded text-xs">AI Healthcare</span>
                <span className="px-2 py-1 bg-white/50 text-gray-600 rounded text-xs">Digital Transformation</span>
                <span className="px-2 py-1 bg-white/50 text-gray-600 rounded text-xs">Future Trends</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-healthcare-100 rounded-lg flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-full h-40 bg-gradient-to-br from-primary-100 to-healthcare-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Hospital Transformation: A Complete Guide</h3>
              <p className="text-gray-600 text-sm mb-4">Learn how to successfully transform your hospital into a digital-first healthcare organization with proven strategies and best practices.</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>By Dr. Ambily</span>
                <span>Jan 12, 2025</span>
              </div>
            </article>

            <article className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-full h-40 bg-gradient-to-br from-healthcare-100 to-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">HIPAA Compliance in the Cloud Era</h3>
              <p className="text-gray-600 text-sm mb-4">Understanding the latest HIPAA requirements for cloud-based healthcare systems and how to ensure full compliance.</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>By Legal Team</span>
                <span>Jan 10, 2025</span>
              </div>
            </article>

            <article className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-full h-40 bg-gradient-to-br from-primary-100 to-healthcare-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient Engagement Through Mobile Health</h3>
              <p className="text-gray-600 text-sm mb-4">Explore how mobile health applications are revolutionizing patient engagement and improving healthcare outcomes.</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>By UX Team</span>
                <span>Jan 8, 2025</span>
              </div>
            </article>
          </div>
        </div>

        {/* Blog Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-xl">🤖</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
            <p className="text-gray-600 text-sm mb-4">Latest developments in healthcare AI, machine learning applications, and intelligent automation.</p>
            <span className="text-primary-600 text-sm font-medium">12 articles</span>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-healthcare-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-xl">🏥</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Transformation</h3>
            <p className="text-gray-600 text-sm mb-4">Insights on digital transformation in healthcare, implementation strategies, and best practices.</p>
            <span className="text-healthcare-600 text-sm font-medium">8 articles</span>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Security & Compliance</h3>
            <p className="text-gray-600 text-sm mb-4">Healthcare data security, compliance requirements, and privacy protection strategies.</p>
            <span className="text-primary-600 text-sm font-medium">6 articles</span>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-healthcare-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">📝</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">More Content Coming Soon</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is working on creating valuable content about healthcare technology trends, AI innovations, 
            and digital transformation insights. Subscribe to stay updated with our latest articles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-healthcare-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Subscribe to Newsletter
            </button>
            <button className="px-8 py-4 border-2 border-primary-500 text-primary-600 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-300">
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
