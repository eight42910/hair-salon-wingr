# microCMS セットアップ・環境構築仕様書

## 📝 概要

美容室ウイング R プロジェクトでの microCMS 導入・設定に関する詳細仕様書です。

## 🎯 導入目的

- **コンテンツ管理の簡易化**: 技術知識なしでのコンテンツ更新
- **リアルタイム反映**: 投稿後即座のサイト更新
- **型安全性**: TypeScript との完全統合
- **SEO 最適化**: 動的メタデータ生成

## 🔧 技術スタック

```json
{
  "microcms-js-sdk": "^3.0.0",
  "next": "^14.2.29",
  "typescript": "^5.0.0",
  "zod": "^3.22.0"
}
```

## 📋 microCMS 環境構築

### 1. microCMS アカウント設定

#### サービス作成

```
1. https://microcms.io にアクセス
2. 「無料で始める」をクリック
3. サービス名：hair-salon-wingr
4. サービスID：hair-salon-wingr (自動生成)
5. 料金プラン：Hobby（無料）を選択
```

#### API 設定

```
サービスドメイン：hair-salon-wingr.microcms.io
APIキー生成：管理画面 > API設定 > APIキー
```

### 2. API スキーマ設計

#### お知らせ API (notices)

```json
{
  "endpoint": "notices",
  "type": "リスト形式",
  "fields": [
    {
      "fieldId": "title",
      "displayName": "タイトル",
      "kind": "text",
      "required": true,
      "description": "お知らせのタイトル（例：営業時間変更のお知らせ）"
    },
    {
      "fieldId": "content",
      "displayName": "内容",
      "kind": "richEditor",
      "required": true,
      "description": "お知らせの詳細内容"
    },
    {
      "fieldId": "category",
      "displayName": "カテゴリ",
      "kind": "select",
      "required": true,
      "selectItems": [
        { "text": "お知らせ", "value": "notice" },
        { "text": "キャンペーン", "value": "campaign" },
        { "text": "営業時間変更", "value": "schedule" },
        { "text": "重要", "value": "important" }
      ]
    },
    {
      "fieldId": "isPinned",
      "displayName": "トップ固定",
      "kind": "boolean",
      "required": false,
      "description": "重要なお知らせを上部に固定表示"
    },
    {
      "fieldId": "thumbnailImage",
      "displayName": "サムネイル画像",
      "kind": "media",
      "required": false,
      "description": "一覧表示用の画像（推奨サイズ：400x200px）"
    },
    {
      "fieldId": "publishedAt",
      "displayName": "公開日時",
      "kind": "date",
      "required": true,
      "description": "お知らせの公開日時"
    }
  ]
}
```

#### ブログ API (blog)

```json
{
  "endpoint": "blog",
  "type": "リスト形式",
  "fields": [
    {
      "fieldId": "title",
      "displayName": "記事タイトル",
      "kind": "text",
      "required": true,
      "description": "ブログ記事のタイトル"
    },
    {
      "fieldId": "content",
      "displayName": "記事内容",
      "kind": "richEditor",
      "required": true,
      "description": "ブログ記事の本文"
    },
    {
      "fieldId": "excerpt",
      "displayName": "記事の抜粋",
      "kind": "textArea",
      "required": true,
      "description": "一覧表示用の要約文（120文字以内推奨）"
    },
    {
      "fieldId": "featuredImage",
      "displayName": "アイキャッチ画像",
      "kind": "media",
      "required": true,
      "description": "記事のメイン画像（推奨サイズ：800x400px）"
    },
    {
      "fieldId": "category",
      "displayName": "カテゴリ",
      "kind": "select",
      "required": true,
      "selectItems": [
        { "text": "ヘアケア", "value": "haircare" },
        { "text": "スタイリング", "value": "styling" },
        { "text": "商品紹介", "value": "products" },
        { "text": "サロン情報", "value": "salon" },
        { "text": "トレンド", "value": "trend" }
      ]
    },
    {
      "fieldId": "tags",
      "displayName": "タグ",
      "kind": "text",
      "required": false,
      "description": "記事のタグ（カンマ区切り：カット,カラー,トリートメント）"
    },
    {
      "fieldId": "seoTitle",
      "displayName": "SEOタイトル",
      "kind": "text",
      "required": false,
      "description": "検索結果に表示されるタイトル（60文字以内推奨）"
    },
    {
      "fieldId": "seoDescription",
      "displayName": "SEO説明文",
      "kind": "textArea",
      "required": false,
      "description": "検索結果に表示される説明文（160文字以内推奨）"
    },
    {
      "fieldId": "publishedAt",
      "displayName": "公開日時",
      "kind": "date",
      "required": true,
      "description": "記事の公開日時"
    }
  ]
}
```

### 3. 環境変数設定

#### .env.local 作成

```bash
# microCMS設定
MICROCMS_SERVICE_DOMAIN=hair-salon-wingr
MICROCMS_API_KEY=your_api_key_here

# Next.js設定
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

#### 本番環境 (.env.production)

```bash
# microCMS設定
MICROCMS_SERVICE_DOMAIN=hair-salon-wingr
MICROCMS_API_KEY=production_api_key_here

# Next.js設定
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

## 🔧 Next.js 統合設定

### 1. パッケージインストール

```bash
npm install microcms-js-sdk zod
npm install --save-dev @types/node
```

### 2. TypeScript 型定義

#### microCMS 基本型定義

```typescript
// src/types/microcms.ts
export interface MicroCMSImage {
  url: string;
  height: number;
  width: number;
}

export interface MicroCMSDate {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

export interface MicroCMSQueries {
  draftKey?: string;
  limit?: number;
  offset?: number;
  orders?: string;
  q?: string;
  fields?: string;
  ids?: string;
  filters?: string;
  depth?: number;
}

export interface MicroCMSListContent {
  id: string;
}

export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
```

