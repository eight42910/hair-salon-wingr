import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// フォームデータのスキーマ定義
const contactSchema = z.object({
  lastName: z.string().min(1, '姓を入力してください'),
  firstName: z.string().min(1, '名を入力してください'),
  phone: z.string().min(10, '正しい電話番号を入力してください'),
  email: z.string().email('正しいメールアドレスを入力してください').optional(),
  inquiryType: z.string().min(1, 'お問い合わせ種別を選択してください'),
  message: z.string().min(10, 'お問い合わせ内容を10文字以上入力してください'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // TODO: バリデーション、データベース保存、メール送信などの実装
    
    // 一時的な成功レスポンス
    console.log('Contact data:', body);
    
    return NextResponse.json(
      { message: 'お問い合わせを受け付けました' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json(
      { error: 'お問い合わせの処理中にエラーが発生しました' },
      { status: 500 }
    );
  }
}

// お問い合わせ種別のラベル変換
function getInquiryTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    reservation: 'ご予約',
    menu: 'メニュー・料金について',
    consultation: '髪の悩み相談',
    other: 'その他のお問い合わせ',
  };
  return labels[type] || type;
}
