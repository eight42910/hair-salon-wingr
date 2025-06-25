import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  error?: string | null;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export const FormField = ({ 
  label, 
  error, 
  required, 
  children, 
  className = '' 
}: FormFieldProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}; 