import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revenue Model - MagnusOS.ai Healthcare Technology Pricing',
  description: 'Explore MagnusOS.ai flexible revenue models and pricing options for healthcare organizations. Choose from subscription plans, per-user pricing, and enterprise solutions tailored to your needs.',
  keywords: 'healthcare software pricing, hospital management system cost, MagnusOS pricing, healthcare technology revenue model, subscription plans, enterprise healthcare software',
  openGraph: {
    title: 'Revenue Model - MagnusOS.ai Healthcare Technology Pricing',
    description: 'Discover flexible pricing options and revenue models for MagnusOS.ai healthcare technology solutions.',
    type: 'website',
  },
}

export default function RevenueModelPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revenue <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Model</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your healthcare organization's growth and needs.
          </p>
        </div>

        {/* Pricing Models */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl p-8 border border-primary-100">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Subscription Plans</h3>
            <p className="text-gray-600 text-center mb-6">
              Flexible monthly and annual subscription options with different tiers based on your organization size and requirements.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Starter: $99/month (up to 10 users)</li>
              <li>• Professional: $299/month (up to 50 users)</li>
              <li>• Enterprise: $599/month (unlimited users)</li>
              <li>• Annual discounts up to 20%</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-healthcare-50 to-primary-50 rounded-2xl p-8 border border-healthcare-100">
            <div className="w-16 h-16 bg-healthcare-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Per-User Pricing</h3>
            <p className="text-gray-600 text-center mb-6">
              Pay only for the users you need with scalable pricing that grows with your team and patient volume.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Basic User: $15/month per user</li>
              <li>• Clinical User: $25/month per user</li>
              <li>• Admin User: $35/month per user</li>
              <li>• Volume discounts available</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl p-8 border border-primary-100">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🏢</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Enterprise Solutions</h3>
            <p className="text-gray-600 text-center mb-6">
              Custom enterprise packages with dedicated support, on-premise deployment, and tailored features.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Custom pricing based on needs</li>
              <li>• On-premise deployment options</li>
              <li>• Dedicated support team</li>
              <li>• Custom integrations included</li>
            </ul>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose MagnusOS.ai?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 text-xl">💰</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cost Effective</h3>
              <p className="text-gray-600 text-sm">Reduce operational costs by up to 40% with integrated workflows</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-healthcare-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-healthcare-600 text-xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick ROI</h3>
              <p className="text-gray-600 text-sm">See return on investment within 6-12 months of implementation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 text-xl">📈</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Scalable</h3>
              <p className="text-gray-600 text-sm">Grow from small clinic to large hospital network seamlessly</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-healthcare-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-healthcare-600 text-xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
              <p className="text-gray-600 text-sm">HIPAA, GDPR, and NDHM compliant with enterprise-grade security</p>
            </div>
          </div>
        </div>

        {/* Implementation Costs */}
        <div className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl p-8 border border-primary-100 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Implementation & Setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Included in All Plans</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Initial setup and configuration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Data migration assistance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Staff training sessions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  24/7 technical support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Regular system updates
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Optional Add-ons</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-healthcare-500 rounded-full mr-3"></span>
                  Custom integrations: $2,500+
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-healthcare-500 rounded-full mr-3"></span>
                  Advanced training: $500/day
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-healthcare-500 rounded-full mr-3"></span>
                  Dedicated support: $1,000/month
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-healthcare-500 rounded-full mr-3"></span>
                  On-premise deployment: $5,000+
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-healthcare-500 rounded-full mr-3"></span>
                  Custom development: $150/hour
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-healthcare-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">🚀</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Pricing Coming Soon</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're finalizing our comprehensive pricing structure to ensure it provides the best value for healthcare organizations of all sizes. 
            Contact our sales team for personalized pricing information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-healthcare-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Sales
            </button>
            <button className="px-8 py-4 border-2 border-primary-500 text-primary-600 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
