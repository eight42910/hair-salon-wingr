'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { LineButton } from '@/components/ui/LineButton';
import {
  bookingSchema,
  BookingFormData,
  menuOptions,
  hairConcernOptions,
} from '@/types/form';

export const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: 'onChange',
  });

  const watchedFields = watch();
  const completedFields = Object.values(watchedFields).filter(Boolean).length;
  const totalFields = Object.keys(bookingSchema.shape).length - 1; // agreementを除く
  const progressPercentage = Math.round((completedFields / totalFields) * 100);

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      // TODO: 実際のAPI呼び出しを実装
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <Card className="text-center bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <div className="py-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl">✓</span>
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">
            ご予約ありがとうございます
          </h3>
          <p className="text-green-700 mb-4">
            ご予約内容を確認後、24時間以内にお電話またはメールにてご連絡いたします。
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            新しい予約をする
          </button>
        </div>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* LINE予約の推奨 */}
      <Card className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
        <div className="text-center">
          <h3 className="font-bold text-lg text-gray-800 mb-2">
            🌟 おすすめ！LINE公式アカウントで予約
          </h3>
          <p className="text-gray-600 mb-4">
            24時間いつでも簡単予約！LINEなら予約の確認・変更もスムーズです
          </p>
          <LineButton
            variant="line-official"
            text="LINE公式アカウントで予約する"
          />
          <p className="text-gray-500 text-sm mt-3">
            ↓ またはこちらのWebフォームからもご予約いただけます
          </p>
        </div>
      </Card>

      {/* 進捗表示 */}
      <Card className="mb-8 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="text-center mb-4">
          <h3 className="font-bold text-lg text-primary-900 mb-2">入力進捗</h3>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div
              className="bg-gradient-to-r from-primary-500 to-primary-700 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">
            {completedFields} / {totalFields} 項目完了
          </p>
        </div>
      </Card>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* 基本情報 */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-300">
          <SectionTitle
            level="h3"
            align="left"
            showDivider={true}
            mainTitle="基本情報"
          ></SectionTitle>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={`form-input ${
                  errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="山田 太郎"
                {...register('name')}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="form-label">
                フリガナ <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={`form-input ${
                  errors.furigana
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300'
                }`}
                placeholder="ヤマダ タロウ"
                {...register('furigana')}
              />
              {errors.furigana && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.furigana.message}
                </p>
              )}
            </div>

            <div>
              <label className="form-label">
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className={`form-input ${
                  errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="090-1234-5678"
                {...register('phone')}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="form-label">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className={`form-input ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="example@email.com"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </Card>

        {/* 予約詳細 */}
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-300">
          <SectionTitle
            level="h3"
            align="left"
            showDivider={true}
            mainTitle="予約詳細"
          ></SectionTitle>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">
                第一希望日時 <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                className={`form-input ${
                  errors.preferredDate
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300'
                }`}
                {...register('preferredDate')}
                min={new Date().toISOString().slice(0, 16)}
              />
              {errors.preferredDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.preferredDate.message}
                </p>
              )}
            </div>

            <div>
              <label className="form-label">第二希望日時（任意）</label>
              <input
                type="datetime-local"
                className="form-input border-gray-300"
                {...register('alternativeDate')}
                min={new Date().toISOString().slice(0, 16)}
              />
            </div>

            <div className="md:col-span-2">
              <label className="form-label">
                ご希望のメニュー <span className="text-red-500">*</span>
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {menuOptions.map((menu) => (
                  <label
                    key={menu.value}
                    className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-white/50 transition-colors"
                  >
                    <input
                      type="radio"
                      value={menu.value}
                      className="mr-3 text-primary-500"
                      {...register('menuType')}
                    />
                    <div className="flex-1">
                      <span className="font-medium">{menu.label}</span>
                      <span className="text-gray-600 text-sm ml-2">
                        ({menu.price})
                      </span>
                    </div>
                  </label>
                ))}
              </div>
              {errors.menuType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.menuType.message}
                </p>
              )}
            </div>
          </div>
        </Card>

        {/* ヘアコンサルティング */}
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-300">
          <SectionTitle
            subTitle="Hair Consultation"
            level="h3"
            align="left"
            showDivider={true}
            mainTitle="ヘアコンサルティング"
          ></SectionTitle>

          <div className="space-y-6">
            <div>
              <label className="form-label">初回来店</label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="true"
                    className="mr-2 text-primary-500"
                    {...register('isFirstVisit')}
                  />
                  はい（初回）
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="false"
                    className="mr-2 text-primary-500"
                    {...register('isFirstVisit')}
                  />
                  いいえ（再来店）
                </label>
              </div>
            </div>

            <div>
              <label className="form-label">
                現在の髪のお悩み（複数選択可）
              </label>
              <div className="grid md:grid-cols-2 gap-2">
                {hairConcernOptions.map((concern, index) => (
                  <label
                    key={index}
                    className="flex items-center p-2 hover:bg-white/50 rounded transition-colors"
                  >
                    <input
                      type="checkbox"
                      value={concern}
                      className="mr-2 text-primary-500"
                      {...register('hairConcerns')}
                    />
                    {concern}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="form-label">ご要望・ご質問（任意）</label>
              <textarea
                className="form-input min-h-24"
                placeholder="理想のヘアスタイルや、気になることがあればお気軽にお書きください"
                rows={4}
                {...register('requests')}
              ></textarea>
            </div>
          </div>
        </Card>

        {/* 利用規約と送信 */}
        <Card className="bg-gradient-to-br from-gray-50 to-white border-l-4 border-gray-300">
          <div className="space-y-4">
            <div>
              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  className="mt-1 text-primary-500"
                  {...register('agreement')}
                />
                <span className="text-sm text-gray-700">
                  <span className="text-red-500">*</span>
                  <a
                    href="/privacy"
                    className="text-primary-600 underline hover:text-primary-800"
                  >
                    プライバシーポリシー
                  </a>
                  および
                  <a
                    href="/terms"
                    className="text-primary-600 underline hover:text-primary-800"
                  >
                    利用規約
                  </a>
                  に同意します
                </span>
              </label>
              {errors.agreement && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.agreement.message}
                </p>
              )}
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={`px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 ${
                  isValid && !isSubmitting
                    ? 'bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800 hover:scale-105 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>送信中...</span>
                  </div>
                ) : (
                  'ご予約内容を送信'
                )}
              </button>
            </div>
          </div>
        </Card>

        {submitStatus === 'error' && (
          <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200 text-center">
            <p className="text-red-700">
              送信中にエラーが発生しました。お手数ですが、お電話にてお問い合わせください。
              <br />
              <a href="tel:058-243-6478" className="font-bold underline">
                058-243-6478
              </a>
            </p>
          </Card>
        )}
      </form>
    </div>
  );
};
