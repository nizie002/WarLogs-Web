import { ReactNode } from 'react';

export interface LoadingRitualProps {
  message?: string;
  visible?: boolean;
}

export function LoadingRitual({ message, visible = true }: LoadingRitualProps) {
  if (!visible) return null;

  return (
    <div className="loading-ritual">
      <div className="loading-glyph">⚙</div>
      <div className="segmented-progress">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="progress-segment" />
        ))}
      </div>
      {message && <div className="loading-text">{message}</div>}
    </div>
  );
}
