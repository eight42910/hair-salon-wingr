'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { LineButton, Logo } from '../ui';

const navigation = [
  { nameJa: 'ホーム', nameEn: 'Home', href: '/', sectionId: 'home' },
  {
    nameJa: '特徴',
    nameEn: 'Feature',
    href: '/#feature',
    sectionId: 'feature',
  },
  { nameJa: 'メニュー', nameEn: 'Menu', href: '/#menu', sectionId: 'menu' },
  { nameJa: 'よくある質問', nameEn: 'FAQ', href: '/#faq', sectionId: 'faq' },
  { nameJa: 'スタッフ', nameEn: 'Staff', href: '/#staff', sectionId: 'staff' },
  {
    nameJa: 'アクセス',
    nameEn: 'Access',
    href: '/#access',
    sectionId: 'access',
  },
  { nameJa: 'お問い合わせ', nameEn: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo size="md" className="flex-shrink-0" />

            <div className="hidden xl:flex items-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-center group px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
                  <div className="absolute inset-0 border border-transparent group-hover:border-primary-200/50 rounded-xl transition-all duration-300" />
                  <div className="absolute top-1 right-2 w-1 h-1 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                  <div className="absolute bottom-1 left-2 w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse delay-200" />
                  <div className="relative z-10">
                    <div className="text-sm font-bold text-primary-900 group-hover:text-primary-800 transition-all duration-300 group-hover:scale-110 transform-gpu">
                      {item.nameJa}
                    </div>
                    <div className="text-xs text-primary-600 group-hover:text-primary-700 uppercase tracking-wider opacity-75 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0.5 transform-gpu">
                      {item.nameEn}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* LINE予約ボタン: スクロール後に表示 (SP/PC共通) */}
              <div
                className={`transition-all duration-300 ${isScrolled ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-75 pointer-events-none'}`}
              >
                <LineButton
                  variant="line-official"
                  text="LINE予約"
                  size="sm"
                  className="shadow-md hover:shadow-lg"
                />
              </div>

              <a
                href="tel:058-241-3375"
                className="hidden xl:flex items-center space-x-2 text-primary-700 hover:text-primary-800 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">058-241-3375</span>
              </a>

              {/* Menuボタン: SPで常時表示 */}
              <button
                className={`xl:hidden relative flex items-center justify-center w-14 h-14 rounded-full border border-primary-800/60 bg-transparent transition-all duration-300 hover:scale-105 hover:bg-white/50`}
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="メニューを開く"
              >
                <span className="font-medium text-sm text-primary-900 tracking-wider">
                  Menu
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};