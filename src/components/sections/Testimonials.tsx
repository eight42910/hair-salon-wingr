'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

import { SectionTitle } from '@/components/ui';
import { Quote, User } from 'lucide-react';
import { TestimonialsProps } from '@/types/sections';

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="relative py-20 sm:py-32 bg-slate-50">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-secondary-50 to-primary-50" />

      {/* 装飾的な背景パターン */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full blur-xl" />
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-secondary-200 rounded-full blur-xl" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent-200 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          mainTitle="お客様の声"
          subTitle="Testimonials"
          align="center"
        />

        {/* メインコンテンツ */}
        <div className="mt-16">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'testimonials-bullet',
              bulletActiveClass: 'testimonials-bullet-active',
            }}
            navigation={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <article className="group relative bg-white/95 backdrop-blur-sm p-8 pt-12 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col transition-all duration-500 hover:shadow-xl hover:bg-white hover:-translate-y-2">
                  {/* 上部装飾 */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-5 h-5 text-white transform -scale-x-100" />
                  </div>

                  {/* コメント */}
                  <blockquote className="text-gray-700 leading-relaxed flex-grow mb-6 text-base mt-4">
                    &ldquo;{testimonial.comment}&rdquo;
                  </blockquote>

                  {/* プロフィール */}
                  <footer className="flex items-center">
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center mr-4 flex-shrink-0 overflow-hidden shadow-md">
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image.url}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <User className="w-7 h-7 text-primary-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <cite className="font-bold text-primary-900 not-italic text-lg">
                        {testimonial.name}
                      </cite>
                      <p className="text-sm text-primary-600 font-medium mt-1">
                        {testimonial.attribute}
                      </p>
                    </div>
                  </footer>

                  {/* 右下装飾 */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-gradient-to-br from-secondary-300 to-accent-400 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* カスタムナビゲーションボタン */}
          <button
            onClick={handlePrevSlide}
            className="testimonials-prev absolute bottom-16 left-5 w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white hover:shadow-xl transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
            aria-label="前のお客様の声を見る"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={handleNextSlide}
            className="testimonials-next absolute bottom-16 right-5 w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white hover:shadow-xl transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
            aria-label="次のお客様の声を見る"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* スワイプヒント（モバイルのみ） */}
        <div className="mt-4 mb-20 text-center md:hidden">
          <p className="text-sm text-primary-600 opacity-75 flex items-center justify-center gap-2">
            <span>←</span>
            <span>スワイプして他の声も見る</span>
            <span>→</span>
          </p>
        </div>

        {/* 下部メッセージ */}
        <div className="mt-20 text-center">
          <p className="text-primary-700 font-medium">
            皆様からの温かいお言葉が、私たちの励みとなっています
          </p>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          padding-bottom: 100px;
        }

        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          display: none;
        }

        .testimonials-swiper .swiper-pagination {
          bottom: 48px;
          position: absolute;
          left: 50%;
          top: auto;
          width: auto;
          transform: translateX(-50%);
          margin-top: 0;
          padding-bottom: 0;
          z-index: 5;
        }

        .testimonials-bullet {
          width: 12px;
          height: 12px;
          margin: 0 8px;
          opacity: 0.6;
          background: #8b5e3c;
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .testimonials-bullet:hover {
          opacity: 0.8;
          transform: scale(1.1);
        }

        .testimonials-bullet-active {
          opacity: 1;
          background: #8b5e3c;
          transform: scale(1.3);
          box-shadow: 0 2px 8px rgba(139, 94, 60, 0.4);
        }
      `}</style>
    </section>
  );
};
