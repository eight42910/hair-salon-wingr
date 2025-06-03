import { Metadata } from 'next';
import { Phone, Clock, MapPin, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'お問い合わせ・ご予約 | 美容室ウイング R',
  description:
    '美容室ウイング Rへのお問い合わせ・ご予約はこちら。お電話またはお問い合わせフォームからお気軽にご連絡ください。営業時間：平日9:00-19:00',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-accent-50">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-primary-50 to-accent-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 mb-6">お問い合わせ・ご予約</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              ご予約やお問い合わせは、お電話またはお問い合わせフォームから
              <br />
              お気軽にご連絡ください
            </p>
          </div>
        </div>
      </section>

      {/* お問い合わせ方法セクション */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 電話でのご予約 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-primary-700" />
                </div>
                <h2 className="heading-2 mb-4 text-primary-800">
                  お電話でのご予約
                </h2>
                <div className="mb-6">
                  <a
                    href="tel:058-123-4567"
                    className="text-3xl font-bold text-primary-700 hover:text-primary-900 transition-colors"
                  >
                    058-123-4567
                  </a>
                </div>

                <div className="space-y-4 text-left">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">受付時間</p>
                      <p className="text-sm text-gray-600">
                        営業時間内（下記参照）
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      営業時間
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>平日：9:00 - 19:00</p>
                      <p>土曜：9:00 - 18:00</p>
                      <p>日祝：9:00 - 17:00</p>
                      <p className="text-red-600 font-medium">
                        定休日：毎週火曜日、第3月曜日
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">
                      ご予約時のお願い
                    </h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• ご希望の日時をお聞かせください</li>
                      <li>• ご希望のメニューがあればお伝えください</li>
                      <li>• 初回の方は髪質やご要望をお聞かせください</li>
                      <li>• 変更・キャンセルはお早めにご連絡ください</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* お問い合わせフォーム */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-secondary-700" />
                </div>
                <h2 className="heading-2 mb-4 text-primary-800">
                  お問い合わせフォーム
                </h2>
                <p className="body-md text-gray-600">
                  24時間受付可能です
                  <br />
                  （返信は営業時間内に行います）
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      お名前（姓）<span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="山田"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      お名前（名）<span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="太郎"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    電話番号<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    お問い合わせ種別<span className="text-red-500 ml-1">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">選択してください</option>
                    <option value="reservation">ご予約</option>
                    <option value="menu">メニュー・料金について</option>
                    <option value="consultation">髪の悩み相談</option>
                    <option value="other">その他のお問い合わせ</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    お問い合わせ内容<span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="ご質問やご要望をお聞かせください"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-md font-medium hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  送信する
                </button>

                <p className="text-xs text-gray-500 text-center">
                  送信いただいた内容は、営業時間内にご返信いたします。
                  <br />
                  お急ぎの場合はお電話でのご連絡をお願いいたします。
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 店舗情報セクション */}
      <section className="bg-primary-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-primary-800">店舗情報</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="heading-3 mb-4 text-primary-800">基本情報</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">住所</p>
                    <p className="text-gray-600">
                      〒500-8234
                      <br />
                      岐阜県岐阜市芋島1-2-3 ウイングビル1F
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">電話番号</p>
                    <p className="text-gray-600">058-123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">営業時間</p>
                    <div className="text-gray-600 text-sm">
                      <p>平日：9:00 - 19:00</p>
                      <p>土曜：9:00 - 18:00</p>
                      <p>日祝：9:00 - 17:00</p>
                      <p className="text-red-600 font-medium mt-1">
                        定休日：毎週火曜日、第3月曜日
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="heading-3 mb-4 text-primary-800">アクセス</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">
                    🚗 お車でお越しの場合
                  </p>
                  <p>岐阜駅から約10分</p>
                  <p>専用駐車場5台完備（無料）</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-1">
                    🚌 バスでお越しの場合
                  </p>
                  <p>JR岐阜駅からバス約15分</p>
                  <p>「芋島」バス停下車、徒歩3分</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-1">
                    🚶 徒歩でお越しの場合
                  </p>
                  <p>JR岐阜駅から徒歩約25分</p>
                </div>
              </div>

              <div className="mt-6 bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-gray-600 font-medium">Google Mapsで確認</p>
                <p className="text-xs text-gray-500 mt-1">
                  （地図機能は今後実装予定）
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問セクション */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-primary-800">よくある質問</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Q. 予約は必要ですか？
              </h3>
              <p className="text-gray-600">
                A.
                ご予約優先制となっております。お待ちいただく場合がございますので、事前のご予約をおすすめいたします。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Q. 駐車場はありますか？
              </h3>
              <p className="text-gray-600">
                A.
                専用駐車場を5台分ご用意しております。満車の場合は近隣のコインパーキングをご利用ください。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Q. 子供連れでも大丈夫ですか？
              </h3>
              <p className="text-gray-600">
                A.
                もちろんです。お子様用のカットチェアもご用意しております。ご予約時にお子様連れの旨をお伝えください。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Q. 支払い方法は何が使えますか？
              </h3>
              <p className="text-gray-600">
                A.
                現金のほか、各種クレジットカード、電子マネーがご利用いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
