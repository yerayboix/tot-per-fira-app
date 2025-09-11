import { type MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/dashboard/',
          '/api/',
          '/test-orders/',
          '/_next/',
          '/private/',
          '/login/',
          '/register/'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/dashboard/',
          '/api/',
          '/test-orders/',
          '/private/',
          '/login/',
          '/register/',
        ],
      },
    ],
    sitemap: 'https://totperfira.es/sitemap.xml',
    host: 'https://totperfira.es',
  }
} 