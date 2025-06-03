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
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-6 h-6 text-primary-500 mr-2" />
                <div>
                  <p className="font-medium text-primary-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.age}</p>
                </div>
              </div>
              <p className="body-md text-gray-700 leading-relaxed">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
