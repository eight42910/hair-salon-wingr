import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { LineButton } from '@/components/ui/LineButton';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// 重いコンポーネントを動的インポート
const Feature = dynamic(
  () =>
    import('@/components/sections/Feature').then((mod) => ({
      default: mod.Feature,
    })),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
    ),
    ssr: true,
  }
);

const FAQ = dynamic(
  () =>
    import('@/components/sections/FAQ').then((mod) => ({ default: mod.FAQ })),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
    ),
  }
);

const Access = dynamic(
  () =>
    import('@/components/sections/Access').then((mod) => ({
      default: mod.Access,
    })),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-80 rounded-lg" />
    ),
  }
);

const MenuContent = dynamic(() => import('@/components/sections/MenuContent'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />,
});

const Staff = dynamic(
  () =>
    import('@/components/sections/Staff').then((mod) => ({
      default: mod.Staff,
    })),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-80 rounded-lg" />
    ),
  }
);

export const metadata: Metadata = {
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
      {/* ヒーローセクション - critical */}
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
            quality={95}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7/2Q=="
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

      {/* 動的読み込みセクション */}
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
