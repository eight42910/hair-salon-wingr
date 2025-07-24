import Link from 'next/link';
import { NoticeList } from './NoticeList';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { getNotices } from '@/lib/microcms';

interface LatestNoticesProps {
  limit?: number;
  className?: string;
}

export const LatestNotices: React.FC<LatestNoticesProps> = async ({
  limit = 3,
  className = '',
}) => {
  try {
    const { contents: notices } = await getNotices({ limit });

    return (
      <section className={`py-16 bg-white ${className}`}>
        <div className="container mx-auto px-4">
          <SectionTitle
            mainTitle="最新のお知らせ"
            subTitle="Latest News"
            description="美容室ウイング Rからの最新情報をお届けします"
          />

          {notices.length > 0 ? (
            <>
              <NoticeList
                notices={notices}
                variant="compact"
                className="mb-8"
              />

              <div className="text-center">
                <Link href="/notices">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                  >
                    お知らせ一覧を見る
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-md mx-auto">
                <div className="text-4xl mb-4">📢</div>
                <p className="text-gray-700 text-lg font-medium mb-2">
                  お知らせ準備中
                </p>
                <p className="text-gray-600 text-sm">
                  新しいお知らせが投稿されると、こちらに表示されます。
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('お知らせの取得に失敗しました:', error);

    return (
      <section className={`py-16 bg-white ${className}`}>
        <div className="container mx-auto px-4">
          <SectionTitle
            mainTitle="最新のお知らせ"
            subTitle="Latest News"
            description="美容室ウイング Rからの最新情報をお届けします"
          />

          <div className="text-center py-12">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-md mx-auto">
              <div className="text-4xl mb-4">⚙️</div>
              <p className="text-gray-700 text-lg font-medium mb-2">
                システム準備中
              </p>
              <p className="text-gray-600 text-sm mb-6">
                お知らせ機能の準備を進めております。
                <br />
                しばらくお待ちください。
              </p>
              <Link href="/contact">
                <Button variant="primary" size="sm">
                  お問い合わせ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
