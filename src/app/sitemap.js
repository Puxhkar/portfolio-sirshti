export default function sitemap() {
  const baseUrl = 'https://mindreaderbio.tech';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];

  // Blog posts
  const blogSlugs = [
    'crispr-3-next-generation-gene-editing',
    'fda-fast-track-designations-q4-2024',
    'immunotherapy-market-outlook-200b-2030',
    'biotech-ipo-trends-what-to-watch-2025',
    'ai-driven-drug-discovery-reducing-time-to-market',
    'rare-disease-therapeutics-untapped-potential'
  ];

  const blogPages = blogSlugs.map(slug => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
