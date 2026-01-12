export type ApiResponse<T> = {
    data?: T;
    error?: string;
    count?: number;
};

export interface User {
    id: string;
    name: string;
    role: 'admin' | 'user' | 'spectator';
}
