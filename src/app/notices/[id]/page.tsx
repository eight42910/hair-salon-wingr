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
        <article className="max-w-3xl mx-auto px-4 py-12">
          {/* パンくずナビ */}
          <nav className="mb-8" aria-label="パンくずナビ">
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
          <header className="mb-8 border-b pb-8">
            {/* 日付とカテゴリ */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm text-gray-500">
              <time dateTime={notice.publishedAt}>
                {formatDate(notice.publishedAt)}
              </time>
              <CategoryBadge category={notice.category} size="sm" />
              {notice.isPinned && (
                <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3 h-3"
                  >
                    <path d="M8 1.75a.75.75 0 0 1 .75.75V7h-1.5V2.5A.75.75 0 0 1 8 1.75Z" />
                    <path d="m9.25 7.25.335-2.07a.75.75 0 0 0-.325-.815l-2.25-1.5a.75.75 0 0 0-.82 1.22l.885.59-1.09 6.75a.75.75 0 0 0 1.48.24L8 8.851l.707 4.385a.75.75 0 0 0 1.48-.24l-1.09-6.75.885-.59a.75.75 0 0 0 .505-1.055l-2.25-3.75a.75.75 0 0 0-1.28-.53l-2.25 3.75a.75.75 0 0 0 .505 1.055l.885.59-1.09 6.75a.75.75 0 0 0 1.48.24L8 8.851l.707 4.385a.75.75 0 0 0 1.48-.24l-1.09-6.75.885-.59a.75.75 0 0 0-.325.815L9.25 7.25Z" />
                    <path d="M3.5 9.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Z" />
                  </svg>
                  注目
                </span>
              )}
            </div>

            {/* タイトル */}
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              {notice.title}
            </h1>
          </header>

          {/* コンテンツ本文 */}
          <div className="prose prose-lg prose-slate max-w-none leading-relaxed mb-12">
            <div dangerouslySetInnerHTML={{ __html: notice.content }} />
          </div>

          {/* CTA セクション */}
          <div className="bg-gray-50 border-t border-b border-gray-200 py-12">
            <div className="max-w-2xl mx-auto text-center px-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ご予約・お問い合わせ
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                ご不明な点がございましたら、お気軽にご連絡ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    お問い合わせフォーム
                  </Button>
                </Link>
                <Link href="/notices">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    お知らせ一覧へ
                  </Button>
                </Link>
              </div>
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
