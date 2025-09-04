import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MagnusOS.ai - AI-First Healthcare Operating System | Hybrid Cloud Hospital Software',
  description: 'MagnusOS.ai is an AI-driven healthcare platform unifying HIS, CRM, Radiology, Labs, Fertility, Dental & more. Hybrid cloud + on-premise deployment for hospitals, clinics, and labs - empowering digital hospitals with AI, Big Data, and seamless patient care.',
  keywords: [
    'AI in healthcare',
    'digital hospital platform',
    'hybrid health IT',
    'AI in radiology',
    'Fertility EMR',
    'dental AI',
    'hospital management system',
    'healthcare CRM',
    'PACS system',
    'IVF software',
    'healthcare ERP',
    'nuclear medicine software',
    'cosmetology clinic software',
    'HIPAA compliant healthcare software',
    'GDPR healthcare platform',
    'NDHM ABHA healthcare',
    'unified healthcare platform',
    'AI-powered hospital software',
    'healthcare interoperability',
    'patient engagement platform'
  ],
  authors: [{ name: 'MagnusOS.ai Team' }],
  creator: 'MagnusOS.ai',
  publisher: 'MagnusOS.ai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://magnusos.ai'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'es': '/es',
      'hi': '/hi',
    },
  },
  openGraph: {
    title: 'MagnusOS.ai - AI-First Healthcare Operating System',
    description: 'Transform healthcare with AI-powered, unified hospital management platform. Radiology, fertility, labs, and more in one intelligent ecosystem.',
    url: 'https://magnusos.ai',
    siteName: 'MagnusOS.ai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MagnusOS.ai Healthcare Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MagnusOS.ai - AI-First Healthcare Operating System',
    description: 'Transform healthcare with AI-powered, unified hospital management platform.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
