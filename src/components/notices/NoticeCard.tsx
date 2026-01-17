'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CategoryBadge } from './CategoryBadge';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Button } from '@/components/ui/Button';
import { Notice } from '@/types/notice';
import {
  stripHtml,
  formatRelativeDate,
  isNewNotice,
  formatDate,
} from '@/lib/utils/notice-utils';

interface NoticeCardProps {
  notice: Notice;
  variant?: 'default' | 'featured' | 'compact';
  showCategory?: boolean;
  className?: string;
}

export const NoticeCard: React.FC<NoticeCardProps> = ({
  notice,
  variant = 'default',
  showCategory = true,
  className = '',
}) => {
  const isNew = isNewNotice(notice.publishedAt);

  // A案のデザインを compact variant として実装
  if (variant === 'compact') {
    return (
      <Link href={`/notices/${notice.id}`} passHref>
        <motion.div
          whileHover={{ backgroundColor: 'var(--surface2)' }}
          className={`block w-full px-4 py-5 border-b border-border transition-colors duration-200 ${className}`}
        >
          <div className="grid gap-y-2 sm:grid-cols-[12rem,1fr] sm:gap-x-6 sm:items-start">
            {/* 日付とカテゴリ */}
            <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
              <time dateTime={notice.publishedAt}>
                {formatDate(notice.publishedAt, 'short')}
              </time>
              {showCategory && (
                <CategoryBadge category={notice.category} size="sm" />
              )}
            </div>

            {/* タイトルと新着バッジ */}
            <div className="flex items-start gap-3 min-w-0">
              <h3 className="font-semibold text-text group-hover:text-accent transition-colors leading-snug break-words">
                {notice.title}
              </h3>
              {isNew && (
                <span className="mt-0.5 bg-accent2/15 text-accent text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                  NEW
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  // --- 以下、既存の default / featured variant のコード ---
  const excerpt = stripHtml(notice.content).slice(0, 120);
  const cardVariants = {
    default: 'p-6',
    featured: 'p-8',
    compact: 'p-5', // この行は使われなくなる
  };

  return (
    <motion.article
      whileHover={{ y: -2 }}
      className={`
        bg-surface rounded-2xl shadow-sm border border-border hover:shadow-md hover:border-accent2
        transition-all duration-200 relative overflow-hidden
        ${cardVariants[variant]}
        ${className}
      `}
    >
      {/* 固定表示インジケーター */}
      {notice.isPinned && (
        <div className="absolute top-0 right-0 bg-accent text-white text-xs px-2 py-1 rounded-bl-lg font-medium">
          固定
        </div>
      )}

      {/* サムネイル画像 */}
      {notice.thumbnailImage && (
        <div className="relative -mx-6 -mt-6 mb-4 aspect-[16/9] rounded-t-2xl overflow-hidden">
          <OptimizedImage
            src={notice.thumbnailImage.url}
            alt={notice.title}
            width={400}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      <div className="space-y-3">
        {/* カテゴリ・新着バッジ */}
        <div className="flex items-center gap-2">
          {showCategory && (
            <CategoryBadge
              category={notice.category}
              size={'md'}
            />
          )}
          {isNew && (
            <span className="bg-accent2 text-white text-xs px-2 py-1 rounded-full font-medium">
              NEW
            </span>
          )}
        </div>

        {/* タイトル */}
        <h3
          className={`
            font-semibold text-text line-clamp-2 hover:text-accent transition-colors
            ${
              variant === 'featured'
                ? 'text-xl'
                : 'text-lg'
            }
          `}
        >
          <Link href={`/notices/${notice.id}`}>{notice.title}</Link>
        </h3>

        {/* 内容（default/featuredでは表示） */}
        <p className="text-muted text-sm line-clamp-3">
          {excerpt}
          {excerpt.length >= 120 && '...'}
        </p>

        {/* フッター */}
        <div className="flex justify-between items-center pt-2">
          <time className="text-sm text-muted">
            {formatRelativeDate(notice.publishedAt)}
          </time>

          <Link href={`/notices/${notice.id}`}>
            <Button variant="outline" size="sm">
              詳細を見る
            </Button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
 
