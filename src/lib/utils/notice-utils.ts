import {
  NoticeCategory,
  NoticeCategoryInput,
  categoryConfig,
} from '@/types/notice';

// HTMLタグ除去
export const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, '');
};

// 日付フォーマット
export const formatDate = (
  dateString: string,
  format: 'long' | 'short' = 'long'
): string => {
  try {
    // dateStringがundefinedやnullの場合は空文字を返す
    if (!dateString) {
      return '';
    }

    const date = new Date(dateString);

    // 無効な日付の場合は空文字を返す
    if (isNaN(date.getTime())) {
      return '';
    }

    if (format === 'short') {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}.${month}.${day}`;
    }

    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  } catch {
    return '';
  }
};

// 相対日付表示（3日以内は「○日前」、それ以外は通常の日付）
export const formatRelativeDate = (dateString: string): string => {
  try {
    // dateStringがundefinedやnullの場合は空文字を返す
    if (!dateString) {
      return '';
    }

    const date = new Date(dateString);

    // 無効な日付の場合は空文字を返す
    if (isNaN(date.getTime())) {
      return '';
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
  } catch {
    return '';
  }
};

const categoryKeys = Object.keys(categoryConfig) as NoticeCategory[];

// カテゴリ正規化
export const normalizeCategory = (
  category: NoticeCategoryInput
): NoticeCategory => {
  if (typeof category === 'string') {
    return categoryKeys.includes(category) ? category : 'notice';
  }

  const name = category?.name ?? '';

  if (name.includes('キャンペーン')) return 'campaign';
  if (name.includes('営業') || name.includes('定休') || name.includes('日程')) {
    return 'schedule';
  }
  if (name.includes('重要') || name.includes('緊急')) return 'important';

  return 'notice';
};

// カテゴリ情報取得
export const getCategoryInfo = (category: NoticeCategoryInput) => {
  return categoryConfig[normalizeCategory(category)];
};

// 新着判定（3日以内）
export const isNewNotice = (publishedAt: string): boolean => {
  try {
    // publishedAtがundefinedやnullの場合はfalseを返す
    if (!publishedAt) {
      return false;
    }

    const publishedDate = new Date(publishedAt);

    // 無効な日付の場合はfalseを返す
    if (isNaN(publishedDate.getTime())) {
      return false;
    }

    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    return publishedDate > threeDaysAgo;
  } catch {
    return false;
  }
};

// カテゴリ別ソート優先度
export const getCategorySortOrder = (category: NoticeCategoryInput): number => {
  const order = {
    important: 1,
    schedule: 2,
    campaign: 3,
    notice: 4,
  };
  return order[normalizeCategory(category)] || 999;
};

// お知らせ一覧のソート（重要度 → 固定 → 公開日時）
export const sortNotices = <
  T extends {
    category: NoticeCategoryInput;
    isPinned?: boolean;
    publishedAt: string;
  }
>(
  notices: T[]
): T[] => {
  return [...notices].sort((a, b) => {
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
    } catch {
      return 0;
    }
  });
};
