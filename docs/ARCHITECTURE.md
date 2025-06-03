# システム設計書

美容室ウイング R プロジェクトのシステム設計書です。

## 🏗️ アーキテクチャ概要

### システム構成

```
美容室ウイング R ウェブサイト
├── フロントエンド (Next.js 14 + TypeScript)
├── スタイリング (Tailwind CSS)
├── コンポーネント設計 (再利用可能な設計)
└── デプロイ (Vercel想定)
```

## 📁 プロジェクト構造

```
hair-salon-wingr/
├── docs/                          # ドキュメント
│   ├── README.md                  # プロジェクト概要
│   ├── SETUP.md                   # 環境構築手順
│   ├── ARCHITECTURE.md            # このファイル
│   ├── IMPLEMENTATION.md          # 実装状況
│   └── features/
│       └── PAGES.md              # ページ詳細仕様
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # ルートレイアウト
│   │   ├── page.tsx             # トップページ
│   │   ├── menu/
│   │   │   └── page.tsx         # メニュー・料金
│   │   ├── stylists/
│   │   │   └── page.tsx         # スタイリスト紹介
│   │   ├── access/
│   │   │   └── page.tsx         # サロン情報・アクセス
│   │   ├── booking/
│   │   │   └── page.tsx         # 予約ページ
│   │   ├── testimonials/
│   │   │   └── page.tsx         # お客様の声
│   │   └── globals.css          # グローバルスタイル
│   ├── components/              # 再利用可能コンポーネント
│   │   ├── layout/             # レイアウト関連
│   │   │   ├── Header.tsx      # ヘッダー・ナビゲーション
│   │   │   ├── Footer.tsx      # フッター
│   │   │   └── MobileMenu.tsx  # モバイルメニュー
│   │   ├── ui/                 # UIコンポーネント
│   │   │   └── Button.tsx      # 共通ボタン
│   │   ├── sections/           # セクションコンポーネント
│   │   │   ├── Feature.tsx     # 特徴セクション
│   │   │   ├── Testimonials.tsx # お客様の声セクション
│   │   │   └── Access.tsx      # アクセスセクション
│   │   └── forms/              # フォーム関連
│   ├── styles/                 # スタイル関連
│   │   └── globals.css         # Tailwind CSS設定
│   ├── lib/                    # ユーティリティ関数
│   └── types/                  # TypeScript型定義
├── public/                     # 静的ファイル
├── package.json               # 依存関係
├── tailwind.config.ts         # Tailwind設定
├── tsconfig.json             # TypeScript設定
└── next.config.mjs           # Next.js設定
```

## 🛠️ 技術スタック

### フロントエンド

| 技術               | バージョン | 用途                             |
| ------------------ | ---------- | -------------------------------- |
| **Next.js**        | 14.2.29    | React フレームワーク・App Router |
| **React**          | 18         | UI ライブラリ                    |
| **TypeScript**     | 5          | 型安全性・開発効率向上           |
| **Tailwind CSS**   | 3.4.1      | ユーティリティファースト CSS     |
| **Lucide React**   | 0.511.0    | アイコンライブラリ               |
| **Tailwind Merge** | 3.3.0      | クラス名の最適化                 |

### 開発ツール

| 技術        | バージョン | 用途               |
| ----------- | ---------- | ------------------ |
| **ESLint**  | 8          | コード品質チェック |
| **PostCSS** | 8          | CSS 処理           |
| **Node.js** | 20+        | 実行環境           |

## 🎨 デザインシステム

### カラーパレット

```css
/* Primary Colors */
--primary-50: #fdf8f6;
--primary-100: #f2e8e5;
--primary-200: #eaddd7;
--primary-300: #e0cec7;
--primary-400: #d2bab0;
--primary-500: #bfa094;
--primary-600: #a18072;
--primary-700: #977669;
--primary-800: #846358;
--primary-900: #43302b;

/* Neutral Colors */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
```

### タイポグラフィ

```css
/* フォント */
font-family: 'Noto Sans JP', sans-serif;

/* 見出しクラス */
.heading-1 {
  @apply text-4xl md:text-5xl font-bold text-gray-900;
}
.heading-2 {
  @apply text-3xl md:text-4xl font-bold text-gray-900;
}
.heading-3 {
  @apply text-xl md:text-2xl font-semibold text-gray-900;
}

/* 本文クラス */
.body-lg {
  @apply text-lg text-gray-600;
}
.body-md {
  @apply text-base text-gray-600;
}
.body-sm {
  @apply text-sm text-gray-600;
}
```

### コンポーネント設計原則

1. **原子設計（Atomic Design）風**

   - `ui/`: 最小単位のコンポーネント（Button 等）
   - `sections/`: セクション単位のコンポーネント
   - `layout/`: レイアウト関連コンポーネント

2. **再利用性**

   - プロップスによる柔軟な設定
   - 統一されたスタイリング規則

3. **型安全性**
   - TypeScript による厳密な型チェック
   - インターフェースの明確な定義

## 🌐 ルーティング設計

### App Router 構成

