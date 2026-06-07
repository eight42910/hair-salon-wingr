import { SectionTitle } from '@/components/ui/SectionTitle';
import Image from 'next/image';

// 特徴のデータ配列
const features = [
  {
    id: 1,
    titleJa: 'ファミリーサロン',
    titleEn: 'Family Salon',
    description:
      'ファミリー対応のサロン。お子様からご年配の方まで、それぞれのライフスタイルに合わせた施術をご提供。家族みんなで通える温かな空間で、美容を通じて笑顔をお届けします。',
    imagePath: '/images/wingr/service-family-salon.jpg',
    imageAlt: '家族で通える美容室ウイング Rのカット施術風景',
  },
  {
    id: 2,
    titleJa: '頭皮改善ヘッドケア',
    titleEn: 'Head Spa',
    description:
      'CAC製品を使用した本格ヘッドスパで頭皮環境を根本から改善。血行促進と毛穴の汚れを除去し、健やかな髪の成長をサポート。心地よいマッサージで日頃の疲れも癒やします。',
    imagePath: '/images/wingr/service-head-care.jpg',
    imageAlt: '美容室ウイング Rの頭皮改善ヘッドケア施術',
  },
  {
    id: 3,
    titleJa: 'リペア・縮毛矯正',
    titleEn: 'Hair Straightening',
    description:
      '髪質に合わせた丁寧な縮毛矯正で、クセやうねりを自然にストレートに。ダメージを最小限に抑えながら、手触りの良いサラサラヘアを実現。毎朝のスタイリングが格段に楽になります。',
    imagePath: '/images/wingr/service-straight-repair.jpg',
    imageAlt: '美容室ウイング Rの縮毛矯正後の自然なストレートヘア',
  },
  {
    id: 4,
    titleJa: '41年の技術と経験',
    titleEn: 'Professional Technique',
    description:
      '1983年の創業から41年間で培った確かな技術に、最新のトレンドを融合。お客様一人ひとりの骨格や髪質を見極め、その方だけの美しさを引き出します。伝統と革新の技術で、理想のヘアスタイルを実現します。',
    imagePath: '/images/wingr/local-seo-staff-work.jpg',
    imageAlt: '美容室ウイング Rのオーナースタイリストによる施術風景',
  },
];

// Featureコンポーネントの定義
export const Feature = () => {
  return (
    <section className="py-16 sm:py-20 bg-bg relative">
      <div className="absolute inset-0 bg-surface2/60" />

      <div className="container mx-auto px-4 max-w-6xl relative">
        <SectionTitle
          subTitle="Our Features"
          mainTitle="私たちの特徴"
          description="41年の歴史で培った技術と、お客様への想いをご紹介いたします"
          level="h2"
          align="center"
          showDivider={true}
        />

        <div className="space-y-32 mt-16">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={feature.id}
                className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-16 lg:gap-20"
              >
                {/* テキストエリア - モバイルで最初に表示 */}
                <div
                  className={`flex flex-col justify-center space-y-8 px-4 lg:px-8 relative order-1 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-4 relative">
                    <div className="space-y-2">
                      <div className="inline-flex items-center">
                        <div className="w-2 h-2 bg-accent2 rounded-full mr-2" />
                        <p className="text-sm font-medium text-accent2 uppercase tracking-widest">
                          {feature.titleEn}
                        </p>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-semibold text-text leading-tight font-serif">
                        {feature.titleJa}
                      </h3>
                    </div>

                    <p className="text-muted leading-relaxed text-base lg:text-lg">
                      {feature.description}
                    </p>

                    <div className="flex items-center space-x-4 pt-4">
                      <div className="w-16 h-px bg-accent2 rounded-full" />
                      <div className="w-2 h-2 bg-accent2 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* 画像エリア - モバイルで2番目に表示 */}
                <div
                  className={`relative group order-2 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative aspect-[5/4] bg-surface rounded-2xl overflow-hidden shadow-sm border border-border">
                    <div className="absolute inset-3 bg-surface rounded-xl overflow-hidden">
                      <Image
                        loading="lazy"
                        src={feature.imagePath}
                        alt={feature.imageAlt}
                        className="object-cover w-full h-full"
                        width={800}
                        height={600}
                        quality={70}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
