'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Phone } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { LineButton } from '@/components/ui/LineButton';

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'CONCEPT', href: '/concept' },
  { name: 'FEATURE', href: '/feature' },
  { name: 'MENU', href: '/menu' },
  { name: 'OWNER', href: '/owner' },
  { name: 'ACCESS', href: '/access' },
  { name: 'CONTACT', href: '/contact' },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [...navigation, { href: '/booking', label: 'ご予約' }];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* ロゴ - 常に表示 */}
            <Link
              href="/"
              className="text-xl lg:text-2xl font-bold text-primary-900 flex-shrink-0"
            >
              ウイング R
            </Link>

            {/* デスクトップナビゲーション - 1000px以上のみ */}
            <div className="hidden xl:flex items-center space-x-6">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* デスクトップCTA - 1000px以上のみ */}
            <div className="hidden xl:flex items-center space-x-3 flex-shrink-0">
              <a
                href="tel:058-241-3375"
                className="flex items-center text-primary-700 hover:text-primary-900 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium text-sm">058-241-3375</span>
              </a>
              <LineButton
                variant="brand-primary"
                text="LINE予約"
                className="hidden lg:flex"
              />
            </div>

            {/* タブレット用電話番号 - 768px-1000px */}
            <div className="hidden md:flex xl:hidden items-center space-x-3">
              <a
                href="tel:058-241-3375"
                className="flex items-center text-primary-700 hover:text-primary-900 transition-colors"
              >
                <Phone className="w-4 h-4 mr-1" />
                <span className="font-medium text-sm">058-241-3375</span>
              </a>
            </div>

            {/* ハンバーガーメニューボタン - 1000px以下 */}
            <button
              className="xl:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="メニューを開く"
            >
              <div className="w-5 h-0.5 bg-primary-900 mb-1 transition-all duration-300" />
              <div className="w-5 h-0.5 bg-primary-900 mb-1 transition-all duration-300" />
              <div className="w-5 h-0.5 bg-primary-900 transition-all duration-300" />
            </button>
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
