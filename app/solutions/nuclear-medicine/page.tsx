import type { Metadata } from 'next'
import NuclearMedicineHero from '@/components/solutions/NuclearMedicineHero'
import NuclearMedicineFeatures from '@/components/solutions/NuclearMedicineFeatures'
import NuclearMedicineAIWorkflow from '@/components/solutions/NuclearMedicineAIWorkflow'
import NuclearMedicineIntegration from '@/components/solutions/NuclearMedicineIntegration'
import NuclearMedicineResults from '@/components/solutions/NuclearMedicineResults'
import NuclearMedicineDemo from '@/components/solutions/NuclearMedicineDemo'

export const metadata: Metadata = {
  title: 'Nuclear Medicine Software - AI-Powered PET/CT Workflow Management | MagnusOS',
  description: 'MagnusOS for Nuclear Medicine streamlines PET/CT workflows with AI-powered image analysis, dose optimization, and comprehensive patient management. Automate scheduling, track radiopharmaceuticals, and enhance diagnostic accuracy with intelligent workflow management.',
  keywords: 'nuclear medicine software, PET/CT workflow, radiopharmaceutical management, nuclear medicine AI, dose optimization, nuclear medicine scheduling, medical imaging workflow',
  openGraph: {
    title: 'Nuclear Medicine Software - AI-Powered PET/CT Workflow Management | MagnusOS',
    description: 'Transform your nuclear medicine department with AI-powered workflow optimization and comprehensive patient management.',
    type: 'website',
  },
}

export default function NuclearMedicinePage() {
  return (
    <main className="min-h-screen">
      <NuclearMedicineHero />
      <NuclearMedicineFeatures />
      <NuclearMedicineAIWorkflow />
      <NuclearMedicineIntegration />
      <NuclearMedicineResults />
      <NuclearMedicineDemo />
    </main>
  )
}
