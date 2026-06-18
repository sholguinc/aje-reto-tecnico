import { Client } from '../entities/client.entity';
import { CreateClientParams, UpdateClientParams } from '../types';

export const CLIENT_REPOSITORY_KEY = Symbol('ClientRepository');

export interface ClientRepository {
    findAll(): Promise<Client[]>;
    findOne(id: number): Promise<Client | null>;
    findOneBy(criteria: Partial<Client>): Promise<Client | null>;
    create(data: CreateClientParams): Promise<Client>;
    update(client: Client, changes: UpdateClientParams): Promise<Client>;
    remove(id: number): Promise<void>;
}
