import type { Metadata } from 'next'
import LaboratoryHero from '@/components/solutions/LaboratoryHero'
import LaboratoryFeatures from '@/components/solutions/LaboratoryFeatures'
import LaboratoryAIWorkflow from '@/components/solutions/LaboratoryAIWorkflow'
import LaboratoryIntegration from '@/components/solutions/LaboratoryIntegration'
import LaboratoryResults from '@/components/solutions/LaboratoryResults'
import LaboratoryDemo from '@/components/solutions/LaboratoryDemo'

export const metadata: Metadata = {
  title: 'Laboratory Management System | MagnusOS.ai - AI-Powered Lab Workflow',
  description: 'Streamline laboratory operations with MagnusOS AI-powered lab management system. Automated workflows, intelligent result analysis, quality control, and seamless integration with hospital systems.',
  keywords: [
    'laboratory management system',
    'lab workflow automation',
    'AI-powered lab software',
    'laboratory information system',
    'LIS software',
    'lab result management',
    'quality control automation',
    'laboratory integration',
    'MagnusOS laboratory',
    'healthcare lab software'
  ],
  openGraph: {
    title: 'Laboratory Management System | MagnusOS.ai',
    description: 'AI-powered laboratory management system for streamlined workflows and intelligent result analysis.',
    url: 'https://magnusos.ai/solutions/laboratory',
  },
}

export default function LaboratoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <LaboratoryHero />
      <LaboratoryFeatures />
      <LaboratoryAIWorkflow />
      <LaboratoryIntegration />
      <LaboratoryResults />
      <LaboratoryDemo />
    </main>
  )
}

