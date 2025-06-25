'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
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
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible
          ? 'opacity-60 hover:opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="トップに戻る"
    >
      <div className="p-2 bg-gray-800/70 hover:bg-gray-700 text-white rounded-full shadow-lg hover:shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110">
        <ArrowUp className="w-4 h-4 animate-bounce" />
      </div>
    </button>
  );
};
