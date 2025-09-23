export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      }
    ],
    sitemap: 'https://mindreaderbio.tech/sitemap.xml',
    host: 'https://mindreaderbio.tech',
  }
}
