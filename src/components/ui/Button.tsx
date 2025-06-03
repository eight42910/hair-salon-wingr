import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles = {
  primary: 'bg-primary-500 text-white hover:bg-primary-700',
  secondary: 'bg-secondary-500 text-primary-900 hover:bg-secondary-700',
  outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'rounded-md font-medium transition-colors duration-200',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
};
