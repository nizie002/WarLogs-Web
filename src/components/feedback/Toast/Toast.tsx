'use client';

import { ReactNode } from 'react';

export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message?: string;
  onClose: () => void;
}

export function Toast({ type, title, message, onClose }: ToastProps) {
  return (
    <div className={`vox-toast ${type}`}>
      <div className="vox-toast-icon">
        {type === 'success' && '✓'}
        {type === 'error' && '✕'}
        {type === 'info' && 'ℹ'}
      </div>
      <div className="vox-toast-content">
        <div className="vox-toast-title">{title}</div>
        {message && <div className="vox-toast-text">{message}</div>}
      </div>
      <button
        type="button"
        onClick={onClose}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--color-text-muted)',
          cursor: 'pointer',
          padding: '4px',
        }}
        aria-label="Close toast"
      >
        ×
      </button>
    </div>
  );
}
