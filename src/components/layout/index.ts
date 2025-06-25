// src/components/layout/index.ts（更新）
// ========================================
// Layout Components Barrel Export
// ========================================
//
// 【アーキテクチャ方針】
// - コンポーネント: このファイルでエクスポート
// - 型定義: src/types/layout.ts で管理
// - 開発効率: 型の re-export も提供
// ========================================

// === Core Layout Components ===
/**
 * サイト共通ヘッダー
 * 用途: ナビゲーション、ロゴ、電話番号、モバイルメニュー
 */
export { Header } from './Header';

/**
 * サイト共通フッター
 * 用途: 店舗情報、サイトマップ、営業時間、連絡先
 */
export { Footer } from './Footer';

/**
 * モバイル専用ナビゲーション
 * 用途: スライドアウトメニュー、レスポンシブ対応
 */
export { MobileMenu } from './MobileMenu';

/**
 * ページコンテンツラッパー
 * 用途: 統一タイトル表示、説明文、レスポンシブ幅制御
 */
export { PageLayout } from './PageLayout';

// === Type Re-exports ===
// 開発効率向上のため、よく使用される型を re-export
export type {
  PageLayoutProps,
  MobileMenuProps,
  NavigationItem,
  LayoutConfig,
} from '@/types/layout';
