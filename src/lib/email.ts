// メール送信機能
import nodemailer from 'nodemailer';
import { ContactFormData } from '@/types/form';

// メール送信の設定
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // TLS使用
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 管理者（美容室）へのメール送信
export async function sendNotificationEmail(data: ContactFormData) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.SALON_EMAIL,
    subject: '【WEBサイト】新しいお問い合わせ',
    html: `
      <h2>新しいお問い合わせが届きました</h2>
      
      <h3>お客様情報</h3>
      <p><strong>お名前：</strong>${data.name}</p>
      <p><strong>フリガナ：</strong>${data.furigana}</p>
      <p><strong>メールアドレス：</strong>${data.email}</p>
      <p><strong>電話番号：</strong>${data.phone || '未入力'}</p>
      
      <h3>お問い合わせ内容</h3>
      <p><strong>種類：</strong>${getSubjectLabel(data.subject)}</p>
      <p><strong>詳細：</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><small>送信日時: ${new Date().toLocaleString('ja-JP')}</small></p>
    `,
  };

  return await transporter.sendMail(mailOptions);
}

// お客様への確認メール送信
export async function sendConfirmationEmail(data: ContactFormData) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: data.email,
    subject: '【美容室ウイング R】お問い合わせを受け付けました',
    html: `
      <h2>${data.name} 様</h2>
      
      <p>この度は美容室ウイング R にお問い合わせいただき、<br>
      誠にありがとうございます。</p>
      
      <p>以下の内容でお問い合わせを受け付けいたしました。<br>
      1-2営業日以内にご回答いたします。</p>
      
      <h3>お問い合わせ内容</h3>
      <p><strong>種類：</strong>${getSubjectLabel(data.subject)}</p>
      <p><strong>詳細：</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <h3>美容室ウイング R</h3>
      <p>住所：岐阜市加野○○○○<br>
      電話：058-243-6478<br>
      営業時間：9:00-19:00（定休日：月曜日）</p>
      
      <p><small>※このメールは自動送信です。</small></p>
    `,
  };

  return await transporter.sendMail(mailOptions);
}

// お問い合わせ種類のラベル変換
function getSubjectLabel(subject: string): string {
  const labels: Record<string, string> = {
    booking: '予約に関するお問い合わせ',
    menu: 'メニュー・料金について',
    'hair-concern': '髪のお悩み相談',
    cancel: '予約の変更・キャンセル',
    product: '商品について',
    other: 'その他',
  };
  return labels[subject] || subject;
}
