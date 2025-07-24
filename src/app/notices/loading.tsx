import { PageLayout } from '@/components/layout/PageLayout';

export default function LoadingPage() {
  return (
    <PageLayout
      titleJa="お知らせ"
      titleEn="News & Information"
      description="美容室ウイング Rからの最新情報をお届けします"
    >
      {/* ローディングスケルトン */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border p-6 animate-pulse"
          >
            <div className="space-y-3">
              {/* カテゴリバッジ */}
              <div className="flex items-center gap-2">
                <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                <div className="h-5 bg-gray-200 rounded-full w-10"></div>
              </div>

              {/* タイトル */}
              <div className="h-6 bg-gray-200 rounded w-full"></div>

              {/* 内容 */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>

              {/* フッター */}
              <div className="flex justify-between items-center pt-2">
                <div className="h-4 bg-gray-200 rounded w-16"></div>
                <div className="h-8 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ローディング表示 */}
      <div className="text-center mt-8">
        <div className="inline-flex items-center gap-2 text-gray-500">
          <div className="w-5 h-5 border-2 border-gray-300 border-t-primary-500 rounded-full animate-spin"></div>
          <span>お知らせを読み込み中...</span>
        </div>
      </div>
    </PageLayout>
  );
}
  