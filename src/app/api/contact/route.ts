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

    // バリデーション
    const validatedData = contactSchema.parse(body);

    // メール送信設定（実際の環境では環境変数を使用）
    const transporter = nodemailer.createTransporter({
      // 本番環境では実際のSMTPサーバー設定を使用
      host: process.env.SMTP_HOST || 'localhost',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    });

    // お客様への確認メール
    const customerMailOptions = {
      from: process.env.FROM_EMAIL || 'no-reply@wing-r.com',
      to: validatedData.email || '',
      subject: '【美容室ウイング R】お問い合わせを承りました',
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #8b5e3c;">お問い合わせありがとうございます</h2>
          <p>${validatedData.lastName} ${validatedData.firstName} 様</p>
          <p>この度は美容室ウイング Rにお問い合わせいただき、誠にありがとうございます。</p>
          <p>以下の内容でお問い合わせを承りました。</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="margin-top: 0;">お問い合わせ内容</h3>
            <p><strong>お名前:</strong> ${validatedData.lastName} ${
        validatedData.firstName
      }</p>
            <p><strong>電話番号:</strong> ${validatedData.phone}</p>
            <p><strong>メールアドレス:</strong> ${
              validatedData.email || 'なし'
            }</p>
            <p><strong>お問い合わせ種別:</strong> ${getInquiryTypeLabel(
              validatedData.inquiryType
            )}</p>
            <p><strong>お問い合わせ内容:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px;">
              ${validatedData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p>担当者より営業時間内にご連絡いたします。しばらくお待ちください。</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <div style="color: #666; font-size: 14px;">
            <p><strong>美容室ウイング R</strong></p>
            <p>〒500-8234 岐阜県岐阜市芋島1-2-3 ウイングビル1F</p>
            <p>TEL: 058-123-4567</p>
            <p>営業時間: 平日 9:00-19:00 / 土曜 9:00-18:00 / 日祝 9:00-17:00</p>
            <p>定休日: 毎週火曜日、第3月曜日</p>
          </div>
        </div>
      `,
    };

    // 店舗への通知メール
    const storeMailOptions = {
      from: process.env.FROM_EMAIL || 'no-reply@wing-r.com',
      to: process.env.STORE_EMAIL || 'info@wing-r.com',
      subject: '【ウェブサイト】新しいお問い合わせ',
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #8b5e3c;">新しいお問い合わせ</h2>
          <p>ウェブサイトから新しいお問い合わせが届きました。</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="margin-top: 0;">お客様情報</h3>
            <p><strong>お名前:</strong> ${validatedData.lastName} ${
        validatedData.firstName
      }</p>
            <p><strong>電話番号:</strong> ${validatedData.phone}</p>
            <p><strong>メールアドレス:</strong> ${
              validatedData.email || 'なし'
            }</p>
            <p><strong>お問い合わせ種別:</strong> ${getInquiryTypeLabel(
              validatedData.inquiryType
            )}</p>
            <p><strong>受信日時:</strong> ${new Date().toLocaleString(
              'ja-JP'
            )}</p>
          </div>
          
          <div style="background-color: #fff; border: 2px solid #8b5e3c; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #8b5e3c;">お問い合わせ内容</h3>
            <div style="white-space: pre-wrap;">${validatedData.message}</div>
          </div>
          
          <p style="color: #d32f2f; font-weight: bold;">
            早めにご対応をお願いいたします。
          </p>
        </div>
      `,
    };

    // メール送信（開発環境では実際の送信をスキップ）
    if (process.env.NODE_ENV === 'production') {
      // 本番環境でのみ実際にメール送信
      if (validatedData.email) {
        await transporter.sendMail(customerMailOptions);
      }
      await transporter.sendMail(storeMailOptions);
    } else {
      // 開発環境ではコンソールに出力
      console.log('=== お客様確認メール ===');
      console.log(customerMailOptions);
      console.log('=== 店舗通知メール ===');
      console.log(storeMailOptions);
    }

    return NextResponse.json({
      success: true,
      message: 'お問い合わせを承りました。担当者よりご連絡いたします。',
    });
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: '入力内容に不備があります。',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'システムエラーが発生しました。お電話でお問い合わせください。',
      },
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
