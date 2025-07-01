'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// 型定義をインポート
import type { MenuData, MenuCategoryProps } from '../../types/menu';

// 新しいメニューデータ構造
const menuData: MenuData = {
  cut: {
    titleJa: 'カット',
    titleEn: 'Cut',
    color: 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200',
    description: 'シャンプー・ブロー込み',
    items: [
      {
        name: 'レディース・メンズ（大人）',
        description: 'Sサイズ〜Lサイズ',
        detailedDescription: '髪の長さや量に応じて料金が変動します',
        price: '¥4,290 〜 ¥4,620',
        originalPrice: null,
        duration: '60分',
        popular: true,
        new: false,
        image: '/images/gallery/cut/cut-1.jpg',
      },
      {
        name: '高校生',
        description: '',
        detailedDescription: '',
        price: '¥3,520',
        originalPrice: null,
        duration: '45分',
        popular: false,
        new: false,
        image: '/images/gallery/cut/cut-2.jpg',
      },
      {
        name: '中学生',
        description: '',
        detailedDescription: '',
        price: '¥3,300',
        originalPrice: null,
        duration: '45分',
        popular: false,
        new: false,
        image: '/images/gallery/cut/cut-3.jpg',
      },
      {
        name: '小学生以下',
        description: '',
        detailedDescription: '',
        price: '¥2,750',
        originalPrice: null,
        duration: '30分',
        popular: false,
        new: false,
        image: '/images/gallery/cut/cut-4.jpg',
      },
    ],
  },
  color: {
    titleJa: 'カラー',
    titleEn: 'Hair Color',
    color: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200',
    description: 'カラー / マニキュア / ヘナ',
    items: [
      {
        name: 'カラー / マニキュア（ショート）',
        description: '',
        detailedDescription: '',
        price: '¥6,050',
        originalPrice: null,
        duration: '90分',
        popular: true,
        new: false,
        image: '/images/gallery/cut/hair.jpg',
      },
      {
        name: 'カラー / マニキュア（ミディアム）',
        description: '',
        detailedDescription: '',
        price: '¥6,600',
        originalPrice: null,
        duration: '100分',
        popular: false,
        new: false,
        image: '/images/gallery/cut/cut-stand.jpg',
      },
      {
        name: 'カラー / マニキュア（ロング）',
        description: '',
        detailedDescription: '',
        price: '¥7,150',
        originalPrice: null,
        duration: '120分',
        popular: false,
        new: false,
        image: '/images/gallery/cut/cut-stand-2.jpg',
      },
      {
        name: 'ヘナ（ショート）',
        description: '天然ヘナ使用',
        detailedDescription: '',
        price: '¥6,600〜',
        originalPrice: null,
        duration: '120分',
        popular: false,
        new: false,
        image: '/images/gallery/beauty-products.jpg',
      },
      {
        name: 'カットとのセット',
        description: 'カラーメニューと同時にカットする場合',
        detailedDescription: '',
        price: '+ ¥2,200',
        originalPrice: null,
        duration: '',
        popular: false,
        new: false,
        image: '/images/gallery/salon-gallery.jpg',
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
        name: 'パーマ（CAC細胞活性パーマ）',
        description: '髪に優しい細胞活性パーマ',
        detailedDescription: '',
        price: '¥8,800〜',
        originalPrice: null,
        duration: '120分',
        popular: false,
        new: false,
        image: '/images/gallery/cut/cut-stand-2.jpg',
      },
      {
        name: 'デジタルパーマ',
        description: '持ちが良いと評判',
        detailedDescription: '約2.5〜3時間の施術時間',
        price: '¥13,200',
        originalPrice: null,
        duration: '2.5〜3時間',
        popular: true,
        new: false,
        image: '/images/gallery/shampoo-stand.jpg',
      },
      {
        name: '縮毛矯正（YUKOシステム）',
        description: '約3時間の施術',
        detailedDescription: '',
        price: '¥15,400 〜 ¥17,600',
        originalPrice: null,
        duration: '3時間',
        popular: false,
        new: false,
        image: '/images/gallery/salon-gallery.jpg',
      },
    ],
  },
  options: {
    titleJa: 'その他 オプションメニュー',
    titleEn: 'Optional Menu',
    color: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
    description: '頭皮ケアとリラクゼーション',
    items: [
      {
        name: 'ヘッドスパ',
        description: 'シャンプーに追加するオプション',
        detailedDescription: '',
        price: '+ ¥550',
        originalPrice: null,
        duration: '10分',
        popular: false,
        new: false,
        image: '/images/gallery/wash-hair.jpg',
      },
      {
        name: 'ヘッドスパ + ドレナージュ セット',
        description: '頭皮リンパマッサージ',
        detailedDescription: '',
        price: '¥2,750',
        originalPrice: null,
        duration: '30分',
        popular: true,
        new: false,
        image: '/images/gallery/wash-hair.jpg',
      },
      {
        name: 'トリートメント（ヘアパック）',
        description: '髪質改善',
        detailedDescription: '',
        price: '¥2,750',
        originalPrice: null,
        duration: '20分',
        popular: false,
        new: false,
        image: '/images/gallery/beauty-products.jpg',
      },
    ],
  },
} as const;

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
        {category.items.map((item, itemIndex) => (
          <motion.div
            key={`${category.titleEn}-${itemIndex}`}
            className="relative overflow-hidden bg-white border border-gray-200 rounded-lg hover:border-primary-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + itemIndex * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* ホバー時のグラデーション背景 */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* 装飾的な背景要素 */}
            <motion.div
              className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-secondary-100/20 to-accent-100/20 rounded-full -translate-y-2 translate-x-1 max-sm:translate-x-0 group-hover:from-secondary-200/30 group-hover:to-accent-200/30 transition-all duration-300"
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
          {Object.entries(menuData).map(([key, category]) => (
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
                <li>• 記載の料金はすべて税込みです</li>
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
                <li>• 現金</li>
                <li>• 各種クレジットカード</li>
                <li>• 電子マネー・QR決済対応</li>
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
