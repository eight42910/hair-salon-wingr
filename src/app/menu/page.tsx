import { Metadata } from 'next';
import MenuContent from './MenuContent';

export const metadata: Metadata = {
  title: 'メニュー・料金 | 美容室ウイング R',
  description:
    '美容室ウイング R のメニューと料金のご案内。カット、カラー、パーマなど豊富なメニューをご用意しています。',
};

export default function MenuPage() {
  return <MenuContent />;
}
