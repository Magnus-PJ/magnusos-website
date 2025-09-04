import HeroSection from '@/components/HeroSection'
import MagnusOSHighlights from '@/components/MagnusOSHighlights'
import TestimonialsSection from '@/components/TestimonialsSection'
import PersonaValueProps from '@/components/PersonaValueProps'
import PlatformOverview from '@/components/PlatformOverview'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PersonaValueProps />
      <PlatformOverview />
      <MagnusOSHighlights />
      <TestimonialsSection />
      <CallToAction />
    </main>
  )
}
