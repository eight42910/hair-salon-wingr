'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { featureAnimations, featureDelays } from '@/lib/animations';
import Image from 'next/image';
import { motion } from 'framer-motion';

// 特徴のデータ配列
const features = [
  {
    id: 1,
    titleJa: 'ファミリーサロン',
    titleEn: 'Family Salon',
    description:
      'ファミリー対応のサロン。お子様からご年配の方まで、それぞれのライフスタイルに合わせた施術をご提供。家族みんなで通える温かな空間で、美容を通じて笑顔をお届けします。',
    imagePath: '/images/gallery/cut/cut-1.jpg',
    imageAlt: 'ファミリーサロンでの施術風景',
  },
  {
    id: 2,
    titleJa: '頭皮環境改善ヘッドスパ',
    titleEn: 'Head Spa',
    description:
      'CAC製品を使用した本格ヘッドスパで頭皮環境を根本から改善。血行促進と毛穴の汚れを除去し、健やかな髪の成長をサポート。心地よいマッサージで日頃の疲れも癒やします。',
    imagePath: '/images/gallery/wash-hair.jpg',
    imageAlt: '頭皮改善ヘッドスパの施術風景',
  },
  {
    id: 3,
    titleJa: '自然な縮毛矯正',
    titleEn: 'Hair Straightening',
    description:
      '髪質に合わせた丁寧な縮毛矯正で、クセやうねりを自然にストレートに。ダメージを最小限に抑えながら、手触りの良いサラサラヘアを実現。毎朝のスタイリングが格段に楽になります。',
    imagePath: '/images/gallery/cut/cut-4.jpg',
    imageAlt: '縮毛矯正の施術風景',
  },
  {
    id: 4,
    titleJa: '41年の技術と経験',
    titleEn: 'Professional Technique',
    description:
      '1983年の創業から41年間で培った確かな技術に、最新のトレンドを融合。お客様一人ひとりの骨格や髪質を見極め、その方だけの美しさを引き出します。伝統と革新の技術で、理想のヘアスタイルを実現します。',
    imagePath: '/images/gallery/cut/cut-stand.jpg',
    imageAlt: '技術追求の施術風景',
  },
];

// Featureコンポーネントの定義
export const Feature = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* セクション全体の背景装飾 */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary-100/20 to-accent-100/20 rounded-full blur-3xl"
          animate={featureAnimations.backgroundDecor.clockwise}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-secondary-100/20 to-primary-100/20 rounded-full blur-3xl"
          animate={featureAnimations.backgroundDecor.counterClockwise}
        />
      </motion.div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* セクションタイトル */}
        <AnimatedSection delay={0.2}>
          <SectionTitle
            subTitle="Our Features"
            mainTitle="私たちの特徴"
            description="41年の歴史で培った技術と、お客様への想いをご紹介いたします"
            level="h2"
            align="center"
            showDivider={true}
          />
        </AnimatedSection>

        <motion.div
          className="space-y-32 mt-16"
          variants={featureAnimations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={feature.id}
                variants={featureAnimations.item}
                className={`flex flex-col lg:flex-row items-stretch gap-16 lg:gap-20 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* 画像エリア */}
                <motion.div
                  className="flex-1 relative group"
                  variants={featureAnimations.image}
                >
                  <div className="relative aspect-[5/4] bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <motion.div
                      className="absolute inset-4 bg-white rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        priority={index < 2}
                        src={feature.imagePath}
                        alt={feature.imageAlt}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      />
                    </motion.div>

                    {/* 装飾要素 */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 shadow-lg"
                      variants={featureAnimations.decoration}
                      animate={featureAnimations.floating}
                    />
                    <motion.div
                      className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300 shadow-lg"
                      variants={featureAnimations.decoration}
                      animate={{
                        x: [0, 5, -5, 0],
                        scale: [1, 1.05, 1],
                        transition: {
                          duration: 5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 1,
                        },
                      }}
                    />
                    <motion.div
                      className="absolute top-4 left-4 w-6 h-6 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                      variants={featureAnimations.decoration}
                      animate={{
                        ...featureAnimations.spinning,
                        scale: [1, 0.8, 1],
                        transition: {
                          duration: 8,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: 2,
                        },
                      }}
                    />
                    <motion.div
                      className="absolute top-1/2 right-4 w-4 h-4 bg-gradient-to-br from-primary-300 to-accent-300 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                      variants={featureAnimations.decoration}
                      animate={{
                        y: [0, -8, 8, 0],
                        opacity: [0.2, 0.5, 0.2],
                        transition: {
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 3,
                        },
                      }}
                    />
                  </div>
                </motion.div>

                {/* テキストエリア */}
                <motion.div
                  className="flex-1 flex flex-col justify-center space-y-8 px-4 lg:px-8 relative"
                  variants={featureAnimations.text}
                >
                  {/* 背景装飾 */}
                  <motion.div
                    className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-secondary-100/10 to-accent-100/10 rounded-full blur-2xl pointer-events-none"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360],
                      transition: {
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                    }}
                  />

                  <motion.div
                    className="space-y-4 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: featureDelays.title }}
                    viewport={{ once: true }}
                  >
                    <div className="space-y-2">
                      <motion.div
                        className="inline-flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: featureDelays.subtitle,
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full mr-2"
                          animate={featureAnimations.pulsing}
                        />
                        <p className="text-sm font-medium text-primary-600 uppercase tracking-widest">
                          {feature.titleEn}
                        </p>
                      </motion.div>
                      <motion.h3
                        className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: featureDelays.mainTitle,
                        }}
                        viewport={{ once: true }}
                      >
                        {feature.titleJa}
                      </motion.h3>
                    </div>
                  </motion.div>

                  {/* 説明文 */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: featureDelays.description,
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary-400 to-accent-400 rounded-full shadow-sm"
                      {...featureAnimations.lineGrow}
                      viewport={{ once: true }}
                    />
                    <motion.div
                      className="relative bg-gradient-to-br from-white via-primary-50/20 to-accent-50/10 p-6 rounded-lg shadow-sm overflow-hidden"
                      whileHover={featureAnimations.hover}
                    >
                      {/* 控えめな丸模様 */}
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent-200/20 to-accent-300/20 rounded-full -translate-y-4 translate-x-4"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 0.9, 1],
                          transition: {
                            duration: 12,
                            repeat: Infinity,
                            ease: 'linear',
                          },
                        }}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-primary-200/15 to-primary-300/15 rounded-full translate-y-2 -translate-x-2"
                        animate={{
                          rotate: [360, 0],
                          scale: [1, 1.1, 1],
                          transition: {
                            duration: 10,
                            repeat: Infinity,
                            ease: 'linear',
                          },
                        }}
                      />

                      <motion.p
                        className="text-gray-700 leading-relaxed text-lg font-light relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: featureDelays.content,
                        }}
                        viewport={{ once: true }}
                      >
                        {feature.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
