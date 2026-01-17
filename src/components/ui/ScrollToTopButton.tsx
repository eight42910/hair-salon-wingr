'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      // 600px以上スクロールで表示（ヒーローセクションを完全に過ぎてから）
      setIsVisible(scrolled > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 group transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
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
            w-12 h-12 bg-surface border border-border rounded-full 
            shadow-sm hover:shadow-md
            flex items-center justify-center
            transition-colors duration-200
            hover:border-accent2
          `}
        >
          <ChevronUp
            className={`
              w-5 h-5 text-muted group-hover:text-accent 
              transition-colors duration-200
            `}
          />
        </div>

      </div>

      {/* ツールチップ */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-text text-surface text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-sm">
          ページトップに戻る
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-text"></div>
        </div>
      </div>
    </button>
  );
};
