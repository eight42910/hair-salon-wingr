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
  const baseStyles = 'bg-surface border border-border/60 rounded-xl';
  const hoverStyles = hover
    ? 'hover:border-accent2 transition-colors duration-200'
    : '';

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
