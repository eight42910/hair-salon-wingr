# コンポーネント仕様書

美容室ウイング R プロジェクトで実装した全コンポーネントの詳細仕様書です。

## 📁 コンポーネント構成

```
src/components/
├── ui/                 # 基本UIコンポーネント
│   └── Button.tsx
├── layout/             # レイアウトコンポーネント
│   ├── Header.tsx
│   ├── MobileMenu.tsx
│   └── Footer.tsx
└── sections/           # ページセクション
    ├── Feature.tsx
    ├── Testimonials.tsx
    └── Access.tsx
```

## 🔧 UI Components

### Button

**ファイル**: `src/components/ui/Button.tsx`  
**目的**: 汎用ボタンコンポーネント

#### Props

```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}
```

#### バリエーション

| variant     | 説明             | 外観                   |
| ----------- | ---------------- | ---------------------- |
| `primary`   | メイン CTA 用    | 茶色背景、白文字       |
| `secondary` | サブボタン用     | ベージュ背景、茶色文字 |
| `outline`   | 軽いアクション用 | 透明背景、茶色枠線     |

#### サイズ

| size | padding   | text-size |
| ---- | --------- | --------- |
| `sm` | px-4 py-2 | text-sm   |
| `md` | px-6 py-3 | text-base |
| `lg` | px-8 py-4 | text-lg   |

#### 使用例

```tsx
// 基本的な使用
<Button>クリック</Button>

// バリエーション指定
<Button variant="primary" size="lg">
  ご予約はこちら
</Button>

// 追加クラス指定
<Button className="w-full" disabled>
  送信中...
</Button>
```

## 🏗️ Layout Components

### Header

**ファイル**: `src/components/layout/Header.tsx`  
**目的**: サイト共通ヘッダー（固定ナビゲーション）

#### 機能

- **固定ヘッダー**: `fixed top-0` でページトップに固定
- **レスポンシブ**: デスクトップ/モバイルで表示切り替え
- **半透明背景**: `bg-white/80 backdrop-blur-sm`
- **モバイルメニュー連携**: ハンバーガーボタンでメニュー開閉

#### ナビゲーション構成

```typescript
const navigation = [
  { name: 'CONCEPT', href: '/concept' },
  { name: 'FEATURE', href: '/feature' },
  { name: 'MENU', href: '/menu' },
  { name: 'OWNER', href: '/owner' },
  { name: 'ACCESS', href: '/access' },
  { name: 'CONTACT', href: '/contact' },
];
```

#### レスポンシブ対応

- **デスクトップ**: ロゴ + ナビ + 電話番号 + CTA ボタン
- **モバイル**: ロゴ + ハンバーガーボタン

### MobileMenu

**ファイル**: `src/components/layout/MobileMenu.tsx`  
**目的**: モバイル専用フルスクリーンメニュー

#### Props

```typescript
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
```

#### 機能

- **フルスクリーン表示**: `fixed inset-0`
- **スクロール制御**: メニュー開時に body のスクロール無効化
- **アニメーション**: なし（将来的に Slide-in アニメーション予定）

#### 構成要素

1. **ヘッダー**: ロゴ + 閉じるボタン
2. **ナビゲーション**: 縦並びリンク
3. **アクション**: 電話番号 + CTA ボタン

### Footer

**ファイル**: `src/components/layout/Footer.tsx`  
**目的**: サイト共通フッター

#### 構成（4 列グリッド）

1. **店舗情報（2 列分）**: 店名、説明、基本情報
2. **サイトマップ**: ナビゲーションリンク
3. **営業時間**: 曜日別営業時間

#### レスポンシブ対応

- **デスクトップ**: 4 列グリッド
- **タブレット**: 2 列グリッド
- **モバイル**: 1 列スタック

## 📄 Section Components

### Feature

**ファイル**: `src/components/sections/Feature.tsx`  
**目的**: 4 つの特徴を紹介するセクション

#### データ構造

```typescript
const features = [
  {
    icon: Users, // Lucide React アイコン
    title: string, // 特徴タイトル
    description: string, // 特徴説明
  },
];
```

#### レイアウト

