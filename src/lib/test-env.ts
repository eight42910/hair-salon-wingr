// 環境変数が正しく読み込まれているかテスト
export function testEnvironmentVariables() {
  const requiredVars = [
    'EMAIL_HOST',
    'EMAIL_PORT',
    'EMAIL_USER',
    'EMAIL_PASS',
    'EMAIL_FROM',
    'SALON_EMAIL',
    'SALON_NAME',
  ];

  const missing = requiredVars.filter((varName) => !process.env[varName]);

  if (missing.length > 0) {
    console.error('❌ 不足している環境変数:', missing);
    return false;
  }

  console.log('✅ 環境変数の設定OK');
  return true;
}
