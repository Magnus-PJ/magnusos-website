import { Metadata } from 'next'
import RISHero from '@/components/solutions/RISHero'
import RISFeatures from '@/components/solutions/RISFeatures'
import RISAIWorkflow from '@/components/solutions/RISAIWorkflow'
import RISIntegration from '@/components/solutions/RISIntegration'
import RISResults from '@/components/solutions/RISResults'
import RISDemo from '@/components/solutions/RISDemo'

export const metadata: Metadata = {
  title: 'Radiology Information System (RIS) - MagnusOS AI-Powered Imaging Platform',
  description: 'Discover MagnusOS\'s intelligent Radiology Information System: AI-powered workflow automation, PACS integration, diagnostic assistance, and comprehensive imaging management. Streamline radiology operations with smart scheduling, automated reporting, and advanced analytics.',
  keywords: [
    'Radiology Information System',
    'RIS software',
    'PACS integration',
    'AI-powered radiology',
    'Medical imaging workflow',
    'Radiology automation',
    'Diagnostic imaging',
    'Radiology reporting',
    'Imaging analytics',
    'Healthcare AI'
  ]
}

export default function RISPage() {
  return (
    <main className="min-h-screen bg-white">
      <RISHero />
      <RISFeatures />
      <RISAIWorkflow />
      <RISIntegration />
      <RISResults />
      <RISDemo />
    </main>
  )
}
