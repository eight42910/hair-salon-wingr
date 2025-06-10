import { Metadata } from 'next';
import { MapPin, Phone, Clock, Car, Train } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'アクセス・店舗情報 | 美容室ウイング R',
  description:
    '美容室ウイング R へのアクセス方法、店舗情報をご案内。駐車場完備で岐阜駅から車で10分の便利な立地です。',
};

export default function AccessPage() {
  return (
    <PageLayout
      title="アクセス・店舗情報"
      titleEn="Access & Store Information"
      subtitle="美容室ウイング R は岐阜市内の便利な立地にございます。お車でのご来店はもちろん、公共交通機関でもアクセス良好です。"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* 店舗情報 */}
        <Card>
          <SectionTitle 
            level="h2" 
            align="left" 
            showDivider={true}
            mainTitle="店舗情報"
            subTitle="Store Information"
          />

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">住所</h3>
                <p className="text-gray-600 text-sm">
                  〒500-8234
                  <br />
                  岐阜県岐阜市加野2-25-8
                  <br />
                  ウイングビル1F
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-5 h-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">電話番号</h3>
                <p className="text-gray-600 text-sm">
                  <a
                    href="tel:058-241-3375"
                    className="hover:text-gray-800 transition-colors"
                  >
                    058-241-3375
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-5 h-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">営業時間</h3>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>平日: 9:00 - 19:00</p>
                  <p>土曜: 9:00 - 18:00</p>
                  <p>日曜・祝日: 9:00 - 17:00</p>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-5 h-5 bg-gray-600 rounded mr-3 mt-1 flex-shrink-0"></div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">定休日</h3>
                <p className="text-gray-600 text-sm">
                  毎週火曜日、第2火曜日、第3日曜日
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Car className="w-5 h-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">駐車場</h3>
                <p className="text-gray-600 text-sm">専用駐車場5台完備</p>
              </div>
            </div>
          </div>
        </Card>

        {/* アクセス方法 */}
        <Card>
          <SectionTitle 
            level="h2" 
            align="left" 
            showDivider={true}
            mainTitle="アクセス方法"
            subTitle="How to Get Here"
          />

          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-3">
                <Car className="w-5 h-5 text-gray-600 mr-2" />
                <h3 className="font-medium text-gray-900">
                  お車でお越しの場合
                </h3>
              </div>
              <ul className="text-gray-600 text-sm space-y-1 ml-7">
                <li>• 岐阜駅から約10分</li>
                <li>• 岐阜ICから約15分</li>
                <li>• 専用駐車場5台完備</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <Train className="w-5 h-5 text-gray-600 mr-2" />
                <h3 className="font-medium text-gray-900">
                  公共交通機関の場合
                </h3>
              </div>
              <ul className="text-gray-600 text-sm space-y-1 ml-7">
                <li>• JR岐阜駅からバス15分</li>
                <li>• 「加野」バス停から徒歩3分</li>
                <li>• 名鉄岐阜駅からバス12分</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* 地図エリア */}
      <div className="mt-12">
        <SectionTitle 
          level="h2" 
          align="left" 
          showDivider={true}
          mainTitle="アクセスマップ"
          subTitle="Access Map"
        />
        <Card className="h-96 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-2" />
            <p className="text-sm">地図表示エリア</p>
            <p className="text-xs">Google Maps APIを実装予定</p>
          </div>
        </Card>
      </div>

      {/* ご来店時のお願い */}
      <div className="mt-12">
        <SectionTitle 
          level="h2" 
          align="left" 
          showDivider={true}
          mainTitle="ご来店時のお願い"
          subTitle="Visit Guidelines"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="font-medium text-gray-900 mb-3">ご予約について</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• ご予約優先制となっております</li>
              <li>
                • 当日のご予約も承りますが、混雑時はお待ちいただく場合があります
              </li>
              <li>• キャンセルの際は、お早めにご連絡ください</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-medium text-gray-900 mb-3">その他のお願い</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• 体調不良の際はご来店をお控えください</li>
              <li>• 貴重品の管理はお客様にてお願いいたします</li>
              <li>• 小さなお子様連れの際は事前にお声がけください</li>
            </ul>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
