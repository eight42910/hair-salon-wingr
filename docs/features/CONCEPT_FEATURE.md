# コンセプトページ機能仕様書

## 📝 概要

美容室ウイング R のコンセプトページ（ブランドストーリー・歴史）の詳細機能仕様書です。

## 🎯 ページ目的

- 41 年間の歴史と 3 世代に渡る絆の紹介
- ファミリーサロンとしての価値観の伝達
- 顧客との信頼関係構築

## 📍 URL・ファイル構成

- **URL**: `/concept`
- **メインファイル**: `src/app/concept/page.tsx`

## 🏗️ ページ構成

### 1. ヒーローセクション

#### デザイン要素

```tsx
<section className="relative min-h-[60vh] flex items-center">
  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50" />
  <div className="relative z-10 container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="heading-1 mb-6">
        41年間地域に愛され続ける
        <span className="block text-primary-600">ファミリーサロンの絆</span>
      </h1>
      <p className="body-lg mb-8 max-w-2xl mx-auto">
        3世代に渡って受け継がれる美容への情熱と、
        お客様一人ひとりを家族のように大切にする想い
      </p>
    </div>
  </div>
</section>
```

### 2. ストーリーセクション

#### 2-1. 創業の想い (1983 年〜)

```tsx
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-primary-600 font-semibold">1983年 創業</span>
        <h2 className="heading-2 mb-6">
          地域密着、お客様第一の
          <br />
          サロンとして誕生
        </h2>
        <div className="space-y-4 body-md">
          <p>
            昭和58年、岐阜市芋島に小さな美容室として開業した「美容室ウイング」。
            創業当時から変わらない想いは「お客様に心から喜んでいただける美容室でありたい」
            ということでした。
          </p>
          <p>
            一人ひとりのお客様との対話を大切にし、髪質や悩みに真摯に向き合い、
            最適なスタイルをご提案する。そんな丁寧な接客が口コミで広がり、
            多くの方にご愛顧いただけるサロンへと成長しました。
          </p>
        </div>
      </div>
      <div className="order-first lg:order-last">
        <Image
          src="/images/concept/founding-story.jpg"
          alt="創業当時の美容室ウイング"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  </div>
</section>
```

#### 2-2. 発展と継承 (1990 年代〜2000 年代)

```tsx
<section className="py-16 bg-gradient-to-br from-secondary-50 to-accent-50">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <Image
          src="/images/concept/growth-period.jpg"
          alt="発展期の美容室ウイング"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </div>
      <div>
        <span className="text-primary-600 font-semibold">
          1990年代〜2000年代
        </span>
        <h2 className="heading-2 mb-6">
          技術の向上と
          <br />
          次世代への技術継承
        </h2>
        <div className="space-y-4 body-md">
          <p>
            美容技術の進歩とともに、より高度な技術習得に励み、
            お客様のニーズの多様化にお応えできるよう努力を重ねました。
          </p>
          <p>
            パーマ技術の革新、カラーリング技術の向上、
            そして時代とともに変化するヘアスタイルのトレンドを取り入れながらも、
            変わらない「お客様を大切にする心」を次世代に継承していきました。
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### 2-3. リニューアルと現在 (2010 年〜現在)

```tsx
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-primary-600 font-semibold">2010年〜現在</span>
        <h2 className="heading-2 mb-6">
          「ウイング R」として
          <br />
          新たなスタート
        </h2>
        <div className="space-y-4 body-md">
          <p>
            2010年、より親しみやすいサロンを目指して「美容室ウイング R」として
            リニューアルオープン。「R」には「Renewal（革新）」「Relation（関係性）」
            「Relax（くつろぎ）」の3つの意味を込めました。
          </p>
          <p>
            最新の設備と技術を導入しながらも、創業以来大切にしてきた
            「家族のような温かさ」は変わることなく、
            現在も3世代にわたるお客様にご愛顧いただいています。
          </p>
        </div>
      </div>
      <div className="order-first lg:order-last">
        <Image
          src="/images/concept/current-salon.jpg"
          alt="現在の美容室ウイング R"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  </div>
</section>
```

### 3. 価値観セクション

#### 3 つの大切にしていること

```tsx
<section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="heading-2 mb-4">私たちが大切にしていること</h2>
      <p className="body-lg text-gray-600 max-w-2xl mx-auto">
        41年間変わらず大切にし続けている3つの価値観
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* 価値観1: お客様との対話 */}
      <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Users className="w-8 h-8 text-white" />
        </div>
        <h3 className="heading-3 mb-4">お客様との対話</h3>
        <p className="body-md text-gray-600">
          一人ひとりのお客様とじっくりとお話しし、
          ライフスタイルや髪の悩みを理解した上で、
          最適なスタイルをご提案いたします。
        </p>
      </div>

      {/* 価値観2: 技術への探求 */}
      <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-8 h-8 text-white" />
        </div>
        <h3 className="heading-3 mb-4">技術への探求</h3>
        <p className="body-md text-gray-600">
          常に最新の技術と知識の習得に努め、 お客様にご満足いただける
          高品質なサービスをご提供します。
        </p>
      </div>

      {/* 価値観3: アットホームな空間 */}
      <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Home className="w-8 h-8 text-white" />
        </div>
        <h3 className="heading-3 mb-4">アットホームな空間</h3>
        <p className="body-md text-gray-600">
          お客様がリラックスしてくつろげる、 家族のような温かな雰囲気づくりを
          心がけています。
        </p>
      </div>
    </div>
  </div>
