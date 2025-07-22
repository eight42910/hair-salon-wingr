# お問い合わせページ機能仕様書

## 📝 概要

美容室ウイング R のお問い合わせページの詳細機能仕様書です。

## 🎯 ページ目的

- 顧客からの各種お問い合わせ受付
- 複数の連絡手段の提供
- 店舗情報の再確認機会

## 📍 URL・ファイル構成

- **URL**: `/contact`
- **メインファイル**: `src/app/contact/page.tsx`
- **レイアウト**: `src/app/contact/layout.tsx`
- **フォームコンポーネント**: `src/components/forms/BookingForm.tsx`

## 🏗️ ページ構成

### 1. ヒーローセクション

```tsx
<section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
  <SectionTitle
    title="お問い合わせ"
    subtitle="ご質問やご相談がございましたら、お気軽にお声かけください"
  />
</section>
```

### 2. 連絡方法セクション

#### 2-1. 電話での問い合わせ

- **電話番号**: 058-123-4567
- **受付時間**: 営業時間内（9:00-19:00）
- **即座対応**: リアルタイムでの相談可能

#### 2-2. お問い合わせフォーム

- **24 時間受付**: いつでも送信可能
- **詳細記入**: 具体的な相談内容記載可能
- **後日回答**: 1-2 営業日内に返信

### 3. フォーム仕様

#### 必須項目

```typescript
interface ContactFormData {
  lastName: string; // 姓 (必須)
  firstName: string; // 名 (必須)
  phone: string; // 電話番号 (必須)
  email: string; // メールアドレス (必須)
  category: string; // お問い合わせ種別 (必須)
  message: string; // お問い合わせ内容 (必須)
}
```

#### お問い合わせ種別

```typescript
const contactCategories = [
  { value: '', label: '選択してください' },
  { value: 'reservation', label: 'ご予約について' },
  { value: 'menu', label: 'メニュー・料金について' },
  { value: 'hair-concern', label: '髪の悩み相談' },
  { value: 'salon-info', label: 'サロン情報について' },
  { value: 'other', label: 'その他' },
];
```

### 4. フォームバリデーション

#### 入力検証ルール

```typescript
const validationRules = {
  lastName: {
    required: '姓を入力してください',
    maxLength: { value: 20, message: '20文字以内で入力してください' },
  },
  firstName: {
    required: '名を入力してください',
    maxLength: { value: 20, message: '20文字以内で入力してください' },
  },
  phone: {
    required: '電話番号を入力してください',
    pattern: {
      value: /^[0-9-]+$/,
      message: '有効な電話番号を入力してください',
    },
  },
  email: {
    required: 'メールアドレスを入力してください',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: '有効なメールアドレスを入力してください',
    },
  },
  category: {
    required: 'お問い合わせ種別を選択してください',
  },
  message: {
    required: 'お問い合わせ内容を入力してください',
    minLength: { value: 10, message: '10文字以上で入力してください' },
    maxLength: { value: 1000, message: '1000文字以内で入力してください' },
  },
};
```

## 🎨 UI/UX 仕様

### レスポンシブレイアウト

```css
/* モバイル */
.contact-container {
  @apply max-w-md mx-auto px-4;
}

/* タブレット */
@media (min-width: 768px) {
  .contact-container {
    @apply max-w-2xl;
  }
}

/* デスクトップ */
@media (min-width: 1024px) {
  .contact-container {
    @apply max-w-4xl grid grid-cols-2 gap-12;
  }
}
```

### フォームデザイン

#### 入力フィールド

```css
.form-input {
  @apply w-full px-4 py-3 border border-gray-200 rounded-lg;
  @apply focus:ring-2 focus:ring-primary-500 focus:border-transparent;
  @apply transition-all duration-200;
}

.form-input:invalid {
  @apply border-red-300 focus:ring-red-500;
}
```

#### エラー表示

```css
.error-message {
  @apply text-sm text-red-600 mt-1;
  @apply animate-slideDown;
}
```

#### 送信ボタン

```css
.submit-button {
  @apply w-full bg-primary-600 text-white font-semibold py-4 rounded-lg;
  @apply hover:bg-primary-700 transition-colors duration-200;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}
```

## 🔧 フォーム機能

### 送信処理フロー

