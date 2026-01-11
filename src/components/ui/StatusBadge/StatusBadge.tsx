import { HTMLAttributes, ReactNode } from 'react';

export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'active' | 'alert';
  children: ReactNode;
}

export function StatusBadge({
  variant = 'default',
  children,
  className = '',
  ...props
}: StatusBadgeProps) {
  const variantClass = variant === 'default' ? '' : variant;
  const classes = `status-badge ${variantClass} ${className}`.trim();

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
