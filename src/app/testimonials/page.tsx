import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お客様の声 | 美容室ウイング R',
  description:
    '美容室ウイング R をご利用いただいたお客様の声をご紹介。満足度の高いサービスを心がけています。',
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* ページヘッダー */}
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">お客様の声</h1>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            美容室ウイング R をご利用いただいたお客様から寄せられた
            貴重なご感想をご紹介いたします。
          </p>
        </div>

        {/* お客様の声一覧 */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* お客様の声1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="ml-4">
                <h3 className="font-medium">K.M様</h3>
                <p className="text-sm text-gray-500">30代・女性</p>
              </div>
            </div>
            <div className="flex mb-3">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4">
              「初めて伺いましたが、カウンセリングがとても丁寧で安心できました。
              髪質に合わせて最適なカラーを提案してくださり、仕上がりも大満足です！
              アットホームな雰囲気も気に入りました。」
            </p>
            <div className="text-sm text-gray-500">
              <p>施術: レディースカット + カラー</p>
              <p>スタイリスト: 佐藤さん</p>
            </div>
          </div>

          {/* お客様の声2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="ml-4">
                <h3 className="font-medium">T.H様</h3>
                <p className="text-sm text-gray-500">40代・男性</p>
              </div>
            </div>
            <div className="flex mb-3">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4">
              「長年お世話になっています。いつも思い通りの仕上がりで、
              職場でも評判が良いです。スタッフの皆さんも親切で、
              いつもリラックスして過ごせます。」
            </p>
            <div className="text-sm text-gray-500">
              <p>施術: メンズカット</p>
              <p>スタイリスト: 鈴木さん</p>
            </div>
          </div>

          {/* お客様の声3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="ml-4">
                <h3 className="font-medium">A.S様</h3>
                <p className="text-sm text-gray-500">20代・女性</p>
              </div>
            </div>
            <div className="flex mb-3">
              <span className="text-yellow-400">★★★★☆</span>
            </div>
            <p className="text-gray-600 mb-4">
              「デジタルパーマをお願いしました。自然なウェーブで、
              朝のスタイリングがとても楽になりました。
              技術力の高さを実感しています。また来月もお願いします！」
            </p>
            <div className="text-sm text-gray-500">
              <p>施術: カット + デジタルパーマ</p>
              <p>スタイリスト: 佐藤さん</p>
            </div>
          </div>

          {/* お客様の声4 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="ml-4">
                <h3 className="font-medium">M.Y様</h3>
                <p className="text-sm text-gray-500">50代・女性</p>
              </div>
            </div>
            <div className="flex mb-3">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4">
              「白髪染めでお世話になっています。いつも自然な仕上がりで、
              年齢を感じさせない若々しいスタイルにしてくださいます。
              店内の落ち着いた雰囲気も気に入っています。」
            </p>
            <div className="text-sm text-gray-500">
              <p>施術: カット + カラー（白髪染め）</p>
              <p>スタイリスト: 山田さん</p>
            </div>
          </div>

          {/* お客様の声5 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="ml-4">
                <h3 className="font-medium">R.K様</h3>
                <p className="text-sm text-gray-500">中学生・女性</p>
              </div>
            </div>
            <div className="flex mb-3">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4">
              「初めてのカラーで不安でしたが、優しく説明してくださり安心できました。
              学校の規則に合わせて、自然で上品な色にしてもらいました。
              友達にも褒められて嬉しいです！」
            </p>
            <div className="text-sm text-gray-500">
              <p>施術: カット + カラー</p>
              <p>スタイリスト: 田中さん</p>
            </div>
          </div>

          {/* お客様の声6 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="ml-4">
                <h3 className="font-medium">N.O様</h3>
                <p className="text-sm text-gray-500">60代・女性</p>
              </div>
            </div>
            <div className="flex mb-3">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4">
              「結婚式の着付けとヘアセットをお願いしました。
              朝早い時間にも関わらず、丁寧に対応していただき、
              とても美しく仕上げてくださいました。感謝しています。」
            </p>
            <div className="text-sm text-gray-500">
              <p>施術: 着付け + ヘアセット</p>
              <p>スタイリスト: 佐藤さん</p>
            </div>
          </div>

          {/* お客様の声7 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="ml-4">
                <h3 className="font-medium">S.I様</h3>
                <p className="text-sm text-gray-500">30代・男性</p>
              </div>
            </div>
            <div className="flex mb-3">
              <span className="text-yellow-400">★★★★☆</span>
            </div>
            <p className="text-gray-600 mb-4">
              「転勤で岐阜に来てから利用させていただいています。
              駐車場があるのでとても便利です。カットの技術も高く、
              ビジネスシーンにぴったりのスタイルにしてもらっています。」
            </p>
            <div className="text-sm text-gray-500">
              <p>施術: メンズカット</p>
              <p>スタイリスト: 鈴木さん</p>
            </div>
          </div>

          {/* お客様の声8 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="ml-4">
                <h3 className="font-medium">E.T様</h3>
                <p className="text-sm text-gray-500">40代・女性</p>
              </div>
            </div>
            <div className="flex mb-3">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4">
              「くせ毛に悩んでいましたが、ストレートパーマで解決しました。
              自然な仕上がりで、毎朝のスタイリングが本当に楽になりました。
              技術の高さに感動しています。」
            </p>
            <div className="text-sm text-gray-500">
              <p>施術: カット + ストレートパーマ</p>
              <p>スタイリスト: 佐藤さん</p>
            </div>
          </div>

          {/* お客様の声9 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="ml-4">
                <h3 className="font-medium">H.W様</h3>
                <p className="text-sm text-gray-500">20代・女性</p>
              </div>
            </div>
            <div className="flex mb-3">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4">
              「友人の紹介で来店しました。トレンドを取り入れつつ、
              私に似合うスタイルを提案してくださり、大満足です。
              スタッフの皆さんも明るくて居心地が良いです。」
            </p>
            <div className="text-sm text-gray-500">
              <p>施術: カット + ハイライト</p>
              <p>スタイリスト: 田中さん</p>
            </div>
          </div>
        </div>

        {/* 統計情報 */}
        <section className="mt-16 bg-primary-50 rounded-lg p-8">
          <h2 className="heading-2 text-center mb-8">お客様満足度</h2>
          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                97%
              </div>
              <p className="text-gray-600">総合満足度</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                95%
              </div>
              <p className="text-gray-600">技術満足度</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                98%
              </div>
              <p className="text-gray-600">接客満足度</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                92%
              </div>
              <p className="text-gray-600">リピート率</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6">
            ※2023年度お客様アンケートより（回答数: 280件）
          </p>
        </section>

        {/* お客様の声をお寄せください */}
        <section className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="heading-2 mb-6">お客様の声をお寄せください</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            美容室ウイング R では、より良いサービスを提供するため、
            お客様からのご意見・ご感想を大切にしております。
            ぜひお気軽にお声をお聞かせください。
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <a
              href="tel:058-123-4567"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              お電話でお聞かせください
            </a>
            <button className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
              アンケートフォーム
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
