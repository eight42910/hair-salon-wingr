import { MapPin, Clock, Phone, Car } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AccessMap } from '@/components/map/GoogleMap';
import { SectionTitle } from '@/components/ui/SectionTitle';

const accessInfo = [
  {
    icon: MapPin,
    title: '住所',
    content: '〒501-3107 岐阜県岐阜市加野2-25-8',
  },
  {
    icon: Phone,
    title: '電話番号',
    content: '058-241-3375',
    link: 'tel:058-241-3375',
  },
  {
    icon: Clock,
    title: '営業時間',
    content: '9:00 - 18:00',
  },
  {
    icon: Car,
    title: '駐車場',
    content: '店舗前に専用駐車場完備',
  },
];

const businessHours = [
  { day: '月曜日', hours: '9:00 - 18:00' },
  { day: '火曜日', hours: '9:00 - 18:00 ※第2火曜定休' },
  { day: '水曜日', hours: '9:00 - 18:00' },
  { day: '木曜日', hours: '9:00 - 18:00' },
  { day: '金曜日', hours: '9:00 - 18:00' },
  { day: '土曜日', hours: '9:00 - 18:00' },
  { day: '日曜日', hours: '9:00 - 18:00 ※第3日曜定休' },
];

export const Access = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SectionTitle
            level="h2"
            align="center"
            mainTitle="アクセス・店舗情報"
            subTitle="Access & Store Information"
          />
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            岐阜市加野、アクセス良好な立地にございます
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 基本情報 */}
          <div>
            <h3 className="heading-3 mb-6">店舗情報</h3>
            <div className="space-y-4">
              {accessInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <p className="font-medium text-primary-900 mb-1">
                        {info.title}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="body-md text-primary-700 hover:text-primary-900 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="body-md text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 営業時間詳細 */}
            <div className="mt-8">
              <h4 className="font-medium text-primary-900 mb-4">
                営業時間詳細
              </h4>
              <div className="bg-accent-50 rounded-lg p-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex py-1 gap-4">
                    <span className="text-sm text-gray-700 min-w-[4rem]">
                      {schedule.day}
                    </span>
                    <span className="text-sm text-gray-900 font-medium">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 地図エリア */}
          <div>
            <h3 className="heading-3 mb-6">地図</h3>
            <AccessMap />
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/GaDvUi3ZvoXj3cxq9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-700 hover:text-primary-900 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Googleマップで確認
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
