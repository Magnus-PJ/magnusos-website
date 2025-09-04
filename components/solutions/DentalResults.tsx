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
    title: '15%',
    subtitle: 'Increase in Diagnosed Caries',
    description: 'AI-powered X-ray analysis helps catch early lesions that might be missed',
    color: 'blue'
  },
  {
    icon: ClockIcon,
    title: '40%',
    subtitle: 'Faster Treatment Planning',
    description: 'Digital tools and AI assistance streamline treatment plan creation',
    color: 'teal'
  },
  {
    icon: UserGroupIcon,
    title: '90%',
    subtitle: 'Patient Satisfaction',
    description: 'Visual treatment plans and better communication improve patient experience',
    color: 'blue'
  },
  {
    icon: CurrencyDollarIcon,
    title: '25%',
    subtitle: 'Reduction in Admin Time',
    description: 'Automated processes and voice charting reduce administrative burden',
    color: 'teal'
  }
]

const testimonials = [
  {
    quote: "MagnusOS transformed our practice. The AI diagnostic aids help us catch early cavities that we might have missed, and patients love seeing visual treatment plans. Our efficiency has improved dramatically.",
    author: "Dr. Michael Chen",
    role: "Practice Owner",
    clinic: "Bright Dental Practice",
    image: "/api/placeholder/64/64"
  },
  {
    quote: "The voice charting feature is a game-changer. I can maintain sterility while documenting procedures, and the AI understands dental terminology perfectly. It's like having a digital assistant.",
    author: "Dr. Sarah Johnson",
    role: "General Dentist",
    clinic: "Smile Care Dental",
    image: "/api/placeholder/64/64"
  },
  {
    quote: "Our patients are more engaged than ever. The visual treatment plans help them understand their options, and the patient portal makes communication seamless. Practice growth has been remarkable.",
    author: "Dr. Robert Martinez",
    role: "Orthodontist",
    clinic: "Perfect Smile Orthodontics",
    image: "/api/placeholder/64/64"
  }
]

export default function DentalResults() {
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
            Proven <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Results</span> & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how dental practices are transforming their operations and patient experience with MagnusOS. 
            Real results from real practices that have embraced the future of dental technology.
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
                metric.color === 'blue' ? 'from-blue-500 to-teal-500' : 'from-teal-500 to-blue-500'
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
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.clinic}</div>
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
          className="bg-gradient-to-r from-blue-500 to-teal-600 rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Transform Your Dental Practice Today
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Join hundreds of dental practices that have already transformed their operations with MagnusOS. 
              Experience the power of AI-driven dental technology and see measurable results in your practice.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">300+</div>
                <div className="text-sm opacity-90">Dental Practices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25K+</div>
                <div className="text-sm opacity-90">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-sm opacity-90">Uptime Guarantee</div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Transformation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
