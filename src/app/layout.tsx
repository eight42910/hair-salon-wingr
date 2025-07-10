import type { Metadata } from 'next';
import { Noto_Sans_JP, Roboto } from 'next/font/google';
import '@/styles/globals.css';
import { Header, Footer } from '@/components/layout';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';

// 日本語フォント（Noto Sans JP）- 最適化
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'], // 必要な重みのみ
  variable: '--font-japanese',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

// 英語フォント（Roboto）- 最適化
const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'], // 必要な重みのみ
  variable: '--font-english',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hair-salon-wingr.vercel.app'),
  title: '美容室ウイング R | 岐阜市のファミリーサロン',
  description:
    '41年間地域に愛され続ける、岐阜市のファミリーサロン。老舗の安心感とモダンな使いやすさを兼ね備えた美容室です。',
  keywords:
    '美容室,岐阜,ウイングR,ヘッドスパ,縮毛矯正,ファミリーサロン,カット,カラー',
  robots: 'index, follow',
  authors: [{ name: '美容室ウイング R' }],
  creator: '美容室ウイング R',
  publisher: '美容室ウイング R',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://hair-salon-wingr.vercel.app/',
    title: '美容室ウイング R | 岐阜市のファミリーサロン',
    description:
      '41年間地域に愛され続ける、岐阜市のファミリーサロン。老舗の安心感とモダンな使いやすさを兼ね備えた美容室です。',
    images: [
      {
        url: '/api/og?title=美容室ウイング%20R&description=岐阜市のファミリーサロン&page=home',
        width: 1200,
        height: 630,
        alt: '美容室ウイング R - 岐阜市のファミリーサロン',
      },
    ],
    siteName: '美容室ウイング R',
  },
  twitter: {
    card: 'summary_large_image',
    title: '美容室ウイング R | 岐阜市のファミリーサロン',
    description:
      '41年間地域に愛され続ける、岐阜市のファミリーサロン。老舗の安心感とモダンな使いやすさを兼ね備えた美容室です。',
    images: [
      '/api/og?title=美容室ウイング%20R&description=岐阜市のファミリーサロン&page=home',
    ],
  },
  verification: {
    google: 'c8DNBiFfM1tr0fxgA6IWBDmjpzHMRXYI73-Z0Mu5NJ0', // Google Search Consoleから取得
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body
        className={`${notoSansJP.variable} ${roboto.variable} font-combined`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
