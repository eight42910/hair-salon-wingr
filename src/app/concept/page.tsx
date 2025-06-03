import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'コンセプト | 美容室ウイング R',
  description:
    '41年間地域に愛され続ける美容室ウイング Rのコンセプト。3世代にわたるお客様との関係性と、家族経営の温かさをお伝えします。',
};

export default function ConceptPage() {
  return (
    <div className="min-h-screen bg-accent-50">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-primary-50 to-accent-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 mb-6">41年間変わらない想い</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              昭和58年の創業から今日まで、私たちが大切にしてきたのは
              <br />
              「お客様一人ひとりとの心のつながり」です
            </p>
          </div>
        </div>
      </section>

      {/* 創業の想い */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6 text-primary-800">創業の想い</h2>
              <div className="space-y-4">
                <p className="body-lg">
                  昭和58年、岐阜市芋島にて「美容室ウイング」として歩み始めました。
                  当時から変わらない信念は、「技術と心で、お客様の美しさを引き出す」ことです。
                </p>
                <p className="body-lg">
                  小さな美容室でしたが、一人ひとりのお客様と向き合い、
                  丁寧にカウンセリングを行い、その方に最適なヘアスタイルを提案する——
                  そんな当たり前のことを、当たり前に続けてきました。
                </p>
                <p className="body-lg">
                  そして現在「美容室ウイング R」として、
                  創業からの想いを受け継ぎながら、新しい時代のニーズにもお応えしています。
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary-700">
                  1983
                </span>
              </div>
              <h3 className="heading-3 mb-4 text-primary-800">創業</h3>
              <p className="body-md text-gray-600">
                昭和58年、岐阜市芋島にて
                <br />
                「美容室ウイング」として開業
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3世代のつながり */}
      <section className="bg-primary-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-primary-800">
              3世代にわたるお客様との絆
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              おばあさまからお母さま、そしてお嬢さまへ。
              家族の成長と共に歩んできた、かけがえのない関係があります。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 第1世代 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">👵</span>
              </div>
              <h3 className="heading-3 mb-4 text-primary-800">第1世代</h3>
              <p className="body-md text-gray-600 mb-4">
                創業時からお越しいただいている お客様方
              </p>
              <div className="text-sm text-gray-500">
                <p>・パーマスタイルが中心</p>
                <p>・月1回のペースでご来店</p>
                <p>・長年の信頼関係</p>
              </div>
            </div>

            {/* 第2世代 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">👩</span>
              </div>
              <h3 className="heading-3 mb-4 text-primary-800">第2世代</h3>
              <p className="body-md text-gray-600 mb-4">
                お母さま世代として ご来店のお客様
              </p>
              <div className="text-sm text-gray-500">
                <p>・カラーとカットの組み合わせ</p>
                <p>・お子様連れでのご来店</p>
                <p>・ライフスタイルに合わせた提案</p>
              </div>
            </div>

            {/* 第3世代 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">👧</span>
              </div>
              <h3 className="heading-3 mb-4 text-primary-800">第3世代</h3>
              <p className="body-md text-gray-600 mb-4">
                お嬢さま世代として 新たにお迎えするお客様
              </p>
              <div className="text-sm text-gray-500">
                <p>・トレンドを取り入れたスタイル</p>
                <p>・成人式やイベントヘア</p>
                <p>・新しい美容への挑戦</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 私たちの価値観 */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-primary-800">
              私たちが大切にしていること
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="heading-3 mb-4 text-primary-800">技術力</h3>
              <p className="body-md text-gray-600">
                常に新しい技術を学び続け、お客様に最高の仕上がりをお届けします。
                41年間培った経験と、最新のトレンドを融合させた確かな技術力が自慢です。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="heading-3 mb-4 text-primary-800">
                おもてなしの心
              </h3>
              <p className="body-md text-gray-600">
                お客様がリラックスして過ごせる空間づくりを心がけています。
                家族のような温かさで、皆様をお迎えします。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="heading-3 mb-4 text-primary-800">
                丁寧なカウンセリング
              </h3>
              <p className="body-md text-gray-600">
                お客様のライフスタイルやご希望を詳しくお伺いし、
                一人ひとりに最適なヘアスタイルをご提案いたします。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="heading-3 mb-4 text-primary-800">地域への貢献</h3>
              <p className="body-md text-gray-600">
                地域の美容室として、皆様の日常に寄り添い続けます。
                地域に根ざした美容室として、これからも成長し続けてまいります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 未来への想い */}
      <section className="bg-gradient-to-b from-accent-50 to-primary-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-2 mb-8 text-primary-800">
            これからも、変わらずに
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              時代は変わっても、私たちの根本にある想いは変わりません。
            </p>
            <p className="body-lg text-gray-600 mb-8">
              お客様一人ひとりと向き合い、その方の魅力を最大限に引き出すこと。
              技術とおもてなしの心で、皆様の日常に彩りを添えること。
              <br />
              <br />
              これからも美容室ウイング Rは、
              3世代、4世代と続くお客様との絆を大切に、
              地域に愛される美容室であり続けます。
            </p>
            <div className="text-right">
              <p className="text-primary-700 font-semibold">
                美容室ウイング R 一同
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
