import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { LineButton } from '@/components/ui/LineButton';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Metadata } from 'next';

// 動的インポートを削除して直接インポートに戻す
import { Feature } from '@/components/sections/Feature';
import { FAQ } from '@/components/sections/FAQ';
import { Access } from '@/components/sections/Access';
import MenuContent from '@/components/sections/MenuContent';
import { Staff } from '@/components/sections/Staff';
import { LatestNotices } from '@/components/notices/LatestNotices';

// ISR設定: 本番環境では10分でページを再生成
export const revalidate = 600;

export const metadata: Metadata = {
  metadataBase: new URL('https://hair-salon-wingr.vercel.app'),
  title: '美容室ウイング R | 岐阜市のファミリーサロン',
  description: '41年間地域に愛され続ける、岐阜市のファミリーサロン',
  openGraph: {
    title: '美容室ウイング R | 岐阜市のファミリーサロン',
    description: '41年間地域に愛され続ける、岐阜市のファミリーサロン',
    images: [
      '/api/og?title=美容室ウイング%20R&description=岐阜市のファミリーサロン&page=home',
    ],
  },
};

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section
        id="home"
        className="relative min-h-screen pt-20 flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={'/images/salon/salon-bg.jpg'}
            alt="美容室ウイング Rの店内"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <AnimatedSection
          className="container mx-auto px-4 text-center relative z-10"
          direction="up"
          distance={20}
        >
          <h1 className="heading-1 mb-6 text-white">
            41年間地域に愛され続ける
            <br />
            岐阜市のファミリーサロン
          </h1>
          <p className="body-lg mb-8 max-w-2xl mx-auto text-white">
            老舗の安心感とモダンな使いやすさを兼ね備えた美容室です。
            お客様一人ひとりに寄り添った丁寧な施術と、くつろぎの空間をご提供いたします。
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row items-center">
            <LineButton
              variant="line-official"
              text="LINEで予約"
              className="w-auto max-w-fit"
            />
            <Link href="#menu">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-primary-900 hover:text-white w-auto max-w-fit"
              >
                メニューを見る
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* お知らせセクション - ヒーローの直後 */}
      <AnimatedSection id="notices" direction="up">
        <LatestNotices />
      </AnimatedSection>

      {/* 直接インポートに戻す */}
      <AnimatedSection id="feature" direction="up">
        <Feature />
      </AnimatedSection>

      <AnimatedSection id="menu" direction="up">
        <MenuContent />
      </AnimatedSection>

      <AnimatedSection id="staff" direction="up">
        <Staff />
      </AnimatedSection>

      <AnimatedSection id="faq" direction="up">
        <FAQ />
      </AnimatedSection>

      <AnimatedSection id="access" direction="up">
        <Access />
      </AnimatedSection>
    </main>
  );
}
