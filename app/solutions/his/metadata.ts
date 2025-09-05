import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hospital Information System (HIS) - AI-Powered Healthcare Management | MagnusOS.ai',
  description: 'Transform hospital operations with MagnusOS.ai\'s AI-powered HIS. Unified patient management, billing, scheduling, and clinical workflows. HIPAA compliant, GDPR ready. Free demo available.',
  keywords: [
    'hospital information system',
    'HIS software',
    'hospital management system',
    'healthcare management',
    'patient management system',
    'hospital billing software',
    'clinical workflow management',
    'hospital scheduling system',
    'healthcare operations',
    'hospital administration software',
    'HIPAA compliant HIS',
    'AI powered hospital software',
    'unified healthcare platform',
    'hospital workflow automation',
    'healthcare data management'
  ],
  openGraph: {
    title: 'Hospital Information System (HIS) - AI-Powered Healthcare Management',
    description: 'Transform hospital operations with MagnusOS.ai\'s AI-powered HIS. Unified patient management, billing, scheduling, and clinical workflows.',
    url: 'https://magnusos.ai/solutions/his',
    siteName: 'MagnusOS.ai',
    images: [
      {
        url: '/solutions/his/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MagnusOS.ai Hospital Information System (HIS)',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Information System (HIS) - AI-Powered Healthcare Management',
    description: 'Transform hospital operations with AI-powered HIS. Unified patient management, billing, scheduling, and clinical workflows.',
    images: ['/solutions/his/og-image.jpg'],
    creator: '@MagnusOS_AI',
    site: '@MagnusOS_AI',
  },
  alternates: {
    canonical: 'https://magnusos.ai/solutions/his',
  },
}
