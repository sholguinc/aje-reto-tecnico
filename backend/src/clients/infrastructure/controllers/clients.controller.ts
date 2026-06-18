import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Patch,
    Delete,
    ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ClientRequestMapper } from '../mappers/client-request.mapper';
import { ClientResponseMapper } from '../mappers/client-response.mapper';
import { ClientsService } from '../../application/services/clients.service';
import { CreateClientRequestDto, UpdateClientRequestDto } from '../../application/dtos/client-request.dto';

import {
    ListClientsDoc,
    GetClientDoc,
    CreateClientDoc,
    UpdateClientDoc,
    DeleteClientDoc
} from '../swagger/clients.swagger';

@ApiTags('clientes')
@Controller('clientes')
export class ClientsController {
    constructor(
        private clientRequestMapper: ClientRequestMapper,
        private clientResponseMapper: ClientResponseMapper,
        private clientsService: ClientsService,
    ) { }

    @Get()
    @ListClientsDoc()
    async list() {
        const clients = await this.clientsService.findAll();
        return this.clientResponseMapper.toListResponse(clients)
    }

    @Get(':id')
    @GetClientDoc()
    async get(@Param('id', ParseIntPipe) id: number) {
        const client = await this.clientsService.findOne(id);
        return this.clientResponseMapper.toGetResponse(client);
    }

    @Post()
    @CreateClientDoc()
    async create(@Body() payload: CreateClientRequestDto) {
        const createClientParams = this.clientRequestMapper.toCreateParams(payload);
        const createdClient = await this.clientsService.create(createClientParams);
        return this.clientResponseMapper.toCreateResponse(createdClient);
    }

    @Patch(':id')
    @UpdateClientDoc()
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateClientRequestDto,
    ) {
        const updateClientParams = this.clientRequestMapper.toUpdateParams(payload);
        const updatedClient = await this.clientsService.update(id, updateClientParams);
        return this.clientResponseMapper.toUpdateResponse(updatedClient.id);
    }

    @Delete(':id')
    @DeleteClientDoc()
    async remove(@Param('id', ParseIntPipe) id: number) {
        await this.clientsService.remove(+id);
        return this.clientResponseMapper.toDeleteResponse(id);
    }
}
