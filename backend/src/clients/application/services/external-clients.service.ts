import { Injectable, Inject } from '@nestjs/common';
import { isAxiosError } from 'axios'

import { CreateClientParams, UpdateClientParams } from '../../domain/types';
import { EXTERNAL_CLIENT_REPOSITORY_KEY, type ExternalClientRepository } from '../../domain/repositories/external-client.repository';

import { ExternalClientNotFoundError, ExternalClientTimeoutError, ExternalClientUnavailableError } from '../errors/external-clients.errors';

@Injectable()
export class ExternalClientsService {
    constructor(
        @Inject(EXTERNAL_CLIENT_REPOSITORY_KEY) private readonly externalClientRepository: ExternalClientRepository,
    ) { }

    async create(data: CreateClientParams) {
        try {
            return await this.externalClientRepository.create(data);
        } catch (error) {
            this.handleError(error);
        }
    }

    async update(
        id: number,
        changes: UpdateClientParams,
    ) {
        try {
            return await this.externalClientRepository.update(
                id,
                changes,
            );
        } catch (error) {
            this.handleError(error);
        }
    }

    async remove(id: number) {
        try {
            await this.externalClientRepository.remove(id);
        } catch (error) {
            this.handleError(error);
        }

    }


    private handleError(error: unknown): never {
        if (isAxiosError(error)) {
            switch (error.response?.status) {
                case 404:
                    throw new ExternalClientNotFoundError();

                case 408:
                    throw new ExternalClientTimeoutError();

                default:
                    throw new ExternalClientUnavailableError();
            }
        }

        throw error;
    }
}
