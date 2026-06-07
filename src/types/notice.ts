import { MicroCMSImage, MicroCMSDate, MicroCMSListContent } from './microcms';

export type NoticeCategory = 'notice' | 'campaign' | 'schedule' | 'important';

export interface MicroCMSNoticeCategory extends MicroCMSListContent {
  name?: string;
}

export type NoticeCategoryInput =
  | NoticeCategory
  | MicroCMSNoticeCategory
  | null
  | undefined;

export interface Notice extends MicroCMSListContent, MicroCMSDate {
  title: string;
  content: string;
  category: NoticeCategoryInput;
  isPinned: boolean;
  thumbnailImage?: MicroCMSImage;
  publishedAt: string;
}

export interface NoticeSummary extends MicroCMSListContent {
  title: string;
  category: NoticeCategoryInput;
  isPinned: boolean;
  publishedAt: string;
}

export interface NoticeListResponse {
  contents: Notice[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface NoticeSummaryListResponse {
  contents: NoticeSummary[];
  totalCount: number;
  offset: number;
  limit: number;
}

// カテゴリ設定
export const categoryConfig = {
  notice: {
    label: 'お知らせ',
    color: 'bg-surface2 text-accent',
    icon: 'Info',
    description: '一般的なお知らせ',
  },
  campaign: {
    label: 'キャンペーン',
    color: 'bg-surface2 text-accent',
    icon: 'Gift',
    description: '特別割引・キャンペーン情報',
  },
  schedule: {
    label: '営業時間変更',
    color: 'bg-surface2 text-accent',
    icon: 'Clock',
    description: '営業時間・定休日の変更',
  },
  important: {
    label: '重要',
    color: 'bg-accent2/15 text-accent',
    icon: 'AlertTriangle',
    description: '緊急・重要なお知らせ',
  },
} as const;
