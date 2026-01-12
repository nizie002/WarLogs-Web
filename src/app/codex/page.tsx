'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { HexCheckbox } from '@/components/ui/HexCheckbox';
import { MachineToggle } from '@/components/ui/MachineToggle';
import { Card, CardBody, CardTitle } from '@/components/ui/Card';
import { StatusLight } from '@/components/ui/StatusLight';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Value } from '@/components/ui/Value';
import { Label } from '@/components/ui/Label';
import { Modal } from '@/components/feedback/Modal';
import { Toast, ToastContainer } from '@/components/feedback/Toast';
import { LoadingRitual } from '@/components/feedback/LoadingRitual';
import { ManifestTable } from '@/components/data/Table';
import { LogEntry } from '@/components/data/LogEntry';

export default function CodexPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toasts, setToasts] = useState<Array<{ id: string; type: 'success' | 'error' | 'info'; title: string; message?: string }>>([]);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);

  const showToast = (type: 'success' | 'error' | 'info', title: string, message?: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts([...toasts, { id, type, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const tableData = [
    { id: 1, name: 'Alpha Squad', status: 'Active', wins: 12 },
    { id: 2, name: 'Beta Company', status: 'Standby', wins: 8 },
    { id: 3, name: 'Gamma Unit', status: 'Active', wins: 15 },
  ];

  const tableColumns = [
    { key: 'name', label: 'Unit Name' },
    { key: 'status', label: 'Status' },
    { key: 'wins', label: 'Victories' },
  ];

  return (
    <div style={{ padding: 'var(--space-2xl)', maxWidth: '1400px', margin: '0 auto' }}>
      <header className="page-header">
        <div className="page-header-info">
          <h1>DESIGN CODEX</h1>
          <p className="page-header-meta">Component Reference | All UI Elements</p>
        </div>
      </header>

      {/* Design Tokens */}
      <div className="card card--subtle card--solid section">
        <h3 className="section-title">Design Tokens</h3>
        <div className="codex-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', background: 'var(--color-bg-void)', border: '1px solid var(--color-border-dim)' }} />
                <Label style={{ fontSize: '0.6rem' }}>VOID</Label>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-dim)' }} />
                <Label style={{ fontSize: '0.6rem' }}>SURFACE</Label>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', background: 'var(--color-primary-action)', border: '1px solid var(--color-border-dim)' }} />
                <Label style={{ fontSize: '0.6rem' }}>PRIMARY</Label>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', background: 'var(--color-primary-alert)', border: '1px solid var(--color-border-dim)' }} />
                <Label style={{ fontSize: '0.6rem' }}>ALERT</Label>
              </div>
            </div>
          </div>
          <div className="codex-description">
            <h4>Color System</h4>
            <p>High-contrast &quot;Grim Dark&quot; aesthetic with neon green accents.</p>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="card card--subtle card--solid section">
        <h3 className="section-title">Typography</h3>
        <div className="codex-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <h1>Heading 1 (Cinzel)</h1>
            <h2>Heading 2 (Cinzel)</h2>
            <h3>Heading 3 (Cinzel)</h3>
            <p>Body text using Rajdhani interface font. Standard paragraph text.</p>
          </div>
          <div className="codex-description">
            <h4>Font System</h4>
            <p><code>--font-display</code>: Cinzel (serif) for headings</p>
            <p><code>--font-interface</code>: Rajdhani (sans-serif) for UI text</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="card card--subtle card--solid section">
        <h3 className="section-title">Action Buttons</h3>
        <div className="codex-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="danger">Danger Button</Button>
            <Button disabled>Disabled Button</Button>
          </div>
          <div className="codex-description">
            <h4>Button Variants</h4>
            <p>Primary: Green border, glows on hover</p>
            <p>Secondary: Muted border</p>
            <p>Danger: Red border for destructive actions</p>
          </div>
        </div>
      </div>

      {/* Inputs */}
      <div className="card card--subtle card--solid section">
        <h3 className="section-title">Cogitator Input</h3>
        <div className="codex-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <Input label="Unit Name" placeholder="Enter unit designation" />
            <Input label="Status" placeholder="Active" />
            <Input label="Error State" error helperText="This field is required" />
          </div>
          <div className="codex-description">
            <h4>Input System</h4>
            <p>Floating labels with green glow on focus</p>
          </div>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="card card--subtle card--solid section">
        <h3 className="section-title">Hex Checkbox</h3>
        <div className="codex-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <HexCheckbox label="Option 1" checked={checkboxChecked} onChange={(e) => setCheckboxChecked(e.target.checked)} />
            <HexCheckbox label="Option 2 (Unchecked)" />
            <HexCheckbox label="Option 3 (Checked)" checked />
          </div>
          <div className="codex-description">
            <h4>Checkbox Style</h4>
            <p>Rotated square (diamond) shape with green glow when checked</p>
          </div>
        </div>
      </div>

      {/* Toggles */}
      <div className="card card--subtle card--solid section">
        <h3 className="section-title">Machine Toggle</h3>
        <div className="codex-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <MachineToggle
              label="Enable Feature"
              description="Activate this setting"
              checked={toggleChecked}
              onChange={(e) => setToggleChecked(e.target.checked)}
            />
            <MachineToggle label="Auto-save" description="Save automatically" checked />
            <MachineToggle label="Notifications" description="Receive alerts" />
          </div>
          <div className="codex-description">
            <h4>Toggle Control</h4>
            <p>Shows ON/OFF state with sliding knob</p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="card card--subtle card--solid section">
        <h3 className="section-title">Card System</h3>
        <div className="codex-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <Card variant="subtle" surface="solid">
              <CardTitle>Subtle Card</CardTitle>
              <CardBody>Minimal border, content-focused</CardBody>
            </Card>
            <Card variant="standard" surface="solid">
              <CardTitle>Standard Card</CardTitle>
              <CardBody>Default card with border</CardBody>
            </Card>
            <Card variant="accent" surface="solid">
              <CardTitle>Accent Card</CardTitle>
              <CardBody>Highlighted with green border</CardBody>
            </Card>
          </div>
          <div className="codex-description">
            <h4>Card Variants</h4>
            <p>Subtle: Minimal styling</p>
            <p>Standard: Default border</p>
            <p>Accent: Green left border for emphasis</p>
          </div>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="card card--subtle card--solid section">
        <h3 className="section-title">Status Indicators</h3>
        <div className="codex-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <StatusLight status="online" />
              <span>Online Status</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <StatusLight status="critical" />
              <span>Critical Status</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <StatusLight status="offline" />
              <span>Offline Status</span>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
              <StatusBadge>Default</StatusBadge>
              <StatusBadge variant="active">Active</StatusBadge>
              <StatusBadge variant="alert">Alert</StatusBadge>
            </div>
          </div>
          <div className="codex-description">
            <h4>Status Components</h4>
            <p>StatusLight: Pulsing dot indicators</p>
            <p>StatusBadge: Text badges with glow effects</p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="card card--subtle card--solid section">
        <h3 className="section-title">Value Display</h3>
        <div className="codex-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <Value size="sm">42</Value>
            <Value size="md">1,234</Value>
            <Value size="lg">99,999</Value>
            <Value size="md" variant="accent">Highlighted</Value>
            <Value size="md" variant="alert">Critical</Value>
          </div>
          <div className="codex-description">
            <h4>Value Sizes</h4>
            <p>sm/md/lg variants with optional accent/alert colors</p>
          </div>
        </div>
      </div>

      {/* Tables */}
      <div className="card card--subtle card--solid section">
        <h3 className="section-title">Manifest Table</h3>
        <div className="codex-grid">
          <div>
            <ManifestTable
              columns={tableColumns}
              data={tableData}
              onRowClick={(row) => console.log('Clicked:', row)}
            />
          </div>
          <div className="codex-description">
            <h4>Data Table</h4>
            <p>Hover effects with green border highlight</p>
          </div>
        </div>
      </div>

      {/* Log Entries */}
      <div className="card card--subtle card--solid section">
        <h3 className="section-title">Log Entries</h3>
        <div className="codex-grid">
          <div>
            <LogEntry timestamp="12:34" event="Battle Initiated" details="Alpha Squad vs Beta Company" />
            <LogEntry timestamp="12:45" event="Victory Declared" details="Alpha Squad wins" />
            <LogEntry timestamp="13:00" event="Status Update" details="All units reporting" />
          </div>
          <div className="codex-description">
            <h4>Log Format</h4>
            <p>Timestamp + Event + Details structure</p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <div className="card card--subtle card--solid section">
        <h3 className="section-title">Data Slate (Modal)</h3>
        <div className="codex-grid">
          <div>
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="EXAMPLE PROTOCOL"
            >
              <p>Modal content goes here. Close with ESC or click outside.</p>
            </Modal>
          </div>
          <div className="codex-description">
            <h4>Modal Dialog</h4>
            <p>Backdrop blur, vertical fold animation</p>
          </div>
        </div>
      </div>

      {/* Loading */}
      <div className="card card--subtle card--solid section">
        <h3 className="section-title">Loading Ritual</h3>
        <div className="codex-grid">
          <div>
            <LoadingRitual message="Processing..." />
          </div>
          <div className="codex-description">
            <h4>Loading State</h4>
            <p>Animated glyph with segmented progress bar</p>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            title={toast.title}
            message={toast.message}
            onClose={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
          />
        ))}
      </ToastContainer>

      {/* Toast Triggers */}
      <div className="card card--subtle card--solid section">
        <h3 className="section-title">Vox Toast</h3>
        <div className="codex-grid">
          <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
            <Button onClick={() => showToast('success', 'Success', 'Operation completed')}>
              Success Toast
            </Button>
            <Button onClick={() => showToast('error', 'Error', 'Something went wrong')}>
              Error Toast
            </Button>
            <Button onClick={() => showToast('info', 'Information', 'System update')}>
              Info Toast
            </Button>
          </div>
          <div className="codex-description">
            <h4>Toast Notifications</h4>
            <p>Slide-in from right, auto-dismiss after 3 seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}
