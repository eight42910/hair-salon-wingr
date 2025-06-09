# 美容室ウイング R デザインシステム

## 🎨 概要

「老舗の安心感 × モダンな使いやすさ」をコンセプトとした、美容室ウイング R の包括的デザインシステムガイドライン。

## 🌈 カラーパレット

### プライマリカラー（ブラウン系）

温かみと信頼性を表現する、美容室の核となるカラー。

```css
/* Light variants */
--primary-50: #faf7f2; /* 背景色 - 最も薄いクリーム */
--primary-100: #f5ede0; /* アクセント背景 - 薄いベージュ */
--primary-200: #ede0d0; /* セクション背景 */
--primary-300: #e0cec0; /* ボーダー・区切り線 */

/* Main variants */
--primary-400: #c4a78a; /* 無効状態 */
--primary-500: #8b5e3c; /* メインカラー - ブランドの核 */
--primary-600: #7a4d2f; /* ホバー状態 */

/* Dark variants */
--primary-700: #6b4423; /* 強調・見出し */
--primary-800: #5a3820; /* ダーク見出し */
--primary-900: #4a2c16; /* 最濃テキスト */
```

#### 使用用途

- **50-100**: 背景色、セクション背景
- **500**: CTA ボタン、アクセント
- **700-900**: テキスト、見出し

### セカンダリカラー（ベージュ系）

プライマリカラーを補完する、落ち着いた中間色。

```css
--secondary-50: #fdfcfa; /* 微細な背景 */
--secondary-100: #f9f6f0; /* カード背景 */
--secondary-200: #f3eee5; /* ホバー背景 */
--secondary-300: #ede5d8; /* ボーダー */
--secondary-400: #d9cbb7; /* 無効状態 */
--secondary-500: #d4c4a8; /* メインベージュ */
--secondary-600: #c4b193; /* ホバーベージュ */
--secondary-700: #b8a082; /* ダークベージュ */
--secondary-800: #a08b6f; /* テキスト補助 */
--secondary-900: #8a745b; /* ダークテキスト */
```

#### 使用用途

- **50-200**: カード背景、セクション背景
- **500-600**: サブボタン、アクセント
- **700-900**: セカンダリテキスト

### アクセントカラー（クリーム系）

特別な要素や強調に使用する、温かなアクセント。

```css
--accent-50: #fffef9; /* 極薄クリーム */
--accent-100: #fffcf0; /* クリーム背景 */
--accent-200: #fff8e6; /* 薄いクリーム */
--accent-300: #fff2d6; /* アクセント背景 */
--accent-400: #ffe8b8; /* ホバーアクセント */
--accent-500: #f5e6d3; /* メインクリーム */
--accent-600: #ead7be; /* ダーククリーム */
--accent-700: #dfc7a6; /* 強調クリーム */
--accent-800: #d4b88e; /* テキストアクセント */
--accent-900: #c9a876; /* 最濃アクセント */
```

#### 使用用途

- **50-300**: 特別セクション背景
- **500**: カード強調、特別要素
- **700-900**: アクセントテキスト

### ニュートラルカラー（グレースケール）

テキスト、ボーダー、背景に使用する無彩色。

```css
/* ニュートラル - Tailwind CSS Gray準拠 */
--neutral-50: #f9fafb; /* 背景 */
--neutral-100: #f3f4f6; /* 薄い背景 */
--neutral-200: #e5e7eb; /* ボーダー薄 */
--neutral-300: #d1d5db; /* ボーダー */
--neutral-400: #9ca3af; /* プレースホルダー */
--neutral-500: #6b7280; /* 補助テキスト */
--neutral-600: #4b5563; /* テキスト */
--neutral-700: #374151; /* 本文テキスト */
--neutral-800: #1f2937; /* 見出し */
--neutral-900: #111827; /* 最濃テキスト */
```

### 機能カラー（フィードバック）

システムの状態を表現する機能的カラー。

```css
/* 成功 */
--success-50: #f0fdf4;
--success-500: #22c55e;
--success-700: #15803d;

/* 警告 */
--warning-50: #fffbeb;
--warning-500: #f59e0b;
--warning-700: #d97706;

/* エラー */
--error-50: #fef2f2;
--error-500: #ef4444;
--error-700: #dc2626;

/* 情報 */
--info-50: #f0f9ff;
--info-500: #3b82f6;
--info-700: #1d4ed8;
```

