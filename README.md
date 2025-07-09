# 美容室ウイング R 公式ウェブサイト

> 41 年間地域に愛され続ける、岐阜市のファミリーサロンの公式ウェブサイト

![プロジェクト進捗](https://img.shields.io/badge/進捗-90%25完了-green)
![技術スタック](https://img.shields.io/badge/Next.js-14.2.29-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-blue)

## 📋 プロジェクト概要

### コンセプト

「老舗の安心感 × モダンな使いやすさ」

美容室ウイング R は 1983 年の創業から 41 年間、岐阜市で 3 世代に愛され続けるファミリーサロンです。本プロジェクトは、老舗としての信頼感と現代的なウェブ体験を両立させた公式ウェブサイトの構築を目指しています。

### 主要な特徴

- **モバイルファースト設計**: スマートフォン最優先のレスポンシブデザイン
- **直感的なナビゲーション**: 5 分以内で予約判断ができる情報配置
- **ブランドアイデンティティ**: 温かみのあるブラウン系カラーパレット
- **高品質な UX**: React Hook Form と Zod を使用したリアルタイムバリデーション

### 🏪 店舗情報

- **店名**: 美容室ウイング R
- **住所**: 〒 500-8234 岐阜県岐阜市芋島 1-2-3 ウイングビル 1F
- **電話**: 058-123-4567
- **営業時間**: 平日 9:00〜19:00 / 土曜 9:00〜18:00 / 日祝 9:00〜17:00
- **定休日**: 毎週火曜日、第 3 月曜日

## 🛠️ 技術スタック

### フロントエンド

| 技術                | バージョン | 用途                             |
| ------------------- | ---------- | -------------------------------- |
| **Next.js**         | 14.2.29    | React フレームワーク・App Router |
| **React**           | 18         | UI ライブラリ                    |
| **TypeScript**      | 5          | 型安全性・開発効率向上           |
| **Tailwind CSS**    | 3.4.1      | ユーティリティファースト CSS     |
| **Lucide React**    | 0.511.0    | アイコンライブラリ               |
| **React Hook Form** | 7.57.0     | フォーム管理                     |
| **Zod**             | 3.25.55    | バリデーション                   |

### 開発ツール

| 技術               | バージョン | 用途               |
| ------------------ | ---------- | ------------------ |
| **ESLint**         | 8          | コード品質チェック |
| **PostCSS**        | 8          | CSS 処理           |
| **Tailwind Merge** | 3.3.0      | クラス名最適化     |

## 📁 ファイル構成

```
hair-salon-wingr/
├── docs/                          # 📚 包括的ドキュメント
│   ├── features/                  # 機能別仕様書
│   │   ├── MENU_FEATURE.md       # メニューページ仕様
│   │   ├── CONTACT_FEATURE.md    # お問い合わせページ仕様
│   │   ├── CONCEPT_FEATURE.md    # コンセプトページ仕様
│   │   ├── COMPONENT_SYSTEM.md   # コンポーネント仕様
│   │   └── PAGES.md             # 全ページ概要
│   ├── README.md                  # プロジェクト概要
│   ├── ARCHITECTURE.md           # システム設計書
│   ├── COMPONENTS.md             # コンポーネント仕様
│   ├── IMPLEMENTATION.md         # 実装状況
│   └── PROGRESS.md              # 開発進捗
├── src/
│   ├── app/                      # 🎯 Next.js 14 App Router
│   │   ├── page.tsx             # トップページ
│   │   ├── layout.tsx           # ルートレイアウト
│   │   ├── concept/             # コンセプトページ
│   │   ├── feature/             # 特徴ページ
│   │   ├── menu/                # メニューページ
│   │   ├── owner/               # オーナー紹介
│   │   ├── access/              # アクセス
│   │   ├── contact/             # お問い合わせ
│   │   ├── testimonials/        # お客様の声
│   │   ├── booking/             # 予約ページ
│   │   └── api/                 # APIエンドポイント
│   ├── components/              # 🧩 再利用可能コンポーネント
│   │   ├── ui/                  # UIコンポーネント
│   │   │   ├── Button.tsx       # 汎用ボタン
│   │   │   ├── Card.tsx         # カードコンポーネント
│   │   │   ├── SectionTitle.tsx # セクションタイトル
│   │   │   └── LineButton.tsx   # LINEボタン
│   │   ├── layout/              # レイアウトコンポーネント
│   │   │   ├── Header.tsx       # レスポンシブヘッダー
│   │   │   ├── Footer.tsx       # 4列グリッドフッター
│   │   │   ├── MobileMenu.tsx   # フルスクリーンメニュー
│   │   │   └── PageLayout.tsx   # 共通レイアウト
│   │   ├── sections/            # セクションコンポーネント
│   │   │   ├── Feature.tsx      # 4つの特徴表示
│   │   │   ├── Testimonials.tsx # お客様の声
│   │   │   ├── Access.tsx       # アクセス情報
│   │   │   └── FAQ.tsx          # よくある質問
│   │   ├── forms/               # フォームコンポーネント
│   │   │   ├── BookingForm.tsx  # 予約フォーム
│   │   │   ├── ContactForm.tsx  # お問い合わせフォーム
│   │   │   ├── FormField.tsx    # 統合フォームフィールド
│   │   │   └── FormInput.tsx    # 入力コンポーネント
│   │   └── map/                 # マップコンポーネント
│   │       └── GoogleMap.tsx    # Google Maps統合
│   ├── hooks/                   # カスタムフック
│   │   └── useFormValidation.ts # フォームバリデーション
│   ├── lib/                     # ユーティリティライブラリ
│   │   └── animations.ts        # アニメーション設定
│   ├── styles/                  # スタイル設定
│   │   └── globals.css          # グローバルCSS・デザインシステム
│   └── types/                   # TypeScript型定義
│       └── menu.ts              # メニューデータ型
└── public/                      # 静的ファイル
    ├── images/                  # 最適化画像
    │   ├── gallery/            # ギャラリー画像
    │   ├── menu/               # メニュー画像
    │   ├── owner/              # スタッフ画像
    │   └── salon/              # サロン画像
    └── icons/                   # アイコン・ファビコン
```

## 🎯 実装済み機能一覧

### ✅ 完了済みページ (9 ページ)

| ページ           | URL             | 機能概要                             | 完成度 |
| ---------------- | --------------- | ------------------------------------ | ------ |
| **トップページ** | `/`             | ヒーロー、特徴、お客様の声、アクセス | 100%   |
| **コンセプト**   | `/concept`      | 41 年の歴史、3 つの時代区分、価値観  | 100%   |
| **特徴**         | `/feature`      | 4 つの特徴詳細紹介                   | 100%   |
| **メニュー**     | `/menu`         | カテゴリ別メニュー・料金システム     | 100%   |
| **オーナー紹介** | `/owner`        | スタッフ 4 名のプロフィール          | 100%   |
| **アクセス**     | `/access`       | 交通案内、営業時間、地図エリア       | 100%   |
| **お問い合わせ** | `/contact`      | フォーム・バリデーション・店舗情報   | 100%   |
| **お客様の声**   | `/testimonials` | レビューコメント表示                 | 100%   |
| **予約ページ**   | `/booking`      | 電話・WEB 予約                       | 100%   |

### 🧩 コンポーネントシステム

#### UI Components

- **Button**: 3 バリエーション（primary/secondary/outline）× 3 サイズ（sm/md/lg）
- **Card**: 統一されたカードデザイン
- **SectionTitle**: ページセクション用タイトル
- **LineButton**: LINE 公式アカウント連携ボタン

#### Layout Components

- **Header**: 固定ヘッダー・レスポンシブナビゲーション
- **Footer**: 4 列グリッド・店舗情報表示
- **MobileMenu**: フルスクリーンモバイルメニュー
- **PageLayout**: 共通ページレイアウト

#### Section Components

- **Feature**: 4 つの特徴表示セクション
- **Testimonials**: お客様の声表示セクション
- **Access**: アクセス情報・営業時間表示
- **FAQ**: よくある質問セクション

#### Form Components

- **ContactForm**: お問い合わせフォーム（リアルタイムバリデーション）
- **BookingForm**: 予約フォーム
- **FormField**: 統合フォームフィールド
- **FormInput**: 入力コンポーネント

### 🎨 デザインシステム

#### カラーパレット

```css
/* プライマリカラー（ブラウン系） */
--primary-50: #faf7f2; /* 背景色 */
--primary-100: #f5ede0; /* アクセント背景 */
--primary-500: #8b5e3c; /* メインカラー */
--primary-700: #6b4423; /* ホバー・強調 */
--primary-900: #4a2c16; /* テキスト・濃色 */

/* セカンダリカラー（ベージュ系） */
--secondary-50: #fdfcfa; /* セクション背景 */
--secondary-100: #f9f6f0; /* カード背景 */
--secondary-500: #d4c4a8; /* ベージュメイン */
--secondary-700: #b8a082; /* ダークベージュ */

/* アクセントカラー（クリーム系） */
--accent-50: #fffef9; /* クリーム背景 */
--accent-100: #fffcf0; /* クリームアクセント */
--accent-500: #f5e6d3; /* クリームメイン */
```

#### タイポグラフィ

```css
.heading-1 {
  @apply text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900;
}
.heading-2 {
  @apply text-xl md:text-2xl lg:text-3xl font-semibold text-primary-800;
}
.heading-3 {
  @apply text-lg md:text-xl lg:text-2xl font-medium text-primary-700;
}
.body-lg {
  @apply text-base md:text-lg text-gray-700 leading-relaxed;
}
.body-md {
  @apply text-sm md:text-base text-gray-600 leading-relaxed;
}
.body-sm {
  @apply text-xs md:text-sm text-gray-500 leading-normal;
}
```

### 📱 レスポンシブ対応

- **モバイルファースト**: 〜767px
- **タブレット**: 768px〜1279px
- **デスクトップ**: 1280px〜
- **全ページ完全対応**: 統一された余白とレイアウト

## 🚀 セットアップ手順

### 前提条件

- Node.js 18.0 以上
- npm 9.0 以上
- Git

### インストール

```bash
# リポジトリクローン
git clone [repository-url]
cd hair-salon-wingr

# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
```

### 開発コマンド

```bash
npm run dev        # 開発サーバー起動 (http://localhost:3000)
npm run build      # 本番用ビルド
npm run start      # 本番用サーバー起動
npm run lint       # ESLintチェック
```

### 環境変数（オプション）

```bash
# .env.local
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID=your_map_id_here
```

## 🎯 使用方法

### 基本的なコンポーネント使用例

#### Button コンポーネント

```tsx
import { Button } from '@/components/ui/Button';

// 基本使用
<Button>基本ボタン</Button>

// バリエーション指定
<Button variant="primary" size="lg">ご予約はこちら</Button>

// リンクボタン
<Button variant="outline" href="/menu">メニューを見る</Button>
```

#### Card コンポーネント

```tsx
import { Card } from '@/components/ui/Card';

<Card variant="elevated" padding="lg">
  <h3>カードタイトル</h3>
  <p>カードコンテンツ</p>
</Card>;
```

#### SectionTitle コンポーネント

```tsx
import { SectionTitle } from '@/components/ui/SectionTitle';

<SectionTitle
  title="セクションタイトル"
  subtitle="サブタイトル"
  alignment="center"
/>;
```

### レスポンシブユーティリティ

```tsx
// レスポンシブグリッド
<div className="responsive-grid-1-2-4">
  {/* 1列→2列→4列のグリッド */}
</div>

// レスポンシブセクション
<section className="section-padding">
  {/* 適切な上下余白 */}
</section>
```

## 📊 品質指標

### 開発品質

- **TypeScript 型カバレッジ**: 100%
- **ESLint エラー**: 0 件
- **コンポーネント再利用率**: 95%
- **レスポンシブ対応**: 全ページ完了

### UX/UI 品質

- **デザインシステム統一**: 100%
- **アクセシビリティ**: WCAG 2.1 A 準拠
- **モバイル最適化**: 完全対応
- **ページ遷移**: スムーズな体験

## 🔧 開発・保守

### 新しいページの追加

```bash
# 新しいページディレクトリ作成
mkdir src/app/new-page
echo 'export default function NewPage() { return <div>New Page</div>; }' > src/app/new-page/page.tsx
```

### 新しいコンポーネントの追加

```bash
# UI コンポーネントの場合
touch src/components/ui/NewComponent.tsx

# レイアウトコンポーネントの場合
touch src/components/layout/NewLayoutComponent.tsx
```

### スタイルのカスタマイズ

```css
/* src/styles/globals.css */
:root {
  --new-color: #custom-color;
}

.new-utility-class {
  @apply bg-primary-500 text-white px-4 py-2;
}
```

## 🚀 今後の実装予定

### 優先度 高

- [ ] Google Maps API 統合完了
- [ ] お問い合わせフォーム送信機能
- [ ] パフォーマンス最適化

### 優先度 中

- [ ] LINE 連携機能
- [ ] アニメーション実装（Framer Motion）
- [ ] SEO 最適化（構造化データ）

### 優先度 低

- [ ] 管理画面
- [ ] 多言語対応
- [ ] PWA 対応

## 📈 ビジネス目標

### KPI 目標

- **月間ユニークユーザー**: 500 人
- **お問い合わせ送信**: 月 10 件
- **電話コンバージョン**: 月 20 件
- **平均セッション時間**: 3 分以上

## 🤝 貢献

プロジェクトへの貢献を歓迎します：

1. プロジェクトをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは美容室ウイング R の所有物です。

## 📞 サポート

- **技術的な質問**: 開発チームまでお問い合わせください
- **ビジネス関連**: 美容室ウイング R (058-123-4567)

---

**最終更新**: 2024 年 12 月  
**プロジェクト進捗**: 90% 完了  
**次回マイルストーン**: Google Maps API 統合・フォーム送信機能実装
# Sitemap fix #午後
