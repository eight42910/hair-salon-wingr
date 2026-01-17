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
        <div className="relative">
          <motion.div
            className="inline-flex items-center mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-accent2 rounded-full mr-2" />
            <span className="text-xs text-accent2 uppercase tracking-widest">
              {category.titleEn}
            </span>
          </motion.div>

          <motion.h2
            className="text-2xl font-semibold text-text mb-3 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {category.titleJa}
          </motion.h2>

          <motion.p
            className="text-sm text-muted mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {category.description}
          </motion.p>

          <motion.div
            className="w-24 h-px bg-accent2 rounded-full"
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
            className="relative overflow-hidden bg-surface border border-border rounded-xl hover:border-accent2 transition-colors duration-200 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + itemIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className="font-medium text-text text-sm mb-1">
                    {item.name}
                    {item.popular && (
                      <motion.span
                        className="ml-2 inline-block bg-accent2 text-white text-xs px-2 py-1 rounded-full"
                      >
                        人気
                      </motion.span>
                    )}
                  </h3>
                  <p className="text-xs text-muted">
                    {item.description}
                  </p>
                </div>
                <div className="text-right ml-4">
                  <div className="font-medium text-text text-sm">
                    {item.price}
                  </div>
                  <div className="text-xs text-muted">{item.duration}</div>
                </div>
              </div>
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
    <section className="py-16 sm:py-20 bg-bg relative">
      <div className="absolute inset-0 bg-surface2/50" />

      <div className="container mx-auto px-4 max-w-6xl relative">
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
          className="mt-20 pt-8 border-t border-border relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-sm text-muted relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium text-text mb-2">料金について</h4>
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
              <h4 className="font-medium text-text mb-2">お支払い方法</h4>
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
              <h4 className="font-medium text-text mb-2">その他</h4>
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
