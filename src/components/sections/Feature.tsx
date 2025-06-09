import { Users, Heart, Sparkles, Coffee, Image } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

const features = [
  {
    icon: Users,
    title: 'ファミリーサロン',
    description:
      '3世代に愛され続ける安心のサロン。お子様からご年配の方まで、ご家族皆様でご利用いただけます。',
    gradient: 'from-rose-50 to-pink-50',
    iconGradient: 'from-rose-400 to-red-500',
    accentColor: 'bg-rose-500',
    imageAlt: 'ファミリーサロンの温かい雰囲気',
  },
  {
    icon: Heart,
    title: '頭皮改善',
    description:
      'CAC製品を使用したヘッドスパで頭皮環境を改善。健やかな髪の土台作りをサポートいたします。',
    gradient: 'from-blue-50 to-indigo-50',
    iconGradient: 'from-blue-400 to-indigo-500',
    accentColor: 'bg-blue-500',
    imageAlt: '頭皮改善ヘッドスパの施術風景',
  },
  {
    icon: Sparkles,
    title: 'デジタルパーマ・縮毛矯正',
    description:
      'ユウコシステムの最新技術で、髪質に合わせた理想のスタイルを実現します。',
    gradient: 'from-amber-50 to-orange-50',
    iconGradient: 'from-amber-400 to-orange-500',
    accentColor: 'bg-amber-500',
    imageAlt: 'デジタルパーマの施術風景',
  },
  {
    icon: Coffee,
    title: 'セルフスタイリングサポート',
    description:
      'ご自宅でも美しいスタイルを保てるよう、丁寧なアドバイスとアフターフォローをご提供。',
    gradient: 'from-emerald-50 to-green-50',
    iconGradient: 'from-emerald-400 to-green-500',
    accentColor: 'bg-emerald-500',
    imageAlt: 'スタイリング指導の様子',
  },
];

export const Feature = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-accent-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SectionTitle level="h2" align="center" showDivider={true}>
            4つの特徴
          </SectionTitle>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            41年の実績と経験に基づいた、お客様一人ひとりに寄り添うサービス
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl bg-gradient-to-br ${feature.gradient} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden border border-white/50`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  {/* 画像スペース（将来の写真用） */}
                  <div className="mb-6 relative">
                    <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <div className="text-center">
                        <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <span className="text-xs text-gray-500">写真予定</span>
                      </div>
                    </div>
                    {/* アイコンオーバーレイ */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${feature.iconGradient} rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl border-2 border-white`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-3 text-primary-900 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                  <div
                    className={`h-1 w-16 ${feature.accentColor} mx-auto mt-4 rounded-full transition-all duration-300 group-hover:w-20`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 写真追加予定の注記 */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
            ※ 各特徴の写真は今後追加予定です
          </p>
        </div>
      </div>
    </section>
  );
};
