'use client';

// 必要なライブラリをインポート
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@/components/ui/Card';
import { CheckCircle, Circle } from 'lucide-react';
import { contactSchema, ContactFormData, subjectOptions } from '@/types/form';

// ContactFormコンポーネントの定義
export const ContactForm = () => {
  // フォームの送信状態を管理するためのステート
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  // react-hook-formを使用してフォームの管理を行う
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema), // Zodスキーマを使用してバリデーション
    mode: 'onChange', // フォームの状態をリアルタイムで監視
  });

  // フォームの入力値を監視
  const watchedFields = watch();

  // 入力完了チェック項目の定義
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
      completed: !!watchedFields.message?.trim(),
    },
    {
      key: 'agreement',
      label: 'プライバシーポリシー同意',
      completed: !!watchedFields.agreement,
    },
  ];

  // 完了した項目の数をカウント
  const completedCount = checkItems.filter((item) => item.completed).length;
  // 進捗のパーセンテージを計算
  const progressPercentage = Math.round(
    (completedCount / checkItems.length) * 100
  );

  // フォーム送信時の処理
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true); // 送信中フラグを立てる
    setSubmitStatus('idle'); //エラー状態をリセット

    try {
      // データの前処理（空白削除など）
      const processedData = {
        ...data,
        name: data.name.trim(),
        furigana: data.furigana.trim(),
        email: data.email.trim(),
        message: data.message?.trim(),
      };

      // APIエンドポイントにデータを送信
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(processedData), // フォームデータをJSON形式で送信(処理済みデータ)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          error: 'Failed to send contact form',
        }));
        throw new Error(errorData.error || 'Failed to send contact form');
      }

      await response.json(); // レスポンス消費
      setSubmitStatus('success'); // 送信成功時のステータスを設定
      reset(); // フォームをリセット

      // 送信成功 - ログは本番では無効化
    } catch (error) {
      // エラーハンドリング - 本番では適切なログレベルで記録
      if (process.env.NODE_ENV === 'development') {
        console.error('Form submission error:', error);
      }
      setSubmitStatus('error'); // 送信失敗時のステータスを設定
    } finally {
      setIsSubmitting(false); // 送信中フラグを解除
    }
  };

  // 送信成功時の表示
  if (submitStatus === 'success') {
    return (
      <Card className="text-center bg-surface2 border-border">
        <div className="py-8">
          <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-text mb-2 font-serif">
            お問い合わせありがとうございます
          </h3>
          <p className="text-muted mb-4">
            お問い合わせ内容を確認後、24時間以内にご連絡いたします。
          </p>
          <button
            onClick={() => setSubmitStatus('idle')} // 新しいお問い合わせボタンの処理
            className="bg-accent text-white px-6 py-2 rounded-xl transition-colors duration-200 hover:bg-primary-700"
          >
            新しいお問い合わせをする
          </button>
        </div>
      </Card>
    );
  }

  return (
    <div className="max-w-3xl mx-auto relative">
      <form
        id="contact-form" // フォームID
        onSubmit={handleSubmit(onSubmit)} // フォーム送信時の処理
        className="space-y-8"
      >
        {/* 基本情報セクション */}
        <Card className="border-l-4 border-accent2/40">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">
                お名前 <span className="text-accent2">*</span>
              </label>
              <input
                type="text"
                className={`form-input ${
                  errors.name ? 'border-red-500 bg-red-50' : 'border-border'
                }`}
                placeholder="山田 太郎"
                {...register('name')} // フォームフィールドの登録
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message} {/* エラーメッセージの表示 */}
                </p>
              )}
            </div>

            <div>
              <label className="form-label">
                フリガナ <span className="text-accent2">*</span>
              </label>
              <input
                type="text"
                className={`form-input ${
                  errors.furigana
                    ? 'border-red-500 bg-red-50'
                    : 'border-border'
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
                メールアドレス <span className="text-accent2">*</span>
              </label>
              <input
                type="email"
                className={`form-input ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-border'
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
                className="form-input border-border"
                placeholder="090-1234-5678"
                {...register('phone')}
              />
            </div>
          </div>
        </Card>

        {/* お問い合わせ内容セクション */}
        <Card className="border-l-4 border-accent2/40">
          <div className="space-y-6">
            <div>
              <label className="form-label">
                お問い合わせの種類 <span className="text-accent2">*</span>
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {subjectOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-surface2 transition-colors"
                  >
                    <input
                      type="radio"
                      value={option.value}
                      className="mr-3 text-accent"
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
                お問い合わせ詳細 <span className="text-accent2">*</span>
              </label>
              <textarea
                className={`form-input min-h-32 ${
                  errors.message
                    ? 'border-red-500 bg-red-50'
                    : 'border-border'
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

        {/* 入力進捗セクション */}
        <Card className="bg-surface2 border-l-4 border-accent2/40">
          <div>
            <h3 className="font-semibold text-lg text-text mb-3 font-serif">
              入力進捗
            </h3>
            <div className="w-full bg-surface rounded-full h-3 mb-3 border border-border">
              <div
                className="bg-accent2 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }} // 進捗バーの幅を設定
              ></div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {checkItems.map((item) => (
                <div key={item.key} className="flex items-center space-x-2">
                  {item.completed ? (
                    <CheckCircle className="w-4 h-4 text-accent2" />
                  ) : (
                    <Circle className="w-4 h-4 text-border" />
                  )}
                  <span
                    className={
                      item.completed ? 'text-accent' : 'text-muted'
                    }
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* プライバシーポリシーと送信ボタンセクション */}
        <Card className="border-l-4 border-accent2/40">
          <div className="space-y-4">
            <div>
              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  className="mt-1 text-accent"
                  {...register('agreement')}
                />
                <span className="text-sm text-muted">
                  <span className="text-accent2">*</span>
                  <a
                    href="/privacy"
                    className="text-accent underline hover:text-primary-700"
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
              type="submit" // フォーム送信ボタン
              form="contact-form"
              disabled={!isValid || isSubmitting} // 無効化条件
              className={`w-full h-12 px-6 py-3 rounded-xl font-semibold text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                isValid && !isSubmitting
                  ? 'bg-accent hover:bg-primary-700 shadow-sm'
                  : 'bg-border text-muted cursor-not-allowed'
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

        {/* エラーメッセージ表示セクション */}
        {submitStatus === 'error' && (
          <Card className="bg-surface2 border-red-200 text-center">
            <p className="text-red-700">
              送信中にエラーが発生しました。お手数ですが、お電話にてお問い合わせください。
              <br />
              <a href="tel:058-241-3375" className="font-bold underline">
                058-241-3375
              </a>
            </p>
          </Card>
        )}
      </form>
    </div>
  );
};
