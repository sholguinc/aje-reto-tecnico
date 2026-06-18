import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './infrastructure/config/typeorm.config';

@Global()
@Module({
    imports: [TypeOrmModule.forRootAsync(typeOrmAsyncConfig)],
})
export class DatabaseModule { }
