import type { Metadata } from 'next'
import PharmacyHero from '@/components/solutions/PharmacyHero'
import PharmacyFeatures from '@/components/solutions/PharmacyFeatures'
import PharmacyAIWorkflow from '@/components/solutions/PharmacyAIWorkflow'
import PharmacyIntegration from '@/components/solutions/PharmacyIntegration'
import PharmacyResults from '@/components/solutions/PharmacyResults'
import PharmacyDemo from '@/components/solutions/PharmacyDemo'

export const metadata: Metadata = {
  title: 'Pharmacy & CRM System | MagnusOS.ai - AI-Powered Pharmacy Management',
  description: 'Transform pharmacy operations with MagnusOS AI-powered pharmacy management and CRM system. Automated workflows, intelligent inventory, patient engagement, and seamless integration.',
  keywords: [
    'pharmacy management system',
    'pharmacy CRM',
    'AI-powered pharmacy software',
    'pharmacy inventory management',
    'patient engagement platform',
    'pharmacy workflow automation',
    'MagnusOS pharmacy',
    'healthcare CRM system'
  ],
  openGraph: {
    title: 'Pharmacy & CRM System | MagnusOS.ai',
    description: 'AI-powered pharmacy management and CRM system for streamlined operations and patient engagement.',
    url: 'https://magnusos.ai/solutions/pharmacy-crm',
  },
}

export default function PharmacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PharmacyHero />
      <PharmacyFeatures />
      <PharmacyAIWorkflow />
      <PharmacyIntegration />
      <PharmacyResults />
      <PharmacyDemo />
    </main>
  )
}
