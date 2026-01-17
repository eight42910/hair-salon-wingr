import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { ContactForm } from '@/components/forms/ContactForm';
import { Card } from '@/components/ui/Card';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'お問い合わせ | 美容室ウイング R',
  description:
    '美容室ウイング Rへのお問い合わせフォーム。髪のお悩みやご質問など、お気軽にご相談ください。',
  openGraph: {
    title: 'お問い合わせ | 美容室ウイング R',
    description:
      '美容室ウイング Rへのお問い合わせフォーム。髪のお悩みやご質問など、お気軽にご相談ください。',
    images: [
      '/api/og?title=お問い合わせ&description=美容室ウイング%20Rへのお問い合わせフォーム&page=contact',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'お問い合わせ | 美容室ウイング R',
    description:
      '美容室ウイング Rへのお問い合わせフォーム。髪のお悩みやご質問など、お気軽にご相談ください。',
    images: [
      '/api/og?title=お問い合わせ&description=美容室ウイング%20Rへのお問い合わせフォーム&page=contact',
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="bg-bg">
      <PageLayout
        titleJa="お問い合わせ"
        titleEn="Contact Us"
        description="髪のお悩みやご質問など、お気軽にご相談ください"
        maxWidth="4xl"
      >
        <div className="mb-12 mx-auto">
          {/* お電話でのお問い合わせ */}
          <Card className="text-center border-l-4 border-accent2/40">
            <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-text mb-2 font-serif">
              お電話
            </h3>
            <p className="text-2xl font-semibold text-text mb-2">
              058-241-3375
            </p>
            <p className="text-sm text-muted mb-4">
              営業時間：9:00〜18:00
              <br />
              定休日：第2火曜日・第3日曜日
            </p>
            <a
              href="tel:058-241-3375"
              className="bg-accent text-white px-4 py-2 rounded-xl text-sm transition-colors duration-200 hover:bg-primary-700 inline-block"
            >
              今すぐ電話する
            </a>
          </Card>
        </div>

        <ContactForm />
      </PageLayout>
    </div>
  );
}
