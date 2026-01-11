import { HTMLAttributes, ReactNode } from 'react';

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  variant?: 'default' | 'inline' | 'faction';
  children: ReactNode;
}

export function Label({
  variant = 'default',
  children,
  className = '',
  ...props
}: LabelProps) {
  const variantClass = variant === 'default' ? '' : `label--${variant}`;
  const classes = `label ${variantClass} ${className}`.trim();

  return (
    <label className={classes} {...props}>
      {children}
    </label>
  );
}
