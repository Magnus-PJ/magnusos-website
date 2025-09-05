'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  ArrowTrendingUpIcon, 
  ClockIcon, 
  UserGroupIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const metrics = [
  {
    icon: ArrowTrendingUpIcon,
    title: '20%',
    subtitle: 'Reduction in Medication Errors',
    description: 'Thanks to AI-powered decision support and integrated drug interaction checking',
    color: 'success'
  },
  {
    icon: ClockIcon,
    title: '15%',
    subtitle: 'Faster Discharge Processing',
    description: 'Streamlined workflows and automated documentation reduce discharge time',
    color: 'primary'
  },
  {
    icon: UserGroupIcon,
    title: '40%',
    subtitle: 'Improved Patient Satisfaction',
    description: 'Better coordination and reduced wait times lead to higher satisfaction scores',
    color: 'healthcare'
  },
  {
    icon: CurrencyDollarIcon,
    title: '25%',
    subtitle: 'Cost Savings',
    description: 'Reduced administrative overhead and improved operational efficiency',
    color: 'warning'
  }
]

export default function HISResults() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-healthcare-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proven Results
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how MagnusOS HIS transforms hospital operations with measurable improvements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                metric.color === 'primary' ? 'bg-primary-100' :
                metric.color === 'success' ? 'bg-green-100' :
                metric.color === 'warning' ? 'bg-yellow-100' :
                'bg-blue-100'
              }`}>
                <metric.icon className={`w-8 h-8 ${
                  metric.color === 'primary' ? 'text-primary-600' :
                  metric.color === 'success' ? 'text-green-600' :
                  metric.color === 'warning' ? 'text-yellow-600' :
                  'text-blue-600'
                }`} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{metric.title}</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">{metric.subtitle}</h4>
              <p className="text-gray-600">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
