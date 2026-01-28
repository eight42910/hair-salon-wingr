import Link from 'next/link';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Logo } from '@/components/ui';

export const Footer = () => {
  return (
    <footer className="relative bg-surface2 text-text border-t border-border">
      <div className="container mx-auto px-4 py-10">
        <div className="text-center">
          {/* 店舗情報 */}
          <div className="max-w-md mx-auto bg-surface rounded-2xl p-6 mb-6 border border-border shadow-sm">
            <div className="mb-4 flex justify-center">
              <Logo size="md" className="text-text hover:text-accent" href="/" />
            </div>
            <p className="text-muted text-sm mb-4 leading-relaxed">
              41年の歴史と信頼で、3世代にわたってお客様に愛され続けているファミリーサロンです
            </p>

            <div className="space-y-3 text-muted text-sm">
              <div className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-3 text-accent2 flex-shrink-0" />
                <span>岐阜県岐阜市加野2-25-8</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-3 text-accent2 flex-shrink-0" />
                <a
                  href="tel:058-241-3375"
                  className="hover:text-accent transition-colors"
                >
                  058-241-3375
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-4 h-4 mr-3 text-accent2 flex-shrink-0" />
                <span>9:00-18:00／第2火曜・第3日曜 定休</span>
              </div>
            </div>
          </div>

          {/* フッター情報 */}
          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted">
              <Link
                href="/privacy"
                className="hover:text-accent transition-colors"
              >
                プライバシーポリシー
              </Link>
              <span className="hidden md:inline text-border">|</span>
              <p>&copy; 2025 美容室ウイング R. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
