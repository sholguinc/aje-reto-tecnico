import { Client } from '../../domain/entities/client.entity';
import { ListClientsResponseDto, GetClientResponseDto, CreateClientResponseDto, UpdateClientResponseDto, DeleteClientResponseDto } from '../../application/dtos/client-response.dto';

export class ClientResponseMapper {
    toListResponse(clients: Client[]): ListClientsResponseDto {
        return clients.map(this.toGetResponse)
    }

    toGetResponse(client: Client): GetClientResponseDto {
        return {
            id: client.id,
            nombres: client.names,
            email: client.email,
            telefono: client.phone,
            estado: client.state,
        }
    }

    toCreateResponse(client: Client): CreateClientResponseDto {
        return {
            id: client.id,
        }
    }

    toUpdateResponse(clientId: number): UpdateClientResponseDto {
        return {
            message: `Cliente #${clientId} actualizado correctamente`,
        }
    }

    toDeleteResponse(clientId: number): DeleteClientResponseDto {
        return {
            message: `Cliente #${clientId} eliminado correctamente`,
        }
    }
}
