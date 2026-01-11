import { HTMLAttributes } from 'react';

export interface StatusLightProps extends HTMLAttributes<HTMLSpanElement> {
  status: 'online' | 'critical' | 'offline';
}

export function StatusLight({
  status,
  className = '',
  ...props
}: StatusLightProps) {
  const classes = `status-light ${status} ${className}`.trim();

  return <span className={classes} {...props} />;
}
