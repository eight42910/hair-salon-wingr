import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP, Roboto } from 'next/font/google';
import '@/styles/globals.css';
import { Header, Footer } from '@/components/layout';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { MobileReservationBar } from '@/components/ui/MobileReservationBar';

// 日本語フォント（Noto Sans JP）- 最適化
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'], // ウェイトを最小化
  variable: '--font-japanese',
  preload: false, // 初期レンダーブロック回避
  fallback: ['system-ui', 'arial'],
});

// 英語フォント（Roboto）- 最適化
const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'], // ウェイトを最小化
  variable: '--font-english',
  preload: false, // 初期レンダーブロック回避
  fallback: ['system-ui', 'arial'],
});

// 見出し用フォント（Noto Serif JP）
const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600'],
  variable: '--font-serif',
  preload: false,
  fallback: ['serif'],
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
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HairSalon',
              name: '美容室ウイング R',
              description:
                '41年間地域に愛され続ける、岐阜市のファミリーサロン。老舗の安心感とモダンな使いやすさを兼ね備えた美容室です。',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '加野2-25-8',
                addressLocality: '岐阜市',
                addressRegion: '岐阜県',
                postalCode: '501-3107',
                addressCountry: 'JP',
              },
              telephone: '+81-58-241-3375',
              url: 'https://hair-salon-wingr.vercel.app/',
              image:
                'https://hair-salon-wingr.vercel.app/images/salon/salon-bg.jpg',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                  ],
                  opens: '09:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Tuesday',
                  opens: '09:00',
                  closes: '18:00',
                  description: '第2火曜日は定休日です。',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '09:00',
                  closes: '18:00',
                  description: '第3日曜日は定休日です。',
                },
              ],
              priceRange: '$$',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${notoSansJP.variable} ${roboto.variable} ${notoSerifJP.variable} font-combined`}
      >
        <Header />
        {children}
        <Footer />
        <MobileReservationBar />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
