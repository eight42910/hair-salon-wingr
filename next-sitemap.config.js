/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hair-salon-wingr.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*', '/_next/*', '/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    additionalSitemaps: ['https://hair-salon-wingr.vercel.app/sitemap.xml'],
  },
  transform: async (config, path) => {
    // ページ別の優先度とchangefreqを設定
    const customConfig = {
      '/': {
        priority: 1.0,
        changefreq: 'weekly',
      },
      '/contact': {
        priority: 0.8,
        changefreq: 'monthly',
      },
    };

    return {
      loc: path,
      changefreq: customConfig[path]?.changefreq || config.changefreq,
      priority: customConfig[path]?.priority || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
