import type { Metadata } from 'next';
import { Noto_Sans_JP, Roboto } from 'next/font/google';
import '@/styles/globals.css';
import { Header, Footer } from '@/components/layout';

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
      </body>
    </html>
  );
}
