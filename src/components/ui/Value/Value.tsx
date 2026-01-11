/**
 * 🔒 WARLOGS DESIGN SYSTEM - CORE COMPONENT (LOCKED)
 * This component is a core primitive of the WarLogs Design System.
 * To maintain visual consistency, this file is PROTECTED against logic changes.
 * Extension and bugfixes only. See README.md for the locking policy.
 */
import { HTMLAttributes, ReactNode } from 'react';

export interface ValueProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'accent' | 'alert' | 'muted';
  children: ReactNode;
}

export function Value({
  size = 'md',
  variant = 'default',
  children,
  className = '',
  ...props
}: ValueProps) {
  const sizeClass = `value--${size}`;
  const variantClass = variant === 'default' ? '' : `value--${variant}`;
  const classes = `value ${sizeClass} ${variantClass} ${className}`.trim();

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
