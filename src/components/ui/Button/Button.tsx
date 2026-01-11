/**
 * 🔒 WARLOGS DESIGN SYSTEM - CORE COMPONENT (LOCKED)
 * This component is a core primitive of the WarLogs Design System.
 * To maintain visual consistency, this file is PROTECTED against logic changes.
 * Extension and bugfixes only. See README.md for the locking policy.
 */
import { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Props for the Button component
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Optional icon to display before the button text */
  icon?: ReactNode;
}

/**
 * Primary action button component for the WarLogs interface.
 * Supports three variants (primary, secondary, danger), three sizes, and optional icons.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" icon={<PlusIcon />}>
 *   Add Entry
 * </Button>
 * ```
 */
export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const variantClass = variant === 'primary' ? '' : variant;
  const sizeClass = size === 'md' ? '' : size;
  const classes = `action-button ${variantClass} ${sizeClass} ${className}`.trim();

  return (
    <button className={classes} {...props}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
