import { CreateRetoolClientResponseDto, UpdateRetoolClientResponseDto } from '../dtos/retool-client-response.dto';

export class RetoolClientResponseMapper {
    toCreateResponse(createResponse: CreateRetoolClientResponseDto) {
        return {
            id: createResponse.id,
            names: createResponse.full_name,
            email: createResponse.email_address,
            phone: createResponse.phone_number,
        };
    }

    toUpdateResponse(updateResponse: UpdateRetoolClientResponseDto) {
        return {
            id: updateResponse.id,
            names: updateResponse.full_name,
            email: updateResponse.email_address,
            phone: updateResponse.phone_number,
        }
    }
}
