import { Users, Heart, Sparkles, Coffee } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import Image from 'next/image';

const features = [
  {
    icon: Users,
    title: '技術',
    subtitle: '技術',
    description:
      '伸びてきても気にならないグラデーションカラー、骨格に合わせたカット&パーマなど、時間が経ってもきれいに素敵でいられる再現性の高い技術にこだわっています。',
    imagePath: '/images/gallery/cut/cut-1.jpg',
    imageAlt: '技術の様子',
  },
  {
    icon: Heart,
    title: '頭皮改善',
    subtitle: '頭皮改善',
    description:
      'CAC製品を使用したヘッドスパで頭皮環境を改善。健やかな髪の土台作りをサポートし、リラクゼーション効果も提供いたします。',
    imagePath: '/images/gallery/wash-hair.jpg',
    imageAlt: '頭皮改善ヘッドスパの施術風景',
  },
  {
    icon: Sparkles,
    title: 'カラートリートメント',
    subtitle: 'カラーメイドトリートメント',
    description:
      '髪の内部から補修し、カラーの持ちを良くするトリートメント。髪質改善と美しい発色を同時に実現します。',
    imagePath: '/images/gallery/cut/cut-4.jpg',
    imageAlt: 'カラーメイドトリートメントの様子',
  },
  {
    icon: Coffee,
    title: 'プライベート空間',
    subtitle: 'プライベート空間',
    description:
      'ゆったりとした個室感覚の空間で、お客様だけの特別な時間をお過ごしいただけます。リラックスして施術を受けていただけます。',
    imagePath: '/images/gallery/cut/cut-stand.jpg',
    imageAlt: 'プライベート空間の様子',
  },
];

export const Feature = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle
            level="h2"
            align="center"
            showDivider={true}
            mainTitle="私たちの特徴"
            subTitle="Our Four Features"
          />
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* 画像エリア */}
                <div className="flex-1 relative">
                  <div className="relative aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                    <Image
                      src={feature.imagePath}
                      alt={feature.imageAlt}
                      className="object-cover"
                      width={800}
                      height={600}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* テキストエリア */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1 tracking-wider">
                      {feature.title}
                    </h3>
                    <h4 className="text-base text-primary-600 uppercase tracking-wide mb-4 font-medium">
                      {feature.titleEn || feature.subtitle}
                    </h4>
                    <div className="w-16 h-0.5 bg-gray-400 mb-6"></div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
