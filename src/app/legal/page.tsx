'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

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
                <h3 className="section-title">IMPRESSUM</h3>
                <div style={{ padding: 'var(--space-lg)', color: 'var(--color-text-primary)' }}>

                    <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-text-muted)' }}>Angaben gemäß § 5 DDG</h4>
                    <p style={{ marginBottom: 'var(--space-lg)' }}>
                        [VORNAME NACHNAME]<br />
                        [STRAßE HAUSNUMMER]<br />
                        [PLZ ORT]<br />
                    </p>

                    <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-text-muted)' }}>Kontakt</h4>
                    <p style={{ marginBottom: 'var(--space-lg)' }}>
                        E-Mail: [DEINE-EMAIL-ADRESSE@DOMAIN.DE]<br />
                        Telefon: [DEINE TELEFONNUMMER, optional]
                    </p>

                    <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-text-muted)' }}>Haftungsausschluss</h4>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>Haftung für Inhalte</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>Haftung für Links</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>Urheberrecht</strong>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                </div>
            </section>

            {/* Datenschutzerklärung Section */}
            <section className="card card--subtle card--solid">
                <h3 className="section-title">DATENSCHUTZERKLÄRUNG</h3>
                <div style={{ padding: 'var(--space-lg)', color: 'var(--color-text-primary)' }}>

                    {/* 1. Datenschutz auf einen Blick */}
                    <h4 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary-action)' }}>1. Datenschutz auf einen Blick</h4>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>Allgemeine Hinweise</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können (z.B. IP-Adresse, Name, E-Mail).
                        <br />
                        <strong>Hinweis:</strong> Diese Plattform dient dem privaten Management von Tabletop-Spielen einer geschlossenen Benutzergruppe. Eine öffentliche Registrierung ist nicht möglich.
                    </p>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                    </p>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>Wie erfassen wir Ihre Daten?</strong>
                    <p style={{ marginBottom: 'var(--space-lg)' }}>
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. bei der Anlage eines Benutzerkontos durch den Administrator). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                    </p>

                    {/* 2. Hosting */}
                    <h4 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary-action)' }}>2. Hosting</h4>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>Hosting bei Hetzner</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
                        <strong>Hetzner Online GmbH</strong>, Industriestr. 25, 91710 Gunzenhausen, Deutschland.
                    </p>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        Wenn Sie unsere Website besuchen, erfasst Hetzner verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von Hetzner: <a href="https://www.hetzner.com/de/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-action)' }}>https://www.hetzner.com/de/legal/privacy-policy</a>.
                    </p>
                    <p style={{ marginBottom: 'var(--space-lg)' }}>
                        Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung und Sicherheit unserer Website.
                    </p>

                    {/* 3. Allgemeine Hinweise */}
                    <h4 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary-action)' }}>3. Allgemeine Hinweise und Pflichtinformationen</h4>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>Datensicherheit (SSL/TLS)</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-bzw. TLS-Verschlüsselung. Wenn die SSL-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                    </p>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong>
                    <p style={{ marginBottom: 'var(--space-lg)' }}>
                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>

                    {/* 4. Datenerfassung */}
                    <h4 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary-action)' }}>4. Datenerfassung auf dieser Website</h4>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>Cookies</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (Pemanente Cookies) auf Ihrem Endgerät gespeichert.
                    </p>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        Wir verwenden ausschließlich <strong>technisch notwendige Cookies</strong>, die für den Betrieb der Plattform (Login-Status, Session-Management) erforderlich sind. Es werden keine Cookies zu Analyse-, Tracking- oder Werbezwecken gesetzt.
                        <br />
                        Rechtsgrundlage für die Speicherung technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an der fehlerfreien Bereitstellung des Dienstes).
                    </p>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>Server-Log-Dateien</strong>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        Der Provider der Seiten (bzw. unser Server) erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul style={{ listStyle: 'square', paddingLeft: '20px', marginBottom: 'var(--space-md)' }}>
                        <li>Browsertyp und Browserversion</li>
                        <li>Verwendetes Betriebssystem</li>
                        <li>Referrer URL (die zuvor besuchte Seite)</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li>
                        <li>IP-Adresse</li>
                    </ul>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                    </p>

                    <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-muted)' }}>Registrierung und Nutzerkonten</strong>
                    <p>
                        Da die Nutzung dieser Webseite einer geschlossenen Benutzergruppe vorbehalten ist, werden Benutzerkonten ausschließlich manuell durch den Administrator angelegt. Hierbei werden Name, Benutzername und E-Mail-Adresse sowie spielbezogene Daten (z.B. Fraktionen, Spielergebnisse) gespeichert. Diese Daten werden ausschließlich zur Organisation und Dokumentation der Spiele innerhalb der Gruppe verwendet und nicht an Dritte weitergegeben.
                    </p>

                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: 'var(--space-lg)', textAlign: 'center', opacity: 0.5 }}>
                <div style={{ fontSize: '0.65rem', color: '#333' }}>
                    WARLOGS SYSTEM VERSION 0.9.2
                </div>
            </footer>

        </div>
    );
}
