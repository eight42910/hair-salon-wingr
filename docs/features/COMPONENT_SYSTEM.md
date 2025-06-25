# 共通コンポーネントシステム仕様書

## 📝 概要

美容室ウイング R プロジェクトで使用する共通コンポーネントシステムの詳細仕様書です。

## 🏗️ コンポーネント設計原則

### 設計思想

1. **原子設計（Atomic Design）風**: 段階的なコンポーネント構成
2. **再利用性**: プロップスによる柔軟な設定
3. **型安全性**: TypeScript による厳密な型チェック
4. **一貫性**: 統一されたスタイリング規則

### ディレクトリ構成

```
src/components/
├── ui/                 # 基本UIコンポーネント
│   ├── Button.tsx      # ボタンコンポーネント
│   ├── Card.tsx        # カードコンポーネント
│   ├── SectionTitle.tsx # セクションタイトル
│   └── index.ts        # エクスポート
├── layout/             # レイアウトコンポーネント
│   ├── Header.tsx      # ヘッダー
│   ├── Footer.tsx      # フッター
│   ├── MobileMenu.tsx  # モバイルメニュー
│   ├── PageLayout.tsx  # ページレイアウト
│   └── index.ts        # エクスポート
├── sections/           # セクションコンポーネント
│   ├── Feature.tsx     # 特徴セクション
│   ├── Testimonials.tsx # お客様の声
│   ├── Access.tsx      # アクセス情報
│   ├── FAQ.tsx         # よくある質問
│   └── index.ts        # エクスポート
├── forms/              # フォームコンポーネント
│   ├── BookingForm.tsx # 予約フォーム
│   ├── FormField.tsx   # フォームフィールド
│   ├── FormInput.tsx   # 入力コンポーネント
│   └── index.ts        # エクスポート
└── map/                # マップコンポーネント
    └── GoogleMap.tsx   # Google Maps
```

## 🎨 UI Components

### Button コンポーネント

#### 概要

汎用ボタンコンポーネント。3 つのバリエーションと 3 つのサイズを提供。

#### インターフェース

```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}
```

#### バリエーション詳細

```css
/* Primary - メインCTA用 */
.btn-primary {
  @apply bg-primary-600 text-white;
  @apply hover:bg-primary-700 focus:ring-primary-500;
  @apply shadow-lg hover:shadow-xl;
}

/* Secondary - サブボタン用 */
.btn-secondary {
  @apply bg-secondary-500 text-primary-900;
  @apply hover:bg-secondary-600 focus:ring-secondary-400;
  @apply shadow-md hover:shadow-lg;
}

/* Outline - 軽いアクション用 */
.btn-outline {
  @apply bg-transparent text-primary-600 border-2 border-primary-600;
  @apply hover:bg-primary-600 hover:text-white focus:ring-primary-500;
}
```

#### 使用例

```tsx
// 基本使用
<Button>基本ボタン</Button>

// バリエーション指定
<Button variant="primary" size="lg">
  ご予約はこちら
</Button>

// リンクボタン
<Button variant="outline" href="/menu">
  メニューを見る
</Button>

// 無効化
<Button disabled>送信中...</Button>
```

### Card コンポーネント

#### 概要

統一されたカードデザインコンポーネント。

#### インターフェース

```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}
```

#### 実装

