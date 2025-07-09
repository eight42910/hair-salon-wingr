import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hair-salon-wingr.vercel.app';

  // 固定日時を使用（実際の更新に基づく）
  const siteLastModified = new Date('2025-01-09T10:00:00+09:00');

  return [
    {
      url: baseUrl,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
