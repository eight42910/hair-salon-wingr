import { Metadata } from 'next';
import { Heart, Sparkles, Zap, Star } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';

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
    gradient: 'from-rose-50 via-pink-50 to-red-50',
    iconGradient: 'from-rose-400 to-red-500',
    borderColor: 'border-rose-300',
    accentColor: 'bg-rose-500',
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
    gradient: 'from-blue-50 via-indigo-50 to-purple-50',
    iconGradient: 'from-blue-400 to-indigo-500',
    borderColor: 'border-blue-300',
    accentColor: 'bg-blue-500',
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
    gradient: 'from-amber-50 via-yellow-50 to-orange-50',
    iconGradient: 'from-amber-400 to-orange-500',
    borderColor: 'border-amber-300',
    accentColor: 'bg-amber-500',
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
    gradient: 'from-emerald-50 via-green-50 to-teal-50',
    iconGradient: 'from-emerald-400 to-green-500',
    borderColor: 'border-emerald-300',
    accentColor: 'bg-emerald-500',
  },
];

const testimonials = [
  {
    text: '3世代でお世話になっています。いつも家族みんなで安心して通える雰囲気が素晴らしいです。技術も確かで、毎回満足しています。',
    name: '田中様',
    age: '60代',
    experience: 'ご利用歴15年',
    initial: '田',
    bgGradient: 'from-primary-50 to-primary-100',
  },
  {
    text: '頭皮ケアを始めてから髪にコシが出てきました。セルフスタイリングの指導も丁寧で、家でも美容室のような仕上がりになります。',
    name: '佐藤様',
    age: '40代',
    experience: 'ご利用歴8年',
    initial: '佐',
    bgGradient: 'from-secondary-50 to-secondary-100',
  },
];

export default function FeaturePage() {
  return (
    <div className="bg-gradient-to-b from-primary-50 via-white to-accent-50">
      <PageLayout
        title="私たちの特徴"
        titleEn="Our Features"
        subtitle="美容室ウイング Rの4つの特徴をご紹介。お客様に愛され続ける理由がここにあります。"
      >
        {/* 特徴詳細セクション */}
        <div className="space-y-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={feature.title}
                className={`grid md:grid-cols-2 gap-12 items-center animate-fade-in-up animation-delay-${
                  index * 200
                }`}
              >
                {/* アイコンと説明 */}
                <div className={isEven ? '' : 'md:order-2'}>
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.iconGradient} rounded-full flex items-center justify-center shadow-lg mr-4 transition-all duration-300 hover:scale-110 hover:shadow-xl`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <SectionTitle
                        level="h2"
                        align="left"
                        showDivider={false}
                        className="mb-0"
                      >
                        {feature.title}
                      </SectionTitle>
                      <div
                        className={`h-1 w-24 ${feature.accentColor} mt-2 rounded-full`}
                      ></div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                    {feature.description}
                  </p>

                  <ul className="space-y-4">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start group">
                        <div
                          className={`flex-shrink-0 w-2 h-2 ${feature.accentColor} rounded-full mt-3 mr-4 transition-all duration-300 group-hover:scale-150`}
                        ></div>
                        <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 画像プレースホルダー */}
                <div className={isEven ? '' : 'md:order-1'}>
                  <Card
                    className={`bg-gradient-to-br ${feature.gradient} ${feature.borderColor} border-l-4 group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 h-80 flex items-center justify-center">
                      <div className="text-center transition-all duration-300 group-hover:scale-105">
                        <div
                          className={`w-24 h-24 bg-gradient-to-br ${feature.iconGradient} rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                        >
                          <IconComponent className="w-12 h-12 text-white" />
                        </div>
                        <p className="text-gray-600 font-medium text-lg">
                          {feature.title}の施術イメージ
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                          ※実際の施術写真は後日更新予定
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* お客様の声セクション */}
        <div className="mt-24 animate-fade-in-up animation-delay-800">
          <div className="text-center mb-12">
            <SectionTitle level="h2" align="center" showDivider={true}>
              お客様からの声
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              実際にご利用いただいたお客様からのお声をご紹介します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${testimonial.bgGradient} group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500"></div>
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="text-3xl text-primary-300 mb-2">"</div>
                    <p className="text-gray-700 leading-relaxed italic">
                      {testimonial.text}
                    </p>
                    <div className="text-3xl text-primary-300 text-right">
                      "
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mr-4 shadow-md transition-all duration-300 group-hover:scale-110">
                      <span className="text-white font-bold text-lg">
                        {testimonial.initial}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-lg">
                        {testimonial.name}（{testimonial.age}）
                      </p>
                      <p className="text-sm text-gray-600 bg-white/60 px-2 py-1 rounded-full inline-block">
                        {testimonial.experience}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA セクション */}
        <div className="mt-24 animate-fade-in-up animation-delay-1000">
          <Card className="text-center bg-gradient-to-br from-primary-50 via-white to-accent-50 border-primary-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 to-accent-100/30"></div>
            <div className="relative z-10">
              <SectionTitle level="h2" align="center" showDivider={false}>
                体験してみませんか？
              </SectionTitle>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto bg-white/70 backdrop-blur-sm p-4 rounded-lg">
                私たちの技術とおもてなしを、ぜひ一度ご体験ください。
                <br />
                お電話または店頭にてご予約を承っております。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:058-243-6478"
                  className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-primary-600 hover:to-primary-800"
                >
                  📞 058-243-6478
                </a>
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-secondary-500 to-secondary-700 text-white px-8 py-4 rounded-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-secondary-600 hover:to-secondary-800"
                >
                  お問い合わせフォーム
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-6 bg-white/60 backdrop-blur-sm p-3 rounded-lg inline-block">
                営業時間：9:00〜19:00（火曜定休）
              </p>
            </div>
          </Card>
        </div>
      </PageLayout>
    </div>
  );
}
