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
      'w-full h-11 px-3 border rounded-xl bg-surface text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent transition-colors';
    const errorStyles = error
      ? 'border-red-300 focus-visible:ring-red-500'
      : 'border-border';

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
