'use client';

import { ReactNode } from 'react';

export interface ToastContainerProps {
  children: ReactNode;
}

export function ToastContainer({ children }: ToastContainerProps) {
  return <div className="toast-container">{children}</div>;
}
