import { Metadata } from 'next'
import HISHero from '@/components/solutions/HISHero'
import HISFeatures from '@/components/solutions/HISFeatures'
import HISAIEnhancements from '@/components/solutions/HISAIEnhancements'
import HISInteroperability from '@/components/solutions/HISInteroperability'
import HISResults from '@/components/solutions/HISResults'
import HISDemo from '@/components/solutions/HISDemo'

export const metadata: Metadata = {
  title: 'Hospital Information System (HIS) - MagnusOS Digital Hospital Platform',
  description: 'Discover MagnusOS\'s unified Hospital Information System: a cloud-enabled HIS that connects OPD, IPD, EHR, billing, lab, radiology in one AI-driven platform. Streamline hospital workflows, improve patient care, and ensure interoperability (HL7/FHIR, DICOM) with robust data security (HIPAA, GDPR).',
  keywords: [
    'Hospital Information System',
    'HIS software',
    'Digital hospital platform',
    'Hospital management system',
    'Electronic Health Records',
    'Hospital ERP',
    'Patient management system',
    'Hospital workflow automation',
    'AI-powered hospital software',
    'Healthcare interoperability'
  ]
}

export default function HISPage() {
  return (
    <main className="min-h-screen bg-white">
      <HISHero />
      <HISFeatures />
      <HISAIEnhancements />
      <HISInteroperability />
      <HISResults />
      <HISDemo />
    </main>
  )
}

