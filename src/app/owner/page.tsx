import { Metadata } from 'next';
import { Scissors, Award, Heart, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'オーナー・スタッフ紹介 | 美容室ウイング R',
  description:
    '美容室ウイング Rのオーナー・スタッフをご紹介。41年の経験と家族経営の温かさで、お客様一人ひとりに寄り添います。',
};

const staff = [
  {
    name: '山田 太郎',
    role: 'オーナー・トップスタイリスト',
    experience: '41年',
    specialties: ['カット', 'パーマ', '頭皮ケア', '経営'],
    message:
      '創業から41年、お客様との信頼関係を一番大切にしています。技術の向上はもちろん、お客様が安心してくつろげる空間づくりを心がけています。',
    background: 'bg-primary-100',
    icon: Award,
  },
  {
    name: '山田 花子',
    role: 'スタイリスト・カラーリスト',
    experience: '25年',
    specialties: ['カラー', 'カット', 'トリートメント', 'アップスタイル'],
    message:
      '女性のお客様の美しさを引き出すお手伝いをさせていただいています。トレンドを取り入れながらも、お客様に似合うスタイルをご提案いたします。',
    background: 'bg-pink-100',
    icon: Heart,
  },
  {
    name: '山田 次郎',
    role: 'スタイリスト',
    experience: '15年',
    specialties: ['メンズカット', 'デジタルパーマ', 'ヘッドスパ', 'セット'],
    message:
      'メンズスタイルを得意としています。お客様のライフスタイルに合わせて、スタイリングしやすいカットをご提案いたします。',
    background: 'bg-blue-100',
    icon: Scissors,
  },
  {
    name: '田中 美咲',
    role: 'ジュニアスタイリスト',
    experience: '5年',
    specialties: ['アシスタント', 'シャンプー', 'ブロー', '接客'],
    message:
      '新しい技術を学びながら、お客様に心地よい時間を過ごしていただけるよう努めています。明るい笑顔でお迎えいたします。',
    background: 'bg-green-100',
    icon: Star,
  },
];

const qualifications = [
  '美容師免許',
  'ヘッドスパ認定資格',
  'カラーリスト検定',
  'デジタルパーマ技術認定',
  '着付け技能士',
  '接客マナー検定',
];

export default function OwnerPage() {
  return (
    <div className="min-h-screen bg-accent-50">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-primary-50 to-accent-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 mb-6">オーナー・スタッフ紹介</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              確かな技術と温かい心で、
              <br />
              お客様の美しさをサポートするプロフェッショナル集団です
            </p>
          </div>
        </div>
      </section>

      {/* スタッフ紹介セクション */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {staff.map((member, index) => {
              const IconComponent = member.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={member.name}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'md:grid-flow-col-dense'
                  }`}
                >
                  {/* スタッフ情報 */}
                  <div className={isEven ? '' : 'md:col-start-2'}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-3 ${member.background} rounded-full`}
                        >
                          <IconComponent className="w-6 h-6 text-primary-700" />
                        </div>
                        <div>
                          <h2 className="heading-2 text-primary-800">
                            {member.name}
                          </h2>
                          <p className="text-lg font-medium text-primary-600">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="mb-4">
                          <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                            経験年数: {member.experience}
                          </span>
                        </div>

                        <div className="mb-4">
                          <h3 className="font-semibold text-gray-800 mb-2">
                            得意分野:
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty) => (
                              <span
                                key={specialty}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">
                            メッセージ:
                          </h3>
                          <p className="body-md text-gray-600 leading-relaxed">
                            {member.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 写真プレースホルダー */}
                  <div className={isEven ? '' : 'md:col-start-1'}>
                    <div
                      className={`${member.background} rounded-lg shadow-lg p-8 h-80 flex items-center justify-center`}
                    >
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-12 h-12 text-primary-700" />
                        </div>
                        <p className="text-gray-600 font-medium">
                          {member.name}
                        </p>
                        <p className="text-gray-500 text-sm">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 資格・技術認定セクション */}
      <section className="bg-primary-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-primary-800">
              保有資格・技術認定
            </h2>
            <p className="body-lg text-gray-600">
              スタッフ一同、常に技術向上に努め、
              <br />
              様々な資格・認定を取得しています
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualifications.map((qualification) => (
              <div
                key={qualification}
                className="bg-white rounded-lg shadow-lg p-4 text-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-primary-700" />
                </div>
                <p className="font-medium text-gray-800">{qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 店内の雰囲気セクション */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-primary-800">
              アットホームな店内
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              家族経営ならではの温かい雰囲気の中で、
              <br />
              リラックスして美容時間をお過ごしください
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent-100 rounded-lg shadow-lg p-8 h-60 flex items-center justify-center mb-4">
                <div className="text-center">
                  <Scissors className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">カットエリア</p>
                </div>
              </div>
              <h3 className="heading-3 mb-2 text-primary-800">カットエリア</h3>
              <p className="body-sm text-gray-600">
                ゆったりとしたカットチェアで、
                <br />
                リラックスしながら施術を受けていただけます
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-lg shadow-lg p-8 h-60 flex items-center justify-center mb-4">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">シャンプーエリア</p>
                </div>
              </div>
              <h3 className="heading-3 mb-2 text-primary-800">
                シャンプーエリア
              </h3>
              <p className="body-sm text-gray-600">
                フルフラットシャンプー台で、
                <br />
                極上のリラクゼーションをご提供
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-lg shadow-lg p-8 h-60 flex items-center justify-center mb-4">
                <div className="text-center">
                  <Star className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">待合エリア</p>
                </div>
              </div>
              <h3 className="heading-3 mb-2 text-primary-800">待合エリア</h3>
              <p className="body-sm text-gray-600">
                雑誌をご用意してお待ちいただく間も、
                <br />
                快適にお過ごしいただけます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="bg-gradient-to-b from-accent-50 to-primary-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-2 mb-6 text-primary-800">
            お気軽にご相談ください
          </h2>
          <p className="body-lg text-gray-600 mb-8">
            髪のお悩みから、ちょっとしたスタイルチェンジまで、
            <br />
            どんなことでもお気軽にスタッフにご相談ください。
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
