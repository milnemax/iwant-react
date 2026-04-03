export type User = {
    id: number;
    is_admin: bool;
    name: string;
    email: string;
    email_verified_at: string | null;
    birth_day: number;
    birth_month: number;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
};

export type Auth = {
    user: User;
};
