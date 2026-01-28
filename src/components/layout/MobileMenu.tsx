'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll-utils';
import { LineButton, Logo } from '@/components/ui';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { nameJa: 'ホーム', nameEn: 'Home', href: '/', sectionId: 'home' },
  {
    nameJa: '特徴',
    nameEn: 'Feature',
    href: '/#feature',
    sectionId: 'feature',
  },
  { nameJa: 'メニュー', nameEn: 'Menu', href: '/#menu', sectionId: 'menu' },
  { nameJa: 'スタッフ', nameEn: 'Staff', href: '/#staff', sectionId: 'staff' },
  { nameJa: 'よくある質問', nameEn: 'FAQ', href: '/#faq', sectionId: 'faq' },
  {
    nameJa: 'アクセス',
    nameEn: 'Access',
    href: '/#access',
    sectionId: 'access',
  },
  { nameJa: 'お問い合わせ', nameEn: 'Contact', href: '/contact' },
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // スクロール制御とESCキー対応
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    if (isOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };

      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleNavClick = (item: (typeof navigation)[0]) => {
    onClose(); // まずメニューを閉じる

    if (item.sectionId) {
      // セクションIDがある場合はスムーズスクロール
      scrollToSection(item.sectionId);
    }
    // セクションIDがない場合は通常のページ遷移（Linkコンポーネントが処理）
  };

  const handleLineButtonClick = () => {
    onClose(); // メニューを閉じる
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      {/* オーバーレイ */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
      />

      {/* メニューパネル */}
      <div className="fixed top-0 right-0 h-full w-full max-w-xs sm:max-w-80 bg-surface shadow-lg border-l border-border transform transition-transform duration-300 ease-out">
        <div className="flex flex-col h-full">
          {/* ヘッダー */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-surface2">
            <Logo size="sm" href="/" onClick={onClose} className="text-lg" />

            {/* Closeボタン (Menuボタンとデザイン統一) */}
            <button
              onClick={onClose}
              className="relative flex items-center justify-center w-12 h-12 rounded-full border border-border bg-surface transition-colors duration-200 hover:bg-surface2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              aria-label="Close menu"
            >
              <span className="font-medium text-xs text-text tracking-wider">
                Close
              </span>
            </button>
          </div>

          {/* ナビゲーション */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-8 pb-10">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.href} className="relative">
                    {item.sectionId ? (
                      <button
                        onClick={() => handleNavClick(item)}
                        className="block group w-full text-left relative overflow-hidden rounded-lg p-3 transition-colors duration-200 hover:bg-surface2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                      >
                        <div className="relative z-10">
                          <div className="text-base font-medium text-text group-hover:text-accent transition-colors duration-200">
                            {item.nameJa}
                          </div>
                          <div className="text-[11px] text-muted uppercase tracking-wider opacity-75 mt-1">
                            {item.nameEn}
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item)}
                        className="block group relative overflow-hidden rounded-lg p-3 transition-colors duration-200 hover:bg-surface2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                      >
                        <div className="relative z-10">
                          <div className="text-base font-medium text-text group-hover:text-accent transition-colors duration-200">
                            {item.nameJa}
                          </div>
                          <div className="text-[11px] text-muted uppercase tracking-wider opacity-75 mt-1">
                            {item.nameEn}
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* 店舗情報 */}
            <div className="mt-6 px-4">
              <div className="bg-surface2 rounded-xl p-4 space-y-3 border border-border">
                <div className="flex items-center text-accent transition-colors duration-200">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">058-241-3375</span>
                </div>
                <div className="flex items-center text-accent transition-colors duration-200">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">
                    9:00 - 18:00／月曜・第2火曜・第3日曜 定休
                  </span>
                </div>
                <div className="flex items-start text-accent transition-colors duration-200">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">岐阜県岐阜市加野2-25-8</span>
                </div>
              </div>
            </div>
          </div>

          {/* フッター */}
          <div className="p-4 border-t border-border space-y-3">
            <div onClick={handleLineButtonClick}>
              <LineButton
                variant="line-official"
                text="LINEで予約"
                className="w-full"
              />
            </div>
            <a
              href="tel:058-241-3375"
              className="flex items-center justify-center w-full py-3 border border-border text-accent font-medium rounded-xl hover:bg-surface2 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              onClick={onClose}
            >
              <div className="relative z-10 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>お電話でご予約</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
