# ブログ機能 設計仕様書

## 📝 概要

美容室ウイング R のブログ機能に関する詳細設計仕様書です。microCMS を活用したコンテンツ管理システムとの連携による本格的なブログシステムです。

## 🎯 機能目的

- **専門知識の発信**: ヘアケア、スタイリングの専門情報提供
- **商品・サービス紹介**: 新メニューや商品の詳細紹介
- **SEO 強化**: 検索エンジンでの上位表示による集客増加
- **信頼関係構築**: 専門性を通じたお客様との関係性強化

## 📍 URL・ファイル構成

- **ブログトップ**: `/blog`
- **記事詳細**: `/blog/[slug]`
- **カテゴリ別**: `/blog/category/[category]`
- **タグ別**: `/blog/tag/[tag]`

### ファイル構成

```
src/
├── app/
│   ├── blog/
│   │   ├── page.tsx              # ブログトップ
│   │   ├── [slug]/page.tsx       # 記事詳細
│   │   ├── category/
│   │   │   └── [category]/page.tsx # カテゴリ別一覧
│   │   ├── tag/
│   │   │   └── [tag]/page.tsx     # タグ別一覧
│   │   └── loading.tsx           # ローディングUI
├── components/
│   ├── blog/
│   │   ├── BlogCard.tsx          # ブログカード
│   │   ├── BlogList.tsx          # 一覧表示
│   │   ├── BlogPost.tsx          # 記事詳細
│   │   ├── CategoryFilter.tsx    # カテゴリフィルター
│   │   ├── TagCloud.tsx          # タグクラウド
│   │   ├── RelatedPosts.tsx      # 関連記事
│   │   ├── ShareButtons.tsx      # SNSシェア
│   │   └── BlogSearch.tsx        # 検索機能
├── lib/
│   ├── blog.ts                   # API関数
│   └── blog-utils.ts             # ユーティリティ
└── types/
    └── blog.ts                   # 型定義
```

## 🏗️ データ構造

### ブログ記事エンティティ

```typescript
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: MicroCMSImage;
  category: BlogCategory;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
  readingTime: number;
  isPopular: boolean;
}

interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
}

interface Author {
  name: string;
  bio: string;
  avatar?: MicroCMSImage;
}
```

### カテゴリ設定

```typescript
const categoryConfig = {
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
};
```

## 📱 UI/UX 設計

### 1. ブログトップページ (`/blog`)

#### レイアウト構成

```tsx
export default async function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string; tag?: string; q?: string };
}) {
  const posts = await getBlogPosts({
    category: searchParams.category,
    tag: searchParams.tag,
    query: searchParams.q,
  });

  return (
    <PageLayout>
      {/* ヒーローセクション */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <SectionTitle
          mainTitle="ブログ"
          subTitle="Beauty & Hair Care Blog"
          description="美容とヘアケアの専門情報をお届けします"
        />
      </section>

      {/* フィルター・検索 */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            <CategoryFilter categories={categories} />
            <BlogSearch />
          </div>
        </div>
      </section>

      {/* ブログ一覧 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* 人気記事セクション */}
          <PopularPosts />

          {/* 最新記事一覧 */}
          <BlogList posts={posts} />

          {/* ページネーション */}
          <Pagination />
        </div>
      </section>
    </PageLayout>
  );
}
```

#### ブログカード設計

