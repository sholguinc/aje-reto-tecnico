import { Injectable, Inject } from '@nestjs/common';

import { type HttpClient } from 'src/common/http/http-client';
import { CreateClientParams, UpdateClientParams } from '../../domain/types';
import { CreateRetoolClientResponseDto, UpdateRetoolClientResponseDto} from '../dtos/retool-client-response.dto';

import { RETOOL_HTTP_KEY } from '../http/retool-http.provider';
import { Client } from '../../domain/entities/client.entity';
import { type ExternalClientRepository } from '../../domain/repositories/external-client.repository';

import { RetoolClientRequestMapper } from '../mappers/retool-client-request.mapper';
import { RetoolClientResponseMapper } from '../mappers/retool-client-response.mapper';

@Injectable()
export class ExternalClientRetoolRepository implements ExternalClientRepository {
  private readonly CLIENTS_PATH: string = '/clientes';

  constructor(
    @Inject(RETOOL_HTTP_KEY) private readonly retoolHttpClient: HttpClient,
    private readonly retoolClientRequestMapper: RetoolClientRequestMapper,
    private readonly retoolClientResponseMapper: RetoolClientResponseMapper,
  ) { }

  async create(data: CreateClientParams): Promise<Partial<Client>> {
    const createRetoolClientPayload = this.retoolClientRequestMapper.toCreateDto(data);
    const createRetoolClientResponse = await this.retoolHttpClient.post<CreateRetoolClientResponseDto>(this.CLIENTS_PATH, createRetoolClientPayload);
    return this.retoolClientResponseMapper.toCreateResponse(createRetoolClientResponse);
  }

  async update(id: number, changes: UpdateClientParams): Promise<Partial<Client>> {
    const updateRetoolClientPayload = this.retoolClientRequestMapper.toUpdateDto(changes);
    const updateRetoolClientResponse = await this.retoolHttpClient.patch<UpdateRetoolClientResponseDto>(`${this.CLIENTS_PATH}/${id}`, updateRetoolClientPayload);
    return this.retoolClientResponseMapper.toUpdateResponse(updateRetoolClientResponse);
  }

  async remove(id: number): Promise<void> {
    await this.retoolHttpClient.delete(`${this.CLIENTS_PATH}/${id}`);
  }
}