```tsx
export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  className = '',
  children,
}) => {
  const variants = {
    default: 'bg-white shadow-sm border border-gray-200',
    elevated: 'bg-white shadow-lg border-0',
    outlined: 'bg-transparent border-2 border-gray-300',
  };

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`
        rounded-2xl transition-all duration-200
        ${variants[variant]}
        ${paddings[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
```

### SectionTitle コンポーネント

#### 概要

ページセクションの統一されたタイトルコンポーネント。

#### インターフェース

```typescript
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

#### 実装

```tsx
export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = 'center',
  size = 'md',
  className = '',
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const sizes = {
    sm: 'heading-3',
    md: 'heading-2',
    lg: 'heading-1',
  };

  return (
    <div className={`mb-12 ${alignments[alignment]} ${className}`}>
      <h2 className={`${sizes[size]} mb-4`}>{title}</h2>
      {subtitle && (
        <p className="body-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};
```

## 🏗️ Layout Components

### Header コンポーネント

#### 概要

サイト共通ヘッダー。レスポンシブナビゲーション機能付き。

#### 機能

- **固定ヘッダー**: `fixed top-0` でページトップに固定
- **半透明背景**: `bg-white/80 backdrop-blur-sm`
- **レスポンシブ**: デスクトップ/モバイルで表示切り替え
- **モバイルメニュー連携**: ハンバーガーボタンでメニュー開閉

#### ナビゲーション設定

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

#### スタイル詳細

```css
/* ヘッダー基本 */
.header {
  @apply fixed top-0 left-0 right-0 z-50;
  @apply bg-white/80 backdrop-blur-sm border-b border-gray-200;
  @apply transition-all duration-200;
}

/* ナビゲーション */
.nav-link {
  @apply text-gray-700 hover:text-primary-600;
  @apply font-medium transition-colors duration-200;
  @apply relative;
}

.nav-link::after {
  @apply absolute bottom-0 left-0 w-0 h-0.5;
  @apply bg-primary-600 transition-all duration-200;
  content: '';
}

.nav-link:hover::after {
  @apply w-full;
}
```

### MobileMenu コンポーネント

#### 概要

モバイル専用フルスクリーンメニュー。

#### インターフェース

```typescript
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
```

#### 機能

- **フルスクリーン表示**: `fixed inset-0`
- **スクロール制御**: メニュー開時に body のスクロール無効化
- **スムーズアニメーション**: 開閉時のフェード・スライドアニメーション

#### アニメーション詳細

```css
/* メニュー開閉アニメーション */
.mobile-menu-enter {
  @apply opacity-0 transform translate-x-full;
}

.mobile-menu-enter-active {
  @apply opacity-100 transform translate-x-0;
  @apply transition-all duration-300 ease-out;
}

.mobile-menu-exit {
  @apply opacity-100 transform translate-x-0;
}

.mobile-menu-exit-active {
  @apply opacity-0 transform translate-x-full;
  @apply transition-all duration-300 ease-in;
}
```

### Footer コンポーネント

#### 概要

サイト共通フッター。4 列グリッドレイアウト。

#### 構成要素

1. **店舗情報（2 列分）**: 店名、説明、基本情報
2. **サイトマップ**: ナビゲーションリンク
3. **営業時間**: 曜日別営業時間

#### レスポンシブ対応

```css
/* デスクトップ */
.footer-grid {
  @apply grid grid-cols-4 gap-8;
}

/* タブレット */
@media (max-width: 1024px) {
  .footer-grid {
    @apply grid-cols-2 gap-6;
  }
}

/* モバイル */
@media (max-width: 640px) {
  .footer-grid {
    @apply grid-cols-1 gap-8;
  }
}
```

## 📋 Sections Components

### Feature コンポーネント

#### 概要

4 つの特徴を紹介するセクション。

#### データ構造

```typescript
interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: Users,
    title: 'ファミリーサロン',
    description: '3世代に愛される温かい雰囲気',
  },
  // ...その他の特徴
];
```

#### レイアウト

```css
/* 特徴グリッド */
.features-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8;
}

/* 特徴カード */
.feature-card {
  @apply text-center p-6 rounded-lg bg-accent-50;
  @apply hover:bg-accent-100 transition-colors duration-300;
}

/* アイコンスタイル */
.feature-icon {
  @apply w-16 h-16 bg-primary-500 rounded-full;
  @apply flex items-center justify-center mx-auto mb-4;
}
```

### Testimonials コンポーネント

#### 概要

お客様の声を表示するセクション。

#### データ構造

```typescript
interface TestimonialItem {
  name: string;
  age: string;
  comment: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: '田中様',
    age: '30代女性',
    comment: 'いつも丁寧にカウンセリングしてくださり...',
  },
  // ...その他のレビュー
];
```

#### カードデザイン

```css
/* お客様の声カード */
.testimonial-card {
  @apply bg-white p-6 rounded-2xl shadow-sm;
  @apply hover:shadow-md transition-shadow duration-200;
  @apply relative;
}

/* 引用マーク */
.testimonial-quote {
  @apply absolute top-4 left-4 text-primary-200 text-4xl;
}
```

## 📝 Forms Components

### FormField コンポーネント

#### 概要

ラベル、入力フィールド、エラーメッセージを含む統合フォームフィールド。

#### インターフェース

```typescript
interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  error?: string;
  options?: Array<{ value: string; label: string }>;
  register?: UseFormRegister<any>;
  className?: string;
}
```

#### 実装

```tsx
export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  error,
  options,
  register,
  className = '',
}) => {
  const inputClasses = `
    w-full px-4 py-3 border rounded-lg
    focus:ring-2 focus:ring-primary-500 focus:border-transparent
    transition-all duration-200
    ${error ? 'border-red-300 focus:ring-red-500' : 'border-gray-200'}
  `;

  return (
    <div className={`mb-6 ${className}`}>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          {...(register ? register(name) : {})}
          placeholder={placeholder}
          rows={4}
          className={inputClasses}
        />
      ) : type === 'select' && options ? (
        <select {...(register ? register(name) : {})} className={inputClasses}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          {...(register ? register(name) : {})}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}

      {error && (
        <p className="text-sm text-red-600 mt-1 animate-slideDown">{error}</p>
      )}
    </div>
  );
};
```

## 🗺️ Map Components

### GoogleMap コンポーネント

#### 概要

Google Maps API を使用した地図表示コンポーネント。

#### インターフェース

```typescript
interface GoogleMapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  marker?: {
    position: { lat: number; lng: number };
    title: string;
  };
  className?: string;
}
```

#### 実装

```tsx
export const GoogleMap: React.FC<GoogleMapProps> = ({
  center,
  zoom = 16,
  marker,
  className = '',
}) => {
  return (
    <div className={`rounded-2xl overflow-hidden ${className}`}>
      {/* Google Maps実装 */}
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Google Maps読み込み中...</p>
      </div>
    </div>
  );
};
```

## 🔧 Hooks・ユーティリティ

### useFormValidation フック

#### 概要

フォームバリデーション用カスタムフック。

#### インターフェース

```typescript
interface ValidationRules {
  required?: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
}

interface UseFormValidationProps {
  rules: Record<string, ValidationRules>;
}
```

## 📊 パフォーマンス最適化

### コンポーネント最適化

```typescript
// React.memo によるメモ化
export const Button = React.memo<ButtonProps>(({ ... }) => {
  // 実装
});

// useMemo による計算結果キャッシュ
const memoizedStyle = useMemo(() => {
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
}, [variant, size]);

// useCallback による関数メモ化
const handleClick = useCallback((event: React.MouseEvent) => {
  if (onClick) onClick(event);
}, [onClick]);
```

### バンドルサイズ最適化

```typescript
// tree-shakingに対応したエクスポート
export { Button } from './Button';
export { Card } from './Card';
export { SectionTitle } from './SectionTitle';

// 型のみのインポート
import type { ButtonProps } from './Button';
```

## 🧪 テスト戦略

### コンポーネントテスト

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Test Button');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

---

**最終更新**: 2024 年 12 月  
**実装状況**: 基本コンポーネント完了 (95%)  
**次回更新**: 新規コンポーネント追加時
