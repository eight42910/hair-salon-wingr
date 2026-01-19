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
    <section id="testimonials" className="relative py-16 sm:py-20 bg-bg">
      <div className="absolute inset-0 bg-surface2/60" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          mainTitle="お客様の声"
          subTitle="Testimonials"
          align="center"
        />

        {/* タイトル下メッセージ */}
        <div className="mt-8 mb-8 flex justify-center">
          <p className="text-primary-700 font-medium max-w-md text-center break-words leading-relaxed">
            サービス向上のため、お客様の声を大切にしています
          </p>
        </div>

        {/* メインコンテンツ */}
        <div className="mt-8">
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
                <article className="group relative bg-surface p-8 pt-12 rounded-2xl shadow-sm border border-border h-full flex flex-col transition-colors duration-200 hover:border-accent2">
                  {/* コメント */}
                  <blockquote className="text-gray-700 leading-relaxed flex-grow mb-6 text-base mt-4">
                    &ldquo;{testimonial.comment}&rdquo;
                  </blockquote>

                  {/* プロフィール */}
                  <footer className="flex items-center">
                    <div className="relative w-14 h-14 rounded-full bg-surface2 flex items-center justify-center mr-4 flex-shrink-0 overflow-hidden border border-border">
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image.url}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <span className="text-base font-semibold text-accent">
                          {testimonial.name.slice(0, 1)}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <cite className="font-semibold text-text not-italic text-lg">
                        {testimonial.name}
                      </cite>
                      <p className="text-sm text-accent2 font-medium mt-1">
                        {testimonial.attribute}
                      </p>
                    </div>
                  </footer>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* カスタムナビゲーションボタン */}
          <button
            onClick={handlePrevSlide}
            className="testimonials-prev absolute top-1/2 -translate-y-1/2 left-2 sm:left-5 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white hover:shadow-xl transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 border border-primary-200/50"
            aria-label="前のお客様の声を見る"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-5 sm:h-5"
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
            className="testimonials-next absolute top-1/2 -translate-y-1/2 right-2 sm:right-5 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white hover:shadow-xl transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 border border-primary-200/50"
            aria-label="次のお客様の声を見る"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-5 sm:h-5"
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
          <p className="text-sm text-accent opacity-75 flex items-center justify-center gap-2">
            <span>←</span>
            <span>スワイプして他の声も見る</span>
            <span>→</span>
          </p>
        </div>

        {/* 下部メッセージ */}
        <div className="mt-20 text-center">
          <p className="text-accent font-medium">
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
          background: #8a6a3c;
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
          background: #8a6a3c;
          transform: scale(1.3);
          box-shadow: 0 2px 8px rgba(138, 106, 60, 0.3);
        }
      `}</style>
    </section>
  );
};
