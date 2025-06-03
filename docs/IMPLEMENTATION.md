# 美容室ウイング R 実装ドキュメント

## 📋 実装ステータス

### ✅ 完了済み

#### 1. プロジェクト基盤設定

- **ディレクトリ構造**: 要件定義書に従った`src/`配下への整理
- **TypeScript 設定**: パスエイリアス（`@/*`）の設定
- **Tailwind CSS**: カスタムカラーパレットの実装
- **グローバルスタイル**: カスタムクラス（heading-1〜3, body-lg/md/sm）の定義

#### 2. 共通コンポーネント

- **Button**: 3 つのバリエーション（primary, secondary, outline）× 3 つのサイズ
- **Header**: レスポンシブナビゲーション、固定ヘッダー
- **MobileMenu**: ハンバーガーメニュー、スクロール制御付き
- **Footer**: 店舗情報、サイトマップ、営業時間

#### 3. トップページセクション

- **Hero Section**: キャッチコピー、CTA ボタン
- **Feature Section**: 4 つの特徴（ファミリーサロン、頭皮改善、デジタルパーマ、セルフスタイリング）
- **Testimonials Section**: お客様の声（3 件）
- **Access Section**: 店舗情報、営業時間、地図エリア

### 🚧 開発中・未実装

#### 1. 個別ページ

- [ ] `/concept` - コンセプトページ
- [ ] `/feature` - 特徴詳細ページ
- [ ] `/menu` - メニューページ
- [ ] `/owner` - オーナー紹介ページ
- [ ] `/access` - アクセス専用ページ
- [ ] `/contact` - お問い合わせページ

#### 2. 機能実装

- [ ] お問い合わせフォーム（React Hook Form + Zod）
- [ ] LINE 連携システム
- [ ] Google Maps API 統合
- [ ] アニメーション（Framer Motion）
- [ ] SEO 最適化（構造化データ）

## 🏗️ アーキテクチャ詳細

### ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # トップページ
│   └── api/                # APIエンドポイント（未実装）
│       ├── contact/
│       └── line-webhook/
├── components/
│   ├── ui/
│   │   └── Button.tsx      # ボタンコンポーネント
│   ├── layout/
│   │   ├── Header.tsx      # ヘッダー
│   │   ├── MobileMenu.tsx  # モバイルメニュー
│   │   └── Footer.tsx      # フッター
│   ├── sections/           # ページセクション
│   │   ├── Feature.tsx     # 特徴セクション
│   │   ├── Testimonials.tsx # お客様の声
│   │   └── Access.tsx      # アクセス情報
│   └── forms/              # フォーム（未実装）
├── lib/                    # ユーティリティ（未実装）
├── types/                  # 型定義（未実装）
└── styles/
    └── globals.css         # グローバルスタイル
```

### コンポーネント設計

#### Button コンポーネント

```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}
```

**使用例:**

```tsx
<Button variant="primary" size="lg">ご予約はこちら</Button>
<Button variant="outline" size="md">メニューを見る</Button>
```

#### レスポンシブナビゲーション

- **デスクトップ**: 横並びナビゲーション + 電話番号 + CTA ボタン
- **モバイル**: ハンバーガーメニュー → フルスクリーンメニュー

### カラーパレット実装

```css
/* Tailwind Config */
primary: {
  50: '#faf7f2',   // 背景色
  100: '#f5ede0',  // アクセント背景
  500: '#8b5e3c',  // メインカラー
  700: '#6b4423',  // ホバー・強調
  800: '#5a3820',  //
  900: '#4a2c16',  // テキスト・濃色
}

secondary: {
  50: '#fdfcfa',   // セクション背景
  100: '#f9f6f0',  //
  500: '#d4c4a8',  // ベージュ
  700: '#b8a082',  // ダークベージュ
}

