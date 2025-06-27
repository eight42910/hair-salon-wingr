'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Car } from 'lucide-react';
import { AccessMap } from '@/components/map/GoogleMap';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { LineButton } from '@/components/ui/LineButton';

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

// LINE予約の特徴をシンプルなテキストで表現
const lineReservationFeatures = [
  '24時間いつでも予約受付',
  'ヘアケアのご相談も気軽に',
  'お得なクーポン情報をお届け',
  '予約確認・変更もスムーズ',
];

export const Access = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <SectionTitle
            level="h2"
            align="center"
            mainTitle="アクセス・ご予約"
            subTitle="Access & Reservation"
          />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            岐阜市加野、アクセス良好な立地。お電話またはLINEでご予約いただけます
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 店舗情報 */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* 装飾的な背景 */}
              <motion.div
                className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary-100/10 to-accent-100/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
              />

              <h3 className="text-xl font-bold text-primary-900 mb-6 relative">
                店舗情報
              </h3>

              <div className="space-y-4 relative">
                {accessInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300 shadow-sm">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-primary-900 mb-1">
                          {info.title}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-primary-700 hover:text-primary-900 transition-colors font-medium"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* 営業時間詳細 */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="font-medium text-primary-900 mb-4">
                  営業時間詳細
                </h4>
                <div className="bg-gradient-to-br from-accent-50 to-secondary-50 rounded-xl p-4 border border-accent-100 relative overflow-hidden">
                  {/* 装飾的な背景要素 */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent-200/20 to-secondary-200/20 rounded-full -translate-y-4 translate-x-4"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 0.9, 1],
                      transition: {
                        duration: 12,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                    }}
                  />

                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex py-1 gap-4 relative">
                      <span className="text-sm text-gray-700 min-w-[4rem]">
                        {schedule.day}
                      </span>
                      <span className="text-sm text-gray-900 font-medium">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 地図エリア */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* 装飾的な背景 */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-secondary-100/10 to-primary-100/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -180, -360],
                  transition: {
                    duration: 18,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
              />

              <h3 className="text-xl font-bold text-primary-900 mb-6 relative">
                地図
              </h3>
              <div className="relative">
                <AccessMap />
                <div className="mt-4 text-center">
                  <motion.a
                    href="https://maps.app.goo.gl/GaDvUi3ZvoXj3cxq9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-700 hover:text-primary-900 transition-colors font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Googleマップで確認
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ご予約方法 - アイコンなし版 */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {/* LINE予約 */}
              <Card className="hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 text-lg mb-2 text-center">
                      LINEでのご予約
                    </h4>
                    <p className="text-center text-sm text-gray-600 mb-4">
                      24時間いつでも予約・相談が可能です
                    </p>
                  </div>

                  {/* シンプルなリスト表示 */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <ul className="space-y-2">
                      {lineReservationFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <LineButton
                    variant="line-official"
                    text="友だち追加して予約"
                    className="w-full"
                  />

                  <p className="text-gray-500 text-xs mt-3 text-center">
                    友だち追加後、トークからご予約いただけます
                  </p>
                </div>
              </Card>

              {/* 電話予約 */}
              <Card className="hover:shadow-md transition-shadow">
                <div className="p-6 text-center">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    お電話でのご予約
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    営業時間内（9:00-18:00）
                  </p>
                  <a
                    href="tel:058-241-3375"
                    className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
                  >
                    058-241-3375
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
