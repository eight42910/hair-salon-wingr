import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/types/form';
import { sendNotificationEmail, sendConfirmationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    // 1. リクエストボディの取得
    const body = await request.json();
    console.log('body', body);

    // 2. データバリデーション（入力チェック）
    const validatedData = contactSchema.parse(body);
    console.log('validatedData', validatedData);

    // 3. メール送信処理
    console.log('Email sending...');
    await Promise.all([
      sendNotificationEmail(validatedData), // 管理者へ
      sendConfirmationEmail(validatedData), // お客様へ
    ]);
    console.log('Email sent successfully');

    // 4. 成功レスポンス
    return NextResponse.json(
      {
        message: 'お問い合わせを受け付けました',
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact API error:', error);

    // Zodバリデーションエラー（入力不備）
    if (error.name === 'ZodError') {
      return NextResponse.json(
        {
          error: '入力内容に不備があります',
          details: error.errors,
        },
        { status: 400 }
      );
    }

    // メール送信エラー
    if (error.code === 'EAUTH' || error.code === 'ECONNECTION') {
      return NextResponse.json(
        { error: 'メール送信に失敗しました。お電話でお問い合わせください。' },
        { status: 500 }
      );
    }

    // その他のエラー
    return NextResponse.json(
      {
        error: 'サーバーエラーが発生しました',
        details:
          process.env.NODE_ENV === 'development'
            ? error.message
            : '詳細なエラー情報はログを参照してください',
      },
      { status: 500 }
    );
  }
}
