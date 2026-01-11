/**
 * 🔒 WARLOGS DESIGN SYSTEM - CORE COMPONENT (LOCKED)
 * This component is a core primitive of the WarLogs Design System.
 * To maintain visual consistency, this file is PROTECTED against logic changes.
 * Extension and bugfixes only. See README.md for the locking policy.
 */
import { ReactNode } from 'react';

export interface Column<T> {
  key: string;
  label: string;
  render?: (value: any, row: T) => ReactNode;
}

export interface ManifestTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
}

export function ManifestTable<T extends Record<string, any>>({
  columns,
  data,
  onRowClick,
}: ManifestTableProps<T>) {
  return (
    <table className="manifest-table">
      <thead className="manifest-header">
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="manifest-cell">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="manifest-row"
            onClick={() => onRowClick?.(row)}
            style={{ cursor: onRowClick ? 'pointer' : 'default' }}
          >
            {columns.map((column) => (
              <td key={column.key} className="manifest-cell">
                {column.render
                  ? column.render(row[column.key], row)
                  : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