### 特殊カラー（外部サービス）

外部サービス連携時に使用する専用カラー。

```css
/* LINE */
--line-primary: #06c755; /* LINE公式緑 */
--line-dark: #05b04a; /* LINEダーク緑 */

/* Instagram */
--instagram-primary: #e4405f;
--instagram-secondary: #833ab4;

/* Google */
--google-primary: #4285f4;
--google-secondary: #34a853;
```

## 📝 タイポグラフィシステム

### フォントファミリー

```css
/* プライマリフォント */
font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* セカンダリフォント（英数字） */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### 見出しスケール

```css
.heading-1 {
  @apply text-2xl md:text-3xl lg:text-4xl xl:text-5xl;
  @apply font-bold text-primary-900 leading-tight;
  @apply mb-4 lg:mb-6;
}

.heading-2 {
  @apply text-xl md:text-2xl lg:text-3xl xl:text-4xl;
  @apply font-semibold text-primary-800 leading-tight;
  @apply mb-3 lg:mb-4;
}

.heading-3 {
  @apply text-lg md:text-xl lg:text-2xl xl:text-3xl;
  @apply font-medium text-primary-700 leading-tight;
  @apply mb-2 lg:mb-3;
}

.heading-4 {
  @apply text-base md:text-lg lg:text-xl xl:text-2xl;
  @apply font-medium text-primary-700 leading-snug;
  @apply mb-2;
}
```

### 本文スケール

```css
.body-xl {
  @apply text-lg md:text-xl lg:text-2xl;
  @apply text-neutral-700 leading-relaxed;
}

.body-lg {
  @apply text-base md:text-lg lg:text-xl;
  @apply text-neutral-700 leading-relaxed;
}

.body-md {
  @apply text-sm md:text-base lg:text-lg;
  @apply text-neutral-600 leading-relaxed;
}

.body-sm {
  @apply text-xs md:text-sm lg:text-base;
  @apply text-neutral-500 leading-normal;
}

.body-xs {
  @apply text-xs lg:text-sm;
  @apply text-neutral-400 leading-normal;
}
```

### 特殊テキスト

```css
.caption {
  @apply text-xs text-neutral-500 leading-normal;
}

.overline {
  @apply text-xs text-primary-600 font-semibold uppercase tracking-wide;
}

.link {
  @apply text-primary-600 hover:text-primary-700 underline transition-colors;
}
```

## 🏗️ スペーシングシステム

### レスポンシブスペーシング

```css
/* セクション間余白 */
.section-spacing {
  @apply py-12 md:py-16 lg:py-20 xl:py-24;
}

.section-spacing-sm {
  @apply py-8 md:py-12 lg:py-16 xl:py-20;
}

.section-spacing-xs {
  @apply py-6 md:py-8 lg:py-12 xl:py-16;
}

/* コンテナ内余白 */
.container-padding {
  @apply px-4 md:px-6 lg:px-8 xl:px-12;
}

/* 要素間余白 */
.element-spacing {
  @apply space-y-4 md:space-y-6 lg:space-y-8;
}
```

### グリッドシステム

```css
/* レスポンシブグリッド */
.grid-responsive-1-2 {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10;
}

.grid-responsive-1-2-3 {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8;
}

.grid-responsive-1-2-4 {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8;
}
```

## 🎯 コンポーネントスタイル

### ボタンシステム

```css
/* ベースボタン */
.btn-base {
  @apply inline-flex items-center justify-center;
  @apply font-medium rounded-lg transition-all duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}

/* サイズバリエーション */
.btn-xs {
  @apply px-2 py-1 text-xs;
}
.btn-sm {
  @apply px-3 py-2 text-sm;
}
.btn-md {
  @apply px-4 py-3 text-base;
}
.btn-lg {
  @apply px-6 py-4 text-lg;
}
.btn-xl {
  @apply px-8 py-5 text-xl;
}

/* カラーバリエーション */
.btn-primary {
  @apply bg-primary-600 text-white;
  @apply hover:bg-primary-700 focus:ring-primary-500;
  @apply shadow-sm hover:shadow-md;
}

