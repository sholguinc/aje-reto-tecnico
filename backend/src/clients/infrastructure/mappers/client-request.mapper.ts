import { CreateClientRequestDto, UpdateClientRequestDto } from '../../application/dtos/client-request.dto';
import { CreateClientParams, UpdateClientParams } from '../../domain/types';

export class ClientRequestMapper {
    toCreateParams(dto: CreateClientRequestDto): CreateClientParams {
        return {
            names: dto.nombres,
            email: dto.email,
            phone: dto.telefono,
            state: dto.estado,
        };
    }

    toUpdateParams(dto: UpdateClientRequestDto): UpdateClientParams {
        return {
            names: dto.nombres,
            email: dto.email,
            phone: dto.telefono,
            state: dto.estado,
        }
    }
}
