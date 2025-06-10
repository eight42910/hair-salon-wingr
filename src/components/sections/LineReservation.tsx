import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { LineButton } from '@/components/ui/LineButton';

const lineFeatures = [
  {
    icon: '⚡',
    title: '24時間予約受付',
    description: 'いつでもお好きな時間に予約可能',
  },
  {
    icon: '📱',
    title: '簡単操作',
    description: 'LINEの使い慣れた画面で簡単予約',
  },
  {
    icon: '🔔',
    title: '予約確認・変更',
    description: '予約確認やキャンセルもLINEで完結',
  },
  {
    icon: '💬',
    title: '気軽な相談',
    description: '髪のお悩みやスタイル相談もできます',
  },
];

export const LineReservation = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SectionTitle
            level="h2"
            align="center"
            showDivider={true}
            mainTitle="LINE予約"
            subTitle="Easy LINE Reservation"
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            LINE公式アカウントを友だち追加して、24時間いつでも簡単にご予約いただけます
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* メイン誘導カード */}
          <Card className="text-center mb-12 bg-gradient-to-br from-white to-green-50 border-2 border-green-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#06C755] to-[#05B04A]"></div>
            <div className="py-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#06C755] to-[#05B04A] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.628-.629.628M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                美容室ウイング R 公式LINE
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                友だち追加して、いつでもどこでも簡単予約！
                <br />
                髪のお悩み相談やスタイル提案もお気軽にどうぞ
              </p>
              <LineButton variant="large" />
            </div>
          </Card>

          {/* 特徴一覧 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {lineFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center bg-white hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* 予約方法の説明 */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-300">
            <SectionTitle
              level="h3"
              align="left"
              showDivider={true}
              mainTitle="LINE予約の流れ"
              subTitle="Reservation Process"
            />
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h4 className="font-bold text-gray-800 mb-2">友だち追加</h4>
                <p className="text-gray-600 text-sm">
                  上のボタンから公式LINEアカウントを友だち追加
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h4 className="font-bold text-gray-800 mb-2">
                  予約メニュー選択
                </h4>
                <p className="text-gray-600 text-sm">
                  トーク画面から「予約」ボタンをタップ
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h4 className="font-bold text-gray-800 mb-2">予約完了</h4>
                <p className="text-gray-600 text-sm">
                  希望日時とメニューを選択して予約完了
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
