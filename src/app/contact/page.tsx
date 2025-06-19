import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { ContactForm } from '@/components/forms/ContactForm';
import { Card } from '@/components/ui/Card';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'お問い合わせ | 美容室ウイング R',
  description:
    '美容室ウイング Rへのお問い合わせフォーム。髪のお悩みやご質問など、お気軽にご相談ください。',
};

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-secondary-50 via-white to-accent-50">
      <PageLayout
        titleJa="お問い合わせ"
        titleEn="Contact Us"
        description="髪のお悩みやご質問など、お気軽にご相談ください"
        maxWidth="6xl"
      >
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* お電話でのお問い合わせ */}
          <Card className="text-center bg-gradient-to-br from-primary-50 to-primary-100 border-l-4 border-primary-300 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg text-primary-900 mb-2">お電話</h3>
            <p className="text-2xl font-bold text-primary-800 mb-2">
              058-243-6478
            </p>
            <p className="text-sm text-gray-600 mb-4">
              営業時間：9:00〜19:00
              <br />
              定休日：火曜日
            </p>
            <a
              href="tel:058-243-6478"
              className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:shadow-lg inline-block"
            >
              今すぐ電話する
            </a>
          </Card>

          {/* 店舗情報 */}
          <Card className="text-center bg-gradient-to-br from-secondary-50 to-secondary-100 border-l-4 border-secondary-300 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg text-primary-900 mb-2">
              店舗情報
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              〒500-8381
              <br />
              岐阜市市橋3丁目7-22
              <br />
              駐車場：3台完備
            </p>
          </Card>

          {/* LINE予約（準備中） */}
          <Card className="text-center bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-300 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg text-primary-900 mb-2">
              LINE予約
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              LINE公式アカウントでの
              <br />
              予約システム準備中
            </p>
            <div className="bg-gray-200 text-gray-500 px-4 py-2 rounded-lg text-sm">
              近日公開予定
            </div>
          </Card>
        </div>

        <ContactForm />
      </PageLayout>
    </div>
  );
}
