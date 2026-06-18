import { ApiOperation, ApiParam, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';

import { ListClientsResponseSchema, GetClientResponseSchema, CreateClientRequestSchema, CreateClientResponseSchema, UpdateClientRequestSchema, BaseResponseSchema, BaseErrorSchema, ClientIdParam } from './clients.schema';


export const ListClientsDoc = () => {
    return applyDecorators(
        ApiOperation({
            summary: 'Listar clientes',
            description: 'Listar clientes del sistema.',
        }),
        ApiOkResponse({
            description: 'Clientes listados correctamente',
            schema: ListClientsResponseSchema,
        }),
        ApiBadRequestResponse({
            description: 'Error al listar clientes',
            schema: BaseErrorSchema,
        }),
    );
};

export const GetClientDoc = () => {
    return applyDecorators(
        ApiOperation({
            summary: 'Obtener cliente',
            description: 'Obtener cliente del sistema.',
        }),
        ApiParam(ClientIdParam),
        ApiOkResponse({
            description: 'Cliente obtenido exitosamente',
            schema: GetClientResponseSchema,
        }),
        ApiBadRequestResponse({
            description: 'Error al obtener cliente',
            schema: BaseErrorSchema,
        }),
    );
};

export const CreateClientDoc = () => {
    return applyDecorators(
        ApiOperation({
            summary: 'Crear cliente',
            description: 'Crea un nuevo cliente en el sistema.',
        }),
        ApiBody({
            required: true,
            schema: CreateClientRequestSchema,
        }),
        ApiCreatedResponse({
            description: 'Cliente creado exitosamente',
            schema: CreateClientResponseSchema,
        }),
        ApiBadRequestResponse({
            description: 'Error al crear cliente',
            schema: BaseErrorSchema,
        }),
    );
};

export const UpdateClientDoc = () => {
    return applyDecorators(
        ApiOperation({
            summary: 'Actualizar cliente',
            description: 'Actualizar un cliente en el sistema.',
        }),
        ApiParam(ClientIdParam),
        ApiBody({
            required: true,
            schema: UpdateClientRequestSchema,
        }),
        ApiOkResponse({
            description: 'Cliente actualizado exitosamente',
            schema: BaseResponseSchema,
        }),
        ApiBadRequestResponse({
            description: 'Error al actualizar cliente',
            schema: BaseErrorSchema,
        }),
    );
};

export const DeleteClientDoc = () => {
    return applyDecorators(
        ApiOperation({
            summary: 'Eliminar cliente',
            description: 'Eliminar un cliente en el sistema.',
        }),
        ApiParam(ClientIdParam),
        ApiOkResponse({
            description: 'Cliente eliminado exitosamente',
            schema: BaseResponseSchema,
        }),
        ApiBadRequestResponse({
            description: 'Error al eliminar cliente',
            schema: BaseErrorSchema,
        }),
    );
};
