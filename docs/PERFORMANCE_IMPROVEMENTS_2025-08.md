# パフォーマンス改善レポート（2025-08）

## 目的
- Lighthouse の指摘（LCP 3.5s、オフスクリーン画像、未使用JS/CSS、メインスレッド2.4s）を解消し、初期表示体験を改善する。

## 実施内容

- 画像最適化
  - ヒーロー背景の `quality` を 85 → 70 に変更（`src/app/page.tsx`）。
  - 折り返し以下の画像を `loading="lazy"` に統一、`quality=70` に削減（`sections/Feature.tsx`, `sections/Staff.tsx`）。
  - `OptimizedImage` の既定品質を 70 に統一（`components/ui/OptimizedImage.tsx`）。

- フォント配信最適化
  - `next/font` の `preload:false`、ウェイトを 400 のみに削減（`src/app/layout.tsx`）。
  - 不要な `fonts.gstatic` の `preconnect` を削除。

- クライアントJS削減
  - `AnimatedSection` を framer-motion から IntersectionObserver ベースに置換（`components/ui/AnimatedSection.tsx`）。
  - 目的: セクション登場アニメのJSサイズ/メインスレッド時間を削減。

## 期待される効果
- LCP: ヒーロー画像転送量の削減により短縮。
- TBT: アニメーションJSの削減・遅延読み込みにより短縮。
- ネットワーク: オフスクリーン画像の遅延読み込みで初期リクエスト削減。

## 変更ファイル一覧
- `src/app/page.tsx`
- `src/components/sections/Feature.tsx`
- `src/components/sections/Staff.tsx`
- `src/components/ui/OptimizedImage.tsx`
- `src/components/ui/AnimatedSection.tsx`
- `src/app/layout.tsx`
- `README.md`

## 計測メモ（目標）
- LCP < 2.5s（Moto G Power / Slow 4G 相当）
- TBT < 100ms
- CLS ≈ 0（現状維持）

## 次の改善候補
- 無限アニメーションの密度削減（装飾要素の framer-motion → CSS 変換）
- `globals.css` の未使用ユーティリティの棚卸し
- `public/images` のソース画像の再圧縮（AVIF/WEBP化・実寸最適化）

## 付録: 画像最適化スクリプト
- 実行: `npm run optimize:images`
- 対象: `public/images/**/*.jpg|jpeg|png`
- 仕様:
  - 元画像: 品質70で再圧縮（PNGは圧縮）
  - 生成: `.webp`（品質65）、幅400px以上の画像には `.avif`（品質50）



