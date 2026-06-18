export interface CreateRetoolClientResponseDto {
    id: number;
    full_name: string;
    email_address: string;
    phone_number: string;
}

export type UpdateRetoolClientResponseDto = Partial<CreateRetoolClientResponseDto>;

