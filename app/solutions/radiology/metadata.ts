import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Radiology Information System (RIS) - AI-Powered Medical Imaging Platform | MagnusOS.ai',
  description: 'Revolutionize radiology workflows with MagnusOS.ai\'s AI-powered RIS. Advanced imaging management, AI pre-reads, PACS integration, and diagnostic workflow automation. HIPAA compliant, GDPR ready.',
  keywords: [
    'radiology information system',
    'RIS software',
    'medical imaging software',
    'PACS system',
    'radiology workflow management',
    'AI powered radiology',
    'medical imaging platform',
    'diagnostic imaging software',
    'radiology management system',
    'imaging workflow automation',
    'AI pre-reads',
    'radiology AI',
    'medical imaging AI',
    'diagnostic workflow',
    'imaging data management',
    'HIPAA compliant RIS',
    'radiology automation',
    'medical imaging workflow'
  ],
  openGraph: {
    title: 'Radiology Information System (RIS) - AI-Powered Medical Imaging Platform',
    description: 'Revolutionize radiology workflows with MagnusOS.ai\'s AI-powered RIS. Advanced imaging management, AI pre-reads, and diagnostic workflow automation.',
    url: 'https://magnusos.ai/solutions/radiology',
    siteName: 'MagnusOS.ai',
    images: [
      {
        url: '/solutions/radiology/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MagnusOS.ai Radiology Information System (RIS)',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radiology Information System (RIS) - AI-Powered Medical Imaging Platform',
    description: 'Revolutionize radiology workflows with AI-powered RIS. Advanced imaging management, AI pre-reads, and diagnostic workflow automation.',
    images: ['/solutions/radiology/og-image.jpg'],
    creator: '@MagnusOS_AI',
    site: '@MagnusOS_AI',
  },
  alternates: {
    canonical: 'https://magnusos.ai/solutions/radiology',
  },
}
