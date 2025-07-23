import { MicroCMSImage, MicroCMSDate, MicroCMSListContent } from './microcms';

export type BlogCategory =
  | 'haircare'
  | 'styling'
  | 'products'
  | 'salon'
  | 'trend';

export interface Author {
  name: string;
  bio: string;
  avatar?: MicroCMSImage;
}

export interface BlogPost extends MicroCMSListContent, MicroCMSDate {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: MicroCMSImage;
  category: BlogCategory;
  tags: string;
  seoTitle?: string;
  seoDescription?: string;
  publishedAt: string;
  author: Author;
  readingTime: number;
  isPopular: boolean;
}

export interface BlogListResponse {
  contents: BlogPost[];
  totalCount: number;
  offset: number;
  limit: number;
}

// カテゴリ設定
export const categoryConfig = {
  haircare: {
    name: 'ヘアケア',
    slug: 'haircare',
    description: '髪と頭皮のケア方法',
    color: 'bg-green-100 text-green-800',
    icon: 'Leaf',
  },
  styling: {
    name: 'スタイリング',
    slug: 'styling',
    description: 'ヘアスタイルとセット方法',
    color: 'bg-purple-100 text-purple-800',
    icon: 'Sparkles',
  },
  products: {
    name: '商品紹介',
    slug: 'products',
    description: 'おすすめ商品のご紹介',
    color: 'bg-blue-100 text-blue-800',
    icon: 'Package',
  },
  salon: {
    name: 'サロン情報',
    slug: 'salon',
    description: 'サロンの最新情報',
    color: 'bg-orange-100 text-orange-800',
    icon: 'Home',
  },
  trend: {
    name: 'トレンド',
    slug: 'trend',
    description: '最新のヘアトレンド',
    color: 'bg-pink-100 text-pink-800',
    icon: 'TrendingUp',
  },
} as const;
