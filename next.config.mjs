/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 外部画像を使用する場合のドメイン設定
    domains: ['example.com'], // 必要に応じて追加

    // 画像最適化の設定
    formats: ['image/webp', 'image/avif'],

    // 画像サイズの設定
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
