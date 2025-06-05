import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ・ご予約 | 美容室ウイング R',
  description:
    '美容室ウイング Rへのお問い合わせ・ご予約はこちら。お電話またはお問い合わせフォームからお気軽にご連絡ください。営業時間：平日9:00-19:00、土曜9:00-18:00、日祝9:00-17:00',
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
