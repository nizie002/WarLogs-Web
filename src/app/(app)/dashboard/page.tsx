'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
    // TODO: Read userId from session cookie and fetch profile from backend
    const mockUser = { name: 'OPERATIVE ALPHA' };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

            {/* Header - Avatar right-aligned */}
            <header style={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: 'var(--space-md) var(--space-lg)',
                borderBottom: '1px solid var(--color-border-dim)'
            }}>
                <Link href="/account" style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', cursor: 'pointer' }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'var(--color-bg-surface)',
                            border: '2px solid var(--color-primary-action)',
                            boxShadow: 'var(--shadow-glow-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-action)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <span style={{
                            fontFamily: 'var(--font-interface)',
                            fontWeight: 700,
                            fontSize: '0.85rem',
                            letterSpacing: '0.05em',
                            color: 'var(--color-text-primary)'
                        }}>
                            {mockUser.name}
                        </span>
                    </div>
                </Link>
            </header>

            {/* Main - Centered CTAs */}
            <main style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 'var(--space-xl)',
                gap: 'var(--space-md)'
            }}>
                <Link href="/lists" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary" style={{ minWidth: '280px', justifyContent: 'center' }} icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                    }>
                        MANAGE LISTS
                    </Button>
                </Link>

                <Link href="/host" style={{ textDecoration: 'none' }}>
                    <Button variant="primary" style={{ minWidth: '280px', justifyContent: 'center' }} icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                    }>
                        HOST A GAME
                    </Button>
                </Link>

                <Link href="/join" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary" style={{ minWidth: '280px', justifyContent: 'center' }} icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                    }>
                        JOIN A GAME
                    </Button>
                </Link>
            </main>

            {/* Footer */}
            <footer style={{
                padding: 'var(--space-sm)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 'var(--space-xs)',
                borderTop: '1px solid var(--color-border-dim)'
            }}>
                <span className="status-light online" />
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>
                    STRATEGIUM CONNECTED
                </span>
            </footer>

        </div>
    );
}
