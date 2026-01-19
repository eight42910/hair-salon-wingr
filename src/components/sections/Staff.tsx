'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { featureAnimations, featureDelays } from '@/lib/animations';
import { Variants } from 'framer-motion';

const staff = [
  {
    id: 1,
    name: '村瀬 律子',
    nameEn: 'Ritsuko Murase',
    role: 'オーナー・トップスタイリスト',
    roleEn: 'Owner & Top Stylist',
    experience: '41年',
    specialties: ['カット', '頭皮ケア', 'パーマ'],
    message:
      '創業から41年、お客様との信頼関係を一番大切にしています。技術の向上はもちろん、お客様が安心してくつろげる空間づくりを心がけています。',
    imagePath: '/images/owner/owner-01.jpg',
  },
];

export const Staff = () => {
  return (
    <section className="py-16 sm:py-20 bg-bg relative">
      <div className="absolute inset-0 bg-surface2/60" />

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* セクションタイトル */}
        <AnimatedSection delay={0.2}>
          <SectionTitle
            subTitle="Our Professional Staff"
            mainTitle="スタッフ紹介"
            description="経験豊富なスタッフが、お客様一人ひとりに寄り添った施術をご提供いたします"
            level="h2"
            align="center"
            showDivider={true}
          />
        </AnimatedSection>

        <motion.div
          className="space-y-32 mt-16"
          variants={featureAnimations.container as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {staff.map((member, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={member.id}
                variants={featureAnimations.item as unknown as Variants}
                className={`flex flex-col lg:flex-row items-stretch gap-16 lg:gap-20 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* 写真エリア */}
                <motion.div
                  className="w-full lg:w-1/2 lg:max-w-lg relative group"
                  variants={featureAnimations.image as unknown as Variants}
                >
                  <div className="relative aspect-[5/4] bg-surface rounded-2xl overflow-hidden shadow-sm border border-border">
                    <div className="absolute inset-3 bg-surface rounded-xl overflow-hidden">
                      <Image
                        loading="lazy"
                        src={member.imagePath}
                        alt={member.name}
                        className="object-cover w-full h-full"
                        width={600}
                        height={600}
                        quality={70}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* 情報エリア */}
                <motion.div
                  className="flex-1 flex flex-col justify-center space-y-8 px-4 lg:px-8 relative"
                  variants={featureAnimations.text as unknown as Variants}
                >
                  <motion.div
                    className="space-y-4 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: featureDelays.title }}
                    viewport={{ once: true }}
                  >
                    {/* 名前とポジション */}
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
                        <div className="w-2 h-2 bg-accent2 rounded-full mr-2" />
                        <p className="text-sm font-medium text-accent2 uppercase tracking-widest">
                          {member.roleEn}
                        </p>
                      </motion.div>
                      <motion.h3
                        className="text-2xl lg:text-3xl font-semibold text-text leading-tight font-serif"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: featureDelays.mainTitle,
                        }}
                        viewport={{ once: true }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p
                        className="text-lg text-muted font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: featureDelays.mainTitle + 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        {member.role}
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* 経験年数と得意分野 */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: featureDelays.description,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-flex items-center bg-surface2 px-4 py-2 rounded-full border border-border">
                      <span className="text-sm font-medium text-text">
                        経験年数: {member.experience}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-text mb-3">
                        得意分野
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <motion.span
                            key={specialty}
                            className="bg-surface border border-border text-accent px-3 py-1 rounded-full text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: featureDelays.description + 0.1 * idx,
                            }}
                            viewport={{ once: true }}
                          >
                            {specialty}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* メッセージ */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: featureDelays.description + 0.2,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="relative bg-surface p-6 rounded-lg shadow-sm border border-border overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-1 bg-accent2" />
                      <h4 className="text-sm font-medium text-text mb-3">
                        メッセージ
                      </h4>
                      <motion.p
                        className="text-muted leading-relaxed text-base font-light relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: featureDelays.content + 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        {member.message}
                      </motion.p>
                    </div>
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
