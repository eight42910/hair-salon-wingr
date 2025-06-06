import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'コンセプト | 美容室ウイング R',
  description:
    '41年間地域に愛され続ける美容室ウイング Rのコンセプト。3世代にわたるお客様との関係性と、家族経営の温かさをお伝えします。',
};

export default function ConceptPage() {
  return (
    <div className="bg-gradient-to-b from-primary-50 via-white to-accent-50">
      <PageLayout
        title="41年間変わらない想い"
        subtitle="昭和58年の創業から今日まで、私たちが大切にしてきたのは「お客様一人ひとりとの心のつながり」です"
      >
        {/* 創業の想い - リッチデザイン */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-fade-in-up">
          <div className="space-y-6">
            <SectionTitle level="h2" align="left" showDivider={true}>
              創業の想い
            </SectionTitle>
            <div className="space-y-6 text-gray-700 text-base leading-relaxed">
              <p className="relative pl-6 border-l-4 border-primary-500 bg-white/60 backdrop-blur-sm p-4 rounded-r-lg shadow-sm transition-all duration-300 hover:shadow-md">
                昭和58年、岐阜市芋島にて「美容室ウイング」として歩み始めました。
                当時から変わらない信念は、「技術と心で、お客様の美しさを引き出す」ことです。
              </p>
              <p className="relative pl-6 border-l-4 border-primary-300 bg-white/60 backdrop-blur-sm p-4 rounded-r-lg shadow-sm transition-all duration-300 hover:shadow-md">
                小さな美容室でしたが、一人ひとりのお客様と向き合い、
                丁寧にカウンセリングを行い、その方に最適なヘアスタイルを提案する——
                そんな当たり前のことを、当たり前に続けてきました。
              </p>
              <p className="relative pl-6 border-l-4 border-primary-500 bg-white/60 backdrop-blur-sm p-4 rounded-r-lg shadow-sm transition-all duration-300 hover:shadow-md">
                そして現在「美容室ウイング R」として、
                創業からの想いを受け継ぎながら、新しい時代のニーズにもお応えしています。
              </p>
            </div>
          </div>
          <Card className="text-center relative overflow-hidden group transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-4xl font-bold text-white">1983</span>
              </div>
              <h3 className="font-bold text-xl text-primary-900 mb-3">創業</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                昭和58年、岐阜市芋島にて
                <br />
                「美容室ウイング」として開業
              </p>
            </div>
          </Card>
        </div>

        {/* 3世代のつながり - リッチデザイン */}
        <div className="mb-16 animate-fade-in-up animation-delay-200">
          <SectionTitle level="h2" align="left" showDivider={true}>
            3世代にわたるお客様との絆
          </SectionTitle>
          <p className="text-gray-700 text-lg mb-12 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border-l-4 border-primary-400">
            おばあさまからお母さま、そしてお嬢さまへ。家族の成長と共に歩んできた、かけがえのない関係があります。
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 第1世代 */}
            <Card className="text-center relative overflow-hidden group bg-gradient-to-br from-red-50 to-pink-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <span className="text-3xl">👵</span>
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
                  <span className="text-3xl">👩</span>
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
                  <span className="text-3xl">👧</span>
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
          <SectionTitle level="h2" align="left" showDivider={true}>
            私たちが大切にしていること
          </SectionTitle>

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

        {/* 未来への想い - リッチデザイン */}
        <div className="animate-fade-in-up animation-delay-600">
          <Card className="text-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 border-primary-200">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-accent-100/20"></div>
            <div className="relative z-10">
              <SectionTitle level="h2" align="center" showDivider={false}>
                これからも、変わらずに
              </SectionTitle>
              <div className="space-y-6 text-gray-700 text-base leading-relaxed max-w-3xl mx-auto">
                <p className="text-xl font-medium text-primary-800">
                  時代は変わっても、私たちの根本にある想いは変わりません。
                </p>
                <p className="bg-white/70 backdrop-blur-sm p-4 rounded-lg">
                  お客様一人ひとりと向き合い、その方の魅力を最大限に引き出すこと。
                  技術とおもてなしの心で、皆様の日常に彩りを添えること。
                </p>
                <p className="bg-white/70 backdrop-blur-sm p-4 rounded-lg">
                  これからも美容室ウイング
                  Rは、3世代、4世代と続くお客様との絆を大切に、
                  地域に愛される美容室であり続けます。
                </p>
              </div>
              <div className="text-right mt-8">
                <p className="text-primary-800 font-bold text-lg">
                  美容室ウイング R 一同
                </p>
              </div>
            </div>
          </Card>
        </div>
      </PageLayout>
    </div>
  );
}
