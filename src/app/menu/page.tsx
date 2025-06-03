import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'メニュー・料金 | 美容室ウイング R',
  description:
    '美容室ウイング R のメニューと料金のご案内。カット、カラー、パーマなど豊富なメニューをご用意しています。',
};

export default function MenuPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* ページヘッダー */}
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">メニュー・料金</h1>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            お客様のライフスタイルに合わせた豊富なメニューをご用意しています。
            41年の実績に基づく確かな技術で、理想のスタイルを実現いたします。
          </p>
        </div>

        {/* カットメニュー */}
        <section className="mb-12">
          <h2 className="heading-2 mb-8 text-center">カットメニュー</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="heading-3 mb-3">レディースカット</h3>
              <p className="text-gray-600 mb-4">シャンプー・ブロー込み</p>
              <p className="text-2xl font-bold text-primary-600">¥4,500</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="heading-3 mb-3">メンズカット</h3>
              <p className="text-gray-600 mb-4">シャンプー・セット込み</p>
              <p className="text-2xl font-bold text-primary-600">¥3,500</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="heading-3 mb-3">お子様カット</h3>
              <p className="text-gray-600 mb-4">中学生以下</p>
              <p className="text-2xl font-bold text-primary-600">¥2,500</p>
            </div>
          </div>
        </section>

        {/* カラーメニュー */}
        <section className="mb-12">
          <h2 className="heading-2 mb-8 text-center">カラーメニュー</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="heading-3 mb-3">全体カラー</h3>
              <p className="text-gray-600 mb-4">シャンプー・ブロー込み</p>
              <p className="text-2xl font-bold text-primary-600">¥6,000~</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="heading-3 mb-3">リタッチカラー</h3>
              <p className="text-gray-600 mb-4">根元のみ</p>
              <p className="text-2xl font-bold text-primary-600">¥4,500~</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="heading-3 mb-3">ハイライト</h3>
              <p className="text-gray-600 mb-4">部分的な明るいカラー</p>
              <p className="text-2xl font-bold text-primary-600">¥8,000~</p>
            </div>
          </div>
        </section>

        {/* パーマメニュー */}
        <section className="mb-12">
          <h2 className="heading-2 mb-8 text-center">パーマメニュー</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="heading-3 mb-3">コールドパーマ</h3>
              <p className="text-gray-600 mb-4">
                カット・シャンプー・ブロー込み
              </p>
              <p className="text-2xl font-bold text-primary-600">¥8,500~</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="heading-3 mb-3">デジタルパーマ</h3>
              <p className="text-gray-600 mb-4">
                カット・シャンプー・ブロー込み
              </p>
              <p className="text-2xl font-bold text-primary-600">¥12,000~</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="heading-3 mb-3">ストレートパーマ</h3>
              <p className="text-gray-600 mb-4">縮毛矯正</p>
              <p className="text-2xl font-bold text-primary-600">¥15,000~</p>
            </div>
          </div>
        </section>

        {/* セットメニュー */}
        <section className="mb-12">
          <h2 className="heading-2 mb-8 text-center">セットメニュー</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="heading-3 mb-3">ヘアセット</h3>
              <p className="text-gray-600 mb-4">お出かけやイベントに</p>
              <p className="text-2xl font-bold text-primary-600">¥3,500</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="heading-3 mb-3">着付け</h3>
              <p className="text-gray-600 mb-4">振袖・留袖・訪問着</p>
              <p className="text-2xl font-bold text-primary-600">¥8,000~</p>
            </div>
          </div>
        </section>

        {/* 注意事項 */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h3 className="heading-3 mb-4">ご利用について</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• 料金は税込価格です</li>
            <li>• 髪の長さや量により料金が変動する場合があります</li>
            <li>• ご予約時に詳しい料金をお伝えいたします</li>
            <li>• クレジットカード・電子マネーもご利用いただけます</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
