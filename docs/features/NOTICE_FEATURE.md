# お知らせ機能 設計仕様書

## 📝 概要

美容室ウイング R のお知らせ機能に関する詳細設計仕様書です。microCMS を活用したコンテンツ管理システムとの連携を含みます。

## 🎯 機能目的

- **リアルタイム情報発信**: 営業時間変更、キャンペーン情報の即座配信
- **カテゴリ別整理**: お知らせ種別による情報整理
- **ユーザビリティ**: 3 世代が理解しやすい情報表示
- **SEO 最適化**: 検索エンジンでの情報露出向上

## 📍 URL・ファイル構成

- **一覧ページ**: `/notices`
- **詳細ページ**: `/notices/[id]`
- **トップページ統合**: トップページに最新 3 件表示

### ファイル構成

```
src/
├── app/
│   ├── notices/
│   │   ├── page.tsx           # お知らせ一覧
│   │   ├── [id]/page.tsx      # お知らせ詳細
│   │   └── loading.tsx        # ローディングUI
├── components/
│   ├── notices/
│   │   ├── NoticeCard.tsx     # お知らせカード
│   │   ├── NoticeList.tsx     # 一覧表示
│   │   ├── LatestNotices.tsx  # トップページ用
│   │   └── CategoryBadge.tsx  # カテゴリバッジ
├── lib/
│   └── notices.ts             # API関数
└── types/
    └── notice.ts              # 型定義
```

## 🏗️ データ構造

### お知らせエンティティ

```typescript
interface Notice {
  id: string;
  title: string;
  content: string;
  category: NoticeCategory;
  isPinned: boolean;
  thumbnailImage?: MicroCMSImage;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

type NoticeCategory = 'notice' | 'campaign' | 'schedule' | 'important';
```

### カテゴリ設定

```typescript
const categoryConfig = {
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
};
```

## 📱 UI/UX 設計

### 1. お知らせ一覧ページ (`/notices`)

#### レイアウト構成

```tsx
export default async function NoticesPage() {
  return (
    <PageLayout>
      {/* ヒーローセクション */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <SectionTitle
          mainTitle="お知らせ"
          subTitle="News & Information"
          description="美容室ウイング Rからの最新情報をお届けします"
        />
      </section>

      {/* お知らせ一覧 */}
      <section className="py-12">
        <NoticeList />
      </section>
    </PageLayout>
  );
}
```

#### カード設計

```tsx
interface NoticeCardProps {
  notice: Notice;
  variant?: 'default' | 'featured' | 'compact';
}

export const NoticeCard: React.FC<NoticeCardProps> = ({
  notice,
  variant = 'default',
}) => {
  return (
    <motion.article
      className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition-all duration-200"
      whileHover={{ y: -2 }}
    >
      {/* カテゴリバッジ */}
      <CategoryBadge category={notice.category} />

      {/* サムネイル画像 */}
      {notice.thumbnailImage && (
        <OptimizedImage
          src={notice.thumbnailImage.url}
          alt={notice.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
      )}

      {/* コンテンツ */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {notice.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {stripHtml(notice.content).slice(0, 120)}...
        </p>

        <div className="flex justify-between items-center">
          <time className="text-sm text-gray-500">
            {formatDate(notice.publishedAt)}
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
```

### 2. お知らせ詳細ページ (`/notices/[id]`)

#### ページ構成

```tsx
export default async function NoticeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const notice = await getNotice(params.id);

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* パンくずナビ */}
        <Breadcrumb items={breadcrumbItems} />

        {/* ヘッダー */}
        <header className="mb-8">
          <CategoryBadge category={notice.category} />
          <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
            {notice.title}
          </h1>
          <time className="text-gray-500">
            {formatDate(notice.publishedAt)}
          </time>
        </header>

        {/* アイキャッチ画像 */}
        {notice.thumbnailImage && (
          <OptimizedImage
            src={notice.thumbnailImage.url}
            alt={notice.title}
            width={800}
            height={400}
            className="w-full rounded-2xl mb-8"
            priority
          />
        )}

        {/* コンテンツ */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: notice.content }}
        />

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/contact">
            <Button variant="primary" size="lg">
              お問い合わせ・ご予約
            </Button>
          </Link>
        </div>
      </article>
    </PageLayout>
  );
}
```

