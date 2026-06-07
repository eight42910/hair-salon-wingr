'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { Logo } from '../ui';

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border transition-shadow duration-200 ${
          isScrolled ? 'shadow-sm' : 'shadow-none'
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Logo size="md" className="flex-shrink-0" />

            <div className="hidden xl:flex items-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-center group px-3 py-2 rounded-lg transition-colors duration-200 text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  <div className="relative z-10">
                    <div className="text-sm font-medium text-text group-hover:text-accent transition-colors duration-200">
                      {item.nameJa}
                    </div>
                    <div className="text-[11px] text-muted uppercase tracking-wider mt-0.5">
                      {item.nameEn}
                    </div>
                  </div>
                  <div className="absolute bottom-1 left-3 right-3 h-px bg-accent2 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <a
                href="tel:058-241-3375"
                className="hidden xl:flex items-center space-x-2 text-accent hover:text-primary-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">058-241-3375</span>
              </a>

              {/* Menuボタン: SPで常時表示 */}
              <button
                className="xl:hidden relative flex items-center justify-center w-12 h-12 rounded-full border border-border bg-surface/80 transition-colors duration-200 hover:bg-surface2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="メニューを開く"
              >
                <span className="font-medium text-xs text-text tracking-wider">
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
