/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hair-salon-wingr.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*', '/_next/*', '/404', '/500'],

  // インデックスファイルを生成しない（シンプルなサイトマップのみ）
  generateIndexSitemap: false,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    // 循環参照を削除
  },

  // transform関数を削除（シンプルに）
};
