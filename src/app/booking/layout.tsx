import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ご予約 | 美容室ウイング R',
  description:
    '美容室ウイング R のご予約フォーム。お電話でのご予約も承っております。営業時間：平日9:00-19:00、土曜9:00-18:00、日祝9:00-17:00',
  openGraph: {
    title: 'ご予約 | 美容室ウイング R',
    description:
      '美容室ウイング R のご予約フォーム。お電話またはWEBフォームからお申し込みください。',
    type: 'website',
  },
  keywords: ['美容室', '予約', 'ヘアサロン', '岐阜市', 'ウイング R', 'WEB予約'],
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
