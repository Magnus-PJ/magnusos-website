'use client'

import { motion } from 'framer-motion'
import { 
  CpuChipIcon, 
  EyeIcon, 
  SparklesIcon, 
  ChartBarIcon,
  LightBulbIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

const aiFeatures = [
  {
    icon: EyeIcon,
    title: 'AI-Powered Image Analysis',
    description: 'Automated PET/CT image analysis with AI-powered lesion detection, quantification, and standardized reporting.',
    details: [
      'Automated lesion detection and segmentation',
      'SUV quantification and analysis',
      'Multi-timepoint comparison',
      'Standardized reporting templates'
    ],
    example: 'AI automatically detects and quantifies FDG-avid lesions, providing SUVmax values and standardized uptake ratios for oncological assessments.',
    color: 'green'
  },
  {
    icon: BeakerIcon,
    title: 'Dose Optimization',
    description: 'AI-driven radiopharmaceutical dosing optimization based on patient characteristics and scan requirements.',
    details: [
      'Patient-specific dose calculations',
      'Body weight and BMI optimization',
      'Scan quality prediction',
      'Radiation exposure minimization'
    ],
    example: 'AI calculates optimal FDG dose based on patient weight, BMI, and scan type, ensuring diagnostic quality while minimizing radiation exposure.',
    color: 'blue'
  },
  {
    icon: ChartBarIcon,
    title: 'Workflow Optimization',
    description: 'Intelligent scheduling and resource optimization for maximum efficiency and patient throughput.',
    details: [
      'Optimal scan scheduling',
      'Equipment utilization optimization',
      'Patient flow management',
      'Resource allocation planning'
    ],
    example: 'AI optimizes daily schedules considering radiopharmaceutical half-lives, patient preparation times, and equipment availability.',
    color: 'green'
  },
  {
    icon: LightBulbIcon,
    title: 'Quality Assurance',
    description: 'Automated quality control and assurance protocols with AI-powered image quality assessment.',
    details: [
      'Automated image quality assessment',
      'Protocol compliance monitoring',
      'Equipment performance tracking',
      'Quality metrics reporting'
    ],
    example: 'AI continuously monitors image quality, protocol compliance, and equipment performance, alerting staff to potential issues.',
    color: 'blue'
  }
]

export default function NuclearMedicineAIWorkflow() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 mb-6">
            <CpuChipIcon className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-700">AI-Powered Nuclear Medicine</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">AI-Driven</span> Nuclear Medicine Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MagnusOS brings cutting-edge AI technology to nuclear medicine, providing automated image analysis, 
            dose optimization, and workflow enhancement that improves both diagnostic accuracy and operational efficiency.
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
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${
                  feature.color === 'green' ? 'from-green-500 to-blue-500' : 'from-blue-500 to-green-500'
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
                          feature.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                        } mr-3`}></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white/80 rounded-lg p-4 border border-green-200">
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
          className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Real-World Success Story
            </h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <p className="text-lg leading-relaxed mb-4">
                "MagnusOS transformed our nuclear medicine department. The AI-powered image analysis reduced our reporting time by 35%, 
                while the dose optimization features helped us reduce patient radiation exposure by 20%. Our workflow efficiency improved 
                by 50%, allowing us to serve more patients with higher quality care."
              </p>
              <div className="text-right">
                <p className="font-semibold">— Advanced Nuclear Medicine Center</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">35%</div>
                <div className="text-sm opacity-90">Faster Reporting</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">20%</div>
                <div className="text-sm opacity-90">Dose Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50%</div>
                <div className="text-sm opacity-90">Workflow Efficiency</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
