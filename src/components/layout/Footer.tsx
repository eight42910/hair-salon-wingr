import Link from 'next/link';
import { MapPin, Phone, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-accent-400 to-secondary-400 rounded-full translate-x-40 translate-y-40"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            {/* 店舗情報 */}
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-white">
                美容室ウイング R
              </h3>
              <p className="text-primary-100 text-sm mb-4">
                41年の歴史と信頼で、3世代にわたってお客様に愛され続けているファミリーサロンです
              </p>

              <div className="space-y-3 text-primary-100 text-sm">
                <div className="flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-3 text-accent-300 flex-shrink-0" />
                  <span>岐阜市加野2-10-15</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-3 text-accent-300 flex-shrink-0" />
                  <a
                    href="tel:058-271-3664"
                    className="hover:text-white transition-colors"
                  >
                    058-241-3375
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-3 text-accent-300 flex-shrink-0" />
                  <span>9:00-18:00（定休日：第2火曜・第3日曜）</span>
                </div>
              </div>
            </div>

            {/* フッター情報 */}
            <div className="border-t border-white/20 pt-6">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-primary-200">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </Link>
                <span className="hidden md:inline">|</span>
                <p>&copy; 2024 美容室ウイング R. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
