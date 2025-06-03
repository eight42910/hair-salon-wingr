import { Metadata } from 'next';
import { Heart, Sparkles, Zap, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: '特徴・こだわり | 美容室ウイング R',
  description:
    '美容室ウイング Rの4つの特徴をご紹介。ファミリーサロンの温かさ、頭皮ケアへのこだわり、最新デジタルパーマ技術、セルフスタイリング指導。',
};

const features = [
  {
    icon: Heart,
    title: 'ファミリーサロンの温かさ',
    description: '3世代にわたってご利用いただけるアットホームな美容室',
    details: [
      '家族みんなで通える親しみやすい雰囲気',
      'お子様からご年配の方まで安心のサービス',
      '長年培った信頼関係と心のこもったおもてなし',
      'お客様一人ひとりとの対話を大切にしたカウンセリング',
    ],
    color: 'bg-red-50 text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: Sparkles,
    title: '頭皮ケアへのこだわり',
    description: '髪の健康は頭皮から。専門的なケアで美しい髪を育てます',
    details: [
      '頭皮の状態に合わせたオーダーメイドケア',
      '薄毛・抜け毛予防のための専門アドバイス',
      '天然由来成分を使用したやさしいトリートメント',
      '定期的なヘッドスパで血行促進と癒しを提供',
    ],
    color: 'bg-blue-50 text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: '最新デジタルパーマ技術',
    description: '形状記憶効果で理想のカールを長時間キープ',
    details: [
      '髪質を選ばない最新のデジタルパーマ技術',
      'ダメージを最小限に抑えた低温処理',
      '自然で美しいカールラインの実現',
      'スタイリングが簡単で忙しい方にも最適',
    ],
    color: 'bg-yellow-50 text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Star,
    title: 'セルフスタイリング指導',
    description: 'ご自宅でも美しく仕上がるスタイリング方法を丁寧に指導',
    details: [
      'お客様のライフスタイルに合わせたスタイリング提案',
      '忙しい朝でも簡単にできるセット方法',
      '使用する道具や製品の選び方もアドバイス',
      'メンテナンス方法や伸びかけのアレンジも指導',
    ],
    color: 'bg-green-50 text-green-600',
    bgColor: 'bg-green-50',
  },
];

export default function FeaturePage() {
  return (
    <div className="min-h-screen bg-accent-50">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-primary-50 to-accent-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 mb-6">私たちの4つの特徴</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              41年間の経験と最新技術で、
              <br />
              お客様一人ひとりに最高の美容体験をお届けします
            </p>
          </div>
        </div>
      </section>

      {/* 特徴詳細セクション */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={feature.title}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'md:grid-flow-col-dense'
                  }`}
                >
                  {/* アイコンと説明 */}
                  <div className={isEven ? '' : 'md:col-start-2'}>
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.color} mb-6`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h2 className="heading-2 mb-4 text-primary-800">
                      {feature.title}
                    </h2>
                    <p className="body-lg text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3" />
                          <span className="body-md text-gray-600">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 画像プレースホルダー */}
                  <div className={isEven ? '' : 'md:col-start-1'}>
                    <div
                      className={`${feature.bgColor} rounded-lg shadow-lg p-8 h-80 flex items-center justify-center`}
                    >
                      <div className="text-center">
                        <IconComponent
                          className={`w-24 h-24 mx-auto mb-4 ${
                            feature.color.split(' ')[1]
                          }`}
                        />
                        <p className="text-gray-500 font-medium">
                          {feature.title}の画像
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className="bg-primary-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-primary-800">お客様からの声</h2>
            <p className="body-lg text-gray-600">
              実際にご利用いただいたお客様からのお声をご紹介します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="body-md text-gray-600 mb-4">
                「3世代でお世話になっています。いつも家族みんなで安心して通える雰囲気が素晴らしいです。技術も確かで、毎回満足しています。」
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-700 font-semibold">田</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">田中様（60代）</p>
                  <p className="text-sm text-gray-500">ご利用歴15年</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="body-md text-gray-600 mb-4">
                「頭皮ケアを始めてから髪にコシが出てきました。セルフスタイリングの指導も丁寧で、家でも美容室のような仕上がりになります。」
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-700 font-semibold">佐</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">佐藤様（40代）</p>
                  <p className="text-sm text-gray-500">ご利用歴8年</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-2 mb-6 text-primary-800">
            体験してみませんか？
          </h2>
          <p className="body-lg text-gray-600 mb-8">
            私たちの技術とおもてなしを、ぜひ一度ご体験ください。
            <br />
            お電話または店頭にてご予約を承っております。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:058-123-4567"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors"
            >
              <span className="mr-2">📞</span>
              058-123-4567
            </a>
            <a
              href="/booking"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
            >
              ご予約はこちら
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
