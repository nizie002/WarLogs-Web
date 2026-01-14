// NewRecruits JSON Parser
// Parses army list JSON exported from NewRecruits

export interface ArmyList {
    name: string;
    faction: string;
    army: string;
    points: number;
    source: 'newrecruits' | 'battlescribe';
    units: unknown[];
}

export function parseNewRecruits(json: unknown): ArmyList | null {
    // TODO: Implement parsing logic
    return null;
}
