'use client';

import Link from 'next/link';
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
}

const sizeClasses = {
  sm: {
    container: 'text-base',
    sparkle: 'w-2 h-2',
  },
  md: {
    container: 'text-lg sm:text-xl',
    sparkle: 'w-2.5 h-2.5',
  },
  lg: {
    container: 'text-xl sm:text-2xl lg:text-3xl',
    sparkle: 'w-3 h-3',
  },
};

export const Logo = ({
  size = 'md',
  className = '',
  href = '/',
  onClick,
}: LogoProps) => {
  const sizes = sizeClasses[size];

  const LogoContent = () => (
    <div
      className={`
      ${sizes.container} ${className}
      relative group inline-flex items-center 
      font-semibold text-text 
      hover:text-accent 
      transition-colors duration-200 
      cursor-pointer
    `}
    >
      {/* メインロゴテキスト */}
      <div className="relative">
        <div className="relative z-10 flex items-center space-x-1">
          <div className="flex flex-col leading-tight">
            {/* メインタイトル - より自然で読みやすく */}
            <div className="flex items-baseline relative overflow-hidden">
              <span className="font-bold tracking-tight relative">
                美容室ウイング
              </span>
              <span className="font-bold ml-1">R</span>
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
