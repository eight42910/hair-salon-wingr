'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      // 600px以上スクロールで表示（ヒーローセクションを完全に過ぎてから）
      setIsVisible(scrolled > 600);

      // スクロール中の状態管理
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // より存在感のあるバージョン
  const enhancedClassName = `
    w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 
    text-white rounded-full shadow-xl hover:shadow-2xl
    hover:from-primary-600 hover:to-primary-700
    transform hover:-translate-y-2 hover:scale-110
    active:scale-95 transition-all duration-300
  `;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 group transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-6 scale-75 pointer-events-none'
      }`}
      aria-label="ページトップに戻る"
    >
      <div className="relative">
        {/* メインボタン */}
        <div
          className={`
            w-12 h-12 bg-white border-2 border-gray-300 rounded-full 
            shadow-lg hover:shadow-xl
            flex items-center justify-center
            transition-all duration-300 ease-out
            hover:border-primary-400 hover:-translate-y-1 hover:scale-110
            active:scale-95 active:translate-y-0
            ${isScrolling ? 'animate-pulse' : ''}
          `}
        >
          <ChevronUp
            className={`
              w-5 h-5 text-gray-600 group-hover:text-primary-600 
              transition-all duration-300
              ${isScrolling ? 'animate-bounce' : 'group-hover:-translate-y-0.5'}
            `}
          />
        </div>

        {/* ホバー時のリング効果 */}
        <div className="absolute inset-0 rounded-full border-2 border-primary-300 opacity-0 group-hover:opacity-50 scale-100 group-hover:scale-125 transition-all duration-500 ease-out"></div>

        {/* 初回表示時の注目効果（3秒後に消える） */}
        <div
          className={`
            absolute inset-0 rounded-full border-2 border-primary-400 
            animate-ping opacity-75
            ${isVisible ? 'animate-ping' : 'hidden'}
          `}
          style={{
            animationDuration: '2s',
            animationIterationCount: '3',
          }}
        ></div>
      </div>

      {/* ツールチップ */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          ページトップに戻る
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </button>
  );
};
