import { NextRequest } from 'next/server';
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // URLパラメータから情報を取得
    const customTitle = searchParams.get('title');
    const customDescription = searchParams.get('description');
    const page = searchParams.get('page') || 'home';

    // ページごとの設定
    const pageConfig = {
      home: {
        title: customTitle || '美容室ウイング R',
        subtitle:
          customDescription ||
          '41年間地域に愛され続ける岐阜市のファミリーサロン',
        bgGradient:
          'linear-gradient(135deg, #8b5e3c 0%, #d4c4a8 50%, #f5e6d3 100%)',
      },
      contact: {
        title: customTitle || 'お問い合わせ',
        subtitle:
          customDescription ||
          '美容室ウイング R | ご予約・お問い合わせはこちら',
        bgGradient:
          'linear-gradient(135deg, #4a2c16 0%, #8b5e3c 50%, #d4c4a8 100%)',
      },
      menu: {
        title: customTitle || 'メニュー・料金',
        subtitle:
          customDescription ||
          '美容室ウイング R | 充実のメニューでお客様をおもてなし',
        bgGradient:
          'linear-gradient(135deg, #d4c4a8 0%, #f5e6d3 50%, #fffef9 100%)',
      },
    };

    const config =
      pageConfig[page as keyof typeof pageConfig] || pageConfig.home;

    return new ImageResponse(
      (
        <div
          style={{
            background: config.bgGradient,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
            position: 'relative',
          }}
        >
          {/* 装飾的な背景要素 */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: `
                radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 60%, rgba(139,94,60,0.1) 0%, transparent 50%)
              `,
            }}
          />

          {/* メインコンテンツ */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '80px',
              maxWidth: '1000px',
              zIndex: 1,
            }}
          >
            {/* タイトル */}
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#ffffff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                margin: '0 0 32px 0',
                lineHeight: 1.1,
              }}
            >
              {config.title}
            </h1>

            {/* サブタイトル */}
            <p
              style={{
                fontSize: '32px',
                color: '#ffffff',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                margin: '0 0 40px 0',
                lineHeight: 1.4,
                fontWeight: '500',
              }}
            >
              {config.subtitle}
            </p>

            {/* 装飾的なライン */}
            <div
              style={{
                width: '200px',
                height: '4px',
                background:
                  'linear-gradient(90deg, transparent, #ffffff, transparent)',
                borderRadius: '2px',
                margin: '0 0 32px 0',
              }}
            />

            {/* 連絡先情報 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '24px',
                color: '#ffffff',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              }}
            >
              📞 058-274-5588 | 岐阜市加野2-4-15
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error: unknown) {
    // サーバーサイドエラーは適切にログ記録（本番環境では外部ログサービスに送信推奨）
    console.error('OG画像生成エラー:', error);
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return new Response(`Failed to generate the image: ${errorMessage}`, {
      status: 500,
    });
  }
}
