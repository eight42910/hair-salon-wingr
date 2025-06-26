'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// 型定義をインポート
import type {
  MenuItem,
  MenuCategory as MenuCategoryType,
  MenuData,
  MenuItemProps,
  MenuCategoryProps,
} from '../../types/menu';

// SectionTitleをインポート

// シンプルなメニューデータ構造
const menuData: MenuData = {
  cut: {
    titleJa: 'カット',
    titleEn: 'Cut',
    color: 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200',
    description: '骨格に合わせた似合わせカット',
    items: [
      {
        name: 'レディースカット',
        description: 'シャンプー・ブロー込み',
        detailedDescription: '骨格と髪質に合わせた似合わせカット',
        price: '¥4,500',
        originalPrice: null,
        duration: '60分',
        popular: false,
        new: false,
        image: '/images/gallery/cut/cut-1.jpg',
      },
      {
        name: 'メンズカット',
        description: 'シャンプー・セット込み',
        detailedDescription: '',
        price: '¥3,500',
        originalPrice: null,
        duration: '45分',
        popular: false,
        new: false,
        image: '/images/gallery/cut/cut-2.jpg',
      },
      {
        name: 'お子様カット',
        description: '中学生以下',
        detailedDescription: '',
        price: '¥2,500',
        originalPrice: null,
        duration: '30分',
        popular: false,
        new: false,
        image: '/images/gallery/cut/cut-3.jpg',
      },
    ],
  },
  color: {
    titleJa: 'カラーリング',
    titleEn: 'Hair Color',
    color: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200',
    description: 'ダメージレスな美発色',
    items: [
      {
        name: '全体カラー',
        description: 'シャンプー・ブロー込み',
        detailedDescription: '髪に優しい薬剤で美しい発色を実現',
        price: '¥6,000',
        originalPrice: null,
        duration: '90分',
        popular: true,
        new: false,
        image: '/images/gallery/cut/cut-4.jpg',
      },
      {
        name: 'リタッチカラー',
        description: '根元のみ',
        detailedDescription: '',
        price: '¥4,500',
        originalPrice: null,
        duration: '60分',
        popular: false,
        new: false,
        image: '/images/gallery/cut/hair.jpg',
      },
      {
        name: 'ハイライト',
        description: '部分カラー',
        detailedDescription: '',
        price: '¥8,000',
        originalPrice: null,
        duration: '120分',
        popular: false,
        new: false,
        image: '/images/gallery/cut/cut-stand.jpg',
      },
    ],
  },
  treatment: {
    titleJa: 'ヘッドスパ・トリートメント',
    titleEn: 'Head Spa & Treatment',
    color: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
    description: '頭皮環境改善とリラクゼーション',
    items: [
      {
        name: 'ヘッドスパ',
        description: '頭皮ケア・リラクゼーション',
        detailedDescription: 'CAC製品を使用した本格ヘッドスパ',
        price: '¥3,000',
        originalPrice: null,
        duration: '30分',
        popular: false,
        new: false,
        image: '/images/gallery/wash-hair.jpg',
      },
      {
        name: 'トリートメント',
        description: '髪質改善',
        detailedDescription: '',
        price: '¥2,500',
        originalPrice: null,
        duration: '20分',
        popular: false,
        new: false,
        image: '/images/gallery/beauty-products.jpg',
      },
    ],
  },
  perm: {
    titleJa: 'パーマ・縮毛矯正',
    titleEn: 'Perm & Straightening',
    color: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
    description: '自然な仕上がりのスタイリング',
    items: [
      {
        name: 'コールドパーマ',
        description: 'カット・シャンプー・ブロー込み',
        detailedDescription: '自然な仕上がりのウェーブスタイル',
        price: '¥8,500',
        originalPrice: null,
        duration: '150分',
        popular: false,
        new: false,
        image: '/images/gallery/cut/cut-stand-2.jpg',
      },
      {
        name: 'デジタルパーマ',
        description: 'カット・シャンプー・ブロー込み',
        detailedDescription: '',
        price: '¥12,000',
        originalPrice: null,
        duration: '180分',
        popular: false,
        new: false,
        image: '/images/gallery/shampoo-stand.jpg',
      },
      {
        name: 'ストレートパーマ',
        description: '縮毛矯正',
        detailedDescription: '',
        price: '¥15,000',
        originalPrice: null,
        duration: '240分',
        popular: false,
        new: false,
        image: '/images/gallery/salon-gallery.jpg',
      },
    ],
  },
} as const;

