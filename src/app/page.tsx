'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleInitialize = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="app-wrapper" style={{ flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* Background Effects */}
      <div className="scanline-effect" />

      {/* Header */}
      <header style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: 'var(--space-lg)', borderBottom: '1px solid var(--color-border-dim)', background: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(10px)', zIndex: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '0.1em', color: 'var(--color-primary-action)' }}>
            WARLOGS
          </div>
          <div className="status-light online" />
        </div>
      </header>

      {/* Login Card */}
      <div style={{ zIndex: 1, width: '100%', maxWidth: '400px', padding: 'var(--space-md)' }}>
        <Card variant="standard" surface="solid">
          <CardHeader>
            <CardTitle>IDENTIFICATION REQUIRED</CardTitle>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <div className="cogitator-input-wrapper" style={{ marginTop: 0 }}>
                <div className="cogitator-label">OPERATIVE ID</div>
                <input type="text" className="cogitator-input" placeholder="ENTER ID" />
              </div>

              <div className="cogitator-input-wrapper">
                <div className="cogitator-label">PASSKEY</div>
                <input type="password" className="cogitator-input" placeholder="••••••••" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
                <Button variant="primary" onClick={handleInitialize} disabled={isLoading}>
                  {isLoading ? 'INITIALIZING...' : 'INITIALIZE UPLINK'}
                </Button>

                <div style={{ display: 'flex', justifySelf: 'center', margin: '0 auto', width: '100%' }}>
                  <Link href="/design-codex" style={{ width: '100%', textDecoration: 'none' }}>
                    <Button variant="secondary" style={{ width: '100%', justifyContent: 'center' }}>
                      ACCESS DESIGN CODEX
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Footer */}
      <footer style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--space-lg)', textAlign: 'center', zIndex: 10 }}>
        <div style={{ display: 'flex', gap: 'var(--space-lg)', justifyContent: 'center', fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>
          <Link href="/legal#impressum" style={{ color: 'inherit', textDecoration: 'none' }}>IMPRESSUM</Link>
          <span>|</span>
          <Link href="/legal#datenschutz" style={{ color: 'inherit', textDecoration: 'none' }}>DATENSCHUTZERKLÄRUNG</Link>
        </div>
        <div style={{ marginTop: 'var(--space-xs)', fontSize: '0.65rem', color: '#333' }}>
          WARLOGS SYSTEM VERSION 0.9.2
        </div>
      </footer>

    </div>
  );
}
