/**
 * 🔒 WARLOGS DESIGN SYSTEM - CORE COMPONENT (LOCKED)
 * This component is a core primitive of the WarLogs Design System.
 * To maintain visual consistency, this file is PROTECTED against logic changes.
 * Extension and bugfixes only. See README.md for the locking policy.
 */
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
    <div className={`vox-toast ${type}`} role="alert" aria-live="polite">
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
