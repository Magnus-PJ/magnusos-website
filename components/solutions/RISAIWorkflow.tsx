'use client'

import { motion } from 'framer-motion'
import { 
  CpuChipIcon, 
  EyeIcon, 
  ChartBarIcon, 
  CogIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BoltIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

const aiFeatures = [
  {
    icon: EyeIcon,
    title: 'AI Diagnostic Assistance',
    description: 'Advanced AI algorithms provide radiologists with intelligent insights and preliminary findings for faster, more accurate diagnoses.',
    details: [
      'Automated abnormality detection',
      'Preliminary findings generation',
      'Pattern recognition algorithms',
      'Comparative analysis assistance'
    ],
    example: 'AI can automatically flag potential abnormalities in chest X-rays, helping radiologists focus on critical areas and reducing oversight.',
    color: 'healthcare'
  },
  {
    icon: CogIcon,
    title: 'Intelligent Workflow Optimization',
    description: 'Machine learning algorithms optimize radiology workflows by predicting case complexity and optimizing resource allocation.',
    details: [
      'Case complexity prediction',
      'Optimal resource allocation',
      'Workload balancing algorithms',
      'Emergency case prioritization'
    ],
    example: 'AI analyzes historical data to predict which cases require immediate attention, automatically prioritizing emergency studies.',
    color: 'primary'
  },
  {
    icon: ChartBarIcon,
    title: 'Predictive Analytics',
    description: 'AI-powered analytics provide insights into operational efficiency, quality metrics, and predictive maintenance.',
    details: [
      'Equipment utilization forecasting',
      'Quality trend analysis',
      'Performance prediction models',
      'Maintenance scheduling optimization'
    ],
    example: 'Predictive analytics can forecast equipment maintenance needs, reducing downtime and improving operational efficiency.',
    color: 'success'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality Assurance Automation',
    description: 'AI monitors and ensures quality standards through automated checks, peer review workflows, and compliance monitoring.',
    details: [
      'Automated quality checks',
      'Peer review workflows',
      'Compliance monitoring',
      'Continuous improvement tracking'
    ],
    example: 'AI automatically flags reports that may need peer review based on complexity or unusual findings.',
    color: 'warning'
  }
]

const useCase = {
  hospital: 'Advanced Imaging Center',
  results: [
    { metric: 'Report Turnaround', improvement: '40% Faster', description: 'Reduction in time from imaging to report delivery' },
    { metric: 'Detection Accuracy', improvement: '25% Better', description: 'Improved abnormality detection rates' },
    { metric: 'Workflow Efficiency', improvement: '35% Increase', description: 'Better resource utilization and scheduling' }
  ],
  quote: 'MagnusOS RIS helped us reduce report turnaround time by 40% while improving diagnostic accuracy significantly.',
  author: 'Dr. Emily Rodriguez',
  role: 'Chief Radiologist'
}

export default function RISAIWorkflow() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="heading-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            AI-Enhanced Radiology Workflows
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MagnusOS RIS doesn't just digitize radiology processes - it uses artificial intelligence to transform 
            how radiologists work, making diagnostics faster, more accurate, and more efficient.
          </motion.p>
        </div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${feature.color}-100 text-${feature.color}-600 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-3 mb-3">{feature.title}</h3>
                  <p className="body-medium mb-4">{feature.description}</p>
                  <ul className="space-y-2 mb-4">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${feature.color}-500`}></div>
                        <span className="body-small text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary-500">
                    <p className="text-sm text-gray-700 italic">"{feature.example}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real-World Use Case */}
        <motion.div 
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-medium border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <BoltIcon className="w-4 h-4" />
              <span>Real-World Success Story</span>
            </div>
            <h3 className="heading-3 mb-4">Case Study: {useCase.hospital}'s AI Transformation</h3>
            <p className="body-large text-gray-600">
              See how MagnusOS RIS's AI-powered workflows transformed operations at a leading imaging center
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {useCase.results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{result.improvement}</div>
                <div className="font-semibold text-gray-900 mb-1">{result.metric}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <blockquote className="text-xl text-gray-700 italic mb-6 max-w-3xl mx-auto">
              "{useCase.quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-healthcare-400 to-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                {useCase.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{useCase.author}</div>
                <div className="text-sm text-primary-600">{useCase.role}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Benefits Summary */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="heading-3 mb-8">AI Makes Radiology Smarter</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CpuChipIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Intelligent</h4>
              <p className="text-sm text-gray-600">AI-powered diagnostics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-healthcare-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <UserGroupIcon className="w-8 h-8 text-healthcare-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Efficient</h4>
              <p className="text-sm text-gray-600">Optimized workflows</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <ShieldCheckIcon className="w-8 h-8 text-success-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Accurate</h4>
              <p className="text-sm text-gray-600">Enhanced diagnostic precision</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <ChartBarIcon className="w-8 h-8 text-warning-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Insightful</h4>
              <p className="text-sm text-gray-600">Predictive analytics</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

