'use client';

import Link from 'next/link';
import { Scissors } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const sizeClasses = {
  sm: {
    container: 'text-base',
    icon: 'w-4 h-4',
    sparkle: 'w-2 h-2',
  },
  md: {
    container: 'text-lg sm:text-xl',
    icon: 'w-5 h-5',
    sparkle: 'w-2.5 h-2.5',
  },
  lg: {
    container: 'text-xl sm:text-2xl lg:text-3xl',
    icon: 'w-6 h-6',
    sparkle: 'w-3 h-3',
  },
};

export const Logo = ({
  size = 'md',
  showIcon = true,
  className = '',
  href = '/',
  onClick,
}: LogoProps) => {
  const sizes = sizeClasses[size];

  const LogoContent = () => (
    <div
      className={`
      ${sizes.container} ${className}
      relative group inline-flex items-center space-x-2 
      font-semibold text-text 
      hover:text-accent 
      transition-colors duration-200 
      cursor-pointer
    `}
    >
      {/* メインロゴテキスト */}
      <div className="relative">
        <div className="relative z-10 flex items-center space-x-1">
          {showIcon && (
            <div className="relative">
              {/* ハサミアイコン */}
              <Scissors
                className={`
                ${sizes.icon} 
                text-accent 
                group-hover:text-primary-700 
                transition-colors duration-200 
              `}
              />
            </div>
          )}

          <div className="flex flex-col leading-tight">
            {/* メインタイトル - より自然で読みやすく */}
            <div className="flex items-baseline relative overflow-hidden">
              <span className="font-bold tracking-tight relative">
                美容室ウイング
              </span>
              <span className="font-black text-accent2 ml-1 relative">
                R
              </span>
            </div>

            {/* サブタイトル - アニメーション追加 */}
            {size === 'lg' && (
              <div className="text-xs text-muted uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium mt-1 transform translate-y-1 group-hover:translate-y-0">
                Hair Salon Wing R
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (href && onClick) {
    return (
      <Link href={href} onClick={onClick}>
        <LogoContent />
      </Link>
    );
  }

  if (href) {
    return (
      <Link href={href}>
        <LogoContent />
      </Link>
    );
  }

  return (
    <div onClick={onClick}>
      <LogoContent />
    </div>
  );
};
