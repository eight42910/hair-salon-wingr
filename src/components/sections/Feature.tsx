import { Users, Heart, Sparkles, Coffee } from 'lucide-react';
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
  },
  {
    icon: Heart,
    title: '頭皮改善',
    description:
      'CAC製品を使用したヘッドスパで頭皮環境を改善。健やかな髪の土台作りをサポートいたします。',
    gradient: 'from-blue-50 to-indigo-50',
    iconGradient: 'from-blue-400 to-indigo-500',
    accentColor: 'bg-blue-500',
  },
  {
    icon: Sparkles,
    title: 'デジタルパーマ・縮毛矯正',
    description:
      'ユウコシステムの最新技術で、髪質に合わせた理想のスタイルを実現します。',
    gradient: 'from-amber-50 to-orange-50',
    iconGradient: 'from-amber-400 to-orange-500',
    accentColor: 'bg-amber-500',
  },
  {
    icon: Coffee,
    title: 'セルフスタイリングサポート',
    description:
      'ご自宅でも美しいスタイルを保てるよう、丁寧なアドバイスとアフターフォローをご提供。',
    gradient: 'from-emerald-50 to-green-50',
    iconGradient: 'from-emerald-400 to-green-500',
    accentColor: 'bg-emerald-500',
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
                className={`text-center p-6 rounded-lg bg-gradient-to-br ${feature.gradient} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.iconGradient} rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-primary-900 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
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
      </div>
    </section>
  );
};
