'use client';
import { useEffect, useState } from 'react';
import { Scissors } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
  progress: number;
}

export const LoadingScreen = ({ isLoading, progress }: LoadingScreenProps) => {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowContent(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!showContent) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center space-y-8">
        {/* ロゴとハサミアニメーション */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Scissors
              className={`w-8 h-8 text-primary-600 transition-transform duration-1000 ${
                progress > 50 ? 'rotate-12 scale-110' : ''
              }`}
            />
            <h1 className="text-2xl md:text-3xl font-bold text-primary-900">
              美容室ウイング R
            </h1>
            <Scissors
              className={`w-8 h-8 text-primary-600 transition-transform duration-1000 ${
                progress > 50 ? '-rotate-12 scale-110' : ''
              }`}
            />
          </div>

          {/* キラキラエフェクト */}
          <div className="absolute -top-2 -right-2 w-2 h-2 bg-accent-400 rounded-full animate-ping" />
          <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-primary-400 rounded-full animate-pulse" />
        </div>

        {/* プログレスバー */}
        <div className="w-64 mx-auto">
          <div className="bg-primary-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary-500 to-accent-500 h-full rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* プログレスバーのキラキラエフェクト */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
          </div>
          <p className="text-primary-600 text-sm mt-3 font-medium">
            {progress}% 読み込み中...
          </p>
        </div>

        {/* サブテキスト */}
        <p className="text-primary-700 text-lg font-medium animate-pulse">
          41年間地域に愛され続ける美容室
        </p>
      </div>

      {/* 背景装飾 */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-50 animate-float" />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-accent-100 rounded-full opacity-50 animate-float-delayed" />
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-secondary-100 rounded-full opacity-50 animate-float-slow" />
    </div>
  );
};
