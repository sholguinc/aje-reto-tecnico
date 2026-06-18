import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();
const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: configService.get('POSTGRES_HOST'),
    port: Number.parseInt(configService.get('POSTGRES_PORT') as string, 10),
    username: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DB'),
    synchronize: false,
    logging: false,
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/database/infrastructure/migrations/*.ts'],
    migrationsTableName: 'migrations',
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
