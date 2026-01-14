export default function MatchedPlayPage({ params }: { params: { sessionId: string } }) {
    // TODO: Import from modes/matched-play-*
    return (
        <main>
            <h1>Matched Play</h1>
            <p>Session: {params.sessionId}</p>
        </main>
    );
}
