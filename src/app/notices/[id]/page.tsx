import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CategoryBadge } from '@/components/notices/CategoryBadge';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Button } from '@/components/ui/Button';
import { getNotice } from '@/lib/microcms';
import {
  formatDate,
  stripHtml,
  getCategoryInfo,
} from '@/lib/utils/notice-utils';

<<<<<<< HEAD
// ISR設定: 24時間でページを再生成
export const revalidate = 86400;
=======
// ISR設定: 本番環境では10分でページを再生成
export const revalidate = 600;
>>>>>>> fix/notice-production-cache

interface NoticeDetailPageProps {
  params: { id: string };
}

// 動的メタデータ生成
export async function generateMetadata({
  params,
}: NoticeDetailPageProps): Promise<Metadata> {
  try {
    const notice = await getNotice(params.id);
    const categoryInfo = getCategoryInfo(notice.category);
    const description = stripHtml(notice.content).slice(0, 160);

    return {
      title: `${notice.title} | お知らせ | 美容室ウイング R`,
      description: description,
      keywords: [
        '美容室ウイング R',
        'お知らせ',
        categoryInfo.label,
        '岐阜市',
        '美容院',
        'ヘアサロン',
      ],
      openGraph: {
        title: notice.title,
        description: description,
        type: 'article',
        publishedTime: notice.publishedAt,
        authors: ['美容室ウイング R'],
        images: notice.thumbnailImage
          ? [
              {
                url: notice.thumbnailImage.url,
                width: notice.thumbnailImage.width,
                height: notice.thumbnailImage.height,
                alt: notice.title,
              },
            ]
          : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: notice.title,
        description: description,
        images: notice.thumbnailImage ? [notice.thumbnailImage.url] : [],
      },
    };
  } catch {
    return {
      title: 'お知らせが見つかりません | 美容室ウイング R',
      description: 'お探しのお知らせは見つかりませんでした。',
    };
  }
}

export default async function NoticeDetailPage({
  params,
}: NoticeDetailPageProps) {
  try {
    const notice = await getNotice(params.id);

    // パンくずナビ用のデータ
    const breadcrumbItems = [
      { label: 'ホーム', href: '/' },
      { label: 'お知らせ', href: '/notices' },
      { label: notice.title },
    ];

    return (
      <main className="min-h-screen pt-20 bg-white">
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* パンくずナビ */}
            <nav className="mb-8" aria-label="パンくずナビ">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                {breadcrumbItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2 text-gray-400">›</span>}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-gray-900 font-medium">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* ヘッダー */}
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <CategoryBadge category={notice.category} />
                {notice.isPinned && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    固定
                  </span>
                )}
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {notice.title}
              </h1>

              <time className="text-gray-500 text-sm">
                {formatDate(notice.publishedAt)}
              </time>
            </header>

            {/* アイキャッチ画像 */}
            {notice.thumbnailImage && (
              <div className="mb-8">
                <OptimizedImage
                  src={notice.thumbnailImage.url}
                  alt={notice.title}
                  width={800}
                  height={400}
                  className="w-full rounded-2xl"
                  priority
                />
              </div>
            )}

            {/* コンテンツ */}
            <div className="prose prose-lg max-w-none mb-12">
              <div
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: notice.content }}
              />
            </div>

            {/* CTA セクション */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ご質問・ご予約はお気軽に
              </h3>
              <p className="text-gray-600 mb-6">
                お知らせについてご不明な点がございましたら、お気軽にお問い合わせください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    お問い合わせ・ご予約
                  </Button>
                </Link>
                <Link href="/notices">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    お知らせ一覧に戻る
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    );
  } catch {
    // お知らせが見つからない場合は404ページを表示
    notFound();
  }
}
