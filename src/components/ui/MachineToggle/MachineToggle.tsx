import { InputHTMLAttributes } from 'react';

export interface MachineToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
}

export function MachineToggle({
  label,
  description,
  className = '',
  id,
  checked,
  onChange,
  ...props
}: MachineToggleProps) {
  const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="toggle-item">
      {(label || description) && (
        <div className="toggle-info">
          {label && <div className="toggle-label">{label}</div>}
          {description && <div className="toggle-description">{description}</div>}
        </div>
      )}
      <label htmlFor={toggleId} className={`machine-toggle ${className}`.trim()}>
        <input
          type="checkbox"
          id={toggleId}
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <span className="machine-toggle-knob" />
      </label>
    </div>
  );
}
