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

export const revalidate = 60;

interface NoticeDetailPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: NoticeDetailPageProps): Promise<Metadata> {
  try {
    const notice = await getNotice(params.id);
    const categoryInfo = getCategoryInfo(notice.category);
    const description = stripHtml(notice.content).slice(0, 160);

    return {
      title: `${notice.title} | お知らせ | 美容室ウイング R`,
      description,
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
        description,
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
        description,
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

    const breadcrumbItems = [
      { label: 'ホーム', href: '/' },
      { label: 'お知らせ', href: '/notices' },
      { label: notice.title },
    ];

    return (
      <main className="min-h-screen bg-white pt-20">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* パンくずナビ */}
          <nav className="mb-6" aria-label="パンくずナビ">
            <ol className="flex flex-wrap items-center text-sm text-gray-500">
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
          <header className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <CategoryBadge category={notice.category} />
              {notice.isPinned && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  固定
                </span>
              )}
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
              {notice.title}
            </h1>

            <time className="text-gray-500 text-sm">
              {formatDate(notice.publishedAt)}
            </time>
          </header>

          {/* アイキャッチ画像 */}
          {notice.thumbnailImage && (
            <div className="mb-10">
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

          {/* コンテンツ本文 */}
          <div className="prose prose-lg prose-slate max-w-none leading-relaxed mb-12">
            <div dangerouslySetInnerHTML={{ __html: notice.content }} />
          </div>

          {/* CTA セクション */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ご質問・ご予約はお気軽に
            </h3>
            <p className="text-gray-600 mb-6">
              お知らせについてご不明な点がございましたら、お気軽にお問い合わせください。
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
        </article>
      </main>
    );
  } catch (error) {
    console.error('お知らせ詳細ページの読み込みエラー:', error);
    notFound();
  }
}
