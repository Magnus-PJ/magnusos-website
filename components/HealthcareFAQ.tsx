'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const healthcareFAQs: FAQItem[] = [
  {
    question: "What is MagnusOS.ai?",
    answer: "MagnusOS.ai is an AI-powered healthcare platform that unifies Hospital Information Systems (HIS), Radiology Information Systems (RIS), Laboratory Information Systems (LIS), Pharmacy CRM, and specialty care management. It provides hybrid cloud + on-premise deployment for hospitals, clinics, and labs with HIPAA compliance and GDPR readiness.",
    category: "General"
  },
  {
    question: "Is MagnusOS.ai HIPAA compliant?",
    answer: "Yes, MagnusOS.ai is fully HIPAA compliant with end-to-end encryption, secure data transmission, comprehensive audit trails, and strict access controls. Our platform was built with healthcare regulations as a foundational design principle, ensuring patient data protection and regulatory compliance.",
    category: "Compliance"
  },
  {
    question: "What healthcare specialties does MagnusOS.ai support?",
    answer: "MagnusOS.ai supports multiple healthcare specialties including Hospital Management (HIS), Radiology (RIS), Laboratory Management (LIS), Pharmacy & CRM, Dental Practice Management, Fertility Clinic Software, Cosmetology Practice Management, Nuclear Medicine, and ERP systems for comprehensive healthcare operations.",
    category: "Features"
  },
  {
    question: "Does MagnusOS.ai offer AI-powered features?",
    answer: "Yes, MagnusOS.ai includes comprehensive AI-powered features such as diagnostic assistance, workflow automation, predictive analytics, intelligent reporting, AI pre-reads for radiology, smart triage systems, and personalized care insights to enhance healthcare operations and patient outcomes.",
    category: "AI Features"
  },
  {
    question: "Can I get a free demo of MagnusOS.ai?",
    answer: "Yes, we offer free demos of MagnusOS.ai tailored to your specific healthcare needs. Contact our team to schedule a personalized demonstration of our healthcare platform, including HIS, RIS, LIS, and specialty modules.",
    category: "Demo"
  },
  {
    question: "What is a Hospital Information System (HIS)?",
    answer: "A Hospital Information System (HIS) is a comprehensive software platform that manages all aspects of hospital operations, including patient records, billing, scheduling, clinical workflows, inventory management, and administrative functions. MagnusOS.ai provides an AI-powered HIS that integrates seamlessly with radiology, laboratory, and pharmacy systems.",
    category: "HIS"
  },
  {
    question: "What is a Radiology Information System (RIS)?",
    answer: "A Radiology Information System (RIS) is specialized software for managing radiology workflows, including patient scheduling, image management, report generation, and workflow automation. MagnusOS.ai's RIS includes AI pre-reads, PACS integration, and advanced diagnostic workflow optimization.",
    category: "RIS"
  },
  {
    question: "What is a Laboratory Information System (LIS)?",
    answer: "A Laboratory Information System (LIS) manages laboratory operations including sample tracking, test ordering, result management, quality control, and lab workflow automation. MagnusOS.ai's LIS provides AI-powered analytics, automated reporting, and seamless integration with hospital systems.",
    category: "LIS"
  },
  {
    question: "How does MagnusOS.ai ensure data security?",
    answer: "MagnusOS.ai ensures data security through end-to-end encryption, secure data transmission, comprehensive audit trails, role-based access controls, regular security updates, and compliance with HIPAA, GDPR, and other healthcare regulations. Our platform uses advanced security protocols and monitoring systems.",
    category: "Security"
  },
  {
    question: "Does MagnusOS.ai support hybrid cloud deployment?",
    answer: "Yes, MagnusOS.ai supports hybrid cloud deployment, allowing healthcare organizations to choose between cloud, on-premise, or hybrid configurations. This ensures sensitive data can stay on-site for compliance while leveraging cloud services for AI processing and backup.",
    category: "Deployment"
  },
  {
    question: "What AI features are available in MagnusOS.ai?",
    answer: "MagnusOS.ai includes AI features such as diagnostic assistance, workflow automation, predictive analytics, intelligent reporting, AI pre-reads for radiology, smart triage systems, personalized care insights, and automated quality control for laboratories.",
    category: "AI Features"
  },
  {
    question: "Is MagnusOS.ai suitable for small clinics?",
    answer: "Yes, MagnusOS.ai is designed to scale from small clinics to large hospital systems. Our modular approach allows clinics to start with specific modules (like HIS or LIS) and expand as needed, with flexible pricing and deployment options.",
    category: "Scalability"
  },
  {
    question: "How does MagnusOS.ai integrate with existing systems?",
    answer: "MagnusOS.ai provides comprehensive integration capabilities through APIs, HL7 FHIR standards, and custom connectors. Our platform can integrate with existing EHR systems, PACS, laboratory equipment, and third-party healthcare applications.",
    category: "Integration"
  },
  {
    question: "What support is available for MagnusOS.ai?",
    answer: "MagnusOS.ai provides comprehensive support including 24/7 technical support, training programs, documentation, API support, and dedicated customer success managers. We also offer implementation assistance and ongoing optimization services.",
    category: "Support"
  },
  {
    question: "How much does MagnusOS.ai cost?",
    answer: "MagnusOS.ai offers flexible pricing based on your organization's size and needs. We provide transparent pricing with no hidden fees, and offer free demos to help you understand the value. Contact our sales team for a personalized quote.",
    category: "Pricing"
  }
]

export default function HealthcareFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', ...Array.from(new Set(healthcareFAQs.map(faq => faq.category)))]

  const filteredFAQs = selectedCategory === 'All' 
    ? healthcareFAQs 
    : healthcareFAQs.filter(faq => faq.category === selectedCategory)

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about MagnusOS.ai's healthcare platform
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUpIcon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
              Contact Support
            </button>
            <button className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
