'use client'

import { motion } from 'framer-motion'
import { 
  CpuChipIcon, 
  EyeIcon, 
  SparklesIcon, 
  MicrophoneIcon,
  ChartBarIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'

const aiFeatures = [
  {
    icon: EyeIcon,
    title: 'AI Diagnostic Aids',
    description: 'AI tools analyze radiographs to highlight potential cavities, calculus, and periapical lesions.',
    details: [
      'Automatic cavity detection on bitewing X-rays',
      'Calculus and pathology identification',
      'Periapical lesion highlighting',
      'Second opinion for busy days'
    ],
    example: 'AI scans bitewing X-rays to highlight potential cavities in red for dentist review, helping catch early lesions that might be subtle.',
    color: 'blue'
  },
  {
    icon: SparklesIcon,
    title: 'Orthodontic Treatment Simulation',
    description: 'Simulate teeth movement for orthodontic cases using digital impressions and AI predictions.',
    details: [
      'Digital impression analysis',
      'Teeth movement animation',
      'Treatment duration prediction',
      'Extraction and IPR recommendations'
    ],
    example: 'Show patients an animation of how their teeth could align over time with clear aligners, helping them commit to treatment.',
    color: 'teal'
  },
  {
    icon: LightBulbIcon,
    title: 'Smile Design',
    description: 'Create virtual mock-ups of veneers or whitening results using AI-assisted smile design.',
    details: [
      'Automatic tooth edge identification',
      'Ideal shape and shade proposals',
      'Before/after smile simulations',
      'Patient visualization tools'
    ],
    example: 'AI assists by automatically identifying tooth edges and proposing ideal shapes and shades for smile makeovers.',
    color: 'blue'
  },
  {
    icon: MicrophoneIcon,
    title: 'Voice Charting & Notes',
    description: 'Hands-free documentation using voice commands for common charting tasks.',
    details: [
      'Voice commands for charting',
      'Dental terminology recognition',
      'Hands-free documentation',
      'Sterility maintenance'
    ],
    example: 'Dentists can say "tooth 18: occlusal caries" and it will be automatically charted, maintaining sterility.',
    color: 'teal'
  }
]

export default function DentalAIWorkflow() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 border border-blue-200 mb-6">
            <CpuChipIcon className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">AI-Powered Dental Technology</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">AI-Driven</span> Dental Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MagnusOS brings cutting-edge AI technology to dental practices, providing diagnostic assistance, 
            treatment planning, and workflow optimization that enhances both practitioner confidence and patient outcomes.
          </p>
        </motion.div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${
                  feature.color === 'blue' ? 'from-blue-500 to-teal-500' : 'from-teal-500 to-blue-500'
                } rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2 mb-4">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full ${
                          feature.color === 'blue' ? 'bg-blue-500' : 'bg-teal-500'
                        } mr-3`}></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-gray-700 italic">
                      <strong>Example:</strong> {feature.example}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real-World Use Case */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-500 to-teal-600 rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Real-World Success Story
            </h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <p className="text-lg leading-relaxed mb-4">
                "Integrating MagnusOS's AI led to a 15% increase in diagnosed and treated caries. The AI would flag early lesions 
                on X-rays that were then confirmed and treated, which previously might have been observed until bigger. We also reported 
                consultations for advanced procedures were more successful because the simulation tools helped patients visualize results and say yes."
              </p>
              <div className="text-right">
                <p className="font-semibold">— Bright Dental Practice</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15%</div>
                <div className="text-sm opacity-90">Increase in Diagnosed Caries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-sm opacity-90">Faster Treatment Planning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25%</div>
                <div className="text-sm opacity-90">Reduction in Admin Time</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Benefits Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Why AI Makes the Difference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Diagnostics</h4>
              <p className="text-gray-600">Catch early issues that might be missed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <LightBulbIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Better Treatment Planning</h4>
              <p className="text-gray-600">Visualize outcomes and improve patient understanding</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MicrophoneIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Streamlined Workflow</h4>
              <p className="text-gray-600">Voice commands and automation reduce admin burden</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
