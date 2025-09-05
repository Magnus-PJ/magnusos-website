import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/private/',
        '/temp/',
        '*.json',
        '*.xml',
      ],
    },
    sitemap: 'https://magnusos.ai/sitemap.xml',
    host: 'https://magnusos.ai',
  }
}
