import { ReactNode } from 'react';

interface SectionTitleProps {
  mainTitle: string; // 日本語メインタイトル（必須）
  subTitle?: string; // 英語サブタイトル（装飾的、オプション）
  description?: string; // 日本語説明文（オプション）
  level?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center' | 'right';
  className?: string;
  showDivider?: boolean;
  // 後方互換性のため既存のpropsも維持
  children?: ReactNode;
  title?: string;
}

export const SectionTitle = ({
  mainTitle,
  subTitle,
  description,
  level = 'h2',
  align = 'center',
  className = '',
  showDivider = true,
  // 後方互換性
  children,
  title,
}: SectionTitleProps) => {
  const Component = level;

  // 後方互換性: childrenまたはtitleが渡された場合は従来通り表示
  const displayTitle =
    mainTitle || title || (typeof children === 'string' ? children : '');

  const baseStyles = 'font-bold tracking-wide text-gray-900';
  const sizeStyles = {
    h1: 'text-3xl md:text-4xl lg:text-5xl mb-6',
    h2: 'text-2xl md:text-3xl lg:text-4xl mb-4',
    h3: 'text-xl md:text-2xl lg:text-3xl mb-3',
  };
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const containerClass =
    align === 'center'
      ? 'text-center'
      : align === 'right'
      ? 'text-right'
      : 'text-left';

  return (
    <div className={`mb-8 ${containerClass} ${className}`}>
      {/* 英語サブタイトル：装飾的（小さく上部に） */}
      {subTitle && (
        <span className="inline-block text-xs md:text-sm text-primary-600 font-medium tracking-widest uppercase mb-2 opacity-80">
          {subTitle}
        </span>
      )}

      {/* 日本語メインタイトル */}
      <Component
        className={`${baseStyles} ${sizeStyles[level]} ${alignStyles[align]} text-primary-900`}
      >
        {displayTitle}
      </Component>

      {/* 日本語説明文 */}
      {description && (
        <p className="text-sm md:text-base text-gray-600 mt-3 max-w-2xl mx-auto leading-relaxed text-left md:text-center">
          {description}
        </p>
      )}

      {/* 装飾ライン */}
      {showDivider && (
        <div
          className={`h-0.5 bg-primary-400 mt-4 ${
            align === 'center'
              ? 'w-24 mx-auto'
              : align === 'right'
              ? 'w-24 ml-auto'
              : 'w-24'
          }`}
        />
      )}
    </div>
  );
};