```
app/
├── layout.tsx          # 全ページ共通レイアウト
├── page.tsx           # / (トップページ)
├── menu/
│   └── page.tsx       # /menu (メニュー・料金)
├── stylists/
│   └── page.tsx       # /stylists (スタイリスト紹介)
├── access/
│   └── page.tsx       # /access (サロン情報・アクセス)
├── booking/
│   └── page.tsx       # /booking (ご予約)
└── testimonials/
    └── page.tsx       # /testimonials (お客様の声)
```

### ナビゲーション構造

```
Header Navigation:
├── HOME (/)
├── MENU (/menu)
├── STYLISTS (/stylists)
├── ACCESS (/access)
└── VOICE (/testimonials)

CTA:
└── ご予約はこちら (/booking)
```

## 📱 レスポンシブ設計

### ブレークポイント

| デバイス      | 幅       | Tailwind 接頭辞 |
| ------------- | -------- | --------------- |
| Mobile        | 320px〜  | デフォルト      |
| Tablet        | 768px〜  | `md:`           |
| Desktop       | 1024px〜 | `lg:`           |
| Large Desktop | 1280px〜 | `xl:`           |

### レスポンシブ戦略

1. **モバイルファースト**

   - 基本スタイルはモバイル向け
   - メディアクエリで段階的拡張

2. **グリッドシステム**

   ```css
   /* 例：カード表示 */
   .card-grid {
     @apply grid gap-6;
     @apply md:grid-cols-2;
     @apply lg:grid-cols-3;
   }
   ```

3. **コンテナ制約**
   ```css
   .container {
     @apply mx-auto px-4;
     @apply max-w-7xl;
   }
   ```

## 🔄 状態管理

### 現在の実装

- **ローカル状態**: `useState`でコンポーネント内状態管理
- **フォーム状態**: ネイティブ HTML フォーム要素
- **ナビゲーション状態**: モバイルメニューの開閉状態

### 将来の拡張

- **グローバル状態**: Context API or Zustand
- **フォーム管理**: React Hook Form
- **データフェッチ**: TanStack Query

## 🚀 パフォーマンス最適化

### 実装済み

1. **Next.js 最適化**

   - App Router による静的生成
   - 自動的なコード分割
   - 画像最適化準備

2. **CSS 最適化**
   - Tailwind CSS の Purging
   - Critical CSS の自動抽出

### 将来の最適化

1. **画像最適化**

   - Next.js Image コンポーネント
   - WebP/AVIF 対応
   - 遅延読み込み

2. **コード最適化**
   - 動的インポート
   - バンドルサイズ分析
   - 使用していないコードの除去

## 🔐 セキュリティ

### 実装済み

- **TypeScript**: 型安全性による実行時エラー防止
- **ESLint**: 潜在的な脆弱性の検出
- **Next.js**: フレームワーク標準のセキュリティ機能

### 将来の実装

- **フォームバリデーション**: サーバーサイド検証
- **CSRF 保護**: トークンベース認証
- **入力サニタイゼーション**: XSS 攻撃対策

## 📊 SEO 最適化

### 実装済み

1. **メタデータ**

   ```typescript
   export const metadata: Metadata = {
     title: 'ページタイトル | 美容室ウイング R',
     description: 'ページの説明文...',
   };
   ```

2. **構造化データ準備**

   - 各ページに適切な HTML 構造
   - セマンティックなマークアップ

3. **パフォーマンス**
   - Next.js による自動最適化
   - 静的生成による高速化

### 将来の強化

- **構造化データ**: JSON-LD 実装
- **サイトマップ**: 自動生成
- **robots.txt**: SEO 設定

## 🧪 テスト戦略

### 現在のアプローチ

- **TypeScript**: コンパイル時の型チェック
- **ESLint**: 静的解析による品質保証
- **手動テスト**: ブラウザでの目視確認

### 将来の実装

- **単体テスト**: Jest + React Testing Library
- **E2E テスト**: Playwright or Cypress
- **視覚回帰テスト**: Storybook + Chromatic

## 🚀 デプロイメント

### 推奨環境

1. **Vercel**（推奨）

   - Next.js 最適化
   - 自動デプロイ
   - エッジ最適化

2. **Netlify**（代替）
   - 静的サイト特化
   - フォーム処理内蔵

### デプロイフロー

```
開発 → Git Push → 自動ビルド → デプロイ
```

## 📈 監視・分析

### 実装予定

- **Google Analytics**: ユーザー行動分析
- **Google Search Console**: SEO 監視
- **Core Web Vitals**: パフォーマンス監視

## 🔮 将来の拡張計画

### Phase 4: 機能拡張

- [ ] 予約システム API 連携
- [ ] スクロールアニメーション
- [ ] 画像ギャラリー
- [ ] ブログ機能

### Phase 5: 高度な機能

- [ ] 会員システム
- [ ] オンライン決済
- [ ] 予約カレンダー
- [ ] スタッフスケジュール管理

---

**作成日**: 2024 年 12 月  
**最終更新**: 2024 年 12 月  
**レビュー者**: 開発チーム
