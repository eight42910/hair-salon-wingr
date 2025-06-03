import { Button } from '@/components/ui/Button';
import { Feature } from '@/components/sections/Feature';
import { Testimonials } from '@/components/sections/Testimonials';
import { Access } from '@/components/sections/Access';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-1 mb-6">
            41年間地域に愛され続ける
            <br />
            岐阜市のファミリーサロン
          </h1>
          <p className="body-lg mb-8 max-w-2xl mx-auto">
            老舗の安心感とモダンな使いやすさを兼ね備えた美容室です。
            お客様一人ひとりに寄り添った丁寧な施術と、くつろぎの空間をご提供いたします。
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link href="/booking">
              <Button size="lg">ご予約はこちら</Button>
            </Link>
            <Link href="/menu">
              <Button variant="outline" size="lg">
                メニューを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <Feature />

      {/* お客様の声セクション */}
      <Testimonials />

      {/* アクセスセクション */}
      <Access />
    </main>
  );
}
