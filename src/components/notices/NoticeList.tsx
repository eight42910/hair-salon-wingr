import { NoticeCard } from './NoticeCard';
import { Notice, NoticeSummary } from '@/types/notice';
import { sortNotices } from '@/lib/utils/notice-utils';

interface NoticeListProps {
  notices: Array<Notice | NoticeSummary>;
  isLoading?: boolean;
  variant?: 'default' | 'compact';
  showCategory?: boolean;
  className?: string;
}

const LoadingSkeleton = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className="bg-surface rounded-2xl shadow-sm border border-border p-6 animate-pulse"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-6 bg-surface2 rounded-full w-20"></div>
            <div className="h-5 bg-surface2 rounded-full w-10"></div>
          </div>
          <div className="h-6 bg-surface2 rounded w-full"></div>
          <div className="h-4 bg-surface2 rounded w-full"></div>
          <div className="h-4 bg-surface2 rounded w-3/4"></div>
          <div className="flex justify-between items-center pt-2">
            <div className="h-4 bg-surface2 rounded w-16"></div>
            <div className="h-8 bg-surface2 rounded w-20"></div>
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
        <div className="text-muted text-lg mb-2">
          お知らせはまだありません
        </div>
        <p className="text-muted text-sm">
          新しいお知らせが投稿されると、こちらに表示されます。
        </p>
      </div>
    );
  }

  const sortedNotices = sortNotices(notices);

  const gridClasses = {
    default: 'grid gap-8 md:grid-cols-2 lg:grid-cols-3',
    compact: 'block border-t border-border',
  };

  return (
    <div className={`${gridClasses[variant]} ${className}`}>
      {sortedNotices.map((notice) => (
        <div key={notice.id}>
          <NoticeCard
            notice={notice}
            variant={variant === 'compact' ? 'compact' : 'default'}
            showCategory={showCategory}
          />
        </div>
      ))}
    </div>
  );
};
