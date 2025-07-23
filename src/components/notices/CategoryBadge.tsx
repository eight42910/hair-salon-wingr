'use client';

import { Info, Gift, Clock, AlertTriangle } from 'lucide-react';
import { NoticeCategory } from '@/types/notice';
import { getCategoryInfo } from '@/lib/utils/notice-utils';

interface CategoryBadgeProps {
  category: NoticeCategory;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const iconMap = {
  notice: Info,
  campaign: Gift,
  schedule: Clock,
  important: AlertTriangle,
};

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  size = 'md',
  className = '',
}) => {
  const categoryInfo = getCategoryInfo(category);
  const Icon = iconMap[category];

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1 rounded-full font-medium
        ${categoryInfo.color}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      <Icon size={iconSizes[size]} />
      {categoryInfo.label}
    </span>
  );
};
