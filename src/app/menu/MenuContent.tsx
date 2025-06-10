'use client';

import Image from 'next/image';
import { Scissors, Palette, Waves, Sparkles, Clock } from 'lucide-react';
import { useState } from 'react';

// 型定義をインポート
import type {
  MenuItem,
  MenuCategory as MenuCategoryType,
  MenuData,
  MenuItemProps,
  MenuCategoryProps,
} from '../../types/menu';

// SectionTitleをインポート
import { SectionTitle } from '../../components/ui/SectionTitle';

// シンプルなメニューデータ構造
const menuData: MenuData = {
  cut: {
    title: 'Cut',
    icon: Scissors,
    color: 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200',
    description: '',
    items: [
      {
        name: 'レディースカット',
        description: 'シャンプー・ブロー込み',
        detailedDescription: '',
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
    title: 'Color',
    icon: Palette,
    color: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200',
    description: '',
    items: [
      {
        name: '全体カラー',
        description: 'シャンプー・ブロー込み',
        detailedDescription: '',
        price: '¥6,000',
        originalPrice: null,
        duration: '90分',
        popular: false,
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
    title: 'Treatment',
    icon: Sparkles,
    color: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
    description: '',
    items: [
      {
        name: 'ヘッドスパ',
        description: '頭皮ケア・リラクゼーション',
        detailedDescription: '',
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
    title: 'Perm',
    icon: Waves,
    color: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
    description: '',
    items: [
      {
        name: 'コールドパーマ',
        description: 'カット・シャンプー・ブロー込み',
        detailedDescription: '',
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

// カテゴリセクション
const MenuCategory = ({
  category,
  isLast,
}: MenuCategoryProps & { isLast?: boolean }) => {
  return (
    <div className={`${!isLast ? 'mb-12' : ''}`}>
      {/* SectionTitleコンポーネントを使用 */}
      <SectionTitle level="h2" align="left" showDivider={true}>
        {category.title}
      </SectionTitle>

      {/* メニューアイテム - 2カラムレイアウト */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {category.items.map((item: MenuItem, index: number) => (
          <MenuItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default function MenuContent() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              level="h1"
              align="center"
              showDivider={true}
              mainTitle="メニュー・料金"
              subTitle="Menu & Price"
            />

            {/* メニューカテゴリ */}
            <div className="space-y-0">
              {Object.entries(menuData).map(([key, category], index) => (
                <MenuCategory
                  key={key}
                  category={category}
                  isLast={index === Object.entries(menuData).length - 1}
                />
              ))}
            </div>

            {/* フッター情報 */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-600">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    料金について
                  </h4>
                  <ul className="space-y-1">
                    <li>• 料金は税込価格です</li>
                    <li>• 髪の長さや量により変動する場合があります</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    お支払い方法
                  </h4>
                  <ul className="space-y-1">
                    <li>• 各種クレジットカード対応</li>
                    <li>• 電子マネー・QR決済対応</li>
                    <li>• 現金でのお支払いも可能</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">その他</h4>
                  <ul className="space-y-1">
                    <li>• 施術時間は目安です</li>
                    <li>• ご不明な点はお気軽にお問い合わせください</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
