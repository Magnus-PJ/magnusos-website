import type { Metadata } from 'next'
import DentalHero from '@/components/solutions/DentalHero'
import DentalFeatures from '@/components/solutions/DentalFeatures'
import DentalAIWorkflow from '@/components/solutions/DentalAIWorkflow'
import DentalIntegration from '@/components/solutions/DentalIntegration'
import DentalResults from '@/components/solutions/DentalResults'
import DentalDemo from '@/components/solutions/DentalDemo'

export const metadata: Metadata = {
  title: 'Dental Clinic Software - AI Dental Imaging & Practice Management | MagnusOS',
  description: 'MagnusOS for Dental brings together appointment management, dental charting, billing, and AI diagnostics in one platform. Automatically detect cavities and pathologies on X-rays, visualize orthodontic outcomes, manage treatment plans and insurance claims efficiently. Elevate your dental practice with our digital and AI tools for better patient care and growth.',
  keywords: 'dental software, dental practice management, AI dental imaging, dental charting, orthodontic software, dental billing, dental EHR, dental x-ray analysis, dental treatment planning',
  openGraph: {
    title: 'Dental Clinic Software - AI Dental Imaging & Practice Management | MagnusOS',
    description: 'Transform your dental practice with AI-powered diagnostics, digital charting, and comprehensive practice management tools.',
    type: 'website',
  },
}

export default function DentalPage() {
  return (
    <main className="min-h-screen">
      <DentalHero />
      <DentalFeatures />
      <DentalAIWorkflow />
      <DentalIntegration />
      <DentalResults />
      <DentalDemo />
    </main>
  )
}
