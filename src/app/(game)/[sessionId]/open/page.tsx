export default function OpenPlayPage({ params }: { params: { sessionId: string } }) {
    // TODO: Import from modes/open-play
    return (
        <main>
            <h1>Open Play</h1>
            <p>Session: {params.sessionId}</p>
        </main>
    );
}
