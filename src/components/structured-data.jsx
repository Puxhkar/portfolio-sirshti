export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MindReader Enterprises",
    "alternateName": "MindReaderBio",
    "url": "https://mindreaderbio.tech",
    "logo": "https://mindreaderbio.tech/logo.png",
    "description": "Biotech intelligence platform providing scientifically credible insights through cutting-edge analytics and market research for investors and industry professionals.",
    "foundingDate": "2024",
    "industry": "Biotechnology",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@mindreaderbio.tech"
    },
    "sameAs": [
      "https://linkedin.com/company/mindreaderbio",
      "https://twitter.com/mindreaderbio"
    ],
    "knowsAbout": [
      "Biotechnology",
      "Market Analysis",
      "FDA Regulations",
      "Clinical Trials",
      "Drug Discovery",
      "Investment Analysis"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MindReaderBio",
    "url": "https://mindreaderbio.tech",
    "description": "Bridging Science and Markets in Biotechnology",
    "publisher": {
      "@type": "Organization",
      "name": "MindReader Enterprises"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mindreaderbio.tech/insights?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ article }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt || article.content?.replace(/<[^>]*>/g, '').substring(0, 160),
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "MindReader Enterprises",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mindreaderbio.tech/logo.png"
      }
    },
    "datePublished": article.date,
    "dateModified": article.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mindreaderbio.tech/insights/${article.slug}`
    },
    "keywords": article.tags?.join(", ") || article.category,
    "articleSection": article.category,
    "about": {
      "@type": "Thing",
      "name": "Biotechnology"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
