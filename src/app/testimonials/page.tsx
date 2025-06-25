// import { Metadata } from 'next';
// import { Star, User } from 'lucide-react';
// import { PageLayout } from '@/components/layout/PageLayout';
// import { SectionTitle } from '@/components/ui/SectionTitle';
// import { Card } from '@/components/ui/Card';

// export const metadata: Metadata = {
//   title: 'お客様の声 | 美容室ウイング R',
//   description:
//     '美容室ウイング R をご利用いただいたお客様から寄せられた貴重なご感想をご紹介いたします。',
// };

// const testimonials = [
//   {
//     name: 'K.M様',
//     age: '30代・女性',
//     rating: 5,
//     comment: '初めて伺いましたが、カウンセリングがとても丁寧で安心できました。髪質に合わせて最適なカラーを提案してくださり、仕上がりも大満足です！',
//     service: 'レディースカット + カラー',
//     years: '利用歴 1年'
//   },
//   {
//     name: 'T.S様',
//     age: '40代・女性',
//     rating: 5,
//     comment: '3世代でお世話になっています。いつも家族みんなで安心して通える雰囲気が素晴らしいです。技術も確かで、毎回満足しています。',
//     service: 'パーマ',
//     years: '利用歴 15年'
//   },
//   {
//     name: 'M.Y様',
//     age: '50代・女性',
//     rating: 5,
//     comment: '頭皮ケアを始めてから髪にコシが出てきました。セルフスタイリングの指導も丁寧で、家でも美容室のような仕上がりになります。',
//     service: 'ヘッドスパ + カット',
//     years: '利用歴 8年'
//   },
//   {
//     name: 'R.K様',
//     age: '20代・女性',
//     rating: 5,
//     comment: 'トレンドを取り入れつつ、私に似合うスタイルを提案してくれます。スタッフの皆さんも親しみやすく、毎回楽しく通っています。',
//     service: 'カット + ハイライト',
//     years: '利用歴 3年'
//   }
// ];

// export default function TestimonialsPage() {
//   return (
//     <PageLayout 
//       title="お客様の声" 
//       subtitle="美容室ウイング R をご利用いただいたお客様から寄せられた貴重なご感想をご紹介いたします。"
//       maxWidth="6xl"
//     >
//       <div className="grid gap-6 md:grid-cols-2">
//         {testimonials.map((testimonial, index) => (
//           <Card key={index} hover>
//             <div className="flex items-start mb-4">
//               <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
//                 <User className="w-6 h-6 text-gray-600" />
//               </div>
//               <div className="flex-1">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
//                   <div className="flex">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-sm text-gray-500">{testimonial.age}</p>
//               </div>
//             </div>
            
//             <p className="text-gray-700 text-sm mb-4 leading-relaxed">
//               {testimonial.comment}
//             </p>
            
//             <div className="border-t border-gray-100 pt-3">
//               <div className="flex justify-between text-xs text-gray-500">
//                 <span>施術: {testimonial.service}</span>
//                 <span>{testimonial.years}</span>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       {/* 統計情報 */}
//       <div className="mt-12">
//         <SectionTitle level="h2" align="center" showDivider={true}>
//           お客様満足度
//         </SectionTitle>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <Card className="text-center">
//             <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
//             <p className="text-sm text-gray-600">顧客満足度</p>
//           </Card>
//           <Card className="text-center">
//             <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
//             <p className="text-sm text-gray-600">リピート率</p>
//           </Card>
//           <Card className="text-center">
//             <div className="text-3xl font-bold text-gray-900 mb-2">41年</div>
//             <p className="text-sm text-gray-600">営業年数</p>
//           </div>
//         </div>
//       </div>
//     </PageLayout>
//   );
// }
