// src/components/sections/index.ts
// ========================================
// Section Components Barrel Export
// ========================================
//
// 【アーキテクチャ方針】
// - コンポーネント: このファイルでエクスポート
// - 型定義: src/types/sections.ts で管理
// - 型安全性: TypeScriptの恩恵を最大活用
// ========================================

// === Hero & Landing Sections ===
/**
 * アニメーション付きヒーローセクション
 * 用途: トップページメインビジュアル、キャッチコピー
 */
export { AnimatedHero } from './AnimatedHero';

// === Feature & Service Sections ===
/**
 * 4つの特徴表示セクション
 * 用途: サロンの強み・特色の紹介
 */
export { Feature } from './Feature';

/**
 * メニュー・料金表示セクション
 * 用途: サービス内容・価格の一覧表示
 */
export { default as MenuContent } from './MenuContent';

// === Information Sections ===
/**
 * よくある質問セクション
 * 用途: FAQ表示、アコーディオン形式
 */
export { FAQ } from './FAQ';

/**
 * アクセス情報セクション
 * 用途: 店舗情報、営業時間、地図表示
 */
export { Access } from './Access';

/**
 * お客様の声セクション
 * 用途: レビュー・証言表示
 */
export { Testimonials } from './Testimonials';

// === Conversion Sections ===
/**
 * LINE予約セクション
 * 用途: CTA、予約誘導
 */
export { LineReservation } from './LineReservation';

// 型定義は src/types/sections.ts から import
// 使用例:
// import { Feature, type FeatureProps } from '@/components/sections';
// import type { FeatureItem } from '@/types/sections';
export { Staff } from './Staff';
