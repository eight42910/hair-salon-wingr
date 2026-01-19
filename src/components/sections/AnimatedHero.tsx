'use client';
import { useEffect, useState } from 'react';
import { useTypewriter, useParallax } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/Button';
import { LineButton } from '@/components/ui/LineButton';
import Link from 'next/link';
import Image from 'next/image';

export const AnimatedHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { offset } = useParallax(0.3);

  const mainTitle = useTypewriter('41年間地域に愛され続ける', 80);
  const subTitle = useTypewriter('岐阜市のファミリーサロン', 80);
  const description = useTypewriter(
    '老舗の安心感とモダンな使いやすさを兼ね備えた美容室です。お客様一人ひとりに寄り添った丁寧な施術と、くつろぎの空間をご提供いたします。',
    30
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden"
    >
      {/* パララックス背景 */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src="/images/salon/salon-bg.jpg"
          alt="美容室ウイング Rの店内"
          fill
          className="object-cover scale-110"
          priority
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40" />
      </div>

      {/* 装飾的な背景エレメント */}
      <div className="absolute inset-0 z-5">
        {/* グラデーション装飾 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary-300/10 to-accent-300/10 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent-300/10 to-secondary-300/10 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* メインタイトル */}
          <h1 className="heading-1 mb-6 text-white relative">
            <span className="block relative">
              {mainTitle.displayText}
              {!mainTitle.isComplete && (
                <span className="animate-pulse">|</span>
              )}
            </span>
            <br />
            <span
              className={`block relative transition-all duration-500 ${
                mainTitle.isComplete
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {subTitle.displayText}
              {mainTitle.isComplete && !subTitle.isComplete && (
                <span className="animate-pulse">|</span>
              )}
            </span>

          </h1>

          {/* 説明文 */}
          <div
            className={`transition-all duration-800 delay-500 ${
              subTitle.isComplete
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="body-lg mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
              {description.displayText}
              {subTitle.isComplete && !description.isComplete && (
                <span className="animate-pulse">|</span>
              )}
            </p>
          </div>

          {/* ボタン */}
          <div
            className={`flex gap-4 justify-center flex-col sm:flex-row items-center transition-all duration-800 delay-1000 ${
              description.isComplete
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="transform hover:scale-105 transition-transform duration-300">
              <LineButton
                variant="line-official"
                text="LINEで予約"
                className="w-auto max-w-fit shadow-lg hover:shadow-xl"
              />
            </div>
            <Link
              href="/menu"
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-primary-900 w-auto max-w-fit shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                メニューを見る
              </Button>
            </Link>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
            description.isComplete
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-col items-center space-y-2 text-white/70">
            <span className="text-sm font-medium">スクロール</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
