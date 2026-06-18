import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CLIENT_REPOSITORY_KEY } from './domain/repositories/client.repository';
import { EXTERNAL_CLIENT_REPOSITORY_KEY } from './domain/repositories/external-client.repository';

import { ClientsService } from './application/services/clients.service';
import { ExternalClientsService } from './application/services/external-clients.service';

import { ClientTypeOrmEntity } from './infrastructure/entities/client.entity';

import { ClientTypeOrmRepository } from './infrastructure/repositories/client.repository';
import { ClientsController } from './infrastructure/controllers/clients.controller';
import { ClientRequestMapper } from './infrastructure/mappers/client-request.mapper';
import { ClientResponseMapper } from './infrastructure/mappers/client-response.mapper';

import { retoolHttpProvider } from './infrastructure/http/retool-http.provider';
import { RetoolClientRequestMapper } from './infrastructure/mappers/retool-client-request.mapper';
import { RetoolClientResponseMapper } from './infrastructure/mappers/retool-client-response.mapper';
import { ExternalClientRetoolRepository } from './infrastructure/repositories/external-client.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([ClientTypeOrmEntity]),
  ],
  controllers: [
    ClientsController
  ],
  providers: [
    ClientRequestMapper,
    ClientResponseMapper,
    ClientsService,
    ExternalClientsService,
    {
      provide: CLIENT_REPOSITORY_KEY,
      useClass: ClientTypeOrmRepository,
    },
    {
      provide: EXTERNAL_CLIENT_REPOSITORY_KEY,
      useClass: ExternalClientRetoolRepository,
    },
    RetoolClientRequestMapper,
    RetoolClientResponseMapper,
    retoolHttpProvider,
  ],
  exports: [],
})
export class ClientsModule { }
