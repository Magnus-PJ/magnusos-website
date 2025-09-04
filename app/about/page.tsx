import type { Metadata } from 'next'
import AboutHero from '@/components/AboutHero'
import AboutMission from '@/components/AboutMission'
import AboutTeam from '@/components/AboutTeam'
import AboutValues from '@/components/AboutValues'
import AboutTimeline from '@/components/AboutTimeline'

export const metadata: Metadata = {
  title: 'About MagnusOS.ai - AI-First Healthcare Technology Company',
  description: 'Learn about MagnusOS.ai, the leading AI-first healthcare technology company transforming digital hospitals with unified platforms, AI-powered solutions, and comprehensive healthcare management systems.',
  keywords: 'about MagnusOS, healthcare technology company, AI healthcare, digital hospital platform, healthcare innovation, medical software company',
  openGraph: {
    title: 'About MagnusOS.ai - AI-First Healthcare Technology Company',
    description: 'Discover our mission to transform healthcare through AI-powered technology and unified digital hospital platforms.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTimeline />
      <AboutTeam />
    </main>
  )
}
