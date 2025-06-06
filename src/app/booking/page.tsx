import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { BookingForm } from '@/components/forms/BookingForm';

export const metadata: Metadata = {
  title: 'ご予約 | 美容室ウイング R',
  description: '美容室ウイング Rのオンライン予約フォーム。お客様のご都合に合わせて24時間予約受付中。',
};

export default function BookingPage() {
  return (
    <div className="bg-gradient-to-b from-primary-50 via-white to-accent-50">
      <PageLayout
        title="ご予約フォーム"
        subtitle="オンラインで24時間予約受付中。お客様のご希望に合わせてスケジュールを調整いたします。"
        maxWidth="6xl"
      >
        <BookingForm />
      </PageLayout>
    </div>
  );
}
