export interface CreateRetoolClientRequestDto {
  full_name: string;
  email_address: string;
  phone_number: string;
}

export type UpdateRetoolClientRequestDto = Partial<CreateRetoolClientRequestDto>;