- **タイトル**: 中央寄せ、heading-2
- **グリッド**: 4 列 → 2 列 → 1 列（レスポンシブ）
- **カード**: アイコン + タイトル + 説明

### Testimonials

**ファイル**: `src/components/sections/Testimonials.tsx`  
**目的**: お客様の声を表示するセクション

#### データ構造

```typescript
const testimonials = [
  {
    name: string, // お客様名
    age: string, // 年代・性別
    comment: string, // コメント内容
  },
];
```

#### カードデザイン

- **白背景**: `bg-white` + `shadow-sm`
- **ホバー効果**: `hover:shadow-md`
- **引用アイコン**: Lucide React `Quote`

### Access

**ファイル**: `src/components/sections/Access.tsx`  
**目的**: 店舗アクセス情報を表示

#### 構成（2 列レイアウト）

1. **店舗情報**:

   - 基本情報（住所、電話、営業時間、駐車場）
   - 営業時間詳細表
   - CTA ボタン

2. **地図エリア**:
   - 地図プレースホルダー（Google Maps 予定）
   - 外部リンク

#### アイコンマッピング

```typescript
const accessInfo = [
  { icon: MapPin, title: '住所', content: '...' },
  { icon: Phone, title: '電話番号', content: '...', link: 'tel:...' },
  { icon: Clock, title: '営業時間', content: '...' },
  { icon: Car, title: '駐車場', content: '...' },
];
```

## 🎨 スタイル規約

### カラーパレット使用

```css
/* プライマリーカラー */
bg-primary-50    /* セクション背景（薄い） */
bg-primary-100   /* アクセント背景 */
bg-primary-500   /* メインボタン背景 */
text-primary-700 /* リンク・アクセント文字 */
text-primary-900 /* メイン文字色 */

/* セカンダリーカラー */
bg-secondary-50  /* セクション背景（ベージュ） */

/* アクセントカラー */
bg-accent-50     /* カード背景 */
bg-accent-100    /* カードホバー背景 */
```

### 共通パターン

#### セクション基本構造

```tsx
<section className="py-16 bg-{color}">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="heading-2 mb-4">{title}</h2>
      <p className="body-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
    {/* セクション固有コンテンツ */}
  </div>
</section>
```

#### カード共通スタイル

```tsx
<div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
  {/* カードコンテンツ */}
</div>
```

## 🔄 State Management

### ローカル状態

- **Header**: `isMobileMenuOpen` (boolean)
- **MobileMenu**: `useEffect`でスクロール制御

### Props Flow

```
Header
├── navigation (static)
├── isMobileMenuOpen (state)
└── MobileMenu
    ├── isOpen (props)
    ├── onClose (props)
    └── navigation (static)
```

## 📱 レスポンシブ実装

### ブレークポイント戦略

| Component    | Mobile (<768px)     | Tablet (768-1024px) | Desktop (>1024px)        |
| ------------ | ------------------- | ------------------- | ------------------------ |
| Header       | ロゴ + ハンバーガー | ロゴ + ナビ + CTA   | ロゴ + ナビ + 電話 + CTA |
| Feature      | 1 列                | 2 列                | 4 列                     |
| Testimonials | 1 列                | 2 列                | 3 列                     |
| Access       | 1 列スタック        | 1 列スタック        | 2 列横並び               |

### CSS Classes Pattern

```tsx
// グリッドレスポンシブ例
className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';

// 表示切り替え例
className = 'hidden md:flex'; // デスクトップのみ表示
className = 'md:hidden'; // モバイルのみ表示
```

## 🧪 今後の拡張予定

### 追加予定コンポーネント

1. **Form Components** (`src/components/forms/`)

   - ContactForm
   - Input
   - Textarea
   - Select

2. **UI Components** (`src/components/ui/`)

   - Card
   - Modal
   - Loading
   - Badge

3. **Animation Components**
   - ScrollReveal
   - FadeIn
   - SlideIn

### 改善予定

- **アクセシビリティ**: ARIA 属性追加
- **アニメーション**: Framer Motion 統合
- **テスト**: Jest + Testing Library
- **Storybook**: コンポーネントカタログ

---

**最終更新**: 2024 年 12 月  
**バージョン**: v1.0.0  
**メンテナンス**: 開発チーム
