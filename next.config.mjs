/** @type {import('next').NextConfig} */
const nextConfig = {
  // 最小限の最適化のみ
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // 画像最適化
  images: {
    // 外部画像を使用する場合のドメイン設定
    domains: ['hair-salon-wingr.vercel.app'], // 必要に応じて追加

    // 画像最適化の設定
    formats: ['image/webp', 'image/avif'],

    // 画像品質とサイズの最適化
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,

    // 未使用画像を除外
    unoptimized: false,

    // カスタムローダーでWebP優先
    loader: 'default',
  },

  // 圧縮とキャッシュ
  compress: true,
  poweredByHeader: false,

  // 静的最適化
  swcMinify: true,

  // CSS最適化
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },

  // 本番用最適化
  ...(process.env.NODE_ENV === 'production' && {
    output: 'standalone',
    generateBuildId: async () => {
      return `build-${Date.now()}`;
    },
  }),
};

export default nextConfig;
