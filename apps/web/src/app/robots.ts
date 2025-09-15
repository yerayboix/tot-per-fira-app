import { type MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/*',
        ],
      },
    ],
    sitemap: 'https://totperfira.es/sitemap.xml',
    host: 'https://totperfira.es',
  }
} 