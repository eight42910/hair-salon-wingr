import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { LineButton } from '@/components/ui/LineButton';
import { Clock, MessageCircle, Gift, Bell } from 'lucide-react';

const lineFeatures = [
  {
    title: '24時間いつでも予約',
    description: 'お忙しい時でも、いつでも予約・変更が可能です',
    icon: Clock,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
  },
  {
    title: 'ヘアケア相談',
    description: '髪のお悩みやスタイルのご相談ができます',
    icon: MessageCircle,
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
  },
  {
    title: 'お得な情報配信',
    description: '限定クーポンやキャンペーン情報をお届けします',
    icon: Gift,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
  },
  {
    title: '予約の確認・変更',
    description: 'ご予約の確認やリマインドで安心です',
    icon: Bell,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100',
  },
];

export const LineReservation = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SectionTitle
            level="h2"
            align="center"
            showDivider={true}
            mainTitle="LINE公式アカウント"
            subTitle="Official LINE Account"
          />
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            より便利にご利用いただけるよう、LINE公式アカウントもご用意しております。
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* 左側: サービス内容 */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-medium text-gray-800 mb-6 text-center lg:text-left">
                LINE公式アカウントでご利用いただけるサービス
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {lineFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <Card
                      key={index}
                      className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                    >
                      {/* 背景グラデーション */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      ></div>

                      <div className="relative p-6">
                        {/* アイコン */}
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        {/* コンテンツ */}
                        <h4 className="font-bold text-gray-800 mb-3 text-lg group-hover:text-gray-900 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                          {feature.description}
                        </p>

                        {/* 装飾要素 */}
                        <div
                          className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${feature.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                        ></div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* 右側: LINE登録案内 */}
            <div className="lg:border-l lg:border-gray-200 lg:pl-8">
              <Card className="relative overflow-hidden">
                {/* 背景装飾 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#06C755]/10 to-[#05B04A]/10 rounded-full -translate-y-8 translate-x-8"></div>

                <div className="relative text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#06C755] to-[#05B04A] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.628-.629.628M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    美容室ウイング R
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    LINE公式アカウント
                  </p>

                  <LineButton
                    variant="line-official"
                    text="友だち追加"
                    size="lg"
                    className="w-full shadow-lg hover:shadow-xl transition-shadow"
                  />

                  <p className="text-gray-500 text-xs mt-4">
                    友だち追加後、トークからご予約いただけます
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
