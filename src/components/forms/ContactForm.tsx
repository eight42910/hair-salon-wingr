'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@/components/ui/Card';
import { CheckCircle, Circle } from 'lucide-react';
import {
  contactSchema,
  ContactFormData,
  subjectOptions,
  FormSubmitStatus,
} from '@/types/form';

export const ContactForm = () => {
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
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  const watchedFields = watch();

  // 入力完了チェック項目
  const checkItems = [
    { key: 'name', label: 'お名前', completed: !!watchedFields.name?.trim() },
    {
      key: 'furigana',
      label: 'フリガナ',
      completed: !!watchedFields.furigana?.trim(),
    },
    {
      key: 'email',
      label: 'メールアドレス',
      completed: !!watchedFields.email?.trim(),
    },
    {
      key: 'subject',
      label: 'お問い合わせ種類',
      completed: !!watchedFields.subject,
    },
    {
      key: 'message',
      label: 'お問い合わせ内容',
      completed:
        !!watchedFields.message?.trim() && watchedFields.message.length >= 10,
    },
    {
      key: 'agreement',
      label: 'プライバシーポリシー同意',
      completed: !!watchedFields.agreement,
    },
  ];

  const completedCount = checkItems.filter((item) => item.completed).length;
  const progressPercentage = Math.round(
    (completedCount / checkItems.length) * 100
  );

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // TODO: 実際のAPI呼び出しを実装
      const response = await fetch('/api/contact', {
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
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">
            お問い合わせありがとうございます
          </h3>
          <p className="text-green-700 mb-4">
            お問い合わせ内容を確認後、24時間以内にご連絡いたします。
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            新しいお問い合わせをする
          </button>
        </div>
      </Card>
    );
  }

  return (
    <div className="max-w-3xl mx-auto relative">
      {/* 入力進捗 - スティッキー表示 */}
      <div className="sticky top-20 z-10 mb-8 backdrop-blur-sm">
        <Card className="bg-secondary-100 to-indigo-50 border-l-4 border-blue-300 shadow-lg">
          <div>
            <h3 className="font-bold text-lg text-primary-900 mb-3">
              入力進捗
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div
                className="bg-gradient-to-r from-secondary-500 to-secondary-700 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {checkItems.map((item) => (
                <div key={item.key} className="flex items-center space-x-2">
                  {item.completed ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Circle className="w-4 h-4 text-gray-300" />
                  )}
                  <span
                    className={
                      item.completed ? 'text-green-700' : 'text-gray-500'
                    }
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* 基本情報 */}
        <Card className="bg-primary-50 to-indigo-50 border-l-4 border-blue-300">
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

            <div>
              <label className="form-label">電話番号（任意）</label>
              <input
                type="tel"
                className="form-input border-gray-300"
                placeholder="090-1234-5678"
                {...register('phone')}
              />
            </div>
          </div>
        </Card>

        {/* お問い合わせ内容 */}
        <Card className="bg-primary-50 to-indigo-50 border-l-4 border-blue-300">
          <div className="space-y-6">
            <div>
              <label className="form-label">
                お問い合わせの種類 <span className="text-red-500">*</span>
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {subjectOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-white/50 transition-colors"
                  >
                    <input
                      type="radio"
                      value={option.value}
                      className="mr-3 text-primary-500"
                      {...register('subject')}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label className="form-label">
                お問い合わせ詳細 <span className="text-red-500">*</span>
              </label>
              <textarea
                className={`form-input min-h-32 ${
                  errors.message
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300'
                }`}
                placeholder="お問い合わせ内容を詳しくお書きください"
                rows={6}
                {...register('message')}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
        </Card>

        {/* プライバシーポリシーと送信ボタン */}
        <Card className="bg-primary-50 to-indigo-50 border-l-4 border-blue-300">
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
                  に同意します
                </span>
              </label>
              {errors.agreement && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.agreement.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              form="contact-form"
              disabled={!isValid || isSubmitting}
              className={`w-full px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 ${
                isValid && !isSubmitting
                  ? 'bg-gradient-to-r from-secondary-500 to-secondary-700 hover:from-secondary-600 hover:to-secondary-800 hover:scale-105 shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>送信中...</span>
                </div>
              ) : (
                'お問い合わせを送信'
              )}
            </button>
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
