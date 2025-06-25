// src/types/layout.ts
// ========================================
// Layout Components Barrel Export
// ========================================
//
// 【アーキテクチャ方針】
// - コンポーネント: このファイルでエクスポート
// - 型定義: src/types/layout.ts で管理
// - 開発効率: 型の re-export も提供
// ========================================

import { ReactNode } from 'react';

// ========================================
// Layout Component Types
// ========================================
// 目的: レイアウト関連コンポーネントの型定義を一元管理
// 使用例: import { PageLayoutProps, MobileMenuProps } from '@/types/layout'

// === Page Layout Types ===
/**
 * ページレイアウトコンポーネントのProps
 * 個別ページの統一レイアウト提供
 */
export interface PageLayoutProps {
  children: ReactNode;
  titleJa: string; // 日本語タイトル（必須）
  titleEn?: string; // 英語タイトル（装飾的）
  description?: string; // 日本語説明文
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl';
  className?: string;
}

// === Mobile Menu Types ===
/**
 * モバイルメニューコンポーネントのProps
 * スライドアウト式ナビゲーション制御
 */
export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// === Navigation Types ===
/**
 * ナビゲーション項目の型定義
 * Header、MobileMenu、Footer で共通使用
 */
export interface NavigationItem {
  nameJa: string; // 日本語名
  nameEn: string; // 英語名（装飾用）
  href: string; // リンク先
  sectionId?: string; // セクションID（スムーススクロール用）
}

// === Google Map Types ===
/**
 * Google Mapコンポーネントの設定
 */
export interface GoogleMapProps {
  className?: string;
  height?: string;
  zoom?: number;
}

// === FAQ Types ===
/**
 * よくある質問の項目データ
 */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

/**
 * FAQ項目コンポーネントのProps
 */
export interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

// === Layout Configuration Types ===
/**
 * レイアウト全体の設定オプション
 * 将来的な拡張用
 */
export interface LayoutConfig {
  showHeader?: boolean;
  showFooter?: boolean;
  headerVariant?: 'default' | 'transparent';
  footerVariant?: 'default' | 'minimal';
}

// === Business Information Types ===
/**
 * 店舗営業時間の型定義
 */
export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}

/**
 * 店舗情報の型定義
 */
export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  hours: BusinessHours[];
  holidays: string[];
}
