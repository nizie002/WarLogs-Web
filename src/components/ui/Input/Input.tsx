import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
}

export function Input({
  label,
  helperText,
  error,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const inputClasses = `cogitator-input ${error ? 'error' : ''} ${className}`.trim();

  return (
    <div className="cogitator-input-wrapper">
      <input
        id={inputId}
        className={inputClasses}
        {...props}
      />
      {label && (
        <label htmlFor={inputId} className="cogitator-input-label">
          {label}
        </label>
      )}
      {helperText && (
        <div className="cogitator-input-helper">
          {helperText}
        </div>
      )}
    </div>
  );
}
