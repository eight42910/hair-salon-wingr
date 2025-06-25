'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LineButtonProps {
  variant?: 'line-official' | 'brand-primary' | 'brand-secondary' | 'large';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  showQR?: boolean;
  className?: string;
}

export const LineButton = ({
  variant = 'line-official',
  size = 'lg',
  text = 'LINEで予約',
  showQR = true,
  className = '',
}: LineButtonProps) => {
  const [showModal, setShowModal] = useState(false);

  // TODO: 実際のLINE公式アカウントのURLに置き換えてください
  const lineUrl = 'https://line.me/R/ti/p/%40639aclxw';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm rounded',
    md: 'px-4 py-2 text-sm rounded-md',
    lg: 'px-6 py-3 text-base rounded-lg',
  };

  const variantStyles = {
    'line-official':
      'bg-line-primary hover:bg-line-dark text-white px-6 py-3 text-base',
    'brand-primary':
      'bg-primary-600 hover:bg-line-primary text-white transition-colors duration-300',
    'brand-secondary':
      'bg-white hover:bg-line-primary text-primary-600 hover:text-white border-2 border-primary-600 hover:border-line-primary transition-all duration-300',
    large:
      'bg-line-primary hover:bg-line-dark text-white px-8 py-4 text-lg rounded-lg',
  };

  const handleLineClick = () => {
    // スマートフォンの場合は直接LINEアプリを開く
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.open(lineUrl, '_blank');
    } else {
      // PC/タブレットの場合はQRコード表示
      setShowModal(true);
    }
  };

  return (
    <>
      <button
        onClick={handleLineClick}
        className={`
          ${variantStyles[variant]}
          ${variant !== 'large' ? sizeStyles[size] : ''}
          font-medium transition-all duration-300 
          hover:scale-105 hover:shadow-lg inline-flex items-center justify-center space-x-2
          flex-shrink-0 self-center
          ${className}
        `}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="flex-shrink-0"
        >
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.628-.629.628M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
        <span className="whitespace-nowrap">{text}</span>
      </button>

      {/* PC用QRコードモーダル */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full mx-4 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
              LINE公式アカウント
            </h3>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-lg">
                <Image
                  src="/images/common/line_qr.jpg"
                  alt="美容室ウイング R LINE公式アカウントのQRコード"
                  width={192}
                  height={192}
                  sizes="(max-width: 640px) 160px, 192px"
                  className="object-cover w-full h-full "
                  priority={false}
                  quality={95}
                />
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm mb-4">
              スマートフォンでQRコードを読み取って
              <br />
              LINE公式アカウントを友だち追加してください
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button
                onClick={() => window.open(lineUrl, '_blank')}
                className="flex-1 bg-[#06C755] text-white px-4 py-2 rounded-lg hover:bg-[#05B04A] transition-colors text-sm sm:text-base"
              >
                ブラウザで開く
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors text-sm sm:text-base"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
