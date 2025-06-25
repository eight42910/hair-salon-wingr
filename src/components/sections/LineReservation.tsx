import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { LineButton } from '@/components/ui/LineButton';

const lineFeatures = [
  {
    icon: '📱',
    title: '24時間予約受付',
    description: 'お忙しい時でも、いつでも予約・変更が可能です',
  },
  {
    icon: '💬',
    title: '気軽な相談',
    description: '髪のお悩みやスタイルのご相談ができます',
  },
  {
    icon: '💝',
    title: 'お得な情報',
    description: '限定クーポンやキャンペーン情報をお届けします',
  },
  {
    icon: '🔔',
    title: '予約管理',
    description: 'ご予約の確認やリマインドで安心です',
  },
];

export const LineReservation = () => {
  return (
    <section className="py-16 bg-gray-50">
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
            より便利にご利用いただけるよう、LINE公式アカウントをご用意しています。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* メリット一覧 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {lineFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="font-medium text-gray-800 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* シンプルな案内 */}
          <div className="text-center">
            <Card className="inline-block bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center gap-6 p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#06C755] to-[#05B04A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.628-.629.628M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-800 mb-1">
                    LINE公式アカウント
                  </h3>
                  <p className="text-gray-600 text-sm">
                    友だち追加でより便利にご利用いただけます
                  </p>
                </div>
                <LineButton
                  variant="brand-secondary"
                  text="友だち追加"
                  size="sm"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
