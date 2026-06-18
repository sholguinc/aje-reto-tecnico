export const ClientIdSchema = {
    type: 'integer',
    description: 'Identificador del cliente',
    example: 123456,
};

export const ClientIdParam = {
    name: 'id',
    required: true,
    schema: ClientIdSchema,
};

export const ClientBaseProperties = {
    nombres: {
        type: 'string',
        description: 'Nombres y apellidos del cliente.',
        example: 'Pedro Rodriguez',
    },
    email: {
        type: 'string',
        format: 'email',
        description: 'Correo electrónico.',
        example: 'pedro.rodriguez@email.com',
    },
    telefono: {
        type: 'string',
        description: 'Número de teléfono.',
        example: '999888777',
    },
    estado: {
        type: 'integer',
        description: 'Estado del cliente. 1 activo, 0 inactivo.',
        example: 1,
    },
};

export const ClientProperties = {
    id: ClientIdSchema,
    ...ClientBaseProperties
}

export const GetClientResponseSchema = {
    type: 'object',
    required: ['id', 'nombres', 'email', 'telefono', 'estado'],
    properties: ClientProperties,
};

export const ListClientsResponseSchema = {
  type: 'array',
  items: GetClientResponseSchema,
};

export const CreateClientRequestSchema = {
    type: 'object',
    required: ['nombres', 'email', 'telefono'],
    properties: ClientBaseProperties,
};

export const CreateClientResponseSchema = {
    type: 'object',
    required: ['id'],
    properties: {
        id: ClientIdSchema,
    },
};

export const UpdateClientRequestSchema = {
    type: 'object',
    properties: ClientBaseProperties,
};

export const BaseResponseSchema = {
    type: 'object',
    required: ['message'],
    properties: {
        message: {
            type: 'string',
            example: 'Operación realizada exitosamente',
            description: 'Mensaje de respuesta',
        },
    },
};

export const BaseErrorSchema = {
    type: 'object',
    required: ['message', 'error', 'statusCode'],
    properties: {
        message: {
            oneOf: [
                {
                    type: 'string',
                    example: 'Error al llamar al servicio',
                },
                {
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                    example: [
                        'telefono should not be empty',
                        'telefono must be a string',
                    ],
                },
            ],
        },
        error: {
            type: 'string',
            example: 'Bad Request',
        },
        statusCode: {
            type: 'integer',
            example: 400,
        },
    },
};
