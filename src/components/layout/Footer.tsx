import Link from 'next/link';
import { MapPin, Phone, Clock, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-accent-400 to-secondary-400 rounded-full translate-x-40 translate-y-40"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          {/* メインコンテンツ */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-2xl font-bold text-white">
                美容室ウイング R
              </h3>
            </div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent-300 to-transparent mx-auto mb-4"></div>
            <p className="text-primary-100 max-w-2xl mx-auto leading-relaxed">
              <span className="text-accent-200 font-medium">
                41年間地域に愛され続ける
              </span>
              、岐阜市のファミリーサロン。
              <br />
              <span className="text-accent-200">
                お客様一人ひとりに寄り添った丁寧な施術と、くつろぎの空間をご提供いたします。
              </span>
            </p>
          </div>

          {/* 店舗情報 */}
          <div className="max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-accent-300/30 shadow-2xl">
              <div className="space-y-6 text-primary-100">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-medium">〒501-3107</div>
                    <div className="text-primary-100 text-sm">
                      岐阜県岐阜市加野2-25-8
                    </div>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <a
                      href="tel:058-241-3375"
                      className="text-white font-medium hover:text-accent-200 transition-colors text-lg"
                    >
                      058-241-3375
                    </a>
                    <div className="text-primary-100 text-sm">
                      お電話でのご予約・お問い合わせ
                    </div>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-medium">
                      営業時間：9:00 - 18:00
                    </div>
                    <div className="text-primary-200 text-sm">
                      定休日：第2火曜日・第3日曜日
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* フッター下部 */}
        <div className="border-t border-primary-700/50 bg-gradient-to-r from-primary-900/80 to-primary-800/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              {/* プライバシーポリシー */}
              <div className="text-center md:text-left">
                <Link
                  href="/privacy-policy"
                  className="text-primary-200 hover:text-accent-200 transition-colors text-sm font-medium border-b border-transparent hover:border-accent-200"
                >
                  プライバシーポリシー
                </Link>
              </div>

              {/* コピーライト */}
              <div className="text-center md:text-right">
                <p className="text-primary-200 text-sm">
                  © 2024 美容室ウイング R. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
