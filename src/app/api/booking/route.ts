import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // TODO: バリデーション、データベース保存、メール送信などの実装

    // 一時的な成功レスポンス
    console.log('Booking data:', body);

    return NextResponse.json(
      { message: '予約を受け付けました' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: '予約の処理中にエラーが発生しました' },
      { status: 500 }
    );
  }
}
