'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { LineButton } from '@/components/ui/LineButton';

const navigation = [
  { nameJa: 'ホーム', nameEn: 'Home', href: '/' },
  { nameJa: 'コンセプト', nameEn: 'Concept', href: '/concept' },
  { nameJa: 'メニュー', nameEn: 'Menu', href: '/menu' },
  { nameJa: 'オーナー', nameEn: 'Owner', href: '/owner' },
  { nameJa: 'アクセス', nameEn: 'Access', href: '/access' },
  { nameJa: 'お問い合わせ', nameEn: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              美容室ウイング R
            </Link>

            {/* デスクトップナビゲーション - 日英併記 */}
            <div className="hidden xl:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-center group hover:text-primary-900 transition-colors"
                >
                  <div className="text-sm font-bold text-primary-900 group-hover:text-primary-900">
                    {item.nameJa}
                  </div>
                  <div className="text-xs text-primary-600 uppercase tracking-wide">
                    {item.nameEn}
                  </div>
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
