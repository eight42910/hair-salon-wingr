import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Heart, Star, Users, Award, UserCheck, User, Baby } from 'lucide-react';

export const metadata: Metadata = {
  title: 'コンセプト | 美容室ウイング R',
  description:
    '41年間地域に愛され続ける美容室ウイング Rのコンセプト。3世代にわたるお客様との関係性と、家族経営の温かさをお伝えします。',
};

export default function ConceptPage() {
  return (
    <div className="bg-gradient-to-b from-primary-50 via-white to-accent-50">
      <PageLayout
        title="私たちのコンセプト"
        titleEn="Our Concept"
        subtitle="昭和58年の創業から今日まで、私たちが大切にしてきたのは「お客様一人ひとりとの心のつながり」です"
      >
        {/* 創業の想い - 改善されたデザイン */}
        <div className="mb-16">
          <SectionTitle 
            level="h2" 
            align="center" 
            showDivider={true}
            mainTitle="創業の想い"
            subTitle="Our Foundation Story"
          />

          {/* メインビジュアル */}
          <div className="relative mb-12">
            <Card className="text-center bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 overflow-hidden">
              <div className="relative py-12">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-100/50 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-2xl">
                        <span className="text-4xl font-bold text-white">
                          1983
                        </span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-yellow-700" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    昭和58年創業
                  </h3>
                  <p className="text-lg text-primary-800 max-w-2xl mx-auto leading-relaxed">
                    岐阜市芋島にて「美容室ウイング」として歩み始めました
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* 創業の想いストーリー */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary-900 mb-2">
                    技術と心で
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    当時から変わらない信念は、「技術と心で、お客様の美しさを引き出す」ことです。
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary-900 mb-2">
                    一人ひとりと向き合う
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    小さな美容室でしたが、丁寧にカウンセリングを行い、その方に最適なヘアスタイルを提案してきました。
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary-900 mb-2">
                    想いを受け継いで
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    現在「美容室ウイング
                    R」として、創業からの想いを受け継ぎながら、新しい時代のニーズにもお応えしています。
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* 創業者メッセージ */}
          <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <blockquote className="text-lg text-primary-900 italic max-w-3xl mx-auto leading-relaxed">
                「当たり前のことを、当たり前に続ける。
                <br />
                それが、お客様との信頼関係を築く一番の方法だと信じています。」
              </blockquote>
              <p className="text-primary-700 font-semibold mt-4">
                — 美容室ウイング R —
              </p>
            </div>
          </Card>
        </div>

        {/* 3世代のつながり - リッチデザイン */}
        <div className="mb-16 animate-fade-in-up animation-delay-200">
          <SectionTitle 
            level="h2" 
            align="left" 
            showDivider={true}
            mainTitle="3世代にわたるお客様との絆"
            subTitle="Three Generations Connection"
          />
          <p className="text-gray-700 text-lg mb-12 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border-l-4 border-primary-400">
            おばあさまからお母さま、そしてお嬢さまへ。家族の成長と共に歩んできた、かけがえのない関係があります。
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 第1世代 */}
            <Card className="text-center relative overflow-hidden group bg-gradient-to-br from-red-50 to-pink-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <UserCheck className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="font-bold text-lg text-primary-900 mb-3">
                  第1世代
                </h3>
                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                  創業時からお越しいただいているお客様方
                </p>
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                    パーマスタイルが中心
                  </p>
                  <p className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                    月1回のペースでご来店
                  </p>
                  <p className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                    長年の信頼関係
                  </p>
                </div>
              </div>
            </Card>

            {/* 第2世代 */}
            <Card className="text-center relative overflow-hidden group bg-gradient-to-br from-blue-50 to-indigo-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <User className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg text-primary-900 mb-3">
                  第2世代
                </h3>
                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                  お母さま世代としてご来店のお客様
                </p>
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                    カラーとカットの組み合わせ
                  </p>
                  <p className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                    お子様連れでのご来店
                  </p>
                  <p className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                    ライフスタイルに合わせた提案
                  </p>
                </div>
              </div>
            </Card>

            {/* 第3世代 */}
            <Card className="text-center relative overflow-hidden group bg-gradient-to-br from-green-50 to-emerald-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <Baby className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-bold text-lg text-primary-900 mb-3">
                  第3世代
                </h3>
                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                  お嬢さま世代として新たにお迎えするお客様
                </p>
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                    トレンドを取り入れたスタイル
                  </p>
                  <p className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                    成人式やイベントヘア
                  </p>
                  <p className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                    新しい美容への挑戦
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* 私たちの価値観 - リッチデザイン */}
        <div className="mb-16 animate-fade-in-up animation-delay-400">
          <SectionTitle 
            level="h2" 
            align="left" 
            showDivider={true}
            mainTitle="私たちが大切にしていること"
            subTitle="Our Values"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-l-4 border-primary-300 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-bold text-lg text-primary-900 mb-4 group-hover:text-primary-700 transition-colors">
                技術力
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                常に新しい技術を学び続け、お客様に最高の仕上がりをお届けします。41年間培った経験と、最新のトレンドを融合させた確かな技術力が自慢です。
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-secondary-50 to-secondary-100 border-l-4 border-secondary-300 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-bold text-lg text-primary-900 mb-4 group-hover:text-primary-700 transition-colors">
                おもてなしの心
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                お客様がリラックスして過ごせる空間づくりを心がけています。家族のような温かさで、皆様をお迎えします。
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-accent-50 to-accent-100 border-l-4 border-accent-300 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-bold text-lg text-primary-900 mb-4 group-hover:text-primary-700 transition-colors">
                丁寧なカウンセリング
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                お客様のライフスタイルやご希望を詳しくお伺いし、一人ひとりに最適なヘアスタイルをご提案いたします。
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-l-4 border-primary-200 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-bold text-lg text-primary-900 mb-4 group-hover:text-primary-700 transition-colors">
                地域への貢献
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                地域の美容室として、皆様の日常に寄り添い続けます。地域に根ざした美容室として、これからも成長し続けてまいります。
              </p>
            </Card>
          </div>
        </div>

        {/* 未来への想い */}
        <Card className="bg-gradient-to-br from-primary-900 to-primary-800 text-white text-center">
          <div className="py-12">
            <h3 className="text-2xl font-bold mb-6">これからも、ずっと</h3>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed mb-8">
              41年間変わらない想いを胸に、これからも皆様の美しさと笑顔のために、
              心を込めてサービスをお届けしてまいります。
            </p>
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full"></div>
            </div>
          </div>
        </Card>
      </PageLayout>
    </div>
  );
}
