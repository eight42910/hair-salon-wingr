import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
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
      <body className={notoSansJP.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
