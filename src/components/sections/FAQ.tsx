'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const faqData: FAQItem[] = [
  {
    question: '予約は必要ですか？',
    answer:
      'はい、お席に限りがございますので、事前のご予約をお願いしております。お電話またはお問い合わせフォームからご予約いただけます。',
    category: '予約',
  },
  {
    question: '初回カウンセリングにはどのくらい時間がかかりますか？',
    answer:
      '初回のお客様には丁寧なカウンセリングを行うため、通常より30分程度お時間をいただいております。お客様の髪質やご希望を詳しくお伺いします。',
    category: '施術',
  },
  {
    question: 'カラーリングの色持ちはどのくらいですか？',
    answer:
      '髪質や色味にもよりますが、一般的に1〜2ヶ月程度です。色持ちを良くするため、カラー専用シャンプーの使用をおすすめしています。',
    category: '施術',
  },
  {
    question: 'パーマはどのくらい持ちますか？',
    answer:
      '髪質や生活習慣により個人差がありますが、3〜4ヶ月程度が目安です。適切なホームケアで長持ちさせることができます。',
    category: '施術',
  },
  {
    question: 'キャンセル料はかかりますか？',
    answer:
      '前日までのキャンセルは無料です。当日キャンセルの場合は、メニュー料金の50%をキャンセル料として頂戴いたします。',
    category: '予約',
  },
  {
    question: '支払い方法は何が使えますか？',
    answer:
      '現金、各種クレジットカード、QRコード決済（PayPay、LINE Pay等）がご利用いただけます。',
    category: 'その他',
  },
  {
    question: '駐車場はありますか？',
    answer:
      'はい、店舗前に3台分の駐車場をご用意しております。満車の場合は近隣のコインパーキングをご利用ください。',
    category: 'その他',
  },
  {
    question: '子供連れでも大丈夫ですか？',
    answer:
      'はい、お子様連れでのご来店も歓迎いたします。キッズスペースはございませんが、ベビーカーでの入店も可能です。',
    category: 'その他',
  },
];

interface FAQItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItemComponent = ({ faq, isOpen, onToggle }: FAQItemProps) => {
  return (
    <Card className="transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full text-left flex items-center justify-between p-0"
      >
        <div className="flex items-start gap-3 flex-1">
          <HelpCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
          <span className="font-medium text-gray-900 text-sm">
            {faq.question}
          </span>
        </div>
        <div className="ml-4">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="mt-3 pl-8">
          <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </Card>
  );
};

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTitle
            level="h2"
            align="center"
            showDivider={true}
            mainTitle="よくある質問"
            subTitle="Frequently Asked Questions"
          />
          <p className="text-gray-600 text-sm mt-4">
            お客様からよくいただくご質問をまとめました。
            その他ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItemComponent
              key={index}
              faq={faq}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm mb-6">
            他にもご質問がございましたら、お気軽にお問い合わせください。
          </p>
          <Link href="/contact">
            <Button
              variant="primary"
              size="lg"
              className="shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              お問い合わせはこちら
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
