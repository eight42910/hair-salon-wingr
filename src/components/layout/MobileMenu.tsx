import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Phone, X, MapPin, Clock } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { nameJa: 'ホーム', nameEn: 'Home', href: '/' },
  { nameJa: 'コンセプト', nameEn: 'Concept', href: '/concept' },
  { nameJa: 'メニュー', nameEn: 'Menu', href: '/menu' },
  { nameJa: 'オーナー', nameEn: 'Owner', href: '/owner' },
  { nameJa: 'アクセス', nameEn: 'Access', href: '/access' },
  { nameJa: 'お問い合わせ', nameEn: 'Contact', href: '/contact' },
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // スクロール制御とESCキー対応
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };

      document.addEventListener('keydown', handleEscape);

      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      {/* オーバーレイ */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* メニューパネル */}
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          {/* ヘッダー */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link
              href="/"
              className="text-xl font-bold text-primary-900"
              onClick={onClose}
            >
              ウイング R
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="メニューを閉じる"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* ナビゲーション */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-6 py-8">
              <ul className="space-y-6">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block group"
                    >
                      <div className="text-lg font-bold text-primary-900 group-hover:text-primary-700 transition-colors">
                        {item.nameJa}
                      </div>
                      <div className="text-sm text-primary-600 uppercase tracking-wide">
                        {item.nameEn}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 店舗情報 */}
            <div className="mt-6 px-4">
              <div className="bg-primary-50 rounded-lg p-4 space-y-3">
                <div className="flex items-center text-primary-700">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">058-241-3375</span>
                </div>
                <div className="flex items-center text-primary-700">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">9:00 - 18:00</span>
                </div>
                <div className="flex items-start text-primary-700">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">岐阜市加野2-25-8</span>
                </div>
              </div>
            </div>
          </div>

          {/* フッター */}
          <div className="p-4 border-t border-gray-200 space-y-3">
            <a
              href="tel:058-241-3375"
              className="flex items-center justify-center w-full py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
              onClick={onClose}
            >
              <Phone className="w-4 h-4 mr-2" />
              お電話でご予約
            </a>
            <Link href="/booking" onClick={onClose}>
              <Button className="w-full">WEBで予約する</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
