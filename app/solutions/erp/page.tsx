import type { Metadata } from 'next'
import ERPHero from '@/components/solutions/ERPHero'
import ERPFeatures from '@/components/solutions/ERPFeatures'
import ERPAIWorkflow from '@/components/solutions/ERPAIWorkflow'
import ERPIntegration from '@/components/solutions/ERPIntegration'
import ERPResults from '@/components/solutions/ERPResults'
import ERPDemo from '@/components/solutions/ERPDemo'

export const metadata: Metadata = {
  title: 'ERP & Operations System | MagnusOS.ai - AI-Powered Healthcare ERP',
  description: 'Transform healthcare operations with MagnusOS AI-powered ERP system. Streamlined resource management, financial operations, supply chain, and operational excellence.',
  keywords: [
    'healthcare ERP system',
    'hospital operations management',
    'AI-powered ERP',
    'healthcare resource planning',
    'hospital supply chain',
    'healthcare financial management',
    'MagnusOS ERP',
    'healthcare operations software'
  ],
  openGraph: {
    title: 'ERP & Operations System | MagnusOS.ai',
    description: 'AI-powered ERP system for streamlined healthcare operations and resource management.',
    url: 'https://magnusos.ai/solutions/erp',
  },
}

export default function ERPPage() {
  return (
    <main className="min-h-screen bg-white">
      <ERPHero />
      <ERPFeatures />
      <ERPAIWorkflow />
      <ERPIntegration />
      <ERPResults />
      <ERPDemo />
    </main>
  )
}

