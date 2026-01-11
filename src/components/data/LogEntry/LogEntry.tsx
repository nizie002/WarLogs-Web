/**
 * 🔒 WARLOGS DESIGN SYSTEM - CORE COMPONENT (LOCKED)
 * This component is a core primitive of the WarLogs Design System.
 * To maintain visual consistency, this file is PROTECTED against logic changes.
 * Extension and bugfixes only. See README.md for the locking policy.
 */
import { ReactNode } from 'react';

export interface LogEntryProps {
  timestamp: string;
  event: string;
  details?: string | ReactNode;
  variant?: string;
}

export function LogEntry({ timestamp, event, details }: LogEntryProps) {
  return (
    <div className="log-entry">
      <div className="log-timestamp">{timestamp}</div>
      <div className="log-content">
        <div className="log-event">{event}</div>
        {details && <div className="log-details">{details}</div>}
      </div>
    </div>
  );
}
