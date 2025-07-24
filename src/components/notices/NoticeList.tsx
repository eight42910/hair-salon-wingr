'use client';

import { motion } from 'framer-motion';
import { NoticeCard } from './NoticeCard';
import { Notice } from '@/types/notice';
import { sortNotices } from '@/lib/utils/notice-utils';

interface NoticeListProps {
  notices: Notice[];
  isLoading?: boolean;
  variant?: 'default' | 'compact';
  showCategory?: boolean;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const LoadingSkeleton = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-sm border p-6 animate-pulse"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-6 bg-gray-200 rounded-full w-20"></div>
            <div className="h-5 bg-gray-200 rounded-full w-10"></div>
          </div>
          <div className="h-6 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="flex justify-between items-center pt-2">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="h-8 bg-gray-200 rounded w-20"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const NoticeList: React.FC<NoticeListProps> = ({
  notices,
  isLoading = false,
  variant = 'default',
  showCategory = true,
  className = '',
}) => {
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (notices.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">
          お知らせはまだありません
        </div>
        <p className="text-gray-400 text-sm">
          新しいお知らせが投稿されると、こちらに表示されます。
        </p>
      </div>
    );
  }

  const sortedNotices = sortNotices(notices);

  const gridClasses = {
    default: 'grid gap-8 md:grid-cols-2 lg:grid-cols-3',
    compact: 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`${gridClasses[variant]} ${className}`}
    >
      {sortedNotices.map((notice) => (
        <motion.div key={notice.id} variants={itemVariants}>
          <NoticeCard
            notice={notice}
            variant={variant === 'compact' ? 'compact' : 'default'}
            showCategory={showCategory}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
