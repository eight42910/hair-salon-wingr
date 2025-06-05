import { Metadata } from 'next';
import { AccessMap } from '@/components/map/GoogleMap';

export const metadata: Metadata = {
  title: 'サロン情報・アクセス | 美容室ウイング R',
  description:
    '美容室ウイング R の店舗情報、営業時間、アクセス方法をご案内。岐阜市内で通いやすい立地です。',
};

export default function AccessPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* ページヘッダー */}
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">サロン情報・アクセス</h1>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            美容室ウイング R は岐阜市内の便利な立地にございます。
            お車でのご来店はもちろん、公共交通機関でもアクセス良好です。
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* 店舗情報 */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="heading-2 mb-6">店舗情報</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">店舗名</h3>
                <p className="text-gray-600 body-md">美容室ウイング R</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">住所</h3>
                <p className="text-gray-600 body-md">
                  〒500-8234
                  <br />
                  岐阜県岐阜市加野2-25-8
                  <br />
                  ウイングビル1F
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">電話番号</h3>
                <p className="text-gray-600 body-md">
                  <a
                    href="tel:058-241-3375"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    058-241-3375
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">営業時間</h3>
                <div className="text-gray-600 body-md">
                  <p>平日: 9:00 - 19:00</p>
                  <p>土曜: 9:00 - 18:00</p>
                  <p>日曜・祝日: 9:00 - 17:00</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">定休日</h3>
                <p className="text-gray-600 body-md">
                  毎週火曜日、第2火曜日、第3日曜日
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">駐車場</h3>
                <p className="text-gray-600 body-md">専用駐車場5台完備</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">席数</h3>
                <p className="text-gray-600 body-md">
                  カット席: 4席
                  <br />
                  シャンプー台: 2台
                  <br />
                  セット面: 2席
                </p>
              </div>
            </div>
          </section>

          {/* アクセス方法 */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="heading-2 mb-6">アクセス方法</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  🚗 お車でお越しの場合
                </h3>
                <div className="text-gray-600 space-y-2 body-md">
                  <p>• 岐阜駅から約10分</p>
                  <p>• 国道156号線「芋島交差点」から徒歩2分</p>
                  <p>• 東海北陸自動車道「岐阜各務原IC」から約15分</p>
                  <p className="text-sm text-primary-600">
                    ※専用駐車場5台完備（無料）
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  🚌 バスでお越しの場合
                </h3>
                <div className="text-gray-600 space-y-2 body-md">
                  <p>• JR岐阜駅からバス約15分</p>
                  <p>• 「芋島」バス停下車、徒歩3分</p>
                  <p>• 岐阜バス・市内循環バスをご利用ください</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  🚶 徒歩・自転車でお越しの場合
                </h3>
                <div className="text-gray-600 space-y-2 body-md">
                  <p>• JR岐阜駅から徒歩約25分</p>
                  <p>• 自転車駐輪場あり（無料）</p>
                </div>
              </div>
            </div>

            {/* 地図エリア */}
            <div className="mt-8">
              <h3 className="font-medium text-gray-900 mb-4">アクセスマップ</h3>
              <AccessMap />
            </div>
          </section>
        </div>

        {/* 店舗の特徴 */}
        <section className="mt-12 bg-primary-50 rounded-lg p-8">
          <h2 className="heading-2 text-center mb-8">店舗の特徴</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl mb-3">🏪</div>
              <h3 className="font-medium mb-2">アットホームな雰囲気</h3>
              <p className="text-sm text-gray-600">
                家族経営の温かい雰囲気で、リラックスして過ごせます
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🅿️</div>
              <h3 className="font-medium mb-2">駐車場完備</h3>
              <p className="text-sm text-gray-600">
                専用駐車場5台分をご用意。お車でのご来店も安心です
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">♿</div>
              <h3 className="font-medium mb-2">バリアフリー対応</h3>
              <p className="text-sm text-gray-600">
                車椅子でのご来店も可能です。お気軽にお声がけください
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎵</div>
              <h3 className="font-medium mb-2">落ち着いた空間</h3>
              <p className="text-sm text-gray-600">
                静かで上品なBGMが流れる、くつろぎの空間です
              </p>
            </div>
          </div>
        </section>

        {/* 注意事項・お願い */}
        <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="heading-2 mb-6">ご来店時のお願い</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">ご予約について</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ご予約優先制となっております</li>
                <li>
                  •
                  当日のご予約も承りますが、混雑時はお待ちいただく場合があります
                </li>
                <li>• キャンセルの際は、お早めにご連絡ください</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-3">その他のお願い</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 体調不良の際はご来店をお控えください</li>
                <li>• 貴重品の管理はお客様にてお願いいたします</li>
                <li>• 小さなお子様連れの際は事前にお声がけください</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
