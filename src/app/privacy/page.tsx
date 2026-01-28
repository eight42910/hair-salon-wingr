import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 美容室ウイング R',
  description:
    '美容室ウイング Rのプライバシーポリシーです。お客様の個人情報の取り扱いについて詳しく説明しています。',
  keywords: 'プライバシーポリシー,個人情報保護,美容室,岐阜,ウイングR',
  openGraph: {
    title: 'プライバシーポリシー | 美容室ウイング R',
    description: 'お客様の個人情報の取り扱いについて',
    locale: 'ja_JP',
  },
};

export default function PrivacyPage() {
  return (
    <PageLayout
      titleJa="プライバシーポリシー"
      titleEn="Privacy Policy"
      description="お客様の個人情報の取り扱いについて詳しく説明しています"
    >
      <div className="min-h-screen bg-bg">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* 更新日 */}
            <div className="text-center mb-12">
              <p className="text-lg text-muted">最終更新日：2025年7月22日</p>
            </div>

            {/* プライバシーポリシー内容 */}
            <div className="bg-surface rounded-2xl shadow-sm border border-border p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-text mb-4 font-serif">
                  1. 基本方針
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  美容室ウイング
                  R（以下「当店」）は、お客様の個人情報の重要性を認識し、適切な収集、利用、管理を行うことが社会的責務であると考えています。
                </p>
                <p className="text-text leading-relaxed">
                  当店は、個人情報保護法を遵守し、お客様の個人情報を適切に取り扱います。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4 font-serif">
                  2. 収集する個人情報
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-2">
                      お客様から直接収集する情報
                    </h3>
                    <ul className="list-disc list-inside text-text space-y-1 ml-4">
                      <li>お名前</li>
                      <li>電話番号</li>
                      <li>メールアドレス</li>
                      <li>ご住所</li>
                      <li>生年月日</li>
                      <li>ご来店履歴</li>
                      <li>施術内容・ご要望</li>
                      <li>アレルギー・体調に関する情報</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-2">
                      自動的に収集される情報
                    </h3>
                    <ul className="list-disc list-inside text-text space-y-1 ml-4">
                      <li>IPアドレス</li>
                      <li>ブラウザ情報</li>
                      <li>アクセス日時</li>
                      <li>閲覧ページ</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4 font-serif">
                  3. 個人情報の利用目的
                </h2>
                <ul className="list-disc list-inside text-text space-y-2 ml-4">
                  <li>ご予約の受付・管理</li>
                  <li>施術の提供・品質向上</li>
                  <li>お客様への連絡・サポート</li>
                  <li>サービス改善のための分析</li>
                  <li>安全性の確保</li>
                  <li>法令に基づく対応</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4 font-serif">
                  4. 個人情報の管理
                </h2>
                <div className="space-y-4">
                  <p className="text-text leading-relaxed">
                    当店は、お客様の個人情報を適切に管理し、以下の措置を講じています。
                  </p>
                  <ul className="list-disc list-inside text-text space-y-2 ml-4">
                    <li>
                      個人情報への不正アクセス、紛失、漏洩、改ざん、破壊を防ぐための適切なセキュリティ対策の実施
                    </li>
                    <li>個人情報を取り扱う従業員への教育・監督の徹底</li>
                    <li>個人情報の取り扱いを委託する場合の適切な監督</li>
                    <li>
                      個人情報の利用目的の達成に必要な期間を超えた個人情報の削除
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4 font-serif">
                  5. 個人情報の第三者提供
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  当店は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません。
                </p>
                <ul className="list-disc list-inside text-text space-y-2 ml-4">
                  <li>お客様の事前の同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体、財産の保護のために必要な場合</li>
                  <li>
                    公衆衛生の向上または児童の健全な育成の推進のために特に必要な場合
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4 font-serif">
                  6. お客様の権利
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  お客様は、当店が保有するお客様の個人情報について、以下の権利を有します。
                </p>
                <ul className="list-disc list-inside text-text space-y-2 ml-4">
                  <li>個人情報の開示請求</li>
                  <li>個人情報の訂正・追加・削除請求</li>
                  <li>個人情報の利用停止・消去請求</li>
                  <li>個人情報の第三者提供の停止請求</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4 font-serif">
                  7. お問い合わせ
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  個人情報の取り扱いに関するお問い合わせは、以下の窓口までお願いいたします。
                </p>
                <div className="bg-surface2 rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    美容室ウイング R 個人情報保護担当
                  </h3>
                  <div className="space-y-2 text-text">
                    <p>住所：岐阜県岐阜市加野2-25-8</p>
                    <p>
                      電話：
                      <a
                        href="tel:058-241-3375"
                        className="text-accent hover:text-primary-700"
                      >
                        058-241-3375
                      </a>
                    </p>
                    <p>受付時間：9:00-18:00（定休日：月曜・第2火曜・第3日曜）</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4 font-serif">
                  8. プライバシーポリシーの変更
                </h2>
                <p className="text-text leading-relaxed">
                  当店は、必要に応じてこのプライバシーポリシーを変更することがあります。重要な変更がある場合は、当店のウェブサイトでお知らせいたします。
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
 