// シンプルなメニューアイテムカード
const MenuItemCard = ({ item }: MenuItemProps) => {
  return (
    <div className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 text-sm mb-1">
              {item.name}
            </h3>
            <p className="text-xs text-gray-600">{item.description}</p>
          </div>
          <div className="text-right ml-4">
            <div className="font-medium text-gray-900 text-sm">
              {item.price}
            </div>
            <div className="text-xs text-gray-500">{item.duration}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// MenuCategory更新版（アイコンなし）
const MenuCategory = ({ category }: MenuCategoryProps) => {
  return (
    <motion.div
      className="mb-16 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* セクションタイトル：日本語メイン + 英語装飾 */}
      <div className="mb-8 relative">
        {/* 背景装飾 */}
        <motion.div
          className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary-100/20 to-accent-100/20 rounded-full blur-xl"
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

        <div className="relative">
          <motion.div
            className="inline-flex items-center mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
            <span className="text-xs text-primary-600 uppercase tracking-widest">
              {category.titleEn}
            </span>
          </motion.div>

          <motion.h2
            className="text-2xl font-bold text-primary-900 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {category.titleJa}
          </motion.h2>

          <motion.p
            className="text-sm text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {category.description}
          </motion.p>

          <motion.div
            className="w-24 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      {/* メニューアイテム */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {category.items.map((item: MenuItem, index: number) => (
          <motion.div
            key={index}
            className="relative overflow-hidden bg-white border border-gray-200 rounded-lg hover:border-primary-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* ホバー時のグラデーション背景 */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* 装飾的な背景要素 */}
            <motion.div
              className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-secondary-100/20 to-accent-100/20 rounded-full -translate-y-4 translate-x-4 group-hover:from-secondary-200/30 group-hover:to-accent-200/30 transition-all duration-300"
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

            <div className="relative p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-primary-900 transition-colors">
                    {item.name}
                    {item.popular && (
                      <motion.span
                        className="ml-2 inline-block bg-gradient-to-r from-primary-400 to-accent-400 text-white text-xs px-2 py-1 rounded-full"
                        animate={{
                          scale: [1, 1.05, 1],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                        }}
                      >
                        人気
                      </motion.span>
                    )}
                  </h3>
                  <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors">
                    {item.description}
                  </p>
                </div>
                <div className="text-right ml-4">
                  <div className="font-medium text-gray-900 text-sm group-hover:text-primary-900 transition-colors">
                    {item.price}
                  </div>
                  <div className="text-xs text-gray-500">{item.duration}</div>
                </div>
              </div>

              {/* 装飾的な要素 */}
              <motion.div
                className="absolute bottom-2 right-2 w-4 h-4 bg-gradient-to-br from-accent-300 to-accent-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

// メインのMenuContentコンポーネント（セクション用）
export default function MenuContent() {
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
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-100/20 to-blue-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-green-100/20 to-purple-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 270, 180, 90, 0],
            transition: {
              duration: 25,
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
            subTitle="Our Menu & Price"
            mainTitle="メニュー・料金"
            description="お客様のご要望にお応えする豊富なメニューをご用意しております"
            level="h2"
            align="center"
            showDivider={true}
          />
        </AnimatedSection>

        {/* メニューカテゴリ */}
        <motion.div
          className="space-y-16 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {Object.entries(menuData).map(([key, category], index) => (
            <MenuCategory key={key} category={category} />
          ))}
        </motion.div>

        {/* フッター情報 */}
        <motion.div
          className="mt-20 pt-8 border-t border-gray-200 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {/* 背景装飾 */}
          <motion.div
            className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent-100/20 to-primary-100/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
              transition: {
                duration: 18,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          />

          <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-600 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium text-gray-900 mb-2">料金について</h4>
              <ul className="space-y-1">
                <li>• 料金は税込価格です</li>
                <li>• 髪の長さや量により変動する場合があります</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium text-gray-900 mb-2">お支払い方法</h4>
              <ul className="space-y-1">
                <li>• 各種クレジットカード対応</li>
                <li>• 電子マネー・QR決済対応</li>
                <li>• 現金でのお支払いも可能</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium text-gray-900 mb-2">その他</h4>
              <ul className="space-y-1">
                <li>• 施術時間は目安です</li>
                <li>• ご不明な点はお気軽にお問い合わせください</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