1. **入力検証**: クライアントサイドバリデーション
2. **送信確認**: 送信前の確認モーダル
3. **API 呼び出し**: `/api/contact` エンドポイント
4. **結果表示**: 成功/エラーメッセージ

### API エンドポイント

```typescript
// src/app/api/contact/route.ts
export async function POST(request: Request) {
  const formData = await request.json();

  // バリデーション
  const validation = validateContactForm(formData);
  if (!validation.success) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  // メール送信処理
  const emailResult = await sendContactEmail(formData);

  if (emailResult.success) {
    return NextResponse.json({ message: 'お問い合わせを受け付けました' });
  } else {
    return NextResponse.json(
      { error: 'エラーが発生しました' },
      { status: 500 }
    );
  }
}
```

### メール送信仕様

#### 顧客宛確認メール

```typescript
const customerEmailTemplate = {
  subject: '【美容室ウイング R】お問い合わせを受け付けました',
  body: `
    ${lastName} ${firstName} 様

    この度は美容室ウイング R にお問い合わせいただき、
    誠にありがとうございます。

    以下の内容でお問い合わせを受け付けいたしました。
    1-2営業日以内にご回答いたします。

    ■お問い合わせ内容
    ${message}

    ■お問い合わせ種別
    ${categoryLabel}
  `,
};
```

#### 店舗宛通知メール

```typescript
const storeEmailTemplate = {
  to: 'info@wing-r-salon.com',
  subject: '【WEBサイト】新しいお問い合わせ',
  body: `
    新しいお問い合わせが届きました。

    ■お客様情報
    お名前: ${lastName} ${firstName}
    電話番号: ${phone}
    メール: ${email}

    ■お問い合わせ種別
    ${categoryLabel}

    ■内容
    ${message}
  `,
};
```

## 📱 モバイル最適化

### タッチインターフェース

- **入力フィールド**: 最小 44px 高さ確保
- **ボタン**: 十分なタップエリア
- **スクロール**: スムーズなスクロール体験

### キーボード対応

```typescript
const inputProps = {
  phone: { inputMode: 'tel' as const },
  email: { inputMode: 'email' as const, autoComplete: 'email' },
  name: { autoComplete: 'name' },
};
```

## 🔒 セキュリティ

### スパム対策

- **レート制限**: 同一 IP から 1 時間に 3 回まで
- **入力検証**: サーバーサイドでの再検証
- **CSRF トークン**: フォーム送信時の検証

### データ保護

- **個人情報暗号化**: 送信データの暗号化
- **ログ管理**: 適切なアクセスログ保持
- **データ削除**: 必要に応じた情報削除

## 📊 分析・改善

### 追跡指標

```typescript
const analyticsEvents = {
  formView: 'contact_form_view',
  formStart: 'contact_form_start',
  formSubmit: 'contact_form_submit',
  formError: 'contact_form_error',
  phoneClick: 'phone_number_click',
};
```

### コンバージョン最適化

- **フォーム離脱率**: 各ステップでの離脱分析
- **エラー発生率**: バリデーションエラーの頻度
- **送信完了率**: 最終的な送信成功率

## 🚀 今後の拡張予定

### Phase 1: 基本機能拡張

- [ ] 添付ファイル機能
- [ ] リアルタイムバリデーション
- [ ] 入力内容の一時保存

### Phase 2: 統合機能

- [ ] LINE 連携
- [ ] チャットボット導入
- [ ] 予約フォーム統合

### Phase 3: 管理機能

- [ ] 管理画面での問い合わせ管理
- [ ] 自動返信テンプレート
- [ ] 問い合わせ統計レポート

## 🛠️ 技術実装詳細

### 使用ライブラリ

```json
{
  "react-hook-form": "^7.0.0",
  "@hookform/resolvers": "^3.0.0",
  "zod": "^3.0.0",
  "nodemailer": "^6.0.0"
}
```

### 型定義

```typescript
// src/types/contact.ts
export interface ContactFormData {
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  category: ContactCategory;
  message: string;
}

export type ContactCategory =
  | 'reservation'
  | 'menu'
  | 'hair-concern'
  | 'salon-info'
  | 'other';

export interface ContactFormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}
```

---

**最終更新**: 2025 年 7 月 22 日  
**実装状況**: フォーム UI 完了 (90%)  
**次回更新**: API 実装完了時
