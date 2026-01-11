import { InputHTMLAttributes, ReactNode } from 'react';

export interface HexCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
  group?: string;
}

export function HexCheckbox({
  label,
  group,
  className = '',
  id,
  checked,
  onChange,
  ...props
}: HexCheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="hex-checkbox-wrapper">
      <input
        type="checkbox"
        id={checkboxId}
        className={`hex-checkbox ${checked ? 'checked' : ''} ${className}`.trim()}
        checked={checked}
        onChange={onChange}
        {...(group ? { name: group } : {})}
        {...props}
      />
      {label && (
        <label htmlFor={checkboxId} className="hex-checkbox-label">
          {label}
        </label>
      )}
    </div>
  );
}
