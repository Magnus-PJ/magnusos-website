import type { Metadata } from 'next'
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import AdvancedAnalytics from '@/components/AdvancedAnalytics'
import ConversionOptimization from '@/components/ConversionOptimization'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
  preload: true,
  fallback: ['Consolas', 'Monaco', 'monospace'],
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'MagnusOS.ai - AI-Powered Healthcare Platform | HIPAA Compliant HIS, RIS, Laboratory Software',
  description: 'Transform healthcare with MagnusOS.ai\'s AI-powered platform. Unified HIS, RIS, laboratory, pharmacy, and specialty management. HIPAA compliant, GDPR ready. Free demo available for hospitals, clinics, and labs.',
  keywords: [
    'healthcare AI software',
    'hospital information system',
    'radiology information system',
    'HIPAA compliant software',
    'medical software platform',
    'healthcare management system',
    'AI powered healthcare',
    'digital health platform',
    'medical practice management',
    'healthcare CRM software',
    'laboratory information system',
    'pharmacy management software',
    'dental practice management',
    'fertility clinic software',
    'cosmetology practice management',
    'nuclear medicine software',
    'healthcare ERP system',
    'medical imaging software',
    'patient management system',
    'healthcare analytics platform',
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
    title: 'MagnusOS.ai - AI-Powered Healthcare Platform | HIPAA Compliant Medical Software',
    description: 'Transform healthcare with MagnusOS.ai\'s AI-powered platform. Unified HIS, RIS, laboratory, pharmacy, and specialty management. HIPAA compliant, GDPR ready.',
    url: 'https://magnusos.ai',
    siteName: 'MagnusOS.ai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MagnusOS.ai - AI-Powered Healthcare Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MagnusOS.ai - AI-Powered Healthcare Platform',
    description: 'Transform healthcare with AI-powered HIS, RIS, laboratory, and pharmacy management. HIPAA compliant, GDPR ready.',
    images: ['/og-image.jpg'],
    creator: '@MagnusOS_AI',
    site: '@MagnusOS_AI',
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
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Core Web Vitals Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Critical Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        
        {/* Performance Optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
        
        {/* Structured Data */}
        <StructuredData type="organization" />
        <StructuredData type="software" />
        <StructuredData type="service" />
        <StructuredData type="faq" />
      </head>
                    <body className={`${inter.className} antialiased bg-white text-gray-900 font-feature-settings-["rlig","calt"]`}>
                        <Navigation />
        {children}
        <Footer />
        <AdvancedAnalytics />
        <ConversionOptimization />
              </body>
    </html>
  )
}