</section>
```

### 4. CTA セクション

```tsx
<section className="py-16 bg-primary-900 text-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">41年の経験と信頼を、あなたにも</h2>
    <p className="text-xl mb-8 text-primary-100">
      3世代に愛され続ける理由を、ぜひご体感ください
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="secondary" size="lg" href="/contact">
        お問い合わせ
      </Button>
      <Button variant="outline" size="lg" href="/menu">
        メニューを見る
      </Button>
    </div>
  </div>
</section>
```

## 🎨 デザイン仕様

### カラーパレット

```css
/* コンセプトページ専用カラー */
.concept-page {
  --story-bg: #faf9f7; /* ストーリー背景 */
  --timeline-line: #d4c4a8; /* タイムライン線 */
  --year-badge: #8b5e3c; /* 年代バッジ */
  --story-accent: #f5e6d3; /* アクセント背景 */
}
```

### タイポグラフィ

```css
/* ストーリーセクション専用 */
.story-year {
  @apply text-primary-600 font-semibold text-sm uppercase tracking-wide;
}

.story-heading {
  @apply text-2xl lg:text-3xl font-bold text-gray-900 leading-tight;
}

.story-text {
  @apply text-gray-600 leading-relaxed;
}
```

### レスポンシブ対応

```css
/* モバイル最適化 */
@media (max-width: 768px) {
  .story-section {
    @apply text-center;
  }

  .story-grid {
    @apply grid-cols-1 gap-8;
  }

  .story-image {
    @apply order-first;
  }
}
```

## 📱 モバイル体験

### スクロール体験

- **プログレッシブ ディスクロージャー**: ストーリーを段階的に展開
- **画像遅延読み込み**: スクロール位置に応じた画像読み込み
- **スムーズスクロール**: セクション間の滑らかな遷移

### タッチインタラクション

- **スワイプ対応**: 画像ギャラリーのスワイプ操作
- **タップ反応**: 適切なタップフィードバック

## 🔧 技術実装

### 画像最適化

```typescript
// 画像コンポーネント設定
const ImageOptimized = ({ src, alt, ...props }) => (
  <Image
    src={src}
    alt={alt}
    loading="lazy"
    quality={90}
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
    {...props}
  />
);
```

### SEO 最適化

```typescript
// メタデータ設定
export const metadata: Metadata = {
  title: 'コンセプト - 41年間の歴史と絆 | 美容室ウイング R',
  description:
    '1983年創業、3世代に愛され続ける岐阜市の美容室ウイング Rの歴史とコンセプト。ファミリーサロンとしての価値観をご紹介。',
  keywords: ['美容室', '岐阜市', '歴史', 'ファミリーサロン', '創業41年'],
  openGraph: {
    title: '41年間地域に愛され続けるファミリーサロンの絆',
    description:
      '美容室ウイング Rの創業から現在までの歴史と、変わらない価値観をご紹介',
    images: ['/images/concept/og-concept.jpg'],
  },
};
```

## 📊 パフォーマンス目標

### Core Web Vitals

- **LCP (Largest Contentful Paint)**: < 2.5 秒
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### 最適化戦略

```typescript
// 画像プリロード
<link rel="preload" as="image" href="/images/concept/hero-bg.jpg" />

// フォントプリロード
<link
  rel="preload"
  href="/fonts/NotoSansJP-Regular.woff2"
  as="font"
  type="font/woff2"
  crossOrigin=""
/>
```

## 🚀 今後の拡張予定

### Phase 1: コンテンツ拡充

- [ ] 年代別ギャラリー追加
- [ ] お客様インタビュー動画
- [ ] 技術革新の歴史紹介

### Phase 2: インタラクティブ要素

- [ ] タイムラインアニメーション
- [ ] パララックススクロール
- [ ] 360 度サロン見学

### Phase 3: ストーリーテリング強化

- [ ] スタッフの想いインタビュー
- [ ] お客様との絆エピソード
- [ ] 地域貢献活動の紹介

## 📈 分析指標

### エンゲージメント測定

```typescript
const analyticsEvents = {
  pageView: 'concept_page_view',
  storyRead: 'story_section_read',
  ctaClick: 'concept_cta_click',
  scrollDepth: 'concept_scroll_depth',
};
```

### KPI 目標

- **滞在時間**: 平均 3 分以上
- **スクロール深度**: 80%以上
- **CTA クリック率**: 15%以上
- **直帰率**: 60%以下

---

**最終更新**: 2024 年 12 月  
**実装状況**: 完了 (100%)  
**次回更新**: コンテンツ拡充時
