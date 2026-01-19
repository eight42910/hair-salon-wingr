'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  category?: string;
}

const faqData: FAQItem[] = [
  {
    question: '予約は必要ですか？',
    answer: (
      <>
        はい、事前のご予約をお願いしております。
        <Link
          href="/#access"
          className="text-accent hover:underline font-medium"
        >
          お電話またはLINEでのご予約
        </Link>
        が可能です。
      </>
    ),
    category: '予約',
  },
  {
    question: '支払い方法は何がありますか？',
    answer:
      '現金のほか、各種クレジットカード、電子マネー、QRコード決済に対応しております。',
    category: 'その他',
  },
  {
    question: '駐車場はありますか？',
    answer: (
      <>
        店舗前に6台分の駐車スペースがございます。詳細は
        <Link
          href="/#access"
          className="text-accent hover:underline font-medium"
        >
          アクセスマップ
        </Link>
        をご確認ください。
      </>
    ),
    category: 'その他',
  },
  {
    question: 'キャンセル料はかかりますか？',
    answer:
      '前日までのキャンセルは無料です。当日のキャンセルは基本的にご遠慮いただいておりますが、キャンセル料は頂戴しておりません。',
    category: '予約',
  },
  {
    question: 'カラーはどのくらい持ちますか？',
    answer:
      '髪質や色味にもよりますが、当店で使用している薬剤は持ちが良いと評判です。一般的には1〜2ヶ月程度です。',
    category: '施術',
  },
  {
    question: 'パーマはどのくらい持ちますか？',
    answer:
      '髪質や普段のお手入れによって個人差があります。特にデジタルパーマは持ちが良いとお客様からご好評いただいております。',
    category: '施術',
  },
];

interface FAQItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItemComponent = ({ faq, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="relative overflow-hidden transition-colors duration-200">
      <div
        className={`bg-surface/90 rounded-xl border border-border/60 transition-colors duration-200 ${
          isOpen ? 'border-accent2' : 'hover:border-accent2'
        }`}
      >
        <div className="relative p-6">
          <button
            onClick={onToggle}
            className="w-full text-left flex items-center justify-between"
          >
            <div className="flex items-start gap-3 flex-1">
              <div className="w-8 h-8 bg-accent2 rounded-lg flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-text text-sm">
                {faq.question}
              </span>
            </div>
            <div className="ml-4">
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-accent2" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted transition-colors" />
              )}
            </div>
          </button>

          {isOpen && (
            <div className="mt-3 pl-11">
              <div className="text-muted text-sm leading-relaxed">
                {faq.answer}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
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
    <section className="relative py-16 sm:py-20 bg-bg">
      <div className="absolute inset-0 bg-surface2/60" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <SectionTitle
            level="h2"
            align="center"
            showDivider={true}
            mainTitle="よくある質問"
            subTitle="Frequently Asked Questions"
          />
          <p className="text-muted text-sm mt-4">
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
          <p className="text-muted text-sm mb-6">
            他にもご質問がございましたら、お気軽にお問い合わせください。
          </p>
          <Link href="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-primary-700 text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-md"
            >
              お問い合わせはこちら
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