#### お知らせ型定義

```typescript
// src/types/notice.ts
import { MicroCMSImage, MicroCMSDate, MicroCMSListContent } from './microcms';

export interface Notice extends MicroCMSListContent, MicroCMSDate {
  title: string;
  content: string;
  category: 'notice' | 'campaign' | 'schedule' | 'important';
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
```

#### ブログ型定義

```typescript
// src/types/blog.ts
import { MicroCMSImage, MicroCMSDate, MicroCMSListContent } from './microcms';

export interface BlogPost extends MicroCMSListContent, MicroCMSDate {
  title: string;
  content: string;
  excerpt: string;
  featuredImage: MicroCMSImage;
  category: 'haircare' | 'styling' | 'products' | 'salon' | 'trend';
  tags: string;
  seoTitle?: string;
  seoDescription?: string;
  publishedAt: string;
}

export interface BlogListResponse {
  contents: BlogPost[];
  totalCount: number;
  offset: number;
  limit: number;
}
```

### 3. microCMS クライアント設定

```typescript
// src/lib/microcms.ts
import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from '@/types/microcms';
import type { Notice, NoticeListResponse } from '@/types/notice';
import type { BlogPost, BlogListResponse } from '@/types/blog';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// お知らせ取得
export const getNotices = async (
  queries?: MicroCMSQueries
): Promise<NoticeListResponse> => {
  return await client.get({
    endpoint: 'notices',
    queries: {
      orders: '-publishedAt',
      limit: 10,
      ...queries,
    },
  });
};

// お知らせ詳細取得
export const getNotice = async (
  contentId: string,
  queries?: MicroCMSQueries
): Promise<Notice> => {
  return await client.get({
    endpoint: 'notices',
    contentId,
    queries,
  });
};

// ブログ記事取得
export const getBlogPosts = async (
  queries?: MicroCMSQueries
): Promise<BlogListResponse> => {
  return await client.get({
    endpoint: 'blog',
    queries: {
      orders: '-publishedAt',
      limit: 10,
      ...queries,
    },
  });
};

// ブログ記事詳細取得
export const getBlogPost = async (
  contentId: string,
  queries?: MicroCMSQueries
): Promise<BlogPost> => {
  return await client.get({
    endpoint: 'blog',
    contentId,
    queries,
  });
};
```

## 🌐 Next.js 設定最適化

### 1. next.config.mjs 更新

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // ISR設定
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
```

### 2. ISR（Incremental Static Regeneration）設定

```typescript
// app/notices/page.tsx
export const revalidate = 3600; // 1時間でISR

// app/blog/page.tsx
export const revalidate = 1800; // 30分でISR
```

## 🔒 セキュリティ設定

### 1. API キー管理

- **.env.local**: 開発環境専用
- **Vercel 環境変数**: 本番環境での管理
- **GitHub Secrets**: CI/CD 環境での管理

### 2. アクセス制御

```typescript
// src/lib/microcms-admin.ts (管理者専用)
export const adminClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_ADMIN_API_KEY!, // 書き込み権限付きキー
});
```

## 🚀 パフォーマンス最適化

### 1. キャッシュ戦略

```typescript
// src/lib/cache.ts
export const cacheConfig = {
  notices: {
    revalidate: 3600, // 1時間
    tags: ['notices'],
  },
  blog: {
    revalidate: 1800, // 30分
    tags: ['blog'],
  },
};
```

### 2. 画像最適化

```typescript
// microCMS画像の最適化
export const optimizeImageUrl = (
  url: string,
  width: number,
  height: number
): string => {
  return `${url}?w=${width}&h=${height}&fit=crop&auto=format`;
};
```

## 📊 監視・分析

### 1. エラーハンドリング

```typescript
// src/lib/error-handler.ts
export class MicroCMSError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public originalError?: Error
  ) {
    super(message);
    this.name = 'MicroCMSError';
  }
}

export const handleMicroCMSError = (error: unknown): MicroCMSError => {
  if (error instanceof MicroCMSError) {
    return error;
  }

  return new MicroCMSError(
    'microCMSとの通信でエラーが発生しました',
    500,
    error as Error
  );
};
```

### 2. ログ記録

```typescript
// src/lib/logger.ts
export const logMicroCMSRequest = (
  endpoint: string,
  queries?: MicroCMSQueries
) => {
  console.log(`[microCMS] Request: ${endpoint}`, queries);
};
```

## 🎯 実装チェックリスト

### Phase 1: 基本セットアップ

- [ ] microCMS アカウント作成
- [ ] サービス・API 設定
- [ ] 環境変数設定
- [ ] パッケージインストール
- [ ] 型定義作成

### Phase 2: お知らせ機能

- [ ] notices エンドポイント作成
- [ ] お知らせ一覧ページ実装
- [ ] お知らせ詳細ページ実装
- [ ] トップページ統合

### Phase 3: ブログ機能

- [ ] blog エンドポイント作成
- [ ] ブログ一覧ページ実装
- [ ] ブログ詳細ページ実装
- [ ] SEO 最適化

### Phase 4: 運用最適化

- [ ] コンテンツ管理マニュアル作成
- [ ] エラーハンドリング実装
- [ ] パフォーマンス最適化
- [ ] 本番環境デプロイ

---

**作成日**: 2025 年 1 月 29 日  
**対象バージョン**: Next.js 14.2.29, microCMS v3  
**更新予定**: 実装完了時