### 3. トップページ統合

#### 最新お知らせセクション

```tsx
export async function LatestNotices() {
  const { contents: notices } = await getNotices({ limit: 3 });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          mainTitle="最新のお知らせ"
          subTitle="Latest News"
          description="美容室ウイング Rからの最新情報をお届けします"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {notices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} variant="compact" />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/notices">
            <Button variant="outline">お知らせ一覧を見る</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
```

## 🔧 API 実装

### お知らせ取得関数

```typescript
// src/lib/notices.ts
import { client } from './microcms';
import type { Notice, NoticeListResponse } from '@/types/notice';
import type { MicroCMSQueries } from '@/types/microcms';

// お知らせ一覧取得
export const getNotices = async (
  queries?: MicroCMSQueries
): Promise<NoticeListResponse> => {
  const defaultQueries = {
    orders: '-publishedAt',
    limit: 10,
    filters: 'publishedAt[less_than_or_equal]2025-01-29T15:00:00.000Z',
  };

  return await client.get({
    endpoint: 'notices',
    queries: { ...defaultQueries, ...queries },
  });
};

// 固定表示お知らせ取得
export const getPinnedNotices = async (): Promise<Notice[]> => {
  const response = await client.get({
    endpoint: 'notices',
    queries: {
      filters: 'isPinned[equals]true',
      orders: '-publishedAt',
      limit: 3,
    },
  });

  return response.contents;
};

// お知らせ詳細取得
export const getNotice = async (contentId: string): Promise<Notice> => {
  return await client.get({
    endpoint: 'notices',
    contentId,
  });
};

// カテゴリ別お知らせ取得
export const getNoticesByCategory = async (
  category: NoticeCategory
): Promise<Notice[]> => {
  const response = await client.get({
    endpoint: 'notices',
    queries: {
      filters: `category[equals]${category}`,
      orders: '-publishedAt',
      limit: 10,
    },
  });

  return response.contents;
};
```

### ユーティリティ関数

```typescript
// src/lib/utils/notice-utils.ts

// HTMLタグ除去
export const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, '');
};

// 日付フォーマット
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

// カテゴリ情報取得
export const getCategoryInfo = (category: NoticeCategory) => {
  return categoryConfig[category];
};

// 新着判定（3日以内）
export const isNewNotice = (publishedAt: string): boolean => {
  const publishedDate = new Date(publishedAt);
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

  return publishedDate > threeDaysAgo;
};
```

## 🎨 スタイリング詳細

### レスポンシブデザイン

```css
/* お知らせ一覧グリッド */
.notices-grid {
  @apply grid gap-6;
  @apply grid-cols-1;
  @apply md:grid-cols-2;
  @apply lg:grid-cols-3;
}

/* お知らせカード */
.notice-card {
  @apply bg-white rounded-2xl shadow-sm border;
  @apply hover:shadow-md hover:-translate-y-1;
  @apply transition-all duration-200;
}

/* カテゴリバッジ */
.category-badge {
  @apply inline-flex items-center gap-1;
  @apply px-3 py-1 rounded-full text-xs font-medium;
}

/* コンテンツエリア */
.notice-content {
  @apply prose prose-lg max-w-none;
  @apply prose-headings:text-gray-900;
  @apply prose-p:text-gray-700;
  @apply prose-a:text-primary-600;
}
```

### アニメーション

```typescript
// framer-motion バリアント
export const noticeAnimations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};
```

## 📊 SEO・メタデータ最適化

### 動的メタデータ生成

