'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { legalContent } from './legalContent';

export default function LegalPage() {
    const { impressum, privacy, footerVersion } = legalContent;

    useEffect(() => {
        const scrollToHash = () => {
            if (typeof window === 'undefined') {
                return;
            }

            const hash = window.location.hash.replace('#', '');
            if (!hash) {
                return;
            }

            const target = document.getElementById(hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        scrollToHash();
        window.addEventListener('hashchange', scrollToHash);

        return () => window.removeEventListener('hashchange', scrollToHash);
    }, []);

    return (
        <div className="page-glitch" style={{ flex: 1, padding: 'var(--space-2xl)', display: 'flex', flexDirection: 'column', overflow: 'auto', gap: 'var(--space-2xl)' }}>

            {/* Header */}
            <header className="page-header">
                <div className="page-header-info">
                    <h1>WARLOGS // LEGAL</h1>
                </div>
                <div className="page-header-actions">
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Button variant="secondary" icon={<span style={{ display: 'flex' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></span>}>
                            RETURN TO UPLINK
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Impressum Section */}
            <section className="card card--subtle card--solid">
                <h3 className="section-title">{impressum.title}</h3>
                <div style={{ padding: 'var(--space-lg)', color: 'var(--color-text-primary)' }}>

                    <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-text-muted)' }}>{impressum.operatorHeading}</h4>
                    <p style={{ marginBottom: 'var(--space-lg)' }}>
                        {impressum.operatorLines[0]}<br />
                        {impressum.operatorLines[1]}<br />
                        {impressum.operatorLines[2]}<br />
                    </p>

                    <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-text-muted)' }}>{impressum.contactHeading}</h4>
                    <p style={{ marginBottom: 'var(--space-lg)' }}>
                        {impressum.contactLines[0]}
                    </p>

                    <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-text-muted)' }}>{impressum.disclaimerHeading}</h4>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>{impressum.liabilityContentsTitle}</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        {impressum.liabilityContentsBody}
                    </p>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>{impressum.liabilityLinksTitle}</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        {impressum.liabilityLinksBody}
                    </p>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>{impressum.copyrightTitle}</strong>
                    <p>
                        {impressum.copyrightBody}
                    </p>
                </div>
            </section>

            {/* Datenschutzerklärung Section */}
            <section id="datenschutz" className="card card--subtle card--solid">
                <h3 className="section-title">{privacy.title}</h3>
                <div style={{ padding: 'var(--space-lg)', color: 'var(--color-text-primary)' }}>

                    {/* 1. Datenschutz auf einen Blick */}
                    <h4 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary-action)' }}>{privacy.section1.title}</h4>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>{privacy.section1.generalNotesLabel}</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        {privacy.section1.generalNotesBody}
                        <br />
                        <strong>{privacy.section1.noteLabel}</strong> {privacy.section1.noteBody}
                    </p>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>{privacy.section1.responsibleLabel}</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        {privacy.section1.responsibleBody}
                    </p>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>{privacy.section1.collectionLabel}</strong>
                    <p style={{ marginBottom: 'var(--space-lg)' }}>
                        {privacy.section1.collectionBody}
                    </p>

                    {/* 2. Hosting */}
                    <h4 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary-action)' }}>{privacy.section2.title}</h4>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>{privacy.section2.hostingLabel}</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        {privacy.section2.hostingIntro}<br />
                        <strong>{privacy.section2.hostingProviderName}</strong>, {privacy.section2.hostingProviderAddress}
                    </p>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        {privacy.section2.hostingPrivacyIntro}{' '}
                        <a href={privacy.section2.hostingPrivacyUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-action)' }}>
                            {privacy.section2.hostingPrivacyUrl}
                        </a>.
                    </p>
                    <p style={{ marginBottom: 'var(--space-lg)' }}>
                        {privacy.section2.hostingLegalBasis}
                    </p>

                    {/* 3. Allgemeine Hinweise */}
                    <h4 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary-action)' }}>{privacy.section3.title}</h4>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>{privacy.section3.securityLabel}</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        {privacy.section3.securityBody}
                    </p>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>{privacy.section3.revocationLabel}</strong>
                    <p style={{ marginBottom: 'var(--space-lg)' }}>
                        {privacy.section3.revocationBody}
                    </p>

                    {/* 4. Datenerfassung */}
                    <h4 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary-action)' }}>{privacy.section4.title}</h4>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>{privacy.section4.cookiesLabel}</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        {privacy.section4.cookiesBody}
                    </p>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        Wir verwenden ausschließlich <strong>{privacy.section4.cookiesNecessaryLabel}</strong>, {privacy.section4.cookiesNecessaryBody}
                        <br />
                        {privacy.section4.cookiesLegalBasis}
                    </p>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>{privacy.section4.serverLogsLabel}</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        {privacy.section4.serverLogsBody}
                    </p>
                    <ul style={{ listStyle: 'square', paddingLeft: '20px', marginBottom: 'var(--space-md)' }}>
                        {privacy.section4.serverLogsItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        {privacy.section4.serverLogsLegalBasis}
                    </p>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>{privacy.section4.registrationLabel}</strong>
                    <p>
                        {privacy.section4.registrationBody}
                    </p>

                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: 'var(--space-lg)', textAlign: 'center', opacity: 0.5 }}>
                <div style={{ fontSize: '0.65rem', color: '#333' }}>
                    {footerVersion}
                </div>
            </footer>

        </div>
    );
}
