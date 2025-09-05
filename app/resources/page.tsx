import type { Metadata } from 'next'
import ResourcesHero from '@/components/ResourcesHero'
import ResourcesContent from '@/components/ResourcesContent'
import ResourcesDownloads from '@/components/ResourcesDownloads'
import ResourcesWebinars from '@/components/ResourcesWebinars'
import ResourcesBlog from '@/components/ResourcesBlog'

export const metadata: Metadata = {
  title: 'Resources - MagnusOS.ai Healthcare Technology Resources',
  description: 'Access comprehensive healthcare technology resources including whitepapers, case studies, webinars, and guides on AI-powered hospital management, digital transformation, and healthcare innovation.',
  keywords: 'healthcare resources, hospital management guides, AI healthcare whitepapers, digital transformation resources, healthcare case studies, medical technology webinars',
  openGraph: {
    title: 'Resources - MagnusOS.ai Healthcare Technology Resources',
    description: 'Explore our comprehensive library of healthcare technology resources, guides, and insights.',
    type: 'website',
  },
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <ResourcesHero />
      <ResourcesContent />
      <ResourcesDownloads />
      <ResourcesWebinars />
      <ResourcesBlog />
    </main>
  )
}

