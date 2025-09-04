'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  ArrowTrendingUpIcon, 
  ClockIcon, 
  UserGroupIcon,
  HeartIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const metrics = [
  {
    icon: ArrowTrendingUpIcon,
    title: '35%',
    subtitle: 'Faster Image Analysis',
    description: 'AI-powered automated analysis reduces reporting time significantly',
    color: 'green'
  },
  {
    icon: ClockIcon,
    title: '50%',
    subtitle: 'Workflow Efficiency',
    description: 'Streamlined processes and optimized scheduling improve throughput',
    color: 'blue'
  },
  {
    icon: UserGroupIcon,
    title: '20%',
    subtitle: 'Dose Reduction',
    description: 'AI-optimized dosing reduces patient radiation exposure',
    color: 'green'
  },
  {
    icon: CurrencyDollarIcon,
    title: '95%',
    subtitle: 'Diagnostic Accuracy',
    description: 'AI-assisted analysis improves diagnostic confidence and accuracy',
    color: 'blue'
  }
]

const testimonials = [
  {
    quote: "MagnusOS revolutionized our nuclear medicine department. The AI-powered image analysis is incredibly accurate, and the workflow optimization has allowed us to serve 30% more patients with the same resources.",
    author: "Dr. Sarah Chen",
    role: "Nuclear Medicine Director",
    clinic: "Advanced Medical Center",
    image: "/api/placeholder/64/64"
  },
  {
    quote: "The dose optimization features are outstanding. We've reduced patient radiation exposure by 20% while maintaining diagnostic quality. The automated reporting saves us hours every day.",
    author: "Dr. Michael Rodriguez",
    role: "Chief Technologist",
    clinic: "Nuclear Medicine Institute",
    image: "/api/placeholder/64/64"
  },
  {
    quote: "The integration with our existing systems was seamless. MagnusOS has transformed how we manage our nuclear medicine workflow, from scheduling to reporting.",
    author: "Dr. Jennifer Kim",
    role: "Medical Physicist",
    clinic: "Regional Nuclear Medicine Center",
    image: "/api/placeholder/64/64"
  }
]

export default function NuclearMedicineResults() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Proven <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Results</span> & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how nuclear medicine departments are transforming their operations with MagnusOS. 
            Real results from real departments that have embraced the future of nuclear medicine technology.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${
                metric.color === 'green' ? 'from-green-500 to-blue-500' : 'from-blue-500 to-green-500'
              } rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{metric.title}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{metric.subtitle}</div>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-green-600">{testimonial.clinic}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Transform Your Nuclear Medicine Department Today
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Join leading nuclear medicine departments that have already transformed their operations with MagnusOS. 
              Experience the power of AI-driven nuclear medicine technology and see measurable results in your department.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Nuclear Medicine Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10K+</div>
                <div className="text-sm opacity-90">Scans Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-sm opacity-90">Uptime Guarantee</div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Transformation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
