import type { Metadata } from 'next'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import ContactMap from '@/components/ContactMap'
import ContactSupport from '@/components/ContactSupport'

export const metadata: Metadata = {
  title: 'Contact MagnusOS.ai - Get in Touch with Healthcare Technology Experts',
  description: 'Contact MagnusOS.ai for healthcare technology solutions, AI-powered hospital management systems, and digital transformation consulting. Get expert support and personalized demos.',
  keywords: 'contact MagnusOS, healthcare technology support, hospital management consultation, AI healthcare experts, digital transformation contact, medical software support',
  openGraph: {
    title: 'Contact MagnusOS.ai - Get in Touch with Healthcare Technology Experts',
    description: 'Connect with our healthcare technology experts for personalized solutions and support.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
      <ContactSupport />
    </main>
  )
}
