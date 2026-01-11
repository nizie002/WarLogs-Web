'use client';

import React, { useEffect, useState } from 'react';

/**
 * Props for the LoadingRitual component
 */
export interface LoadingRitualProps {
  /** Optional message to display below the progress bar */
  message?: string;
  /** Whether the component is visible */
  visible?: boolean;
}

/**
 * Atmospheric loading component for the WarLogs interface.
 * Features a rotating mechanical cog, segmented progress bar, and pulsing text.
 * 
 * @example
 * ```tsx
 * <LoadingRitual message="INITIALIZING..." />
 * ```
 */
export function LoadingRitual({
  message = "COMMUNING WITH MACHINE SPIRIT...",
  visible = true
}: LoadingRitualProps) {
  const [progress, setProgress] = useState(0);

  // Simulate loading sequence for visual demo
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 6) return 0; // Loop for demo (5 segments + 1 reset state)
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="loading-ritual">
      {/* Rotating Cog */}
      <div className="loading-icon-wrapper">
        {/* Custom 3-Spoke Grimdark Cog */}
        <svg
          className="loading-glyph"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          role="img"
          aria-label="Rotating mechanical cog"
        >
          {/* Ring */}
          <circle cx="12" cy="12" r="7" />

          {/* 3 Spokes (Y-Shape) */}
          <path d="M12 12V5" />
          <path d="M12 12L18.06 15.5" />
          <path d="M12 12L5.94 15.5" />

          {/* Center Hub */}
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />

          {/* Outer Teeth (12 points) */}
          <path d="M12 2v2 M17 3.34l-1 1.73 M20.66 7l-1.73 1 M22 12h-2 M20.66 17l-1.73-1 M17 20.66l-1-1.73 M12 22v-2 M7 20.66l1-1.73 M3.34 17l1.73-1 M2 12h2 M3.34 7l1.73 1 M7 3.34l1 1.73" />
        </svg>
      </div>

      {/* Segmented Progress Bar */}
      <div className="segmented-progress">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`progress-segment ${i < progress ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Pulsing Text */}
      <div className="loading-text">{message}</div>
    </div>
  );
}
