/**
 * 🔒 WARLOGS DESIGN SYSTEM - CORE COMPONENT (LOCKED)
 * This component is a core primitive of the WarLogs Design System.
 * To maintain visual consistency, this file is PROTECTED against logic changes.
 * Extension and bugfixes only. See README.md for the locking policy.
 */
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
