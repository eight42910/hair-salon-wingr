import { Users, Heart, Sparkles, Coffee } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'ファミリーサロン',
    description:
      '3世代に愛され続ける安心のサロン。お子様からご年配の方まで、ご家族皆様でご利用いただけます。',
  },
  {
    icon: Heart,
    title: '頭皮改善',
    description:
      'CAC製品を使用したヘッドスパで頭皮環境を改善。健やかな髪の土台作りをサポートいたします。',
  },
  {
    icon: Sparkles,
    title: 'デジタルパーマ・縮毛矯正',
    description:
      'ユウコシステムの最新技術で、髪質に合わせた理想のスタイルを実現します。',
  },
  {
    icon: Coffee,
    title: 'セルフスタイリングサポート',
    description:
      'ご自宅でも美しいスタイルを保てるよう、丁寧なアドバイスとアフターフォローをご提供。',
  },
];

export const Feature = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">4つの特徴</h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            41年の実績と経験に基づいた、お客様一人ひとりに寄り添うサービス
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-accent-50 hover:bg-accent-100 transition-colors duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="heading-3 mb-3 text-lg">{feature.title}</h3>
                <p className="body-md text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
