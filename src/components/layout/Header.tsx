'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Phone } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary-900">
              ウイング R
            </Link>

            {/* デスクトップナビゲーション */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 電話番号とCTAボタン */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:058-123-4567"
                className="flex items-center text-primary-700 hover:text-primary-900"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">058-123-4567</span>
              </a>
              <Link href="/booking">
                <Button size="sm">ご予約はこちら</Button>
              </Link>
            </div>

            {/* モバイルメニューボタン */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">メニューを開く</span>
              <div className="w-6 h-0.5 bg-primary-900 mb-1.5" />
              <div className="w-6 h-0.5 bg-primary-900 mb-1.5" />
              <div className="w-6 h-0.5 bg-primary-900" />
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
