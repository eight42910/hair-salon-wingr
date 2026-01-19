'use client';

import { NoticeCategory } from '@/types/notice';
import { getCategoryInfo } from '@/lib/utils/notice-utils';

interface CategoryBadgeProps {
  category: NoticeCategory;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  size = 'md',
  className = '',
}) => {
  const categoryInfo = getCategoryInfo(category);

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  // カテゴリ情報が取得できない場合のフォールバック
  if (!categoryInfo) {
    return (
      <span
        className={`
          inline-flex items-center rounded-full font-medium
          bg-surface2 text-accent
          ${sizeClasses[size]}
          ${className}
        `}
      >
        お知らせ
      </span>
    );
  }

  return (
      <span
        className={`
        inline-flex items-center rounded-full font-medium
        ${categoryInfo.color}
        ${sizeClasses[size]}
        ${className}
      `}
      >
      {categoryInfo.label}
    </span>
  );
};
