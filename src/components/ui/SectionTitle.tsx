import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  level?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center' | 'right';
  className?: string;
  showDivider?: boolean;
}

export const SectionTitle = ({
  children,
  level = 'h2',
  align = 'center',
  className = '',
  showDivider = true,
}: SectionTitleProps) => {
  const Component = level;

  const baseStyles = 'font-bold text-gray-900';
  const sizeStyles = {
    h1: 'text-4xl mb-4',
    h2: 'text-xl mb-2',
    h3: 'text-lg mb-2',
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
    <div className={`mb-6 ${containerClass}`}>
      <Component
        className={`${baseStyles} ${sizeStyles[level]} ${alignStyles[align]} ${className}`}
      >
        {children}
      </Component>
      {showDivider && (
        <div
          className={`h-0.5 bg-gray-900 mt-2 ${
            align === 'center'
              ? 'w-24 mx-auto'
              : align === 'right'
              ? 'w-24 ml-auto'
              : 'w-24'
          }`}
        ></div>
      )}
    </div>
  );
};
