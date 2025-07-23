import { NoticeCategory, categoryConfig } from '@/types/notice';

// HTMLタグ除去
export const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, '');
};

// 日付フォーマット
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);

    // 無効な日付の場合は現在日時を返す
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date string: ${dateString}`);
      return new Intl.DateTimeFormat('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date());
    }

    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  } catch (error) {
    console.error('Date formatting error:', error);
    return '日付不明';
  }
};

// 相対日付表示（3日以内は「○日前」、それ以外は通常の日付）
export const formatRelativeDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);

    // 無効な日付の場合は通常の日付フォーマットを返す
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date string: ${dateString}`);
      return formatDate(dateString);
    }

    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffInDays === 0) {
      return '今日';
    } else if (diffInDays === 1) {
      return '昨日';
    } else if (diffInDays <= 3) {
      return `${diffInDays}日前`;
    } else {
      return formatDate(dateString);
    }
  } catch (error) {
    console.error('Relative date formatting error:', error);
    return formatDate(dateString);
  }
};

// カテゴリ情報取得
export const getCategoryInfo = (category: NoticeCategory) => {
  return categoryConfig[category];
};

// 新着判定（3日以内）
export const isNewNotice = (publishedAt: string): boolean => {
  try {
    const publishedDate = new Date(publishedAt);

    // 無効な日付の場合はfalseを返す
    if (isNaN(publishedDate.getTime())) {
      console.warn(`Invalid publishedAt date: ${publishedAt}`);
      return false;
    }

    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    return publishedDate > threeDaysAgo;
  } catch (error) {
    console.error('New notice check error:', error);
    return false;
  }
};

// カテゴリ別ソート優先度
export const getCategorySortOrder = (category: NoticeCategory): number => {
  const order = {
    important: 1,
    schedule: 2,
    campaign: 3,
    notice: 4,
  };
  return order[category] || 999;
};

// お知らせ一覧のソート（重要度 → 固定 → 公開日時）
export const sortNotices = <
  T extends { category: NoticeCategory; isPinned: boolean; publishedAt: string }
>(
  notices: T[]
): T[] => {
  return notices.sort((a, b) => {
    // 1. 固定表示優先
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;

    // 2. カテゴリ優先度
    const categoryOrderA = getCategorySortOrder(a.category);
    const categoryOrderB = getCategorySortOrder(b.category);
    if (categoryOrderA !== categoryOrderB) {
      return categoryOrderA - categoryOrderB;
    }

    // 3. 公開日時（新しい順）
    try {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);

      // 無効な日付の場合は最後に配置
      if (isNaN(dateA.getTime()) && isNaN(dateB.getTime())) return 0;
      if (isNaN(dateA.getTime())) return 1;
      if (isNaN(dateB.getTime())) return -1;

      return dateB.getTime() - dateA.getTime();
    } catch (error) {
      console.error('Sort error:', error);
      return 0;
    }
  });
};
