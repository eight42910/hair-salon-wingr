'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

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
  className = '',
}: LineButtonProps) => {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  // TODO: 実際のLINE公式アカウントのURLに置き換えてください
  const lineUrl =
    'https://s.lmes.jp/landing-qr/2007361521-5oAWRZAM?uLand=r5XwsR';

  // クライアントサイドでのマウント確認
  useEffect(() => {
    setMounted(true);
  }, []);

  // モーダル表示時のbody scroll制御とキーボード操作
  useEffect(() => {
    if (showModal) {
      // body scrollを無効化
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';

      // Escapeキーでモーダルを閉じる
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setShowModal(false);
        }
      };

      document.addEventListener('keydown', handleEscape);

      // ✅ クリーンアップ関数を返す
      return () => {
        document.body.style.overflow = originalStyle;
        document.removeEventListener('keydown', handleEscape);
      };
    }

    // ✅ showModalがfalseの場合も明示的にundefinedを返す
    return undefined;
  }, [showModal]);

  const sizeStyles = {
    sm: 'h-10 px-4 text-sm rounded-lg',
    md: 'h-11 px-5 text-sm rounded-xl',
    lg: 'h-12 px-6 text-base rounded-xl',
  };

  const variantStyles = {
    'line-official':
      'bg-line-primary hover:bg-line-dark text-white',
    'brand-primary':
      'bg-accent hover:bg-primary-700 text-white',
    'brand-secondary':
      'bg-surface hover:bg-surface2 text-accent border border-border',
    large:
      'bg-line-primary hover:bg-line-dark text-white h-12 px-7 text-base rounded-xl',
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

  const closeModal = () => {
    setShowModal(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // モーダルコンポーネント
  const modalContent =
    showModal && mounted ? (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm"
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="line-modal-title"
        aria-describedby="line-modal-description"
        style={{
          // 確実に最前面に表示
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
        }}
      >
        <div
          className="bg-surface rounded-xl p-4 sm:p-6 lg:p-8 max-w-xs sm:max-w-md w-full mx-2 sm:mx-4 text-center shadow-lg border border-border transition-all duration-200 relative"
          onClick={handleModalContentClick}
        >
          {/* 閉じるボタン（X） */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 text-muted hover:text-text transition-colors duration-200 rounded-full hover:bg-surface2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring z-10"
            aria-label="モーダルを閉じる"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h3
            id="line-modal-title"
            className="text-lg sm:text-xl font-semibold text-text mb-4 font-serif"
          >
            LINE公式アカウント
          </h3>

          <div className="bg-surface2 p-6 rounded-xl mb-6 border border-border">
            <div className="flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/common/line_qr.jpg"
                alt="美容室ウイング R LINE公式アカウントのQRコード"
                width={192}
                height={192}
                sizes="(max-width: 640px) 160px, 192px"
                className="object-cover w-full h-full"
                priority={false}
                quality={95}
              />
            </div>
          </div>

          <p
            id="line-modal-description"
            className="text-muted text-xs sm:text-sm mb-6 leading-relaxed"
          >
            スマートフォンでQRコードを読み取って
            <br />
            LINE公式アカウントを友だち追加してください
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => window.open(lineUrl, '_blank')}
              className="flex-1 bg-[#06C755] text-white px-4 py-3 rounded-xl hover:bg-[#05B04A] transition-colors duration-200 text-sm sm:text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="LINEをブラウザで開く"
            >
              ブラウザで開く
            </button>
            <button
              onClick={closeModal}
              className="flex-1 bg-surface2 text-text px-4 py-3 rounded-xl hover:bg-surface2/80 transition-colors duration-200 text-sm sm:text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="モーダルを閉じる"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <button
        onClick={handleLineClick}
        className={`
          ${variantStyles[variant]}
          ${variant !== 'large' ? sizeStyles[size] : ''}
          font-medium transition-colors duration-200 
          inline-flex items-center justify-center space-x-2
          flex-shrink-0 self-center shadow-sm
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg
          ${className}
        `}
        aria-label={`${text} - LINEで予約する`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.628-.629.628M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
        <span className="whitespace-nowrap">{text}</span>
      </button>

      {/* PortalでモーダルをBody直下に挿入 */}
      {mounted && modalContent && createPortal(modalContent, document.body)}
    </>
  );
};
