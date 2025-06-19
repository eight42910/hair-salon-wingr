import { Button } from '@/components/ui/Button';
import { Feature } from '@/components/sections/Feature';
import { FAQ } from '@/components/sections/FAQ';
import { Access } from '@/components/sections/Access';
import Link from 'next/link';
//画像
import Image from 'next/image';
import { LineReservation } from '@/components/sections/LineReservation';
import MenuContent from './menu/MenuContent';
import { LineButton } from '@/components/ui/LineButton';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export default function Home() {
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
            <Link href="/menu">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-primary-900 w-auto max-w-fit"
              >
                メニューを見る
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* 特徴セクション */}
      <AnimatedSection id="feature" direction="up">
        <Feature />
      </AnimatedSection>

      {/* メニューセクション */}
      <AnimatedSection id="menu" direction="up" delay={0.2}>
        <MenuContent />
      </AnimatedSection>

      {/* お客様の声セクション */}
      {/* <Testimonials /> */}

      {/* よくある質問セクション */}
      <AnimatedSection id="faq" direction="up" delay={0.3}>
        <FAQ />
      </AnimatedSection>

      {/* アクセスセクション */}
      <AnimatedSection id="access" direction="up" delay={0.4}>
        <Access />
      </AnimatedSection>

      {/* LINE予約セクション */}
      <AnimatedSection id="reservation" direction="up" delay={0.5}>
        <LineReservation />
      </AnimatedSection>
    </main>
  );
}