.btn-secondary {
  @apply bg-secondary-500 text-primary-900;
  @apply hover:bg-secondary-600 focus:ring-secondary-400;
  @apply shadow-sm hover:shadow-md;
}

.btn-outline {
  @apply bg-transparent text-primary-600 border-2 border-primary-600;
  @apply hover:bg-primary-600 hover:text-white focus:ring-primary-500;
}

.btn-ghost {
  @apply bg-transparent text-primary-600;
  @apply hover:bg-primary-50 focus:ring-primary-500;
}
```

### カードシステム

```css
.card-base {
  @apply bg-white rounded-2xl transition-all duration-300;
  @apply border border-neutral-200;
}

.card-elevated {
  @apply shadow-lg hover:shadow-xl;
}

.card-interactive {
  @apply hover:scale-105 cursor-pointer;
}

.card-padding-sm {
  @apply p-4;
}
.card-padding-md {
  @apply p-6;
}
.card-padding-lg {
  @apply p-8;
}
```

### フォームスタイル

```css
.form-field {
  @apply w-full px-4 py-3 border border-neutral-300 rounded-lg;
  @apply focus:ring-2 focus:ring-primary-500 focus:border-transparent;
  @apply transition-all duration-200;
  @apply placeholder:text-neutral-400;
}

.form-field-error {
  @apply border-error-500 focus:ring-error-500;
}

.form-label {
  @apply block text-sm font-semibold text-neutral-700 mb-2;
}

.form-error {
  @apply text-sm text-error-600 mt-1;
}
```

## 📱 レスポンシブブレークポイント

### ブレークポイント定義

```css
/* Tailwind CSS準拠 */
sm: 640px   /* スマートフォン横向き */
md: 768px   /* タブレット縦向き */
lg: 1024px  /* タブレット横向き・小PC */
xl: 1280px  /* デスクトップ */
2xl: 1536px /* 大型デスクトップ */
```

### デバイス別戦略

- **Mobile First**: 〜767px
- **Tablet**: 768px〜1023px
- **Desktop**: 1024px〜

## 🎭 アニメーションシステム

### トランジション

```css
.transition-smooth {
  @apply transition-all duration-300 ease-out;
}

.transition-quick {
  @apply transition-all duration-200 ease-out;
}

.transition-slow {
  @apply transition-all duration-500 ease-out;
}
```

### ホバーエフェクト

```css
.hover-lift {
  @apply transition-transform duration-200;
  @apply hover:transform hover:-translate-y-1;
}

.hover-scale {
  @apply transition-transform duration-200;
  @apply hover:transform hover:scale-105;
}
```

## 🔧 実装ガイドライン

### CSS Variables 更新

```css
:root {
  /* プライマリカラー展開 */
  --primary-50: #faf7f2;
  --primary-100: #f5ede0;
  --primary-200: #ede0d0;
  --primary-300: #e0cec0;
  --primary-400: #c4a78a;
  --primary-500: #8b5e3c;
  --primary-600: #7a4d2f;
  --primary-700: #6b4423;
  --primary-800: #5a3820;
  --primary-900: #4a2c16;

  /* セカンダリカラー展開 */
  --secondary-50: #fdfcfa;
  --secondary-100: #f9f6f0;
  --secondary-200: #f3eee5;
  --secondary-300: #ede5d8;
  --secondary-400: #d9cbb7;
  --secondary-500: #d4c4a8;
  --secondary-600: #c4b193;
  --secondary-700: #b8a082;
  --secondary-800: #a08b6f;
  --secondary-900: #8a745b;

  /* アクセントカラー展開 */
  --accent-50: #fffef9;
  --accent-100: #fffcf0;
  --accent-200: #fff8e6;
  --accent-300: #fff2d6;
  --accent-400: #ffe8b8;
  --accent-500: #f5e6d3;
  --accent-600: #ead7be;
  --accent-700: #dfc7a6;
  --accent-800: #d4b88e;
  --accent-900: #c9a876;
}
```

### Tailwind Config 更新

```typescript
const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        // 同様に secondary, accent も展開
      },
    },
  },
};
```

---

**最終更新**: 2024 年 12 月  
**バージョン**: v2.0.0  
**適用対象**: 全コンポーネント・全ページ
