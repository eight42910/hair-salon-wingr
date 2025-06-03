import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ご予約 | 美容室ウイング R',
  description:
    '美容室ウイング R のご予約フォーム。お電話でのご予約も承っております。',
};

export default function BookingPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* ページヘッダー */}
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">ご予約</h1>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            美容室ウイング R
            のご予約は、お電話またはこちらのフォームからお申し込みください。
            スタッフ一同、お客様のご来店を心よりお待ちしております。
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* お電話での予約 */}
          <section className="lg:col-span-1">
            <div className="bg-primary-600 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">お電話でのご予約</h2>
              <div className="text-4xl mb-4">📞</div>
              <p className="text-3xl font-bold mb-2">058-123-4567</p>
              <p className="mb-6">受付時間: 営業時間内</p>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-left">
                <p className="font-medium mb-2">営業時間</p>
                <p className="text-sm">平日: 9:00 - 19:00</p>
                <p className="text-sm">土曜: 9:00 - 18:00</p>
                <p className="text-sm">日祝: 9:00 - 17:00</p>
                <p className="text-sm mt-2">定休日: 火曜日、第3月曜日</p>
              </div>
            </div>

            {/* 注意事項 */}
            <div className="mt-6 bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium mb-4">ご予約時のお願い</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• ご希望の日時をお伺いします</li>
                <li>• 施術メニューをお教えください</li>
                <li>• 初回の方は髪質等をお聞かせください</li>
                <li>• キャンセルはお早めにご連絡ください</li>
              </ul>
            </div>
          </section>

          {/* 予約フォーム */}
          <section className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="heading-2 mb-6">WEBからのご予約</h2>
              <p className="text-gray-600 mb-6">
                下記フォームにご記入いただき、送信してください。
                確認後、スタッフよりお電話にてご連絡いたします。
              </p>

              <form className="space-y-6">
                {/* お客様情報 */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      お名前（姓）<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      お名前（名）<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      電話番号<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                {/* 予約希望日時 */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      ご希望日<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      ご希望時間<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">時間を選択してください</option>
                      <option value="09:00">9:00</option>
                      <option value="09:30">9:30</option>
                      <option value="10:00">10:00</option>
                      <option value="10:30">10:30</option>
                      <option value="11:00">11:00</option>
                      <option value="11:30">11:30</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                      <option value="15:00">15:00</option>
                      <option value="15:30">15:30</option>
                      <option value="16:00">16:00</option>
                      <option value="16:30">16:30</option>
                      <option value="17:00">17:00</option>
                      <option value="17:30">17:30</option>
                      <option value="18:00">18:00</option>
                    </select>
                  </div>
                </div>

                {/* 施術メニュー */}
                <div>
                  <label
                    htmlFor="menu"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    ご希望メニュー<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="menu"
                    name="menu"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">メニューを選択してください</option>
                    <optgroup label="カット">
                      <option value="ladies-cut">レディースカット</option>
                      <option value="mens-cut">メンズカット</option>
                      <option value="kids-cut">お子様カット</option>
                    </optgroup>
                    <optgroup label="カラー">
                      <option value="full-color">全体カラー</option>
                      <option value="retouch-color">リタッチカラー</option>
                      <option value="highlight">ハイライト</option>
                    </optgroup>
                    <optgroup label="パーマ">
                      <option value="cold-perm">コールドパーマ</option>
                      <option value="digital-perm">デジタルパーマ</option>
                      <option value="straight-perm">ストレートパーマ</option>
                    </optgroup>
                    <optgroup label="セット">
                      <option value="hair-set">ヘアセット</option>
                      <option value="kimono-dressing">着付け</option>
                    </optgroup>
                  </select>
                </div>

                {/* スタイリスト指名 */}
                <div>
                  <label
                    htmlFor="stylist"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    スタイリスト指名（任意）
                  </label>
                  <select
                    id="stylist"
                    name="stylist"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">指名なし</option>
                    <option value="yamada">山田 太郎（オーナー）</option>
                    <option value="sato">佐藤 花子（副店長）</option>
                    <option value="tanaka">田中 美咲</option>
                    <option value="suzuki">鈴木 健太</option>
                  </select>
                </div>

                {/* その他・備考 */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    ご要望・備考
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="髪質やアレルギーの有無、ご希望のスタイルなど、お気軽にお書きください。"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* 送信ボタン */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    予約申し込みを送信
                  </button>
                  <p className="text-sm text-gray-500 mt-2">
                    送信後、スタッフよりお電話にてご確認のご連絡をいたします。
                  </p>
                </div>
              </form>
            </div>
          </section>
        </div>

        {/* よくある質問 */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="heading-2 text-center mb-8">よくある質問</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Q. 当日の予約は可能ですか？
              </h3>
              <p className="text-gray-600 text-sm">
                A.
                はい、空きがあれば当日のご予約も承ります。お電話にてお問い合わせください。
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Q. キャンセル料はかかりますか？
              </h3>
              <p className="text-gray-600 text-sm">
                A.
                前日までのキャンセルは無料です。当日キャンセルの場合は料金の50%をお願いしております。
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Q. 駐車場はありますか？
              </h3>
              <p className="text-gray-600 text-sm">
                A.
                専用駐車場を5台分ご用意しております。満車の場合は近隣のコインパーキングをご利用ください。
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Q. クレジットカードは使えますか？
              </h3>
              <p className="text-gray-600 text-sm">
                A. はい、各種クレジットカード・電子マネーがご利用いただけます。
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
