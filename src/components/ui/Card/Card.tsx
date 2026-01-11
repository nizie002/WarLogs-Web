/**
 * 🔒 WARLOGS DESIGN SYSTEM - CORE COMPONENT (LOCKED)
 * This component is a core primitive of the WarLogs Design System.
 * To maintain visual consistency, this file is PROTECTED against logic changes.
 * Extension and bugfixes only. See README.md for the locking policy.
 */
import { HTMLAttributes, ReactNode } from 'react';

/**
 * Props for the Card component
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: 'subtle' | 'standard' | 'accent';
  /** Surface rendering mode */
  surface?: 'solid' | 'glass';
  children: ReactNode;
}

/**
 * Container card component for the WarLogs interface.
 * Provides consistent spacing, borders, and background styling.
 */
export function Card({
  variant = 'standard',
  surface = 'solid',
  children,
  className = '',
  ...props
}: CardProps) {
  const classes = `card card--${variant} card--${surface} ${className}`.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

/**
 * Props for the CardHeader component
 */
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether to center the header content */
  centered?: boolean;
  children: ReactNode;
}

/**
 * Header section of a Card component.
 */
export function CardHeader({
  children,
  className = '',
  centered,
  ...props
}: CardHeaderProps) {
  const classes = `card__header ${centered ? 'card__header--centered' : ''} ${className}`.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`card__body ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`card__title ${className}`.trim()} {...props}>
      {children}
    </h3>
  );
}

export function CardSubtitle({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`card__subtitle ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}