accent: {
  50: '#fffef9',   // クリーム背景
  100: '#fffcf0',  // クリームアクセント
  500: '#f5e6d3',  // クリームメイン
}
```

### タイポグラフィシステム

```css
/* グローバルクラス */
.heading-1 {
  @apply text-4xl font-bold text-primary-900;
}
.heading-2 {
  @apply text-3xl font-semibold text-primary-800;
}
.heading-3 {
  @apply text-2xl font-medium text-primary-700;
}

.body-lg {
  @apply text-lg text-gray-700 leading-relaxed;
}
.body-md {
  @apply text-base text-gray-600 leading-relaxed;
}
.body-sm {
  @apply text-sm text-gray-500 leading-normal;
}
```

## 📱 レスポンシブ設計

### ブレークポイント

- **sm**: 640px（スマートフォン横向き）
- **md**: 768px（タブレット縦向き）
- **lg**: 1024px（タブレット横向き・小さい PC）
- **xl**: 1280px（デスクトップ）

### 主要レスポンシブ対応

- ヘッダーナビゲーション（デスクトップ ↔ モバイルメニュー）
- 特徴セクション（4 列 → 2 列 → 1 列）
- お客様の声（3 列 → 2 列 → 1 列）
- アクセス情報（2 列 → 1 列）

## 🎨 デザインシステム

### セクションレイアウトパターン

```tsx
// 標準セクション構造
<section className="py-16 bg-{color}">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="heading-2 mb-4">{title}</h2>
      <p className="body-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
    {/* コンテンツ */}
  </div>
</section>
```

### カードコンポーネントパターン

```tsx
// 特徴カード
<div className="text-center p-6 rounded-lg bg-accent-50 hover:bg-accent-100 transition-colors duration-300">
  <div className="flex justify-center mb-4">
    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
      <IconComponent className="w-8 h-8 text-white" />
    </div>
  </div>
  <h3 className="heading-3 mb-3 text-lg">{title}</h3>
  <p className="body-md text-gray-600">{description}</p>
</div>
```

## 📦 依存関係

### 主要パッケージ

```json
{
  "next": "14.x",
  "react": "18.x",
  "typescript": "5.x",
  "tailwindcss": "3.4.x",
  "lucide-react": "latest",
  "tailwind-merge": "latest"
}
```

### 今後追加予定

```json
{
  "react-hook-form": "フォーム管理",
  "zod": "バリデーション",
  "framer-motion": "アニメーション",
  "@line/bot-sdk": "LINE連携",
  "nodemailer": "メール送信"
}
```

## 🔧 開発・デプロイ

### 開発サーバー

```bash
npm run dev        # 開発サーバー起動
npm run build      # 本番ビルド
npm run start      # 本番サーバー起動
npm run lint       # ESLint実行
```

### 設定ファイル

- `tsconfig.json`: パスエイリアス設定済み
- `tailwind.config.ts`: カスタムカラー設定済み
- `next.config.mjs`: 基本設定
- `postcss.config.mjs`: Tailwind 連携

## 📋 次のステップ

### Phase 1: 個別ページ実装

1. **概念ページ** (`/concept`)

   - 創業ストーリー
   - 継続の秘訣
   - 一貫した想い

2. **特徴詳細ページ** (`/feature`)

   - ファミリーサロン詳細
   - 頭皮改善詳細
   - 技術説明

3. **メニューページ** (`/menu`)
   - カテゴリ別メニュー
   - 料金案内
   - おすすめプラン

### Phase 2: 機能実装

1. **お問い合わせフォーム**

   - React Hook Form 実装
   - バリデーション（Zod）
   - 送信処理

2. **LINE 連携**
   - Webhook 設定
   - 予約フロー
   - リッチメニュー

### Phase 3: 最適化

1. **パフォーマンス**

   - 画像最適化
   - コード分割
   - SEO 対策

2. **アニメーション**
   - スクロール連動
   - マイクロインタラクション

---

**最終更新**: 2024 年 12 月  
**担当**: 開発チーム  
**ステータス**: Phase 1 準備完了
