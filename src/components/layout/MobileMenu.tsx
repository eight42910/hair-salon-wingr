'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { Phone, X, MapPin, Clock, Scissors } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll-utils';
import { LineButton } from '@/components/ui/LineButton';

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

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      {/* オーバーレイ */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* メニューパネル */}
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-out">
        <div className="flex flex-col h-full">
          {/* ヘッダー */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-primary-50/50 to-accent-50/50">
            <Link
              href="/"
              className="text-xl font-bold text-primary-900 hover:text-primary-700 transition-colors duration-200 flex items-center space-x-2"
              onClick={onClose}
            >
              <Scissors className="w-5 h-5 text-primary-600" />
              <span>ウイング R</span>
            </Link>

            {/* 美容室らしい閉じるボタン */}
            <button
              onClick={onClose}
              className="relative group p-2 rounded-full bg-gradient-to-br from-primary-50 to-accent-50 hover:from-primary-100 hover:to-accent-100 border border-primary-200 hover:border-primary-300 transition-all duration-300 hover:scale-110 hover:shadow-md"
              aria-label="メニューを閉じる"
            >
              {/* 背景エフェクト */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-100/50 to-accent-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Xアイコン */}
              <X className="w-4 h-4 text-primary-700 group-hover:text-primary-800 transition-all duration-300 group-hover:rotate-90 relative z-10" />

              {/* 装飾ドット */}
              <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </button>
          </div>

          {/* ナビゲーション */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-8 pb-10">
              <ul className="space-y-2">
                {navigation.map((item, index) => (
                  <li key={item.href} className="relative">
                    {item.sectionId ? (
                      <button
                        onClick={() => handleNavClick(item)}
                        className="block group w-full text-left relative overflow-hidden rounded-xl p-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:shadow-md hover:scale-[1.02] cursor-pointer"
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        {/* ホバー時の背景エフェクト */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-accent-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                        {/* ホバー時の左側アクセントライン */}
                        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r-full" />

                        <div className="relative z-10">
                          <div className="text-lg font-bold text-primary-900 group-hover:text-primary-700 transition-all duration-300 group-hover:translate-x-2">
                            {item.nameJa}
                          </div>
                          <div className="text-xs text-primary-600 uppercase tracking-wider opacity-75 mt-1 group-hover:opacity-100 group-hover:text-primary-500 transition-all duration-300 group-hover:translate-x-2">
                            {item.nameEn}
                          </div>
                        </div>

                        {/* ホバー時の右側矢印アイコン */}
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                          <div className="w-2 h-2 border-r-2 border-b-2 border-primary-500 transform rotate-[-45deg]" />
                        </div>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item)}
                        className="block group relative overflow-hidden rounded-xl p-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:shadow-md hover:scale-[1.02] cursor-pointer"
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        {/* ホバー時の背景エフェクト */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-accent-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                        {/* ホバー時の左側アクセントライン */}
                        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r-full" />

                        <div className="relative z-10">
                          <div className="text-lg font-bold text-primary-900 group-hover:text-primary-700 transition-all duration-300 group-hover:translate-x-2">
                            {item.nameJa}
                          </div>
                          <div className="text-xs text-primary-600 uppercase tracking-wider opacity-75 mt-1 group-hover:opacity-100 group-hover:text-primary-500 transition-all duration-300 group-hover:translate-x-2">
                            {item.nameEn}
                          </div>
                        </div>

                        {/* ホバー時の右側矢印アイコン */}
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                          <div className="w-2 h-2 border-r-2 border-b-2 border-primary-500 transform rotate-[-45deg]" />
                        </div>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* 店舗情報 */}
            <div className="mt-6 px-4">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-4 space-y-3 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-default">
                <div className="flex items-center text-primary-700 hover:text-primary-600 transition-colors duration-200">
                  <Phone className="w-4 h-4 mr-2 hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm font-medium">058-241-3375</span>
                </div>
                <div className="flex items-center text-primary-700 hover:text-primary-600 transition-colors duration-200">
                  <Clock className="w-4 h-4 mr-2 hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm">9:00 - 18:00</span>
                </div>
                <div className="flex items-start text-primary-700 hover:text-primary-600 transition-colors duration-200">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm">岐阜市加野2-25-8</span>
                </div>
              </div>
            </div>
          </div>

          {/* フッター */}
          <div className="p-4 border-t border-gray-200 space-y-3">
            <LineButton
              variant="line-official"
              text="LINEで予約"
              className="w-full"
              onClick={onClose}
            />
            <a
              href="tel:058-241-3375"
              className="flex items-center justify-center w-full py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-xl hover:bg-primary-600 hover:text-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden group"
              onClick={onClose}
            >
              {/* ホバー時の背景アニメーション */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="relative z-10 flex items-center">
                <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                <span>お電話でご予約</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
