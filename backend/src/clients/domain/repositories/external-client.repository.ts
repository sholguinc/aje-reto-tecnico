import { Client } from '../entities/client.entity';
import { CreateClientParams, UpdateClientParams } from '../types';

export const EXTERNAL_CLIENT_REPOSITORY_KEY = Symbol('ExternalClientRepository');

export interface ExternalClientRepository {
    create(data: CreateClientParams): Promise<Partial<Client>>;
    update(id: number, changes: UpdateClientParams): Promise<Partial<Client>>;
    remove(id: number): Promise<void>;
}
