'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { LineButton, HamburgerIcon, Logo } from '../ui';

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
            {/* ロゴ：洗練されたデザイン */}
            <Logo size="md" className="flex-shrink-0" />

            {/* デスクトップナビゲーション：日英併記 */}
            <div className="hidden xl:flex items-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-center group px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
                >
                  {/* 背景グラデーション（ホバー時に表示） */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />

                  {/* 装飾的なボーダー */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-primary-200/50 rounded-xl transition-all duration-300" />

                  {/* キラキラエフェクト */}
                  <div className="absolute top-1 right-2 w-1 h-1 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                  <div className="absolute bottom-1 left-2 w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse delay-200" />

                  {/* コンテンツ */}
                  <div className="relative z-10">
                    {/* 日本語：メイン表示 */}
                    <div className="text-sm font-bold text-primary-900 group-hover:text-primary-800 transition-all duration-300 group-hover:scale-110 transform-gpu">
                      {item.nameJa}
                    </div>
                    {/* 英語：装飾的サブ */}
                    <div className="text-xs text-primary-600 group-hover:text-primary-700 uppercase tracking-wider opacity-75 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0.5 transform-gpu">
                      {item.nameEn}
                    </div>
                  </div>

                  {/* 下部のアンダーライン */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </div>

            {/* 右側のアクション群 - スマホで間隔調整 */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
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
              <a
                href="tel:058-241-3375"
                className="hidden xl:flex items-center space-x-2 text-primary-700 hover:text-primary-800 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">058-241-3375</span>
              </a>

              {/* ハンバーガーメニューボタン - 洗練されたデザイン */}
              <button
                className="xl:hidden relative group p-3 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 hover:from-primary-100 hover:to-accent-100 border border-primary-200 hover:border-primary-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-200/50 flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="メニューを開く"
              >
                {/* 背景のキラキラエフェクト */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-100/50 to-accent-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* ハンバーガーアイコンとテキスト */}
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <HamburgerIcon
                    isOpen={false} // このボタンは常に閉じた状態のアイコン
                    size="md"
                    className="text-primary-700 group-hover:text-primary-800 transition-colors duration-300"
                  />
                  <span className="text-sm font-bold text-primary-800">メニュー</span>
                </div>

                {/* ホバー時の装飾エフェクト */}
                <div className="absolute top-1 right-1 w-1 h-1 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                <div
                  className="absolute bottom-1 left-1 w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"
                  style={{ animationDelay: '0.2s' }}
                />
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
