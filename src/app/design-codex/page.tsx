'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import { StatusLight } from '@/components/ui/StatusLight';
import { Value } from '@/components/ui/Value';
import { Button } from '@/components/ui/Button';
import { HexCheckbox } from '@/components/ui/HexCheckbox';
import { MachineToggle } from '@/components/ui/MachineToggle';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Modal } from '@/components/feedback/Modal';
import { LoadingRitual } from '@/components/feedback/LoadingRitual';
import { CogitatorSelect } from '@/components/ui/CogitatorSelect';



export default function DesignCodex() {
    const [isGlitching, setIsGlitching] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Hex Checkbox Demo State
    const [hexChecked, setHexChecked] = useState(false);
    const [hexChained, setHexChained] = useState(true);
    const [radioValue, setRadioValue] = useState('alpha');

    // Machine Toggle Demo State
    const [toggleOne, setToggleOne] = useState(false);
    const [toggleTwo, setToggleTwo] = useState(true);

    // Modal Demo State
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Navigation Demo State
    const [navActive, setNavActive] = useState('item-1');




    // Vox Toast Demo State
    interface Toast {
        id: number;
        type: 'success' | 'error' | 'info';
        title: string;
        message: string;
        exiting?: boolean;
    }
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = useCallback((id: number) => {
        setToasts((prev) => prev.map(t => t.id === id ? { ...t, exiting: true } : t));
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 300); // Wait for exit animation
    }, []);

    const addToast = useCallback((type: 'success' | 'error' | 'info') => {
        const id = Date.now();
        const newToast: Toast = {
            id,
            type,
            title: type === 'error' ? 'Critical Error' : 'Success',
            message: type === 'error' ? 'Data corruption detected in vox-link.' : 'Transmission received and verified.',
        };
        setToasts((prev) => [...prev, newToast]);

        // Auto-dismiss
        setTimeout(() => {
            removeToast(id);
        }, 5000);
    }, [removeToast]);
    const triggerGlitch = () => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
    };

    const triggerTransition = () => {
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 300);
    };

    return (
        <div className={`page-glitch ${isTransitioning ? 'page-glitch--active' : ''}`} style={{ flex: 1, padding: 'var(--space-2xl)', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
            <header className="page-header">
                <div className="page-header-info">
                    <h1>DESIGN CODEX</h1>
                    <p className="page-header-meta">Component Reference | All UI Elements</p>
                </div>
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary" className="sm">
                        <span style={{ display: 'flex', marginRight: '4px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                        </span>
                        RETURN
                    </Button>
                </Link>
            </header>


            {/* ===== DESIGN TOKENS ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Design Tokens</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                        {/* Colors */}
                        <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ width: '60px', height: '60px', background: 'var(--color-bg-void)', border: '1px solid var(--color-border-dim)' }} />
                                <span className="label" style={{ fontSize: '0.6rem' }}>VOID</span>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ width: '60px', height: '60px', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-dim)' }} />
                                <span className="label" style={{ fontSize: '0.6rem' }}>SURFACE</span>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ width: '60px', height: '60px', background: 'var(--color-primary-action)', border: '1px solid var(--color-border-dim)' }} />
                                <span className="label" style={{ fontSize: '0.6rem' }}>PRIMARY</span>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ width: '60px', height: '60px', background: 'var(--color-primary-alert)', border: '1px solid var(--color-border-dim)' }} />
                                <span className="label" style={{ fontSize: '0.6rem' }}>ALERT</span>
                            </div>
                        </div>
                        {/* Spacing */}
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-md)' }}>
                            <div style={{ width: 'var(--space-xs)', height: 'var(--space-xs)', background: 'var(--color-border-dim)' }} title="xs (8px)" />
                            <div style={{ width: 'var(--space-sm)', height: 'var(--space-sm)', background: 'var(--color-border-dim)' }} title="sm (12px)" />
                            <div style={{ width: 'var(--space-md)', height: 'var(--space-md)', background: 'var(--color-border-dim)' }} title="md (16px)" />
                            <div style={{ width: 'var(--space-lg)', height: 'var(--space-lg)', background: 'var(--color-border-dim)' }} title="lg (24px)" />
                            <div style={{ width: 'var(--space-xl)', height: 'var(--space-xl)', background: 'var(--color-border-dim)' }} title="xl (32px)" />
                            <span className="label">Spacing Scale</span>
                        </div>
                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Color System</h4>
                        <p>High-contrast &quot;Grim Dark&quot; aesthetic. Key tokens:</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', marginBottom: 'var(--space-md)' }}>
                            <li><code>--color-bg-void</code>: Deep black (#0a0a0a) for page backgrounds.</li>
                            <li><code>--color-primary-action</code>: Neon Green (#39ff14) for interactions.</li>
                            <li><code>--color-primary-alert</code>: Signal Red (#ef4444) for errors/critical states.</li>
                        </ul>

                        <h4>Spacing</h4>
                        <p>Modular scale based on 4px units (<code>--space-unit</code>). Consistent padding and margins ensure visual rhythm.</p>
                    </div>
                </div>
            </section>

            {/* ===== TYPOGRAPHY ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Typography</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                        <h1 style={{ margin: 0 }}>HEADING 1 (CINZEL)</h1>
                        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>HEADING 2</h2>
                        <h3 style={{ margin: 0, fontSize: '1.1rem' }}>HEADING 3</h3>
                        <p style={{ marginTop: 'var(--space-sm)' }}>Body text using Rajdhani font family. Normal paragraph content.</p>
                        <p className="text-muted">Muted text for secondary information.</p>
                        <p className="text-accent">Accent text in Gauss Green.</p>
                        <p className="text-alert">Alert text in red.</p>
                        <p className="tabular-nums" style={{ marginTop: 'var(--space-sm)' }}>1234567890 - Tabular numbers</p>
                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Type System</h4>
                        <p>Font families and hierarchy.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Cinzel:</strong> Serif display font. Uppercase, dramatic. Used for Headings H1-H3.</li>
                            <li><strong>Rajdhani:</strong> Sans-serif technical font. Used for body, UI, and data.</li>
                            <li><strong>Helpers:</strong> <code>.text-muted</code>, <code>.text-accent</code>, <code>.text-alert</code>.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== ATMOSPHERIC EFFECTS ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Atmospheric Effects</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                        <div className="label" style={{ marginBottom: 'var(--space-xs)' }}>SCANLINE OVERLAY</div>
                        <div style={{
                            height: '300px',
                            background: 'var(--color-bg-void)',
                            border: '1px solid var(--color-border-dim)',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'flex-start',
                            padding: 'var(--space-lg)'
                        }}>
                            {/* Corner Bracket */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '8px',
                                height: '8px',
                                borderTop: '1px solid var(--color-text-muted)',
                                borderLeft: '1px solid var(--color-text-muted)'
                            }} />

                            {/* Simulated Scanline Effect for Preview */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(57, 255, 20, 0.05) 2px,
                  rgba(57, 255, 20, 0.05) 4px
                )`,
                                pointerEvents: 'none',
                                opacity: 0.8,
                                animation: 'flicker 0.15s infinite'
                            }} />

                            {/* Sweep Line Animation */}
                            <div style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                height: '100px',
                                background: 'linear-gradient(to bottom, transparent 0%, rgba(57, 255, 20, 0.05) 50%, transparent 100%)',
                                animation: 'sweep-glitch 6s steps(120, end) infinite',
                                pointerEvents: 'none'
                            }} />

                            {/* Content Preview */}
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <Value size="lg">ACTIVE PREVIEW</Value>
                                <p className="text-muted" style={{ fontSize: '0.8rem' }}>Simulated UI layer with scanline interference.</p>
                            </div>
                        </div>
                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Immersion Layers</h4>
                        <p>Visual interference layers used to create a &quot;tactical display&quot; feel.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Scanlines:</strong> 2px repeating gradient on a 4px cycle.</li>
                            <li><strong>Physical Flicker:</strong> Subtle opacity modulation (0.97 - 1.0) for CRT-like interaction.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== MOTION DESIGN ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Motion Design</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
                        {/* Glitch Trigger */}
                        <div>
                            <div className="label" style={{ marginBottom: 'var(--space-sm)' }}>GLITCH (CHROMATIC ABERRATION)</div>
                            <Button
                                variant="secondary"
                                onClick={triggerGlitch}
                                className={isGlitching ? 'glitch glitch--active' : ''}
                                data-text="TRIGGER GLITCH"
                            >
                                <span style={{ marginRight: '8px', display: 'flex' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                </span> TRIGGER GLITCH
                            </Button>
                            <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: 'var(--space-xs)' }}>
                                RGB split effect with brightness shifts. 100ms duration, linear easing.
                            </p>
                        </div>

                        {/* Transition Trigger */}
                        <div>
                            <div className="label" style={{ marginBottom: 'var(--space-sm)' }}>PAGE TRANSITION GLITCH</div>
                            <Button
                                variant="secondary"
                                onClick={triggerTransition}
                            >
                                <span style={{ marginRight: '8px', display: 'flex' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" /></svg>
                                </span> TRIGGER TRANSITION
                            </Button>
                            <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: 'var(--space-xs)' }}>
                                Applied automatically on route changes via JavaScript. 180ms duration with skew and chromatic aberration.
                            </p>
                        </div>
                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Animation System</h4>
                        <p>High-fidelity motion design reinforcing the tactical display aesthetic.</p>

                        <h5 style={{ color: 'var(--color-text-primary)', marginTop: 'var(--space-md)' }}>Visual Effects</h5>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><code style={{ color: 'var(--color-primary-action)' }}>.glitch</code>: RGB chromatic aberration with brightness shifts. 100ms, linear. Used on interactions.</li>
                            <li><code style={{ color: 'var(--color-primary-action)' }}>.page-glitch</code>: Enhanced glitch for major navigation. 180ms with skew transforms.</li>
                        </ul>

                        <h5 style={{ color: 'var(--color-text-primary)', marginTop: 'var(--space-md)' }}>Timing Tokens</h5>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)' }}>
                            <li><code>--duration-snap: 150ms</code> - Quick state changes</li>
                            <li><code>--duration-modal: 300ms</code> - Modal entrances/exits</li>
                            <li><code>--duration-glitch: 100ms</code> - Glitch effects</li>
                        </ul>

                        <h5 style={{ color: 'var(--color-text-primary)', marginTop: 'var(--space-md)' }}>Easing Functions</h5>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)' }}>
                            <li><code>--easing-mechanical: linear</code> - Snap transitions</li>
                            <li><code>--easing-aggressive: cubic-bezier(0, 1, 0, 1)</code> - Dramatic effects</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== ACTION BUTTONS ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Action Buttons</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-md)' }}>
                        <Button variant="primary" icon={<span style={{ display: 'flex' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>}>PRIMARY</Button>
                        <Button variant="secondary" icon={<span style={{ display: 'flex' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>}>SECONDARY</Button>
                        <Button variant="danger" icon={<span style={{ display: 'flex' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></span>}>DANGER</Button>
                        <Button variant="secondary" disabled icon={<span style={{ display: 'flex' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>}>DISABLED</Button>
                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Interactive Actions</h4>
                        <p>Standard button component <code>.action-button</code>. Designed for high visibility against dark backgrounds.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Default:</strong> Transparent with primary border. Glows green on hover.</li>
                            <li><strong>Active:</strong> Fills solid green (Lightning Flash animation).</li>
                            <li><strong>Variants:</strong> <code style={{ color: 'var(--color-primary-action)' }}>.secondary</code> (Muted), <code style={{ color: 'var(--color-primary-alert)' }}>.danger</code> (Red/Alert).</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== SMALL ACTIONS / ICON BUTTONS ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Small Actions / Icon Buttons</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                        <div className="label" style={{ marginBottom: 'var(--space-xs)' }}>USED FOR CONTEXTUAL TOOLS IN CARD HEADERS.</div>
                        <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center' }}>
                            <div style={{ textAlign: 'center' }}>
                                <Button className="sm is-active" icon={<span style={{ display: 'flex' }}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></span>}>FILTER</Button>
                                <div className="label" style={{ fontSize: '0.6rem', marginTop: 'var(--space-xs)', opacity: 0.6 }}>.ACTIVE (TOGGLED)</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Button className="sm" icon={<span style={{ display: 'flex' }}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg></span>}>SCAN</Button>
                                <div className="label" style={{ fontSize: '0.6rem', marginTop: 'var(--space-xs)', opacity: 0.6 }}>DEFAULT</div>
                            </div>
                        </div>
                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Contextual Controls</h4>
                        <p>Compact variant <code style={{ color: 'var(--color-primary-action)' }}>.action-button.sm</code>.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Usage:</strong> Card headers, toolbars, dense grids.</li>
                            <li><strong>Sizing:</strong> Reduced padding and font-size.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== COGITATOR INPUT ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Cogitator Input</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                        <div className="cogitator-input-wrapper" style={{ marginTop: 0 }}>
                            <div className="cogitator-label">Standard Input</div>
                            <input type="text" className="cogitator-input" defaultValue="Example Value" />
                        </div>

                        <div className="cogitator-input-wrapper">
                            <div className="cogitator-label">Number Input</div>
                            <input type="number" className="cogitator-input" defaultValue="2000" />
                        </div>

                        <div className="cogitator-input-wrapper">
                            <div className="cogitator-label">Error State</div>
                            <input type="text" className="cogitator-input cogitator-input--error" defaultValue="Invalid" />
                            <div className="cogitator-helper">Logic Corruption: Verification Failed</div>
                        </div>

                        <div className="cogitator-input-wrapper">
                            <CogitatorSelect
                                label="Cogitator Select"
                                defaultValue="Select Protocol"
                                options={['Select Protocol', 'Protocol Alpha', 'Protocol Beta', 'Protocol Gamma']}
                            />
                        </div>
                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Data Entry</h4>
                        <p>&quot;Box-style&quot; text inputs with &quot;chamfered appearance&quot;. Labels are absolutely positioned to sit on the top border.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Focus:</strong> Green border + Primary Glow.</li>
                            <li><strong>Error:</strong> Red border + Glitch animation on validation failure.</li>
                            <li><strong>Helper Text:</strong> Optional support text below input.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== HEX CHECKBOX ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Hex Checkbox</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>

                        {/* Standalone Checkboxes */}
                        <div>
                            <div className="label" style={{ marginBottom: 'var(--space-md)' }}>STANDALONE STATES</div>
                            <div style={{ display: 'flex', gap: 'var(--space-xl)' }}>
                                <HexCheckbox
                                    label="Unchecked"
                                    checked={hexChecked}
                                    onChange={() => setHexChecked(!hexChecked)}
                                />
                                <HexCheckbox
                                    label="Checked"
                                    checked={hexChained}
                                    onChange={() => setHexChained(!hexChained)}
                                />
                            </div>
                        </div>

                        {/* Radio Group */}
                        <div>
                            <div className="label text-accent" style={{ marginBottom: 'var(--space-md)' }}>EXCLUSIVE STATE (RADIO SYSTEM)</div>
                            <div style={{ display: 'flex', gap: 'var(--space-xl)' }}>
                                <HexCheckbox
                                    label="Option Alpha"
                                    group="demo-radio"
                                    checked={radioValue === 'alpha'}
                                    onChange={() => setRadioValue('alpha')}
                                />
                                <HexCheckbox
                                    label="Option Beta"
                                    group="demo-radio"
                                    checked={radioValue === 'beta'}
                                    onChange={() => setRadioValue('beta')}
                                />
                            </div>
                        </div>

                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Hexagonal Control</h4>
                        <p>Diamond-shaped checkbox component <code>.hex-checkbox</code>.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Appearance:</strong> 24px rotated square. Fills solid green when active.</li>
                            <li><strong>Behavior:</strong> Can function as a standard checkbox or as a radio button group using <code>data-hex-group</code>.</li>
                            <li><strong>Accessibility:</strong> Supports keyboard navigation (Enter/Space).</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== MACHINE TOGGLE ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Machine Toggle</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

                        <MachineToggle
                            label="TOGGLE LABEL"
                            description="Description text here"
                            checked={toggleOne}
                            onChange={() => setToggleOne(!toggleOne)}
                        />

                        <MachineToggle
                            label="ACTIVE TOGGLE"
                            description="This one is enabled"
                            checked={toggleTwo}
                            onChange={() => setToggleTwo(!toggleTwo)}
                        />

                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Binary Switch</h4>
                        <p>Physical switch simulation <code>.machine-toggle</code> for system settings.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>States:</strong> Displays distinct ON/OFF labels inside the track.</li>
                            <li><strong>Animation:</strong> Knob slides with aggressive easing (mechanical feel).</li>
                            <li><strong>Feedback:</strong> Knob changes color (Red/Green) and glows when active.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== VALUE SIZES ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Value Sizes</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>

                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2xl)' }}>
                            <div>
                                <Value size="sm">42</Value>
                                <div className="label" style={{ marginTop: 'var(--space-xs)' }}>.VALUE--SM</div>
                            </div>

                            <div>
                                <Value size="md" variant="accent">127</Value>
                                <div className="label" style={{ marginTop: 'var(--space-xs)' }}>.VALUE--MD</div>
                            </div>

                            <div>
                                <Value size="lg" style={{ color: 'var(--color-primary-action)', textShadow: '0 0 10px rgba(57,255,20,0.5)' }}>999</Value>
                                <div className="label" style={{ marginTop: 'var(--space-xs)' }}>.VALUE--LG</div>
                            </div>
                        </div>

                        <div style={{ borderLeft: '2px solid var(--color-border-dim)', paddingLeft: 'var(--space-lg)' }}>
                            <h4 className="card__title" style={{ marginBottom: 'var(--space-md)' }}>DATA TYPOGRAPHY</h4>
                            <p className="text-muted" style={{ marginBottom: 'var(--space-md)' }}>Standardized sizes for numerical data presentation.</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '4px', height: '4px', background: 'var(--color-text-muted)' }} />
                                    <span><code style={{ color: 'var(--color-primary-action)' }}>.value--sm</code>: 1.25rem. Secondary stats.</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '4px', height: '4px', background: 'var(--color-text-muted)' }} />
                                    <span><code style={{ color: 'var(--color-primary-action)' }}>.value--md</code>: 1.5rem. Card metrics.</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '4px', height: '4px', background: 'var(--color-text-muted)' }} />
                                    <span><code style={{ color: 'var(--color-primary-action)' }}>.value--lg</code>: 2.5rem. Hero numbers.</span>
                                </li>
                            </ul>
                            <p className="text-muted" style={{ marginTop: 'var(--space-md)' }}>
                                All values use <code style={{ color: 'var(--color-primary-action)' }}>tabular-nums</code> for better alignment in lists.
                            </p>
                        </div>

                    </div>

                    {/* Documentation - Keeping it minimal as requested in image, but using existing layout */}
                    <div className="codex-description">
                        <h4>Numerical Hierarchy</h4>
                        <p>Precise data presentation for tactical displays.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Tabular Nums:</strong> Ensures digits align vertically in data grids.</li>
                            <li><strong>Scale:</strong> <code>1.25rem</code> / <code>1.5rem</code> / <code>2.5rem</code> hierarchy.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== STATUS INDICATORS ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Status Indicators</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>

                        {/* Status Lights */}
                        <div style={{ display: 'flex', gap: 'var(--space-2xl)', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                <span className="status-light online" />
                                <span className="value" style={{ fontSize: '0.9rem' }}>Online</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                <span className="status-light critical" />
                                <span className="value" style={{ fontSize: '0.9rem' }}>Critical</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                <span className="status-light offline" />
                                <span className="value" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Offline</span>
                            </div>
                        </div>

                        {/* Status Badges */}
                        <div style={{ display: 'flex', gap: 'var(--space-lg)' }}>
                            <StatusBadge variant="default">DEFAULT</StatusBadge>
                            <StatusBadge variant="active">ACTIVE</StatusBadge>
                            <StatusBadge variant="alert">ALERT</StatusBadge>
                        </div>

                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>System State Signals</h4>
                        <p>Visual cues for entity status or alert levels.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Status Light:</strong> <code>.status-light</code>. 8px pulsing dot. Green (Online), Red (Critical).</li>
                            <li><strong>Badge:</strong> <code>.status-badge</code>. Text pill for metadata.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== TOOLTIPS ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Tooltips</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
                        <div>
                            <div className="label" style={{ marginBottom: 'var(--space-md)' }}>HOVER MICRO-INTERACTIONS</div>
                            <span className="text-accent" data-tooltip="Primary Tooltip" style={{ cursor: 'help', borderBottom: '1px dotted var(--color-primary-action)' }}>
                                Hover Me
                            </span>
                        </div>
                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Contextual Info</h4>
                        <p>Pure CSS tooltips via <code>data-tooltip</code> attribute for &quot;Contextual Info&quot;.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Behavior:</strong> Appears centered above element on hover.</li>
                            <li><strong>Styling:</strong> Unified card border style with shadow.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== DATA SLATE (MODAL OVERLAY) ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Data Slate (Modal Overlay)</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-xl)' }}>

                        <Button onClick={() => setIsModalOpen(true)}>
                            OPEN DATA SLATE
                        </Button>

                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            title="INITIALIZE"
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                                <div>
                                    <div className="label" style={{ marginBottom: 'var(--space-xs)' }}>PARAM A</div>
                                    <input
                                        type="text"
                                        value="127.0.0.1"
                                        readOnly
                                        style={{
                                            width: '100%',
                                            background: 'rgba(0,0,0,0.3)',
                                            border: '1px solid var(--color-border-dim)',
                                            padding: 'var(--space-sm)',
                                            color: 'var(--color-text-primary)',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '1rem'
                                        }}
                                    />
                                </div>
                                <Button
                                    onClick={() => setIsModalOpen(false)}
                                    style={{
                                        width: '100%',
                                        justifyContent: 'center',
                                        borderColor: 'var(--color-primary-action)',
                                        color: 'var(--color-primary-action)'
                                    }}
                                >
                                    EXECUTE
                                </Button>
                            </div>
                        </Modal>

                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Focused Interaction Layer</h4>
                        <p>Overlay <code>.data-slate</code> for &quot;Focused Interaction Layer&quot; tasks.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Backdrop:</strong> <code>.modal-backdrop</code> applies dimming and blur to the background.</li>
                            <li><strong>Container:</strong> <code>.data-slate</code> centers content and handles scrolling.</li>
                            <li><strong>Header:</strong> Standardized title and close action.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== NAVIGATION ELEMENTS ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Navigation Elements</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', gap: 'var(--space-xl)' }}>

                        <div className="codex-component-frame" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--color-border-dim)' }}>
                            <div className="sidebar-menu">
                                <div
                                    className={`sidebar-item ${navActive === 'item-1' ? 'active' : ''}`}
                                    onClick={() => setNavActive('item-1')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                    <span>ACTIVE ITEM</span>
                                </div>
                                <div
                                    className={`sidebar-item ${navActive === 'item-2' ? 'active' : ''}`}
                                    onClick={() => setNavActive('item-2')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                    <span>DEFAULT ITEM</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Sidebar Navigation</h4>
                        <p>Vertical navigation list <code>.sidebar-menu</code>.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Item:</strong> <code>.sidebar-item</code> flex container.</li>
                            <li><strong>Hover:</strong> Background lightens, indicator marker slides in from left.</li>
                            <li><strong>Active:</strong> Text turns Primary Green, background tints green, indicator locked visible.</li>
                        </ul>
                    </div>
                </div>
            </section>



            {/* ===== MANIFEST TABLE ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Manifest Table</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ width: '100%' }}>

                        <table className="manifest-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '20%' }}>DATE</th>
                                    <th style={{ width: '30%' }}>NAME</th>
                                    <th style={{ width: '25%' }}>STATUS</th>
                                    <th style={{ width: '25%' }}>VALUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="numeric">M42.024</td>
                                    <td>
                                        <div>Row</div>
                                        <div className="text-muted" style={{ fontSize: '0.8em' }}>Item One</div>
                                    </td>
                                    <td>
                                        <span style={{ color: 'var(--color-primary-action)' }}>Active</span>
                                    </td>
                                    <td className="numeric">
                                        87 - <br /><span className="text-muted">62</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="numeric">M42.023</td>
                                    <td>
                                        <div>Row</div>
                                        <div className="text-muted" style={{ fontSize: '0.8em' }}>Item Two</div>
                                    </td>
                                    <td>
                                        <span style={{ color: 'var(--color-text-muted)' }}>Complete</span>
                                    </td>
                                    <td className="numeric">
                                        74 - <br /><span className="text-muted">68</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>High-Density Grid</h4>
                        <p>Data tables <code>.manifest-table</code> for lists.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Interaction:</strong> Rows use <code>outline</code> on hover to prevent layout shifts.</li>
                            <li><strong>Data:</strong> Numeric columns use <code>tabular-nums</code>.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== LOG ENTRIES ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Log Entries</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

                        {/* Standard Entry */}
                        <div className="card card--subtle card--solid log-entry">
                            <div className="log-timestamp">14:45:18</div>
                            <div className="log-content">
                                <div className="log-title">Event Title</div>
                                <div className="log-description">Event details and description</div>
                            </div>
                            {/* Corner Bracket (Decorative) */}
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '4px', borderTop: '1px solid var(--color-text-muted)', borderLeft: '1px solid var(--color-text-muted)' }} />
                        </div>

                        {/* Alert Entry */}
                        <div className="card card--subtle card--solid log-entry alert">
                            <div className="log-timestamp">14:42:30</div>
                            <div className="log-content">
                                <div className="log-title">Alert Event</div>
                                <div className="log-description">Critical notification</div>
                            </div>
                            {/* Corner Bracket (Decorative) */}
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '4px', borderTop: '1px solid var(--color-text-muted)', borderLeft: '1px solid var(--color-text-muted)' }} />
                        </div>

                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Event Feed</h4>
                        <p>Timeline items <code>.log-entry</code> built on Unified Cards.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Structure:</strong> Flex layout with Timestamp (fixed width) and Content (grow).</li>
                            <li><strong>Base:</strong> Uses standard card classes. <code>.log-entry</code> handles internal layout only.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== GLOBAL STYLES (SCROLLBAR) ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Global Styles (Scrollbar)</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                        <div className="label" style={{ marginBottom: 'var(--space-xs)' }}>SCROLLABLE CONTENT DEMO</div>
                        <div style={{
                            height: '240px',
                            overflowY: 'auto',
                            padding: 'var(--space-md)',
                            border: '1px solid var(--color-border-dim)',
                            position: 'relative'
                        }}>
                            {/* Corner Bracket */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '8px',
                                height: '8px',
                                borderTop: '1px solid var(--color-text-muted)',
                                borderLeft: '1px solid var(--color-text-muted)'
                            }} />

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} style={{
                                        padding: 'var(--space-lg)',
                                        background: 'rgba(57, 255, 20, 0.05)',
                                        border: '1px solid rgba(57, 255, 20, 0.2)',
                                        textAlign: 'center',
                                        color: 'var(--color-primary-action)',
                                        fontFamily: 'var(--font-interface)',
                                        fontWeight: 700
                                    }}>
                                        Item {i}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Scrollbar Aesthetic</h4>
                        <p>The application uses a unified, minimal scrollbar system designed for high-resolution tactical displays.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Track:</strong> Matches <code>var(--color-bg-void)</code> for seamless integration.</li>
                            <li><strong>Thumb:</strong> Discrete <code>var(--color-border-dim)</code> marker.</li>
                            <li><strong>Active State:</strong> Glows in <code>Gauss Green</code> on hover/interaction.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== CARD SYSTEM ===== */}
            <section style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Card System</h3>

                <div className="codex-grid">
                    {/* Card Matrix Grid */}
                    <div className="codex-matrix">

                        {/* Header Row */}
                        <div />
                        <h4 className="label codex-matrix__header codex-matrix__header--active">SOLID (OPAQUE)</h4>
                        <h4 className="label codex-matrix__header">GLASS (TRANSPARENT)</h4>

                        {/* Row 1: Subtle */}
                        <div className="label codex-matrix__tier">
                            TIER 1<br />
                            <span style={{ fontSize: '0.7em', color: 'var(--color-text-muted)' }}>SUBTLE</span>
                        </div>

                        <Card variant="subtle" surface="solid">
                            <CardTitle>Subtle Solid</CardTitle>
                            <Value size="sm">Surface Default</Value>
                        </Card>

                        <Card variant="subtle" surface="glass">
                            <CardTitle>Subtle Glass</CardTitle>
                            <Value size="sm">Opacity 0.7</Value>
                        </Card>

                        {/* Row 2: Standard */}
                        <div className="label codex-matrix__tier">
                            TIER 2<br />
                            <span style={{ fontSize: '0.7em', color: 'var(--color-text-muted)' }}>STANDARD</span>
                        </div>

                        <Card variant="standard" surface="solid">
                            <CardTitle>Standard Solid</CardTitle>
                            <Value size="sm">Content Default</Value>
                        </Card>

                        <Card variant="standard" surface="glass">
                            <CardTitle>Standard Glass</CardTitle>
                            <Value size="sm">HUD Elements</Value>
                        </Card>

                        {/* Row 3: Accent */}
                        <div className="label codex-matrix__tier">
                            TIER 3<br />
                            <span style={{ fontSize: '0.7em', color: 'var(--color-text-muted)' }}>ACCENT</span>
                        </div>

                        <Card variant="accent" surface="solid">
                            <CardHeader>
                                <CardTitle>Accent Solid</CardTitle>
                                <StatusLight status="online" />
                            </CardHeader>
                            <Value size="sm" style={{ color: 'var(--color-primary-action)' }}>High Priority</Value>
                        </Card>

                        <Card variant="accent" surface="glass">
                            <CardHeader>
                                <CardTitle>Accent Glass</CardTitle>
                                <StatusLight status="warning" />
                            </CardHeader>
                            <Value size="sm">Alert Overlay</Value>
                        </Card>
                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Modular Architecture</h4>
                        <p>Flexible container system. Classes are mix-and-match modifiers.</p>

                        <h5 style={{ color: 'var(--color-text-primary)', marginTop: 'var(--space-md)' }}>Visual Tiers</h5>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><code>.card--subtle</code>: No border, for grouping.</li>
                            <li><code>.card--standard</code>: Standard border, primary content.</li>
                            <li><code>.card--accent</code>: Colored border strip for status.</li>
                        </ul>

                        <h5 style={{ color: 'var(--color-text-primary)', marginTop: 'var(--space-md)' }}>Surface Materials</h5>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)' }}>
                            <li><code>.card--solid</code>: Opaque background. Blocks layers below.</li>
                            <li><code>.card--glass</code>: Semi-transparent + Blur. HUD feel.</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* ===== LOADING RITUAL ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Loading Ritual</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ border: '1px solid var(--color-border-dim)', background: 'var(--color-bg-void)', padding: 'var(--space-lg)' }}>
                        <LoadingRitual />
                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>System Activity</h4>
                        <p>Animated sequence for async operations.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Glyph:</strong> Rotating Cog (Linear 2s).</li>
                            <li><strong>Progress:</strong> 5-segment bar fills sequentially.</li>
                            <li><strong>Text:</strong> Pulsing opacity animation.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== VOX TOASTS ===== */}
            <section className="card card--subtle card--solid" style={{ marginTop: 'var(--space-2xl)' }}>
                <h3 className="section-title">Feedback & Vox Transmissions</h3>

                <div className="codex-grid">
                    {/* Preview Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', overflow: 'hidden', padding: 'var(--space-sm)' }}>

                        {/* Static Success Toast */}
                        <div className="vox-toast vox-toast--success" style={{ position: 'relative', top: 0, left: 0, animation: 'none', pointerEvents: 'none' }}>
                            <div className="vox-toast-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>
                            <div className="vox-toast-content">
                                <div className="vox-toast-title">Success</div>
                                <div className="vox-toast-message">Transmission received and verified.</div>
                            </div>
                        </div>

                        {/* Static Error Toast */}
                        <div className="vox-toast vox-toast--error" style={{ position: 'relative', top: 0, left: 0, animation: 'none', pointerEvents: 'none' }}>
                            <div className="vox-toast-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            </div>
                            <div className="vox-toast-content">
                                <div className="vox-toast-title">Critical Error</div>
                                <div className="vox-toast-message">Data corruption detected in vox-link.</div>
                            </div>
                        </div>

                        <div className="label" style={{ marginTop: 'var(--space-md)' }}>LIVE VOX RITUALS</div>
                        <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                            <Button variant="primary" onClick={() => addToast('success')} style={{ flexShrink: 0 }}>Trigger Success</Button>
                            <Button variant="danger" onClick={() => addToast('error')} style={{ flexShrink: 0 }}>Trigger Error</Button>
                        </div>

                    </div>

                    {/* Documentation */}
                    <div className="codex-description">
                        <h4>Vox Toast System</h4>
                        <p>Non-blocking notifications <code>.vox-toast</code> appearing at bottom-right.</p>
                        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            <li><strong>Types:</strong> Success (Green), Error (Red), Info (Blue/Grey).</li>
                            <li><strong>Animation:</strong> Slides in from right, stays for 5s, fades out.</li>
                            <li><strong>Structure:</strong> Icon + Title + Message flex layout.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Actual Toast Container (Fixed) */}
            <div className="vox-toast-container">
                {toasts.map((toast) => (
                    <div key={toast.id} className={`vox-toast vox-toast--${toast.type} ${toast.exiting ? 'exiting' : ''}`}>
                        <div className="vox-toast-icon">
                            {toast.type === 'success' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>}
                            {toast.type === 'error' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>}
                        </div>
                        <div className="vox-toast-content">
                            <div className="vox-toast-title">{toast.title}</div>
                            <div className="vox-toast-message">{toast.message}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}
