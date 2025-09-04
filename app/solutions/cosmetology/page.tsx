import type { Metadata } from 'next'
import CosmetologyHero from '@/components/solutions/CosmetologyHero'
import CosmetologyFeatures from '@/components/solutions/CosmetologyFeatures'
import CosmetologyAIWorkflow from '@/components/solutions/CosmetologyAIWorkflow'
import CosmetologyIntegration from '@/components/solutions/CosmetologyIntegration'
import CosmetologyResults from '@/components/solutions/CosmetologyResults'
import CosmetologyDemo from '@/components/solutions/CosmetologyDemo'

export const metadata: Metadata = {
  title: 'Cosmetology & Aesthetics Clinic Software - AI Skin Analysis & AR Treatment Planning | MagnusOS',
  description: 'MagnusOS empowers cosmetology and dermatology clinics with digital tools: client EMR with photos, before/after comparisons, AR outcome simulations, and AI skin analysis for personalized treatment plans. Manage appointments, loyalty programs, product sales, and deliver a premium tech-driven aesthetic experience.',
  keywords: 'cosmetology software, aesthetic clinic management, AI skin analysis, AR treatment planning, beauty clinic CRM, dermatology software, cosmetic treatment planning, beauty practice management',
  openGraph: {
    title: 'Cosmetology & Aesthetics Clinic Software - AI Skin Analysis & AR Treatment Planning | MagnusOS',
    description: 'Transform your aesthetic practice with AI-powered skin analysis, AR treatment simulations, and comprehensive clinic management tools.',
    type: 'website',
  },
}

export default function CosmetologyPage() {
  return (
    <main className="min-h-screen">
      <CosmetologyHero />
      <CosmetologyFeatures />
      <CosmetologyAIWorkflow />
      <CosmetologyIntegration />
      <CosmetologyResults />
      <CosmetologyDemo />
    </main>
  )
}
