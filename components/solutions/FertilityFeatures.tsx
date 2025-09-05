'use client'

import { motion } from 'framer-motion'
import {
  CalendarIcon,
  DocumentTextIcon,
  CogIcon,
  ChartBarIcon,
  UserIcon,
  ShieldCheckIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: CalendarIcon,
    title: 'Smart IVF Cycle Management',
    description: 'Intelligent scheduling and tracking of IVF cycles with AI-powered optimization for success rates.',
    benefits: [
      'Automated cycle scheduling',
      'Hormone level monitoring',
      'Medication tracking',
      'Success rate optimization'
    ],
    color: 'pink'
  },
  {
    icon: HeartIcon,
    title: 'AI Embryo Grading & Analysis',
    description: 'Advanced AI algorithms for precise embryo assessment and selection to maximize pregnancy success.',
    benefits: [
      'Real-time embryo analysis',
      'Predictive success scoring',
      'Quality assessment automation',
      'Selection recommendations'
    ],
    color: 'purple'
  },
  {
    icon: UserIcon,
    title: 'Comprehensive Patient Management',
    description: 'End-to-end patient journey tracking from initial consultation to pregnancy outcomes.',
    benefits: [
      'Patient portal access',
      'Treatment history tracking',
      'Communication tools',
      'Outcome analytics'
    ],
    color: 'blue'
  },
  {
    icon: BeakerIcon,
    title: 'Laboratory Workflow Automation',
    description: 'Streamlined lab processes with automated sample tracking and quality control.',
    benefits: [
      'Sample barcode tracking',
      'Quality control automation',
      'Protocol management',
      'Equipment integration'
    ],
    color: 'green'
  },
  {
    icon: ChartBarIcon,
    title: 'Advanced Analytics & Reporting',
    description: 'Comprehensive reporting and analytics for clinic performance and patient outcomes.',
    benefits: [
      'Success rate analytics',
      'Clinic performance metrics',
      'Patient outcome tracking',
      'Research data insights'
    ],
    color: 'indigo'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Regulatory Compliance',
    description: 'Built-in compliance with fertility industry standards and healthcare regulations.',
    benefits: [
      'ASRM guidelines compliance',
      'FDA requirements',
      'HIPAA security',
      'Audit trail management'
    ],
    color: 'red'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function FertilityFeatures() {
  return (
    <section className="section-padding bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading-2 mb-6">Comprehensive Fertility Management Features</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-600">
            MagnusOS Fertility provides everything you need to run a world-class fertility clinic. 
            From AI-powered embryo analysis to comprehensive patient care, we've got you covered.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-hover group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${feature.color}-100 text-${feature.color}-600 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-3 mb-3">{feature.title}</h3>
                  <p className="body-medium mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${feature.color}-500`}></div>
                        <span className="body-small text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Workflow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 lg:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 mb-4">Streamlined IVF Workflow</h3>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Our platform orchestrates the entire fertility treatment journey, from initial consultation to pregnancy confirmation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '1', title: 'Consultation', icon: UserIcon, color: 'pink' },
              { step: '2', title: 'Assessment', icon: MagnifyingGlassIcon, color: 'purple' },
              { step: '3', title: 'Treatment', icon: BeakerIcon, color: 'blue' },
              { step: '4', title: 'Monitoring', icon: ChartBarIcon, color: 'green' },
              { step: '5', title: 'Outcome', icon: HeartIcon, color: 'red' }
            ].map((workflowStep, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${workflowStep.color}-100 text-${workflowStep.color}-600 flex items-center justify-center text-2xl font-bold`}>
                  {workflowStep.step}
                </div>
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-${workflowStep.color}-100 text-${workflowStep.color}-600 flex items-center justify-center`}>
                  <workflowStep.icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900">{workflowStep.title}</h4>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Benefits Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <ClockIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="heading-3 mb-3">Faster Treatment Cycles</h3>
            <p className="body-medium text-gray-600">
              Reduce cycle time by 25% with AI-optimized scheduling and automated workflows
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <ChartBarIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="heading-3 mb-3">Higher Success Rates</h3>
            <p className="body-medium text-gray-600">
              Improve pregnancy rates by 15-20% with AI-powered embryo selection and monitoring
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <ShieldCheckIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="heading-3 mb-3">Regulatory Compliance</h3>
            <p className="body-medium text-gray-600">
              Built-in compliance with ASRM, FDA, and international fertility standards
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

