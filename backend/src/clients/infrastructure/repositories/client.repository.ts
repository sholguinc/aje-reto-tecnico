import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ClientTypeOrmEntity as Client } from '../entities/client.entity';
import { CreateClientParams, UpdateClientParams } from '../../domain/types';
import { ClientRepository } from '../../domain/repositories/client.repository';

@Injectable()
export class ClientTypeOrmRepository implements ClientRepository {
    constructor(
        @InjectRepository(Client) private readonly clientRepository: Repository<Client>,
    ) { }

    async findAll(): Promise<Client[]> {
        return this.clientRepository.find();
    }

    async findOne(id: number): Promise<Client | null> {
        return this.clientRepository.findOneBy({ id });
    }

    async findOneBy(
        criteria: Partial<Client>,
    ): Promise<Client | null> {
        return this.clientRepository.findOneBy(criteria);
    }

    async create(data: CreateClientParams): Promise<Client> {
        const newClient = this.clientRepository.create(data);
        return this.clientRepository.save(newClient);
    }

    async update(client: Client, changes: UpdateClientParams): Promise<Client> {
        this.clientRepository.merge(client, changes);
        return this.clientRepository.save(client);
    }

    async remove(id: number): Promise<void> {
        await this.clientRepository.delete(id);
    }
}
