import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: '田中様',
    age: '40代女性',
    comment:
      '3世代でお世話になっています。いつも丁寧にカウンセリングしていただき、理想のスタイルに仕上げてくださいます。ヘッドスパも気持ちよくて、リラックスできる時間です。',
  },
  {
    name: '佐藤様',
    age: '30代男性',
    comment:
      '仕事で忙しい中でも、いつも気軽に相談に乗ってくださいます。セルフスタイリングのアドバイスも的確で、朝のセットが楽になりました。',
  },
  {
    name: '山田様',
    age: '50代女性',
    comment:
      '縮毛矯正でお世話になっています。技術力が高く、仕上がりにいつも満足しています。アフターケアのアドバイスも丁寧で、髪の状態が良くなりました。',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">お客様の声</h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            長年ご愛顧いただいているお客様からの温かいお言葉
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* ホバー時のグラデーション背景 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* 装飾的な背景要素 */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100/20 to-accent-100/20 rounded-full -translate-y-6 translate-x-6 group-hover:from-primary-200/30 group-hover:to-accent-200/30 transition-all duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg flex items-center justify-center mr-3 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-primary-900 group-hover:text-primary-800 transition-colors">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.age}</p>
                  </div>
                </div>
                <p className="body-md text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                  {testimonial.comment}
                </p>
                
                {/* 装飾的な要素 */}
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-br from-accent-300 to-accent-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
