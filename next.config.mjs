/** @type {import('next').NextConfig} */
const nextConfig = {
  // パフォーマンス最適化
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // 画像最適化
  images: {
    // 外部画像を使用する場合のドメイン設定
    domains: ['example.com'], // 必要に応じて追加

    // 画像最適化の設定
    formats: ['image/webp', 'image/avif'],

    // 画像サイズの設定
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // 圧縮とキャッシュ
  compress: true,
  poweredByHeader: false,

  // 静的最適化
  swcMinify: true,
};

export default nextConfig;
