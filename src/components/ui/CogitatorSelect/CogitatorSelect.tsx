/**
 * 🔒 WARLOGS DESIGN SYSTEM - CORE COMPONENT (LOCKED)
 * This component is a core primitive of the WarLogs Design System.
 * To maintain visual consistency, this file is PROTECTED against logic changes.
 * Extension and bugfixes only. See README.md for the locking policy.
 */
'use client';

import { useState, useId } from 'react';

/**
 * Props for the CogitatorSelect component
 */
export interface CogitatorSelectProps {
    /** Label displayed above the select */
    label: string;
    /** Array of options to choose from */
    options: string[];
    /** Default selected value (uncontrolled) */
    defaultValue?: string;
    /** Controlled value */
    value?: string;
    /** Callback when selection changes */
    onChange?: (value: string) => void;
    /** Additional CSS classes */
    className?: string;
}

/**
 * Custom select component with WarLogs grimdark aesthetic.
 * Can be used as controlled or uncontrolled component.
 * 
 * @example
 * ```tsx
 * <CogitatorSelect
 *   label="Protocol"
 *   options={['Alpha', 'Beta', 'Gamma']}
 *   defaultValue="Alpha"
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 */
export function CogitatorSelect({
    label,
    options,
    defaultValue,
    value: controlledValue,
    onChange,
    className = '',
}: CogitatorSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || options[0]);
    const id = useId();

    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleSelect = (option: string) => {
        if (controlledValue === undefined) {
            setInternalValue(option);
        }
        onChange?.(option);
        setIsOpen(false);
    };

    return (
        <div className={`cogitator-select ${isOpen ? 'is-open' : ''} ${className}`.trim()}>
            <div className="cogitator-label">{label}</div>
            <button
                id={id}
                className="cogitator-select__trigger"
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span>{value}</span>
                <span className="cogitator-select__chevron">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </button>

            {isOpen && (
                <div className="cogitator-select__dropdown" role="listbox">
                    {options.map((option) => (
                        <div
                            key={option}
                            className={`cogitator-select__option ${value === option ? 'is-selected' : ''}`}
                            onClick={() => handleSelect(option)}
                            role="option"
                            aria-selected={value === option}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
