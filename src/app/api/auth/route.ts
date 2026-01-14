import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    // TODO: Implement login
    // 1. Get userId and pin from request body
    // 2. Validate against backend
    // 3. Set cookie
    return NextResponse.json({ message: 'Not implemented' }, { status: 501 });
}
