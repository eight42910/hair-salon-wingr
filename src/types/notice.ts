import { MicroCMSImage, MicroCMSDate, MicroCMSListContent } from './microcms';

export type NoticeCategory = 'notice' | 'campaign' | 'schedule' | 'important';

export interface Notice extends MicroCMSListContent, MicroCMSDate {
  title: string;
  content: string;
  category: NoticeCategory;
  isPinned: boolean;
  thumbnailImage?: MicroCMSImage;
  publishedAt: string;
}

export interface NoticeListResponse {
  contents: Notice[];
  totalCount: number;
  offset: number;
  limit: number;
}

// カテゴリ設定
export const categoryConfig = {
  notice: {
    label: 'お知らせ',
    color: 'bg-blue-100 text-blue-800',
    icon: 'Info',
    description: '一般的なお知らせ',
  },
  campaign: {
    label: 'キャンペーン',
    color: 'bg-pink-100 text-pink-800',
    icon: 'Gift',
    description: '特別割引・キャンペーン情報',
  },
  schedule: {
    label: '営業時間変更',
    color: 'bg-orange-100 text-orange-800',
    icon: 'Clock',
    description: '営業時間・定休日の変更',
  },
  important: {
    label: '重要',
    color: 'bg-red-100 text-red-800',
    icon: 'AlertTriangle',
    description: '緊急・重要なお知らせ',
  },
} as const;
