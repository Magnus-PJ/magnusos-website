import { Metadata } from 'next'
import FertilityHero from '@/components/solutions/FertilityHero'
import FertilityFeatures from '@/components/solutions/FertilityFeatures'
import FertilityAIWorkflow from '@/components/solutions/FertilityAIWorkflow'
import FertilityIntegration from '@/components/solutions/FertilityIntegration'
import FertilityResults from '@/components/solutions/FertilityResults'
import FertilityDemo from '@/components/solutions/FertilityDemo'

export const metadata: Metadata = {
  title: 'Fertility Clinic Management - MagnusOS AI-Powered IVF Platform',
  description: 'Discover MagnusOS\'s intelligent fertility clinic platform: AI-powered embryo grading, IVF cycle management, patient tracking, and comprehensive reproductive medicine workflows. Streamline fertility operations with smart scheduling, automated reporting, and advanced analytics.',
  keywords: [
    'Fertility Clinic Software',
    'IVF Management System',
    'AI Embryo Grading',
    'Fertility EMR',
    'IVF Cycle Tracking',
    'Reproductive Medicine',
    'Fertility Patient Management',
    'IVF Workflow Automation',
    'Embryo Analysis AI',
    'Fertility Analytics'
  ]
}

export default function FertilityPage() {
  return (
    <main className="min-h-screen bg-white">
      <FertilityHero />
      <FertilityFeatures />
      <FertilityAIWorkflow />
      <FertilityIntegration />
      <FertilityResults />
      <FertilityDemo />
    </main>
  )
}
