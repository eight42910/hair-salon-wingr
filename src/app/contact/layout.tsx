import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ・ご予約 | 美容室ウイング R',
  description:
    '美容室ウイング Rへのお問い合わせ・ご予約はこちら。お電話またはお問い合わせフォームからお気軽にご連絡ください。営業時間：9:00-18:00、第2火曜・第3日曜 定休',
  openGraph: {
    title: 'お問い合わせ・ご予約 | 美容室ウイング R',
    description:
      '美容室ウイング Rへのお問い合わせ・ご予約はこちら。お電話またはお問い合わせフォームからお気軽にご連絡ください。',
    type: 'website',
  },
  keywords: [
    '美容室',
    '予約',
    'お問い合わせ',
    '岐阜市',
    'ヘアサロン',
    'ウイング R',
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
