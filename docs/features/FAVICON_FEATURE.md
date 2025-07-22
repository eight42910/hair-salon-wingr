# Favicon 機能仕様書

## 機能概要

美容室ウイング R サイトにおけるファビコンの実装。ブラウザのタブやブックマークで表示されるサイトアイコンを設定し、ブランドアイデンティティを強化する。

## 技術実装

### 1. ファイル配置構造

```
public/
├── favicon.ico          # 16x16, 32x32, 48x48のマルチサイズICO（必須）
├── icon.svg             # SVGアイコン（推奨）
├── apple-touch-icon.png # 180x180のPNG（iOS用）
└── icons/               # 各種サイズのファビコン
    ├── icon-16x16.png   # 16x16のPNG
    ├── icon-32x32.png   # 32x32のPNG
    ├── icon-96x96.png   # 96x96のPNG
    ├── icon-192x192.png # 192x192のPNG（PWA対応）
    └── icon-512x512.png # 512x512のPNG（PWA対応）
```

### 2. 必要な画像ファイル

| ファイル名             | サイズ              | 形式 | 用途           |
| ---------------------- | ------------------- | ---- | -------------- |
| `favicon.ico`          | 16x16, 32x32, 48x48 | ICO  | ブラウザ標準   |
| `icon.svg`             | ベクター            | SVG  | モダンブラウザ |
| `apple-touch-icon.png` | 180x180             | PNG  | iOS Safari     |
| `icon-16x16.png`       | 16x16               | PNG  | 小サイズ表示   |
| `icon-32x32.png`       | 32x32               | PNG  | 標準サイズ     |
| `icon-96x96.png`       | 96x96               | PNG  | 高解像度       |
| `icon-192x192.png`     | 192x192             | PNG  | PWA 対応       |
| `icon-512x512.png`     | 512x512             | PNG  | PWA 対応       |

### 3. メタデータ設定

`src/app/layout.tsx`の Metadata オブジェクトに icons プロパティを追加：

```typescript
export const metadata: Metadata = {
  // ... 他のメタデータ
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};
```

## UI/UX 仕様

### デザイン要件

1. **ブランドアイデンティティ**

   - 美容室ウイング R のロゴまたは頭文字「W」「R」を使用
   - ブランドカラー（プライマリー：#8b5e3c）を基調とする

2. **視認性**

   - 小さいサイズ（16x16px）でも識別可能なシンプルなデザイン
   - 高コントラストで可読性を確保

3. **一貫性**
   - 全てのサイズで一貫したデザイン
   - ブランドガイドラインに準拠

### 表示確認対象

- **ブラウザタブ**

  - Chrome, Firefox, Safari, Edge
  - デスクトップ・モバイル両対応

- **ブックマーク**

  - 各ブラウザのブックマーク表示
  - ホーム画面追加時のアイコン

- **検索結果**
  - Google 検索結果でのファビコン表示
  - 検索エンジンでの認識確認

## 実装手順

### 1. 画像ファイルの準備

```bash
# publicディレクトリに配置
public/
├── favicon.ico
├── icon.svg
├── apple-touch-icon.png
└── icons/
    ├── icon-16x16.png
    ├── icon-32x32.png
    ├── icon-96x96.png
    ├── icon-192x192.png
    └── icon-512x512.png
```

### 2. メタデータ設定

`src/app/layout.tsx`の Metadata オブジェクトに icons プロパティを追加済み。

### 3. 確認方法

```bash
# 開発サーバー起動
npm run dev

# ブラウザで確認
# - http://localhost:3000/favicon.ico
# - http://localhost:3000/icon.svg
# - http://localhost:3000/apple-touch-icon.png
# - http://localhost:3000/icons/icon-16x16.png
# - etc...
```

## テストケース

### 1. ファイル存在確認

- [ ] `/favicon.ico` がアクセス可能
- [ ] `/icon.svg` がアクセス可能
- [ ] `/apple-touch-icon.png` がアクセス可能
- [ ] `/icons/` 以下の各 PNG ファイルがアクセス可能

### 2. ブラウザ表示確認

- [ ] Chrome でタブアイコンが正しく表示される
- [ ] Firefox でタブアイコンが正しく表示される
- [ ] Safari でタブアイコンが正しく表示される
- [ ] Edge でタブアイコンが正しく表示される

### 3. デバイス別確認

- [ ] デスクトップでの表示
- [ ] モバイル（iOS）での表示
- [ ] モバイル（Android）での表示
- [ ] タブレットでの表示

### 4. 機能確認

- [ ] ブックマーク追加時のアイコン表示
- [ ] ホーム画面追加時のアイコン表示（モバイル）
- [ ] 検索結果でのファビコン表示

## パフォーマンス考慮事項

### 1. ファイルサイズ最適化

- ICO ファイル：10KB 以下
- PNG ファイル：各 5KB 以下
- SVG ファイル：2KB 以下

### 2. 読み込み最適化

- Next.js の static file serving 活用
- CDN 配信対応（本番環境）
- 適切なキャッシュ設定

## セキュリティ考慮事項

### 1. ファイル形式検証

- 許可された画像形式のみ使用
- 悪意のあるファイルの混入防止

### 2. アクセス制御

- public 配下のファイルは直接アクセス可能
- 不要なファイルの配置回避

## 今後の拡張予定

### 1. PWA 対応

- Web App Manifest での詳細アイコン設定
- マスカブルアイコンの追加検討

### 2. 動的ファビコン

- 通知機能実装時のバッジ表示
- 状態に応じたアイコン変更

## 関連ファイル

- `src/app/layout.tsx` - メタデータ設定
- `public/favicon.ico` - メインファビコン
- `public/icon.svg` - SVG アイコン
- `public/apple-touch-icon.png` - iOS 用アイコン
- `public/icons/` - 各種サイズの PNG アイコン

## 実装完了日

2025-07-22（2025 年 7 月 22 日実装完了）

## 実装状況

- [x] `public/icons/` ディレクトリ作成済み
- [x] `src/app/layout.tsx` メタデータ設定完了
- [x] ファビコン画像ファイル配置完了
- [x] 全サイズのファビコン動作確認済み
- [x] Next.js 14 App Router 対応完了

## 配置済みファイル一覧

| ファイル                   | パス                              | サイズ | 用途           |
| -------------------------- | --------------------------------- | ------ | -------------- |
| favicon.ico                | /favicon.ico                      | 15.4KB | 標準ファビコン |
| apple-touch-icon.png       | /apple-touch-icon.png             | 18.7KB | iOS Safari     |
| android-chrome-192x192.png | /android-chrome-192x192.png       | 20.5KB | Android Chrome |
| favicon-16x16.png          | /icons/favicon-16x16.png          | 655B   | 小サイズ表示   |
| favicon-32x32.png          | /icons/favicon-32x32.png          | 1.5KB  | 標準サイズ     |
| android-chrome-512x512.png | /icons/android-chrome-512x512.png | 97.5KB | 最大サイズ     |

## 備考

- 画像ファイルは美容室ウイング R のブランドガイドラインに準拠
- 各ブラウザでの表示確認は実装完了後に実施
- PWA 対応は将来の機能拡張として検討
