'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Scissors } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { LineButton } from '../ui/LineButton';

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
  const [showLineButton, setShowLineButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 400px以上スクロールしたらLINEボタンを表示
      if (window.scrollY > 400) {
        setShowLineButton(true);
      } else {
        setShowLineButton(false);
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
            {/* ロゴ：日本語メイン */}
            <Link
              href="/"
              className="text-xl lg:text-2xl font-bold text-primary-900 flex-shrink-0"
            >
              美容室ウイング R
            </Link>

            {/* デスクトップナビゲーション：日英併記 */}
            <div className="hidden xl:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-center group hover:text-primary-700 transition-colors"
                >
                  {/* 日本語：メイン表示 */}
                  <div className="text-sm font-bold text-primary-900 group-hover:text-primary-700">
                    {item.nameJa}
                  </div>
                  {/* 英語：装飾的サブ */}
                  <div className="text-xs text-primary-600 uppercase tracking-wider opacity-75">
                    {item.nameEn}
                  </div>
                </Link>
              ))}
            </div>

            {/* 右側のアクション群 */}
            <div className="flex items-center space-x-4">
              {/* スクロール時に表示されるLINEボタン（全画面サイズ） */}
              <div
                className={`transition-all duration-300 ${
                  showLineButton
                    ? 'opacity-100 translate-x-0 scale-100'
                    : 'opacity-0 translate-x-4 scale-75 pointer-events-none'
                }`}
              >
                <LineButton
                  variant="line-official"
                  text="LINE予約"
                  size="sm"
                  className="shadow-md hover:shadow-lg"
                />
              </div>

              {/* PC時の電話番号（常時表示） */}
              <div className="hidden xl:flex items-center space-x-2 text-primary-700">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">058-243-6478</span>
              </div>

              {/* ハンバーガーメニューボタン */}
              <button
                className="xl:hidden relative group p-3 rounded-full bg-gradient-to-br from-primary-50 to-accent-50 hover:from-primary-100 hover:to-accent-100 border border-primary-200 hover:border-primary-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="メニュー"
              >
                {/* 背景のキラキラエフェクト */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-100/50 to-accent-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* メインアイコン：ハサミ */}
                <div className="relative z-10 flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-primary-700 group-hover:text-primary-800 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                </div>

                {/* ホバー時の装飾ライン */}
                <div className="absolute top-1 right-1 w-1 h-1 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-150" />
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
