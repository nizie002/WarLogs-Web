export default function LobbyPage({ params }: { params: { sessionId: string } }) {
    return (
        <main>
            <h1>Game Lobby</h1>
            <p>Session: {params.sessionId}</p>
            {/* TODO: QR/code display, player list, start button */}
        </main>
    );
}