```tsx
interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
  showCategory?: boolean;
  showTags?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  post,
  variant = 'default',
  showCategory = true,
  showTags = true,
}) => {
  return (
    <motion.article
      className="bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      {/* アイキャッチ画像 */}
      <div className="relative aspect-[16/9] rounded-t-2xl overflow-hidden">
        <OptimizedImage
          src={post.featuredImage.url}
          alt={post.title}
          width={800}
          height={400}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />

        {/* カテゴリバッジ */}
        {showCategory && (
          <div className="absolute top-4 left-4">
            <CategoryBadge category={post.category} />
          </div>
        )}

        {/* 人気記事バッジ */}
        {post.isPopular && (
          <div className="absolute top-4 right-4">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              人気
            </span>
          </div>
        )}
      </div>

      {/* コンテンツ */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* タグ */}
        {showTags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${encodeURIComponent(tag)}`}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-primary-100 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {/* メタ情報 */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <time>{formatDate(post.publishedAt)}</time>
            <span>{post.readingTime}分で読める</span>
          </div>

          <Link href={`/blog/${post.slug}`}>
            <Button variant="outline" size="sm">
              続きを読む
            </Button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
```

### 2. ブログ記事詳細ページ (`/blog/[slug]`)

#### ページ構成

```tsx
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);
  const relatedPosts = await getRelatedPosts(post.category.slug, post.id);

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* パンくずナビ */}
        <Breadcrumb items={breadcrumbItems} />

        {/* ヘッダー */}
        <header className="mb-8">
          <CategoryBadge category={post.category} />

          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <time>{formatDate(post.publishedAt)}</time>
            <span>{post.readingTime}分で読める</span>
            <span>著者: {post.author.name}</span>
          </div>

          {/* タグ */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${encodeURIComponent(tag)}`}
                  className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-primary-100 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}

          {/* ソーシャルシェア */}
          <ShareButtons post={post} />
        </header>

        {/* アイキャッチ画像 */}
        <OptimizedImage
          src={post.featuredImage.url}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full rounded-2xl mb-8"
          priority
        />

        {/* 目次 */}
        <TableOfContents content={post.content} />

        {/* コンテンツ */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* 著者プロフィール */}
        <AuthorProfile author={post.author} />

        {/* 関連記事 */}
        <RelatedPosts posts={relatedPosts} />

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ご質問・ご相談はお気軽に
          </h3>
          <p className="text-gray-600 mb-6">
            記事の内容について詳しく知りたい方は、お気軽にお問い合わせください
          </p>
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

## 🔧 API 実装

### ブログ取得関数

```typescript
// src/lib/blog.ts
import { client } from './microcms';
import type { BlogPost, BlogListResponse, BlogCategory } from '@/types/blog';
import type { MicroCMSQueries } from '@/types/microcms';

// ブログ記事一覧取得
export const getBlogPosts = async (
  queries?: MicroCMSQueries & {
    category?: string;
    tag?: string;
    query?: string;
  }
): Promise<BlogListResponse> => {
  let filters: string[] = [];

  // 公開日フィルター
  filters.push('publishedAt[less_than_or_equal]' + new Date().toISOString());

  // カテゴリフィルター
  if (queries?.category) {
    filters.push(`category[equals]${queries.category}`);
  }

  // タグフィルター
  if (queries?.tag) {
    filters.push(`tags[contains]${queries.tag}`);
  }

  // 検索クエリ
  if (queries?.query) {
    filters.push(`title[contains]${queries.query}`);
  }

  const defaultQueries = {
    orders: '-publishedAt',
    limit: 12,
    filters: filters.join('[and]'),
  };

  return await client.get({
    endpoint: 'blog',
    queries: { ...defaultQueries, ...queries },
  });
};

// 人気記事取得
export const getPopularPosts = async (): Promise<BlogPost[]> => {
  const response = await client.get({
    endpoint: 'blog',
    queries: {
      filters: 'isPopular[equals]true',
      orders: '-publishedAt',
      limit: 6,
    },
  });

  return response.contents;
};

// ブログ記事詳細取得（スラッグベース）
export const getBlogPost = async (slug: string): Promise<BlogPost> => {
  const response = await client.get({
    endpoint: 'blog',
    queries: {
      filters: `slug[equals]${slug}`,
    },
  });

  if (!response.contents.length) {
    throw new Error('記事が見つかりません');
  }

  return response.contents[0];
};

// 関連記事取得
export const getRelatedPosts = async (
  categorySlug: string,
  excludeId: string
): Promise<BlogPost[]> => {
  const response = await client.get({
    endpoint: 'blog',
    queries: {
      filters: `category[equals]${categorySlug}[and]id[not_equals]${excludeId}`,
      orders: '-publishedAt',
      limit: 3,
    },
  });

  return response.contents;
};

// カテゴリ別記事取得
export const getPostsByCategory = async (
  categorySlug: string
): Promise<BlogPost[]> => {
  const response = await client.get({
    endpoint: 'blog',
    queries: {
      filters: `category[equals]${categorySlug}`,
      orders: '-publishedAt',
      limit: 20,
    },
  });

  return response.contents;
};

// タグ別記事取得
export const getPostsByTag = async (tag: string): Promise<BlogPost[]> => {
  const response = await client.get({
    endpoint: 'blog',
    queries: {
      filters: `tags[contains]${tag}`,
      orders: '-publishedAt',
      limit: 20,
    },
  });

  return response.contents;
};

// 全タグ取得
export const getAllTags = async (): Promise<string[]> => {
  const response = await client.get({
    endpoint: 'blog',
    queries: {
      fields: 'tags',
      limit: 100,
    },
  });

  const allTags = response.contents.flatMap((post: BlogPost) => post.tags);
  return [...new Set(allTags)].sort();
};
```

### ユーティリティ関数

```typescript
// src/lib/blog-utils.ts

// 読了時間計算（日本語対応）
export const calculateReadingTime = (content: string): number => {
  const strippedContent = stripHtml(content);
  const wordsPerMinute = 400; // 日本語の平均読書速度
  const wordCount = strippedContent.length;
  return Math.ceil(wordCount / wordsPerMinute);
};

// 目次生成
export const generateTableOfContents = (content: string): TocItem[] => {
  const headings = content.match(/<h[2-4][^>]*>.*?<\/h[2-4]>/g) || [];

  return headings.map((heading, index) => {
    const level = parseInt(heading.match(/<h([2-4])/)?.[1] || '2');
    const text = heading.replace(/<[^>]*>/g, '');
    const id = `heading-${index}`;

    return {
      id,
      text,
      level,
    };
  });
};

// SEO用スキーママークアップ生成
export const generateBlogPostSchema = (post: BlogPost): string => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage.url,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: '美容室ウイング R',
      logo: {
        '@type': 'ImageObject',
        url: '/logo.png',
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
    },
  };

  return JSON.stringify(schema);
};