```typescript
// app/notices/[id]/page.tsx
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const notice = await getNotice(params.id);
  const categoryInfo = getCategoryInfo(notice.category);

  return {
    title: `${notice.title} | お知らせ | 美容室ウイング R`,
    description: stripHtml(notice.content).slice(0, 160),
    keywords: [
      '美容室ウイング R',
      'お知らせ',
      categoryInfo.label,
      '岐阜市',
      '美容院',
    ],
    openGraph: {
      title: notice.title,
      description: stripHtml(notice.content).slice(0, 120),
      type: 'article',
      publishedTime: notice.publishedAt,
      authors: ['美容室ウイング R'],
      images: notice.thumbnailImage
        ? [
            {
              url: notice.thumbnailImage.url,
              width: notice.thumbnailImage.width,
              height: notice.thumbnailImage.height,
              alt: notice.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: notice.title,
      description: stripHtml(notice.content).slice(0, 120),
      images: notice.thumbnailImage ? [notice.thumbnailImage.url] : [],
    },
  };
}

// app/notices/page.tsx
export const metadata: Metadata = {
  title: 'お知らせ一覧 | 美容室ウイング R',
  description:
    '美容室ウイング Rからの最新のお知らせ・キャンペーン情報をご覧いただけます。営業時間変更や特別な割引情報をお届けします。',
  keywords: [
    '美容室ウイング R',
    'お知らせ',
    'キャンペーン',
    '営業時間',
    '岐阜市',
    '美容院',
  ],
};
```

## 🚀 パフォーマンス最適化

### ISR 設定

```typescript
// app/notices/page.tsx
export const revalidate = 3600; // 1時間でISR

// app/notices/[id]/page.tsx
export const revalidate = 86400; // 24時間でISR
```

### 画像最適化

```typescript
// 画像最適化ヘルパー
export const optimizeNoticeImage = (
  imageUrl: string,
  size: 'thumbnail' | 'detail'
): string => {
  const dimensions = {
    thumbnail: { width: 400, height: 200 },
    detail: { width: 800, height: 400 },
  };

  const { width, height } = dimensions[size];
  return `${imageUrl}?w=${width}&h=${height}&fit=crop&auto=format,compress`;
};
```

## 🔍 検索・フィルタリング機能

### カテゴリフィルター

```typescript
export const NoticeFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    NoticeCategory | 'all'
  >('all');

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => setSelectedCategory('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          selectedCategory === 'all'
            ? 'bg-primary-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        すべて
      </button>

      {Object.entries(categoryConfig).map(([category, config]) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category as NoticeCategory)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {config.label}
        </button>
      ))}
    </div>
  );
};
```

## 📱 アクセシビリティ対応

### セマンティック HTML

```tsx
<main role="main" aria-labelledby="page-title">
  <h1 id="page-title" className="sr-only">
    お知らせ一覧
  </h1>

  <section aria-labelledby="notices-heading">
    <h2 id="notices-heading">最新のお知らせ</h2>

    <div role="list">
      {notices.map((notice) => (
        <article
          key={notice.id}
          role="listitem"
          aria-labelledby={`notice-title-${notice.id}`}
        >
          <h3 id={`notice-title-${notice.id}`}>{notice.title}</h3>
          {/* カード内容 */}
        </article>
      ))}
    </div>
  </section>
</main>
```

### キーボードナビゲーション

```tsx
const handleKeyDown = (event: React.KeyboardEvent, noticeId: string) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    router.push(`/notices/${noticeId}`);
  }
};
```

## 🎯 実装チェックリスト

### Phase 1: 基本機能

- [ ] microCMS notices エンドポイント作成
- [ ] お知らせ型定義作成
- [ ] API 関数実装
- [ ] NoticeCard コンポーネント作成
- [ ] お知らせ一覧ページ実装

### Phase 2: 詳細機能

- [ ] お知らせ詳細ページ実装
- [ ] 動的メタデータ生成
- [ ] カテゴリバッジコンポーネント
- [ ] パンくずナビゲーション
- [ ] 関連お知らせ表示

### Phase 3: 統合・最適化

- [ ] トップページ統合
- [ ] ISR 設定
- [ ] 画像最適化
- [ ] アクセシビリティ対応
- [ ] パフォーマンステスト

### Phase 4: 拡張機能

- [ ] カテゴリフィルター
- [ ] 検索機能
- [ ] ページネーション
- [ ] 新着バッジ表示
- [ ] ソーシャルシェア機能

---

**作成日**: 2025 年 1 月 29 日  
**対象バージョン**: Next.js 14.2.29, microCMS v3  
**実装予定**: Phase 1 から順次実装
