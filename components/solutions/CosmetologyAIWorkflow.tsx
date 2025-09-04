'use client'

import { motion } from 'framer-motion'
import { 
  CpuChipIcon, 
  EyeIcon, 
  SparklesIcon, 
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const aiFeatures = [
  {
    icon: EyeIcon,
    title: 'AI Skin Analysis',
    description: 'Leverage AI to analyze client skin photos and quantify improvements over time.',
    details: [
      'Quantify wrinkles, hyperpigmentation, and acne lesions',
      'Track skin improvements with objective metrics',
      'Identify issues for practitioner focus',
      'Show quantitative improvement percentages'
    ],
    example: 'AI analysis can show that pigmentation reduced by 23% after 4 laser sessions, providing scientific credibility to aesthetic claims.',
    color: 'pink'
  },
  {
    icon: LightBulbIcon,
    title: 'Personalized Recommendations',
    description: 'AI suggests treatment and product recommendations based on client profile and goals.',
    details: [
      'Analyze skin type and concerns for treatment suggestions',
      'Recommend product combinations based on successful outcomes',
      'Ensure consistency across practitioners in chains',
      'Leverage collective intelligence of what works'
    ],
    example: 'For fine lines + dullness, AI might suggest "Microneedling + PRP, and these 2 homecare products" based on similar successful profiles.',
    color: 'purple'
  },
  {
    icon: SparklesIcon,
    title: 'Outcome Simulation',
    description: 'Generate realistic previews of treatment outcomes using machine learning.',
    details: [
      'Create realistic "after" appearance simulations',
      'Show expected results for various procedures',
      'Help set proper client expectations',
      'Aid in treatment planning and consent'
    ],
    example: 'AI can show expected hair density increase after 4 PRP sessions, visually displayed on the client\'s photo for compelling consultations.',
    color: 'pink'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'AI Chatbots for Leads',
    description: 'Engage potential clients with intelligent chatbots that answer questions and schedule consultations.',
    details: [
      'Answer common service questions 24/7',
      'Recommend services based on client needs',
      'Schedule consultations automatically',
      'Increase lead capture and conversion'
    ],
    example: 'Chatbot answers "What\'s the downtime for a chemical peel?" and can recommend the service or schedule a consultation.',
    color: 'purple'
  }
]

export default function CosmetologyAIWorkflow() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 mb-6">
            <CpuChipIcon className="w-5 h-5 text-pink-600 mr-2" />
            <span className="text-sm font-medium text-pink-700">AI-Powered Beauty Technology</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">AI-Driven</span> Aesthetic Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MagnusOS brings cutting-edge AI technology to aesthetic practices, providing objective analysis, 
            personalized recommendations, and realistic outcome simulations that enhance both practitioner confidence and client satisfaction.
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
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${
                  feature.color === 'pink' ? 'from-pink-500 to-purple-500' : 'from-purple-500 to-pink-500'
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
                          feature.color === 'pink' ? 'bg-pink-500' : 'bg-purple-500'
                        } mr-3`}></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white/80 rounded-lg p-4 border border-pink-200">
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
          className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Real-World Success Story
            </h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <p className="text-lg leading-relaxed mb-4">
                "Our consultation conversions went up by 30% after we started using MagnusOS's visualization tools. 
                Clients love seeing a preview of their results. The AI skin analysis also gives us an edge; it's very 
                convincing when we can show a computer-calculated improvement in pore size or pigmentation after treatments."
              </p>
              <div className="text-right">
                <p className="font-semibold">— BeautyPlus Clinic Manager</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">30%</div>
                <div className="text-sm opacity-90">Increase in Conversions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-sm opacity-90">Reduction in No-Shows</div>
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
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Objective Analysis</h4>
              <p className="text-gray-600">Scientific credibility with quantified results</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <LightBulbIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Personalized Care</h4>
              <p className="text-gray-600">Tailored recommendations for each client</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Experience</h4>
              <p className="text-gray-600">Visual previews and realistic expectations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
