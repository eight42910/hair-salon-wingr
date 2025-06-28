import type { Metadata } from 'next';
import { Noto_Sans_JP, Roboto } from 'next/font/google';
import '@/styles/globals.css';
import { Header, Footer } from '@/components/layout';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';

// 日本語フォント（Noto Sans JP）
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-japanese',
});

// 英語フォント（Roboto）
const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
  variable: '--font-english',
});

export const metadata: Metadata = {
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
    images: ['/api/og?title=美容室ウイング%20R&description=岐阜市のファミリーサロン&page=home'],
  },
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
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
