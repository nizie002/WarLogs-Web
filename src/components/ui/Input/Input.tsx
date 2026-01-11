import { InputHTMLAttributes, useId } from 'react';

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
  const generatedId = useId();
  const inputId = id || `input-${generatedId}`;
  const inputClasses = `cogitator-input ${error ? 'cogitator-input--error' : ''} ${className}`.trim();

  return (
    <div className="cogitator-input-wrapper">
      {label && (
        <label htmlFor={inputId} className="cogitator-label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={inputClasses}
        {...props}
      />
      {helperText && (
        <div className="cogitator-helper">
          {helperText}
        </div>
      )}
    </div>
  );
}
