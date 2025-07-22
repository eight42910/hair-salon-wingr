# メニューページ機能仕様書

## 📝 概要

美容室ウイング R のメニュー・料金ページの詳細機能仕様書です。

## 🎯 ページ目的

- 全メニューと料金の体系的な表示
- 直感的なメニュー選択
- 予約への導線提供

## 📍 URL・ファイル構成

- **URL**: `/menu`
- **メインファイル**: `src/app/menu/page.tsx`
- **コンテンツコンポーネント**: `src/app/menu/MenuContent.tsx`
- **型定義**: `src/types/menu.ts`

## 🏗️ コンポーネント構成

### 1. ページレイアウト (`page.tsx`)

```tsx
export default function MenuPage() {
  return (
    <PageLayout>
      <MenuContent />
    </PageLayout>
  );
}
```

### 2. メインコンテンツ (`MenuContent.tsx`)

#### 構成要素

- **SectionTitle**: ページタイトル
- **MenuCategory**: カテゴリ別メニュー表示
- **MenuItem**: 個別メニューアイテム

## 📋 メニューデータ構造

### MenuData 型定義

```typescript
interface MenuData {
  cut: MenuCategory;
  color: MenuCategory;
  perm: MenuCategory;
  treatment: MenuCategory;
}

interface MenuCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
  items: MenuItem[];
}

interface MenuItem {
  name: string;
  description: string;
  detailedDescription: string;
  price: string;
  originalPrice: string | null;
  duration: string;
  popular: boolean;
  new: boolean;
  image: string;
}
```

## 🎨 カテゴリ別仕様

### 1. カット (Cut)

- **アイコン**: Scissors
- **カラー**: `bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200`
- **メニュー数**: 3 種類

| メニュー         | 価格   | 時間  | 内容                   |
| ---------------- | ------ | ----- | ---------------------- |
| レディースカット | ¥4,500 | 60 分 | シャンプー・ブロー込み |
| メンズカット     | ¥3,500 | 45 分 | シャンプー・セット込み |
| お子様カット     | ¥2,500 | 30 分 | 中学生以下             |

### 2. カラー (Color)

- **アイコン**: Palette
- **カラー**: `bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200`
- **メニュー数**: 4 種類

| メニュー       | 価格   | 時間   | 内容                   |
| -------------- | ------ | ------ | ---------------------- |
| 全体カラー     | ¥6,000 | 90 分  | シャンプー・ブロー込み |
| リタッチカラー | ¥4,500 | 60 分  | 根元のみ               |
| ハイライト     | ¥8,000 | 120 分 | 部分明るいカラー       |
| 白髪染め       | ¥5,500 | 75 分  | 自然な仕上がり         |

### 3. パーマ (Perm)

- **アイコン**: Waves
- **カラー**: `bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200`
- **メニュー数**: 3 種類

| メニュー         | 価格    | 時間   | 内容                           |
| ---------------- | ------- | ------ | ------------------------------ |
| コールドパーマ   | ¥8,500  | 150 分 | カット・シャンプー・ブロー込み |
| デジタルパーマ   | ¥12,000 | 180 分 | カット・シャンプー・ブロー込み |
| ストレートパーマ | ¥15,000 | 240 分 | 縮毛矯正                       |

### 4. トリートメント (Treatment)

- **アイコン**: Sparkles
- **カラー**: `bg-gradient-to-br from-green-50 to-green-100 border-green-200`
- **メニュー数**: 3 種類

| メニュー           | 価格   | 時間  | 内容             |
| ------------------ | ------ | ----- | ---------------- |
| ヘッドスパ         | ¥3,000 | 45 分 | 頭皮クレンジング |
| 集中トリートメント | ¥4,000 | 60 分 | 髪質改善         |
| スカルプケア       | ¥5,000 | 75 分 | 頭皮環境改善     |

## 🎨 UI/UX 仕様

### レスポンシブ対応

- **デスクトップ**: 2 列グリッド
- **タブレット**: 2 列グリッド
- **モバイル**: 1 列スタック

### カードデザイン

```css
/* メニューカテゴリカード */
.menu-category-card {
  @apply bg-white rounded-2xl shadow-sm border p-6;
  @apply hover:shadow-md transition-shadow duration-300;
}

/* メニューアイテムカード */
.menu-item-card {
  @apply bg-white rounded-xl shadow-sm border p-4;
  @apply hover:shadow-md hover:scale-[1.02] transition-all duration-200;
}
```

### ビジュアル要素

- **メニュー画像**: 各アイテムに対応する施術画像
- **人気メニュー**: `popular: true` でバッジ表示
- **新メニュー**: `new: true` で NEW バッジ表示
- **割引価格**: `originalPrice` 設定時に打ち消し線表示

## 🔧 実装済み機能

### 1. インタラクティブ要素

- **ホバーエフェクト**: カードに微細なスケールアニメーション
- **アイコン表示**: 各カテゴリに対応する Lucide アイコン
- **グラデーション背景**: カテゴリごとの色分け

### 2. アクセシビリティ

- **セマンティック HTML**: 適切なマークアップ
- **カラーコントラスト**: WCAG 基準準拠
- **フォーカス管理**: キーボードナビゲーション対応

## 📱 モバイル最適化

### レスポンシブブレークポイント

```css
/* モバイル (default) */
.menu-grid {
  @apply grid grid-cols-1 gap-8;
}

/* タブレット (md:768px) */
@media (min-width: 768px) {
  .menu-grid {
    @apply grid-cols-2 gap-10;
  }
}

/* デスクトップ (lg:1024px) */
@media (min-width: 1024px) {
  .menu-grid {
    @apply gap-12;
  }
}
```

### モバイル専用最適化

- **タッチターゲット**: 最小 44px 確保
- **スクロール性能**: `transform`を使用したアニメーション
- **画像最適化**: WebP 対応、適切なサイズ設定

## 🚀 パフォーマンス

### 最適化項目

- **画像遅延読み込み**: Next.js Image コンポーネント使用
- **コード分割**: 必要な部分のみ読み込み
- **CSS 最適化**: Tailwind CSS の Purge 機能

### メトリクス目標

- **LCP**: < 2.5 秒
- **FID**: < 100ms
- **CLS**: < 0.1

## 🔄 今後の拡張予定

### Phase 1: 機能拡張

- [ ] 料金詳細ポップアップ
- [ ] メニュー検索・フィルタリング
- [ ] お気に入り機能

### Phase 2: 統合機能

- [ ] 予約システム連携
- [ ] LINE 予約ボタン統合
- [ ] 料金計算機能

### Phase 3: 管理機能

- [ ] 管理者画面でのメニュー編集
- [ ] 価格変更システム
- [ ] 在庫管理連携

## 📊 分析・改善

### 追跡指標

- **ページビュー**: メニューページ閲覧数
- **滞在時間**: メニュー検討時間
- **クリック率**: 予約ボタンクリック率
- **離脱率**: ページ離脱ポイント

### A/B テスト候補

- メニューカードのレイアウト
- 価格表示方法
- CTA ボタンの配置・デザイン

---

**最終更新**: 2025 年 7 月 22 日  
**実装状況**: 基本機能完了 (80%)  
**次回更新**: 詳細機能追加時
