/**
 * 🔒 WARLOGS DESIGN SYSTEM - CORE COMPONENT (LOCKED)
 * This component is a core primitive of the WarLogs Design System.
 * To maintain visual consistency, this file is PROTECTED against logic changes.
 * Extension and bugfixes only. See README.md for the locking policy.
 */
import { InputHTMLAttributes, ReactNode, useId } from 'react';

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
  const generatedId = useId();
  const checkboxId = id || `hex-${generatedId}`;
  const inputType = group ? 'radio' : 'checkbox';

  return (
    <label className="hex-checkbox-wrapper" htmlFor={checkboxId}>
      <input
        type={inputType}
        id={checkboxId}
        className={`hex-checkbox-input ${className}`.trim()}
        checked={checked}
        onChange={onChange}
        name={group} // Name is required for radio groups to work native
        {...props}
      />

      {/* Visual Representation */}
      <div className="hex-checkbox-visual">
        <div className="hex-checkbox-shape" />
      </div>

      {label && (
        <span className="hex-checkbox-label">
          {label}
        </span>
      )}
    </label>
  );
}
