import { InputHTMLAttributes, useId } from 'react';

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
  const generatedId = useId();
  const toggleId = id || `toggle-${generatedId}`;

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
        <div className="machine-toggle-track">
          <span className="machine-toggle-text-on">ON</span>
          <span className="machine-toggle-text-off">OFF</span>
          <div className="machine-toggle-knob" />
        </div>
      </label>
    </div>
  );
}
