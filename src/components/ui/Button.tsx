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
      'bg-accent hover:bg-primary-700 text-white shadow-sm',
    secondary:
      'bg-accent2 hover:bg-accent-600 text-white shadow-sm',
    outline:
      'border border-border hover:bg-surface2 text-text',
    ghost: 'bg-transparent hover:bg-surface2 text-text',
  };

  const sizeStyles = {
    sm: 'h-10 px-4 text-sm rounded-lg',
    md: 'h-11 px-5 text-sm rounded-xl',
    lg: 'h-12 px-6 text-base rounded-xl',
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
