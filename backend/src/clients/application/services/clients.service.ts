import { Injectable, Inject, NotFoundException, HttpException } from '@nestjs/common';

import { CreateClientParams, UpdateClientParams } from '../../domain/types';
import { CLIENT_REPOSITORY_KEY, type ClientRepository } from '../../domain/repositories/client.repository';
import { ExternalClientsService } from './external-clients.service';

@Injectable()
export class ClientsService {
    constructor(
        @Inject(CLIENT_REPOSITORY_KEY) private readonly clientRepository: ClientRepository,
        private readonly externalClientsService: ExternalClientsService,
    ) { }

    async findAll() {
        return this.clientRepository.findAll();
    }

    async findOne(id: number) {
        const client = await this.clientRepository.findOne(id);
        if (!client) {
            throw new NotFoundException(`Cliente #${id} no encontrado`);
        }
        return client;
    }

    async create(data: CreateClientParams) {
        await this.validateEmailNotExists(data.email)
        const externalClient = await this.externalClientsService.create(data);
        const newData = { id: externalClient.id, ...data };

        return this.clientRepository.create(newData);
    }

    async update(id: number, changes: UpdateClientParams) {
        const client = await this.findOne(id);

        if (changes.email) {
            await this.validateEmailNotExists(changes.email, id)
        }

        await this.externalClientsService.update(id, changes);
        return this.clientRepository.update(client, changes);
    }

    async remove(id: number) {
        await this.findOne(id);
        await this.externalClientsService.remove(id);
        return this.clientRepository.remove(id);
    }

    private async validateEmailNotExists(email: string, id?: number): Promise<void> {
        const existingClient = await this.clientRepository.findOneBy({ email });

        if (!existingClient) return;

        const isSameClient = id !== undefined && existingClient.id === id;

        if (!isSameClient) {
            throw new HttpException(`Ya existe un cliente con email ${email}`, 400);
        }
    }
}
