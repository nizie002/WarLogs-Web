export default function CrusadePage({ params }: { params: { sessionId: string } }) {
    // TODO: Import from modes/crusade-*
    return (
        <main>
            <h1>Crusade</h1>
            <p>Session: {params.sessionId}</p>
        </main>
    );
}
