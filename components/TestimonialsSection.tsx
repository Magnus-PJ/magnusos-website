'use client'

import { motion } from 'framer-motion'
import { StarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    quote: "MagnusOS helped us reduce patient wait times by 40% and streamline our entire hospital workflow. The AI-powered triage system is a game-changer for our ER.",
    author: "Dr. Sarah Johnson",
    title: "Chief Medical Officer",
    organization: "CityCare Hospital",
    rating: 5,
    image: "/testimonials/doctor-1.jpg",
    category: "Hospital Management"
  },
  {
    id: 2,
    quote: "Radiologists at our diagnostic center saw a 25% productivity boost with MagnusOS. The AI pre-reads help us catch critical findings faster than ever before.",
    author: "Dr. Michael Chen",
    title: "Director of Radiology",
    organization: "Advanced Diagnostics Center",
    rating: 5,
    image: "/testimonials/doctor-2.jpg",
    category: "Radiology"
  },
  {
    id: 3,
    quote: "Our IVF success rates improved significantly with MagnusOS's AI embryo grading. The integrated platform makes patient management seamless and efficient.",
    author: "Dr. Emily Rodriguez",
    title: "Fertility Specialist",
    organization: "Hope Fertility Clinic",
    rating: 5,
    image: "/testimonials/doctor-3.jpg",
    category: "Fertility"
  }
]

const stats = [
  { number: "500+", label: "Healthcare Organizations" },
  { number: "50+", label: "Countries Served" },
  { number: "99.9%", label: "Uptime Reliability" },
  { number: "1M+", label: "Patients Served" }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="heading-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trusted by Healthcare Leaders Worldwide
          </motion.h2>
          <motion.p 
            className="body-large max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See how MagnusOS is transforming healthcare delivery and improving patient outcomes across the globe
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-primary-200 group-hover:text-primary-300 transition-colors" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mb-6">
                <p className="body-medium text-gray-700 italic">"{testimonial.quote}"</p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-healthcare-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                  <div className="text-sm text-primary-600 font-medium">{testimonial.organization}</div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="mt-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                  {testimonial.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div 
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 mb-4">Proven Results Across Healthcare Sectors</h3>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Our platform has delivered measurable improvements in efficiency, patient outcomes, and operational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-success-600 mb-2">30%</div>
              <div className="text-sm text-gray-600">Reduction in Admin Overhead</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-healthcare-600 mb-2">25%</div>
              <div className="text-sm text-gray-600">Increase in Radiologist Productivity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">40%</div>
              <div className="text-sm text-gray-600">Faster Patient Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-600 mb-2">99.5%</div>
              <div className="text-sm text-gray-600">Patient Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="heading-3 mb-8">Compliance & Security Certifications</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">GDPR Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium">NDHM/ABHA</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">ISO 27001</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="heading-3 mb-4">Join the Healthcare Revolution</h3>
          <p className="body-large mb-8 max-w-2xl mx-auto">
            Be part of the future of healthcare technology. See how MagnusOS can transform your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Your Transformation
            </button>
            <button className="btn-outline">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