// 関連記事スコア計算
export const calculateRelatedScore = (
  post1: BlogPost,
  post2: BlogPost
): number => {
  let score = 0;

  // カテゴリが同じ
  if (post1.category.slug === post2.category.slug) {
    score += 10;
  }

  // 共通タグの数
  const commonTags = post1.tags.filter((tag) => post2.tags.includes(tag));
  score += commonTags.length * 3;

  // 公開日の近さ（30日以内なら加点）
  const daysDiff =
    Math.abs(
      new Date(post1.publishedAt).getTime() -
        new Date(post2.publishedAt).getTime()
    ) /
    (1000 * 60 * 60 * 24);

  if (daysDiff <= 30) {
    score += Math.max(0, 5 - Math.floor(daysDiff / 6));
  }

  return score;
};
```

## 🎨 高度な UI コンポーネント

### 検索機能

```tsx
export const BlogSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<BlogPost[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const handleSearch = async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const { contents } = await getBlogPosts({
        query: searchQuery,
        limit: 5,
      });
      setResults(contents);
    } catch (error) {
      console.error('検索エラー:', error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            handleSearch(e.target.value);
          }}
          placeholder="記事を検索..."
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* 検索結果ドロップダウン */}
      {query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-center text-gray-500">検索中...</div>
          ) : results.length > 0 ? (
            <>
              {results.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="block p-4 hover:bg-gray-50 border-b border-gray-100 last:border-0"
                >
                  <h4 className="font-medium text-gray-900 mb-1 line-clamp-1">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
              <div className="p-3 border-t bg-gray-50">
                <button
                  onClick={() =>
                    router.push(`/blog?q=${encodeURIComponent(query)}`)
                  }
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  すべての検索結果を見る →
                </button>
              </div>
            </>
          ) : (
            <div className="p-4 text-center text-gray-500">
              該当する記事が見つかりませんでした
            </div>
          )}
        </div>
      )}
    </div>
  );
};
```

### タグクラウド

```tsx
export const TagCloud: React.FC<{ tags: string[] }> = ({ tags }) => {
  const tagCounts = tags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const sortedTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 20);

  const maxCount = Math.max(...Object.values(tagCounts));

  return (
    <div className="flex flex-wrap gap-2">
      {sortedTags.map(([tag, count]) => {
        const size = Math.max(0.75, (count / maxCount) * 1.5);
        return (
          <Link
            key={tag}
            href={`/blog/tag/${encodeURIComponent(tag)}`}
            className="hover:text-primary-600 transition-colors"
            style={{ fontSize: `${size}rem` }}
          >
            #{tag}
          </Link>
        );
      })}
    </div>
  );
};
```

## 📊 SEO・メタデータ最適化

### 動的メタデータ生成

```typescript
// app/blog/[slug]/page.tsx
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  return {
    title: post.seoTitle || `${post.title} | ブログ | 美容室ウイング R`,
    description: post.seoDescription || post.excerpt,
    keywords: post.seoKeywords || [
      ...post.tags,
      '美容室ウイング R',
      '岐阜市',
      '美容院',
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      section: post.category.name,
      tags: post.tags,
      images: [
        {
          url: post.featuredImage.url,
          width: post.featuredImage.width,
          height: post.featuredImage.height,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage.url],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

// 構造化データ挿入
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);
  const schema = generateBlogPostSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schema }}
      />
      {/* ページコンテンツ */}
    </>
  );
}
```

## 🚀 パフォーマンス最適化

### 静的生成設定

```typescript
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const { contents } = await getBlogPosts({ limit: 100 });

  return contents.map((post) => ({
    slug: post.slug,
  }));
}

