import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
}: CardProps) => {
  const baseStyles = 'bg-white border border-gray-200 rounded-lg';
  const hoverStyles = hover ? 'hover:border-gray-300 transition-colors duration-200' : '';

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  );
};
