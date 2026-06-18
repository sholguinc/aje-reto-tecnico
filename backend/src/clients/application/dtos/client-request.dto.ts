import {
    IsString,
    IsNotEmpty,
    IsEmail,
    Length,
    IsIn,
    IsOptional,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateClientRequestDto {
    @IsString()
    @IsNotEmpty()
    @Length(1, 255)
    readonly nombres!: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email!: string;

    @IsString()
    @IsNotEmpty()
    @Length(1, 50)
    readonly telefono!: string;

    @IsIn([0, 1])
    @IsOptional()
    readonly estado?: number;
}

export class UpdateClientRequestDto extends PartialType(CreateClientRequestDto) { }
