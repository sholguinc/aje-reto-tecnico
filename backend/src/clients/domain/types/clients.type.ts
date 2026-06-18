export interface CreateClientParams {
    names: string;
    email: string;
    phone: string;
    state?: number;
};

export type UpdateClientParams = Partial<CreateClientParams>;
