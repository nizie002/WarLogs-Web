import { HTMLAttributes } from 'react';

export interface StatusLightProps extends HTMLAttributes<HTMLSpanElement> {
  status: 'online' | 'warning' | 'critical' | 'offline';
}

export function StatusLight({
  status,
  className = '',
  ...props
}: StatusLightProps) {
  const classes = `status-light ${status} ${className}`.trim();
  const ariaLabel = `Status: ${status}`;

  return <span className={classes} role="status" aria-label={ariaLabel} {...props} />;
}