export const revalidate = 7200; // 2時間でISR
```

### 画像最適化

```typescript
// 画像最適化設定
export const optimizeBlogImage = (
  imageUrl: string,
  type: 'thumbnail' | 'featured' | 'og'
): string => {
  const configs = {
    thumbnail: { width: 400, height: 225, quality: 80 },
    featured: { width: 1200, height: 675, quality: 90 },
    og: { width: 1200, height: 630, quality: 85 },
  };

  const config = configs[type];
  return `${imageUrl}?w=${config.width}&h=${config.height}&q=${config.quality}&fit=crop&auto=format,compress`;
};
```

## 🎯 実装チェックリスト

### Phase 1: 基本機能

- [ ] microCMS blog エンドポイント作成
- [ ] ブログ型定義作成
- [ ] API 関数実装
- [ ] BlogCard コンポーネント作成
- [ ] ブログ一覧ページ実装

### Phase 2: 詳細機能

- [ ] ブログ記事詳細ページ実装
- [ ] 動的メタデータ生成
- [ ] 構造化データ実装
- [ ] 目次生成機能
- [ ] 読了時間計算

### Phase 3: 高度な機能

- [ ] 検索機能実装
- [ ] カテゴリ・タグフィルター
- [ ] 関連記事表示
- [ ] ソーシャルシェア機能
- [ ] 著者プロフィール

### Phase 4: 最適化・拡張

- [ ] 静的生成設定
- [ ] 画像最適化
- [ ] SEO 最適化
- [ ] アクセシビリティ対応
- [ ] パフォーマンステスト

---

**作成日**: 2025 年 1 月 29 日  
**対象バージョン**: Next.js 14.2.29, microCMS v3  
**実装予定**: お知らせ機能完了後に Phase 1 から実装
