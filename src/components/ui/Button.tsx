import { ButtonProps } from '@/types/ui';

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg';

  const variantStyles = {
    primary:
      'bg-accent text-white hover:bg-primary-700',
    secondary:
      'bg-accent2 text-white hover:bg-accent-600',
    outline:
      'border border-border text-text hover:bg-surface2/70',
    ghost: 'bg-transparent text-text hover:bg-surface2/70',
  };

  const sizeStyles = {
    sm: 'h-10 px-4 text-sm rounded-lg',
    md: 'h-11 px-6 text-sm rounded-xl',
    lg: 'h-12 px-7 text-base rounded-xl',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
