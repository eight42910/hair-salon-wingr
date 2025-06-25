import { forwardRef } from 'react';

interface FormInputProps {
  type?: 'text' | 'email' | 'tel' | 'password';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string | null;
  disabled?: boolean;
  className?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      type = 'text',
      placeholder,
      value,
      onChange,
      onBlur,
      error,
      disabled = false,
      className = '',
    },
    ref
  ) => {
    const baseStyles =
      'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors';
    const errorStyles = error
      ? 'border-red-300 focus:ring-red-500'
      : 'border-gray-300';

    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        disabled={disabled}
        className={`${baseStyles} ${errorStyles} ${className}`}
      />
    );
  }
);

FormInput.displayName = 'FormInput';
