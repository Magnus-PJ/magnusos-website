'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  ArrowTrendingUpIcon, 
  ClockIcon, 
  UserGroupIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  HeartIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

const keyMetrics = [
  {
    icon: ArrowTrendingUpIcon,
    metric: '47%',
    label: 'IVF Success Rate',
    description: 'Average pregnancy rate across all age groups',
    color: 'green'
  },
  {
    icon: ClockIcon,
    metric: '25%',
    label: 'Faster Cycles',
    description: 'Reduction in treatment cycle duration',
    color: 'blue'
  },
  {
    icon: UserGroupIcon,
    metric: '30%',
    label: 'Patient Satisfaction',
    description: 'Increase in patient satisfaction scores',
    color: 'purple'
  },
  {
    icon: CurrencyDollarIcon,
    metric: '$2.1M',
    label: 'Annual Savings',
    description: 'Average cost savings per clinic',
    color: 'indigo'
  }
]

const successStories = [
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Fertility Specialist',
    clinic: 'Hope Fertility Clinic',
    location: 'Miami, FL',
    testimonial: 'MagnusOS transformed our IVF success rates from 32% to 47%. The AI embryo grading eliminated subjectivity and our embryologists can now focus on complex cases.',
    metrics: ['Success Rate: +15%', 'Cycle Time: -25%', 'Patient Volume: +40%'],
    avatar: 'ER'
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Medical Director',
    clinic: 'Advanced Reproductive Center',
    location: 'San Francisco, CA',
    testimonial: 'The integrated platform streamlined our entire fertility workflow. We reduced administrative overhead by 35% while improving patient outcomes significantly.',
    metrics: ['Admin Overhead: -35%', 'Patient Wait Time: -40%', 'Staff Efficiency: +30%'],
    avatar: 'SC'
  },
  {
    name: 'Dr. Michael Thompson',
    role: 'Laboratory Director',
    clinic: 'IVF Excellence Lab',
    location: 'Boston, MA',
    testimonial: 'MagnusOS AI embryo analysis is game-changing. We\'ve improved embryo selection accuracy by 20% and reduced embryologist workload by 30%.',
    metrics: ['Selection Accuracy: +20%', 'Workload: -30%', 'Quality Control: +25%'],
    avatar: 'MT'
  }
]

const beforeAfterComparison = {
  before: {
    title: 'Traditional Fertility Management',
    challenges: [
      'Manual embryo grading (subjective)',
      'Paper-based patient records',
      'Disconnected lab equipment',
      'Manual appointment scheduling',
      'Limited patient communication',
      'Basic reporting capabilities'
    ]
  },
  after: {
    title: 'MagnusOS AI-Powered Platform',
    improvements: [
      'AI embryo grading (objective)',
      'Digital patient records',
      'Integrated lab equipment',
      'Smart appointment scheduling',
      'Automated patient communication',
      'Advanced analytics & insights'
    ]
  }
}

export default function FertilityResults() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading-2 mb-6">Proven Results & Success Stories</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-600">
            See how MagnusOS Fertility is transforming fertility clinics worldwide, 
            delivering measurable improvements in success rates, efficiency, and patient care.
          </p>
        </motion.div>

        {/* Key Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-medium hover:shadow-large transition-shadow duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-${metric.color}-100 text-${metric.color}-600 rounded-full flex items-center justify-center`}>
                <metric.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.metric}</div>
              <div className="font-semibold text-gray-900 mb-2">{metric.label}</div>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="heading-3 text-center mb-12">Success Stories from Leading Clinics</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-medium hover:shadow-large transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {story.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{story.name}</div>
                    <div className="text-sm text-gray-600">{story.role}</div>
                    <div className="text-sm text-pink-600 font-medium">{story.clinic}</div>
                    <div className="text-sm text-gray-500">{story.location}</div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">"{story.testimonial}"</blockquote>
                <div className="space-y-2">
                  {story.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Before vs After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-medium mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 mb-4">Transformation in Action</h3>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              See the dramatic improvements in fertility clinic operations with MagnusOS
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="flex items-center space-x-3 mb-6">
                <BeakerIcon className="w-8 h-8 text-red-600" />
                <h4 className="text-xl font-semibold text-red-800">{beforeAfterComparison.before.title}</h4>
              </div>
              <ul className="space-y-3">
                {beforeAfterComparison.before.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* After */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center space-x-3 mb-6">
                <HeartIcon className="w-8 h-8 text-green-600" />
                <h4 className="text-xl font-semibold text-green-800">{beforeAfterComparison.after.title}</h4>
              </div>
              <ul className="space-y-3">
                {beforeAfterComparison.after.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-700">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ROI Calculator CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="heading-3 mb-4 text-white">Calculate Your Clinic's ROI</h3>
          <p className="body-large mb-8 text-pink-100 max-w-2xl mx-auto">
            Discover how much MagnusOS Fertility can save your clinic while improving patient outcomes. 
            Our ROI calculator provides personalized estimates based on your current operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-colors duration-200">
              Calculate ROI
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-pink-600 transition-colors duration-200">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
