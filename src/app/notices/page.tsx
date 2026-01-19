import type { Metadata } from 'next';
import { NoticeList } from '@/components/notices/NoticeList';
import { PageLayout } from '@/components/layout/PageLayout';
import { getNotices } from '@/lib/microcms';

// ISR設定: 本番環境では1分でページを再生成
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'お知らせ一覧 | 美容室ウイング R',
  description:
    '美容室ウイング Rからの最新のお知らせ・キャンペーン情報をご覧いただけます。営業時間変更や特別な割引情報をお届けします。',
  keywords: [
    '美容室ウイング R',
    'お知らせ',
    'キャンペーン',
    '営業時間',
    '岐阜市',
    '美容院',
    'ヘアサロン',
  ],
  openGraph: {
    title: 'お知らせ一覧 | 美容室ウイング R',
    description: '美容室ウイング Rからの最新情報をお届けします。',
    type: 'website',
  },
};

export default async function NoticesPage() {
  try {
    const { contents: notices } = await getNotices({ limit: 20 });

    return (
      <PageLayout
        titleJa="お知らせ"
        titleEn="News & Information"
        description="美容室ウイング Rからの最新情報をお届けします"
      >
        <NoticeList notices={notices} />
      </PageLayout>
    );
  } catch (error) {
    console.error('お知らせページの読み込みエラー:', error);

    return (
      <PageLayout
        titleJa="お知らせ"
        titleEn="News & Information"
        description="美容室ウイング Rからの最新情報をお届けします"
      >
        <div className="text-center">
          <div className="bg-surface2 border border-border rounded-lg p-8 max-w-md mx-auto">
            <p className="text-accent text-lg font-semibold mb-2">
              お知らせの読み込みに失敗しました
            </p>
            <p className="text-muted text-sm mb-4">
              しばらく経ってから再度お試しください。
            </p>
            <p className="text-muted text-sm">
              問題が続く場合は、お電話でお問い合わせください。
              <br />
              <strong>TEL: 058-241-3375</strong>
            </p>
          </div>
        </div>
      </PageLayout>
    );
  }
}
