import { Metadata } from 'next'
import { 
  ShieldCheckIcon, 
  CpuChipIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  DocumentTextIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'
import AdvancedContentStrategy from '@/components/AdvancedContentStrategy'
import LinkBuildingStrategy from '@/components/LinkBuildingStrategy'
import LocalSEOOptimization from '@/components/LocalSEOOptimization'

export const metadata: Metadata = {
  title: 'Healthcare Solutions - AI-Powered Medical Software Platform | MagnusOS.ai',
  description: 'Comprehensive healthcare solutions including HIS, RIS, LIS, Pharmacy CRM, and specialty care management. HIPAA compliant, GDPR ready, AI-powered medical software platform for hospitals, clinics, and laboratories.',
  keywords: [
    'healthcare solutions',
    'medical software platform',
    'hospital information system',
    'radiology information system',
    'laboratory information system',
    'pharmacy management software',
    'healthcare AI platform',
    'HIPAA compliant healthcare software',
    'medical practice management',
    'healthcare workflow automation',
    'clinical decision support',
    'healthcare data management',
    'medical imaging software',
    'patient management system',
    'healthcare interoperability',
    'digital health platform',
    'healthcare technology solutions',
    'medical device integration',
    'healthcare analytics platform',
    'telemedicine software'
  ],
  openGraph: {
    title: 'Healthcare Solutions - AI-Powered Medical Software Platform',
    description: 'Comprehensive healthcare solutions including HIS, RIS, LIS, Pharmacy CRM, and specialty care management. HIPAA compliant, GDPR ready.',
    url: 'https://magnusos.ai/healthcare-solutions',
    siteName: 'MagnusOS.ai',
    images: [
      {
        url: '/healthcare-solutions/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MagnusOS.ai Healthcare Solutions Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://magnusos.ai/healthcare-solutions',
  },
}

const healthcareSolutions = [
  {
    title: "Hospital Information System (HIS)",
    description: "Comprehensive hospital management solution integrating patient care, administrative functions, and clinical workflows.",
    icon: UserGroupIcon,
    features: [
      "Electronic Health Records (EHR) management",
      "Patient registration and admission systems",
      "Clinical workflow automation",
      "Billing and revenue cycle management",
      "Inventory and supply chain management",
      "Quality assurance and compliance monitoring"
    ],
    benefits: [
      "30% reduction in administrative overhead",
      "Improved patient safety and care quality",
      "Streamlined clinical workflows",
      "Enhanced revenue cycle management"
    ],
    compliance: ["HIPAA", "GDPR", "NDHM/ABHA"]
  },
  {
    title: "Radiology Information System (RIS)",
    description: "Advanced radiology workflow management with AI-powered diagnostic assistance and PACS integration.",
    icon: CpuChipIcon,
    features: [
      "AI-powered pre-reads and diagnostic assistance",
      "PACS integration and image management",
      "Radiology workflow automation",
      "Report generation and distribution",
      "Quality control and peer review",
      "Radiology analytics and reporting"
    ],
    benefits: [
      "25% increase in radiologist productivity",
      "Faster diagnostic turnaround times",
      "Improved diagnostic accuracy",
      "Enhanced workflow efficiency"
    ],
    compliance: ["HIPAA", "FDA", "DICOM"]
  },
  {
    title: "Laboratory Information System (LIS)",
    description: "Comprehensive laboratory management solution with automated sample tracking and result management.",
    icon: ChartBarIcon,
    features: [
      "Automated sample tracking and management",
      "Laboratory workflow optimization",
      "Quality control and assurance",
      "Result management and reporting",
      "Instrument integration and automation",
      "Laboratory analytics and insights"
    ],
    benefits: [
      "20% improvement in laboratory efficiency",
      "Reduced turnaround times",
      "Enhanced quality control",
      "Improved compliance monitoring"
    ],
    compliance: ["HIPAA", "CLIA", "CAP"]
  },
  {
    title: "Pharmacy Management & CRM",
    description: "Integrated pharmacy management system with customer relationship management and inventory optimization.",
    icon: DocumentTextIcon,
    features: [
      "Pharmacy inventory management",
      "Prescription processing and dispensing",
      "Customer relationship management",
      "Medication therapy management",
      "Pharmacy analytics and reporting",
      "Integration with healthcare systems"
    ],
    benefits: [
      "Improved medication safety",
      "Enhanced customer service",
      "Optimized inventory management",
      "Increased operational efficiency"
    ],
    compliance: ["HIPAA", "FDA", "DEA"]
  },
  {
    title: "Healthcare Compliance & Security",
    description: "Comprehensive compliance management system ensuring adherence to healthcare regulations and data security.",
    icon: ShieldCheckIcon,
    features: [
      "HIPAA compliance monitoring",
      "GDPR data protection",
      "Audit trail management",
      "Security incident response",
      "Compliance reporting and analytics",
      "Risk assessment and management"
    ],
    benefits: [
      "50% reduction in compliance costs",
      "Enhanced data security",
      "Automated compliance monitoring",
      "Reduced audit preparation time"
    ],
    compliance: ["HIPAA", "GDPR", "SOC 2", "ISO 27001"]
  },
  {
    title: "Healthcare Analytics & Insights",
    description: "Advanced analytics platform providing actionable insights for healthcare decision-making and performance optimization.",
    icon: LockClosedIcon,
    features: [
      "Real-time healthcare analytics",
      "Predictive analytics and modeling",
      "Performance dashboards and reporting",
      "Clinical outcome analysis",
      "Financial performance tracking",
      "Population health management"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved clinical outcomes",
      "Enhanced operational efficiency",
      "Better resource utilization"
    ],
    compliance: ["HIPAA", "GDPR", "Data Governance"]
  }
]

export default function HealthcareSolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-healthcare-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Healthcare Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your healthcare organization with MagnusOS.ai's AI-powered platform. From Hospital Information Systems to specialized care management, we provide integrated solutions that enhance patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-200">
                Explore Solutions
              </button>
              <button className="border border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive, integrated healthcare solutions designed to meet the unique needs of modern healthcare organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mr-4">
                    <solution.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {solution.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-success-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Compliance:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.compliance.map((comp, compIndex) => (
                      <span key={compIndex} className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Terminology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Healthcare Technology Glossary
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding key healthcare technology terms and concepts used in modern healthcare organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">HIS - Hospital Information System</h3>
              <p className="text-gray-600 leading-relaxed">
                A comprehensive software platform that manages all aspects of hospital operations, including patient records, billing, scheduling, and clinical workflows.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">RIS - Radiology Information System</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized software for managing radiology workflows, including patient scheduling, image management, report generation, and workflow automation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">LIS - Laboratory Information System</h3>
              <p className="text-gray-600 leading-relaxed">
                Software system that manages laboratory operations including sample tracking, test ordering, result management, and quality control.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">PACS - Picture Archiving and Communication System</h3>
              <p className="text-gray-600 leading-relaxed">
                Medical imaging technology that provides storage and access to images from multiple modalities, integrated with RIS for complete radiology workflow.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">EHR - Electronic Health Records</h3>
              <p className="text-gray-600 leading-relaxed">
                Digital version of a patient's paper chart, containing comprehensive medical history, diagnoses, medications, treatment plans, and test results.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">HL7 FHIR - Health Level 7 Fast Healthcare Interoperability Resources</h3>
              <p className="text-gray-600 leading-relaxed">
                Standard for exchanging healthcare information electronically, enabling seamless data sharing between different healthcare systems and applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced SEO Components */}
      <AdvancedContentStrategy />
      <LinkBuildingStrategy />
      <LocalSEOOptimization />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-healthcare-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Healthcare Organization?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join leading healthcare organizations worldwide that have already embraced the future with MagnusOS.ai's comprehensive healthcare solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
              Schedule Demo
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
