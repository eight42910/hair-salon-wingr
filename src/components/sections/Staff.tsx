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
    imagePath: '/images/owner/stylist.jpg',
  },
];

export const Staff = () => {
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
          className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-secondary-100/20 to-accent-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
            transition: {
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-56 h-56 bg-gradient-to-br from-primary-100/20 to-secondary-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 270, 180, 90, 0],
            transition: {
              duration: 22,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 max-w-7xl relative">
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
                  className="flex-1 relative group"
                  variants={featureAnimations.image as unknown as Variants}
                >
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                    {/* ホバー背景 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <motion.div
                      className="absolute inset-4 bg-white rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        loading="lazy"
                        src={member.imagePath}
                        alt={member.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 
                          filter brightness-105 contrast-110 saturate-105"
                        width={800}
                        height={1000}
                        quality={70}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      />
                    </motion.div>

                    {/* 装飾要素 */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 shadow-lg"
                      variants={
                        featureAnimations.decoration as unknown as Variants
                      }
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 10, -10, 0],
                        transition: {
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }}
                    />
                    <motion.div
                      className="absolute bottom-3 right-3 w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300 shadow-lg"
                      variants={
                        featureAnimations.decoration as unknown as Variants
                      }
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
                      variants={
                        featureAnimations.decoration as unknown as Variants
                      }
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 0.8, 1],
                        transition: {
                          duration: 8,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: 2,
                        },
                      }}
                    />
                  </div>
                </motion.div>

                {/* 情報エリア */}
                <motion.div
                  className="flex-1 flex flex-col justify-center space-y-8 px-4 lg:px-8 relative"
                  variants={featureAnimations.text as unknown as Variants}
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
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full mr-2"
                          animate={{
                            scale: [1, 1.3, 1],
                            transition: {
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            },
                          }}
                        />
                        <p className="text-sm font-medium text-primary-600 uppercase tracking-widest">
                          {member.roleEn}
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
                        {member.name}
                      </motion.h3>
                      <motion.p
                        className="text-lg text-gray-600 font-medium"
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
                    <div className="inline-flex items-center bg-gradient-to-r from-primary-50 to-accent-50 px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-primary-800">
                        経験年数: {member.experience}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">
                        得意分野
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <motion.span
                            key={specialty}
                            className="bg-white border border-primary-200 text-primary-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: featureDelays.description + 0.1 * idx,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
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
                    <motion.div
                      className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary-400 to-accent-400 rounded-full shadow-sm "
                      initial={{ height: 0 }}
                      whileInView={{ height: '100%' }}
                      transition={{ duration: 1, delay: featureDelays.content }}
                      viewport={{ once: true }}
                    />
                    <div className="relative bg-gradient-to-br from-white via-primary-50/20 to-accent-50/10 p-6 rounded-lg shadow-sm overflow-hidden">
                      {/* 控えめな丸模様 */}
                      <motion.div
                        className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-accent-200/20 to-accent-300/20 rounded-full -translate-y-2 translate-x-1 max-sm:translate-x-0"
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

                      <h4 className="text-sm font-medium text-gray-900 mb-3">
                        メッセージ
                      </h4>
                      <motion.p
                        className="text-gray-700 leading-relaxed text-base font-light relative"
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
