import { sendNotificationEmail, sendConfirmationEmail } from './email';
import { testEnvironmentVariables } from './test-env';

// テスト用のダミーデータ
const testContactData = {
  name: 'テスト太郎',
  furigana: 'テストタロウ',
  email: 'm.yoshii0406@gmail.com',
  phone: '090-1234-5678',
  subject: 'other',
  message:
    'これはメール送信のテストです。正常に動作していれば、このメールが届いているはずです。',
  agreement: true,
};

// メール送信テスト関数
export async function testEmailSending() {
  console.log('🚀 メール送信テストを開始します...');

  // 1. 環境変数チェック
  if (!testEnvironmentVariables()) {
    console.error('❌ 環境変数の設定に問題があります');
    return;
  }

  try {
    // 2. 管理者向けメール送信テスト
    console.log('📧 管理者向けメール送信中...');
    await sendNotificationEmail(testContactData);
    console.log('✅ 管理者向けメール送信成功');

    // 3. お客様向けメール送信テスト
    console.log('📧 お客様向けメール送信中...');
    await sendConfirmationEmail(testContactData);
    console.log('✅ お客様向けメール送信成功');

    console.log('🎉 すべてのメール送信テストが完了しました！');
  } catch (error) {
    console.error('❌ メール送信エラー:', error);

    // エラーの種類別に対処法を表示
    if (error.code === 'EAUTH') {
      console.error('認証エラー: EMAIL_USERまたはEMAIL_PASSを確認してください');
    } else if (error.code === 'ECONNECTION') {
      console.error('接続エラー: EMAIL_HOSTまたはEMAIL_PORTを確認してください');
    } else {
      console.error('予期しないエラーが発生しました');
    }
  }
}

// 個別テスト関数
export async function testNotificationEmailOnly() {
  console.log('📧 管理者向けメールのみテスト...');
  try {
    await sendNotificationEmail(testContactData);
    console.log('✅ 管理者向けメール送信成功');
  } catch (error) {
    console.error('❌ 管理者向けメール送信失敗:', error);
  }
}

export async function testConfirmationEmailOnly() {
  console.log('📧 お客様向けメールのみテスト...');
  try {
    await sendConfirmationEmail(testContactData);
    console.log('✅ お客様向けメール送信成功');
  } catch (error) {
    console.error('❌ お客様向けメール送信失敗:', error);
  }
}
