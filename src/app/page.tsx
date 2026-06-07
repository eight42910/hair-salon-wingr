import Image from 'next/image';
import { Metadata } from 'next';

// 動的インポートを削除して直接インポートに戻す
import { Feature } from '@/components/sections/Feature';
import { FAQ } from '@/components/sections/FAQ';
import { Access } from '@/components/sections/Access';
import MenuContent from '@/components/sections/MenuContent';
import { Staff } from '@/components/sections/Staff';
import { LatestNotices } from '@/components/notices/LatestNotices';
import { Testimonials } from '@/components/sections/Testimonials';
import { getTestimonials } from '@/lib/microcms';

// ISR設定: 本番環境では10分でページを再生成
export const revalidate = 600;

export const metadata: Metadata = {
  metadataBase: new URL('https://hair-salon-wingr.vercel.app'),
  title: '美容室ウイング R | 岐阜市のファミリーサロン',
  description: '41年間地域に愛され続ける、岐阜市のファミリーサロン',
  openGraph: {
    title: '美容室ウイング R | 岐阜市のファミリーサロン',
    description: '41年間地域に愛され続ける、岐阜市のファミリーサロン',
    images: ['/images/wingr/og-local-seo.jpg'],
  },
};

export default async function HomePage() {
  const testimonialsData = await getTestimonials();
  const testimonials = testimonialsData.contents;

  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section
        id="home"
        className="relative min-h-screen pt-24 flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={'/images/wingr/hero-storefront-desktop.jpg'}
            alt="岐阜市加野の美容室ウイング Rの外観"
            fill
            className="object-cover object-center"
            priority
            quality={70}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,247,242,0.18),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="heading-1 mb-6 text-white">
            41年間地域に愛され続ける
            <br />
            岐阜市のファミリーサロン
          </h1>
          <p className="body-lg mb-8 max-w-2xl mx-auto text-white/90">
            老舗の安心感とモダンな使いやすさを兼ね備えた美容室です。
            お客様一人ひとりに寄り添った丁寧な施術と、くつろぎの空間をご提供いたします。
          </p>
          <div className="mt-6 h-6" aria-hidden="true" />
        </div>
      </section>

      {/* お知らせセクション - ヒーローの直後 */}
      <div id="notices">
        <LatestNotices />
      </div>

      {/* 直接インポートに戻す */}
      <div id="feature">
        <Feature />
      </div>

      <div id="menu">
        <MenuContent />
      </div>

      {testimonials && testimonials.length > 0 && (
        <div id="testimonials">
          <Testimonials testimonials={testimonials} />
        </div>
      )}

      <div id="staff">
        <Staff />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <div id="access">
        <Access />
      </div>
    </main>
  );
}
