import { Metadata } from 'next';
import { Scissors, Award, Heart, Star } from 'lucide-react';
import Image from 'next/image';
import { PageLayout } from '@/components/layout/PageLayout';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'オーナー・スタッフ紹介 | 美容室ウイング R',
  description:
    '美容室ウイング Rのオーナー・スタッフをご紹介。41年の経験と家族経営の温かさで、お客様一人ひとりに寄り添います。',
};

const staff = [
  {
    name: '村瀬 律子',
    filename: 'ritsuko.jpg',
    role: 'オーナー・トップスタイリスト',
    experience: '41年',
    specialties: ['カット', 'パーマ', '頭皮ケア', '経営'],
    message:
      '創業から41年、お客様との信頼関係を一番大切にしています。技術の向上はもちろん、お客様が安心してくつろげる空間づくりを心がけています。',
    icon: Award,
  },
  {
    name: '村瀬 孝介',
    filename: 'kousuke.jpg',
    role: 'フロアスタッフ',
    experience: '41年',
    specialties: ['接客', 'フロア管理', 'フロアマネジメント'],
    message: 'お客様のご要望に寄り添い、お客様のご満足を第一に考えています。',
    icon: Heart,
  },
];

export default function OwnerPage() {
  return (
    <PageLayout
      title="オーナー・スタッフ紹介"
      subtitle="41年の経験と家族経営の温かさで、お客様一人ひとりに寄り添います"
    >
      {/* スタッフ紹介 */}
      <div className="grid gap-12">
        {staff.map((member, index) => {
          const IconComponent = member.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={member.name}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                isEven ? '' : 'md:grid-flow-col-dense'
              }`}
            >
              {/* スタッフ情報 */}
              <div className={isEven ? '' : 'md:col-start-2'}>
                <Card>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gray-100 rounded-full">
                      <IconComponent className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h2>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">
                      経験年数: {member.experience}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-medium text-gray-900 mb-2 text-sm">
                      得意分野
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="bg-gray-50 text-gray-700 px-2 py-1 rounded text-xs border border-gray-200"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2 text-sm">
                      メッセージ
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.message}
                    </p>
                  </div>
                </Card>
              </div>

              {/* 写真エリア */}
              <div className={isEven ? '' : 'md:col-start-1'}>
                <Card className="h-96 flex items-center justify-center bg-gray-50">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <p className="text-sm">{member.name}</p>
                    <p className="text-xs">写真準備中</p>
                  </div>
                </Card>
              </div>
            </div>
          );
        })}
      </div>

      {/* 店内の雰囲気 */}
      <div className="mt-12">
        <SectionTitle level="h2" align="left" showDivider={true}>
          アットホームな店内
        </SectionTitle>
        <p className="text-gray-600 text-sm mb-8">
          家族経営ならではの温かい雰囲気の中で、リラックスして美容時間をお過ごしください
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card hover className="text-center">
            <div className="h-48 bg-gray-50 rounded mb-4 flex items-center justify-center">
              <Scissors className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">カットエリア</h3>
            <p className="text-gray-600 text-sm">
              ゆったりとしたカットチェアで、リラックスしながら施術を受けていただけます
            </p>
          </Card>

          <Card hover className="text-center">
            <div className="h-48 bg-gray-50 rounded mb-4 flex items-center justify-center">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">シャンプーエリア</h3>
            <p className="text-gray-600 text-sm">
              フルフラットシャンプー台で、極上のリラクゼーションをご提供
            </p>
          </Card>

          <Card hover className="text-center">
            <div className="h-48 bg-gray-50 rounded mb-4 flex items-center justify-center">
              <Star className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">待合エリア</h3>
            <p className="text-gray-600 text-sm">
              雑誌をご用意してお待ちいただく間も、快適にお過ごしいただけます
            </p>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
