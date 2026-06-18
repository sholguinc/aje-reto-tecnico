
export interface BaseMessageResponseDto {
    message: string;
}

export interface GetClientResponseDto {
    id: number;
    nombres: string;
    email: string;
    telefono: string;
    estado: number;
}

export type ListClientsResponseDto = GetClientResponseDto[];

export interface CreateClientResponseDto {
    id: number;
}

export type UpdateClientResponseDto = BaseMessageResponseDto;

export type DeleteClientResponseDto = BaseMessageResponseDto;
