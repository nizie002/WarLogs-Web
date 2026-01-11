import { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'subtle' | 'standard' | 'accent';
  surface?: 'solid' | 'glass';
  children: ReactNode;
}

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

export function CardHeader({
  children,
  className = '',
  centered,
  ...props
}: HTMLAttributes<HTMLDivElement> & { centered?: boolean }) {
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
