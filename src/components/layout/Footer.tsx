import Link from 'next/link';
import { MapPin, Phone, Clock } from 'lucide-react';

const navigation = [
  { nameJa: 'ホーム', href: '/' },
  { nameJa: '特徴', href: '/#feature' },
  { nameJa: 'メニュー', href: '/#menu' },
  { nameJa: 'よくある質問', href: '/#faq' },
  { nameJa: 'スタッフ', href: '/owner' },
  { nameJa: 'お問い合わせ', href: '/contact' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 店舗情報 */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">美容室ウイング R</h3>
            <p className="text-primary-100 mb-6">
              41年間地域に愛され続ける、岐阜市のファミリーサロン
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary-300" />
                <span className="text-primary-100">
                  〒501-3107 岐阜県岐阜市加野2-25-8
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-300" />
                <a
                  href="tel:058-241-3375"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  058-241-3375
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-primary-300" />
                <span className="text-primary-100">9:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サイトマップ</h4>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-primary-100 hover:text-white transition-colors"
                >
                  {item.nameJa}
                </Link>
              ))}
            </nav>
          </div>

          {/* 営業時間 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">営業時間</h4>
            <div className="space-y-1 text-sm text-primary-100">
              <p>月〜土：9:00 - 18:00</p>
              <p>日曜日：9:00 - 18:00</p>
              <p className="text-primary-300 mt-2">定休日:</p>
              <p>第2火曜日・第3日曜日</p>
            </div>
          </div>
        </div>

        {/* 予約・お問い合わせ */}
        <div className="border-t border-primary-700 mt-8 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-white mb-4">
              ご予約・お問い合わせ
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:058-241-3375"
                className="bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>058-241-3375</span>
              </a>
              <Link
                href="/contact"
                className="bg-secondary-600 hover:bg-secondary-500 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 pt-6 text-center">
          <p className="text-primary-100 text-sm">
            © 2024 美容室ウイング R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
