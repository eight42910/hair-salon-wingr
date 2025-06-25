import { ButtonHTMLAttributes, ReactNode } from 'react';

// Button Component Types
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: ReactNode;
}

// Section Title Types
export interface SectionTitleProps {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'left' | 'center' | 'right';
  showDivider?: boolean;
  mainTitle?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
}

// Card Component Types
export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
}

// Line Button Types
export interface LineButtonProps {
  variant?: 'line-official' | 'line-add';
  text?: string;
  className?: string;
}

// Form Input Types
export interface FormInputProps {
  label?: string;
  error?: string;
  required?: boolean;
  className?: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number';
  placeholder?: string;
}

export interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}
