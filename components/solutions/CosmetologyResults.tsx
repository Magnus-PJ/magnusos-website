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
    title: '30%',
    subtitle: 'Increase in Consultation Conversions',
    description: 'AI visualization tools help clients see potential results, leading to higher conversion rates',
    color: 'pink'
  },
  {
    icon: UserGroupIcon,
    title: '95%',
    subtitle: 'Client Satisfaction Rate',
    description: 'Personalized care and transparent communication drive exceptional client satisfaction',
    color: 'purple'
  },
  {
    icon: ClockIcon,
    title: '40%',
    subtitle: 'Reduction in No-Shows',
    description: 'Automated reminders and flexible rescheduling options minimize appointment cancellations',
    color: 'pink'
  },
  {
    icon: CurrencyDollarIcon,
    title: '25%',
    subtitle: 'Increase in Treatment Packages',
    description: 'AI recommendations and package management tools boost treatment package sales',
    color: 'purple'
  }
]

const testimonials = [
  {
    quote: "MagnusOS transformed our practice. The AI skin analysis gives us scientific credibility, and clients love seeing realistic previews of their results. Our consultation conversions increased by 30%.",
    author: "Dr. Sarah Chen",
    role: "Medical Director",
    clinic: "BeautyPlus Aesthetic Clinic",
    image: "/api/placeholder/64/64"
  },
  {
    quote: "The before/after comparison tools are incredible. We can show clients exactly how their skin has improved with objective measurements. It's a game-changer for building trust.",
    author: "Maria Rodriguez",
    role: "Practice Manager",
    clinic: "Elite Dermatology Center",
    image: "/api/placeholder/64/64"
  },
  {
    quote: "Our staff loves the streamlined workflow. Everything is in one place - from client profiles to treatment planning. It's made our practice so much more efficient.",
    author: "Jennifer Kim",
    role: "Aesthetic Nurse",
    clinic: "Radiant Skin Solutions",
    image: "/api/placeholder/64/64"
  }
]

export default function CosmetologyResults() {
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
            Proven <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Results</span> & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how aesthetic practices are transforming their operations and client experience with MagnusOS. 
            Real results from real practices that have embraced the future of beauty technology.
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
                metric.color === 'pink' ? 'from-pink-500 to-purple-500' : 'from-purple-500 to-pink-500'
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
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-pink-600">{testimonial.clinic}</div>
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
          className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Transform Your Aesthetic Practice Today
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Join hundreds of aesthetic practices that have already transformed their operations with MagnusOS. 
              Experience the power of AI-driven beauty technology and see measurable results in your practice.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Aesthetic Practices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-sm opacity-90">Uptime Guarantee</div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-pink-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Transformation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
