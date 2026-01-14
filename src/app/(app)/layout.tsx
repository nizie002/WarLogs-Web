export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="app-layout">
            <header className="app-header">
                {/* TODO: Avatar + Name top-right */}
            </header>
            <main>{children}</main>
        </div>
    );
}
