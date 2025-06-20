import { z } from 'zod';

// Contact Form Schema & Type
export const contactSchema = z.object({
  name: z.string().min(1, 'お名前は必須です'),
  furigana: z.string().min(1, 'フリガナは必須です'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'お問い合わせ種類を選択してください'),
  message: z.string().min(10, 'お問い合わせ内容は10文字以上で入力してください'),
  agreement: z
    .boolean()
    .refine((val) => val === true, 'プライバシーポリシーへの同意が必要です'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Booking Form Schema & Type
export const bookingSchema = z.object({
  name: z.string().min(1, 'お名前は必須です'),
  furigana: z.string().min(1, 'フリガナは必須です'),
  phone: z.string().min(1, '電話番号は必須です'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  preferredDate: z.string().min(1, 'ご希望日時を選択してください'),
  alternativeDate: z.string().optional(),
  menuType: z.string().min(1, 'ご希望のメニューを選択してください'),
  isFirstVisit: z.boolean(),
  requests: z.string().optional(),
  hairConcerns: z.array(z.string()).optional(),
  agreement: z
    .boolean()
    .refine((val) => val === true, '利用規約への同意が必要です'),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

// Form Options
export const subjectOptions = [
  { value: 'booking', label: '予約に関するお問い合わせ' },
  { value: 'menu', label: 'メニュー・料金について' },
  { value: 'hair-concern', label: '髪のお悩み相談' },
  { value: 'cancel', label: '予約の変更・キャンセル' },
  { value: 'product', label: '商品について' },
  { value: 'other', label: 'その他' },
] as const;

export const menuOptions = [
  { value: 'cut', label: 'カット', price: '4,400円〜' },
  { value: 'cut-color', label: 'カット + カラー', price: '8,800円〜' },
  { value: 'cut-perm', label: 'カット + パーマ', price: '9,900円〜' },
  { value: 'digital-perm', label: 'デジタルパーマ', price: '11,000円〜' },
  { value: 'head-spa', label: 'ヘッドスパ', price: '3,300円〜' },
  { value: 'treatment', label: 'トリートメント', price: '2,200円〜' },
  { value: 'consultation', label: 'カウンセリングのみ', price: '無料' },
] as const;

export const hairConcernOptions = [
  '髪のダメージが気になる',
  'くせ毛・うねりが気になる',
  'ボリュームが足りない',
  'ボリュームを抑えたい',
  '白髪が気になる',
  '頭皮のトラブル',
  'スタイリングがうまくできない',
  '髪が伸びるのが早い',
] as const;

// Form State Types
export type FormSubmitStatus = 'idle' | 'success' | 'error';

export interface FormProgressItem {
  key: string;
  label: string;
  completed: boolean;
}
