import { CreateClientParams, UpdateClientParams } from 'src/clients/domain/types';
import { CreateRetoolClientRequestDto, UpdateRetoolClientRequestDto } from '../dtos/retool-client-request.dto';

export class RetoolClientRequestMapper {
    toCreateDto(createParams: CreateClientParams): CreateRetoolClientRequestDto {
        return {
            full_name: createParams.names,
            email_address: createParams.email,
            phone_number: createParams.phone,
        };
    }

    toUpdateDto(updateParams: UpdateClientParams): UpdateRetoolClientRequestDto {
        return {
            full_name: updateParams.names,
            email_address: updateParams.email,
            phone_number: updateParams.phone,
        }
    }
}
