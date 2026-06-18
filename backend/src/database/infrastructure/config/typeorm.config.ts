import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';

import config from '../../../common/config/config';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    inject: [config.KEY],
    useFactory: async (
        configService: ConfigType<typeof config>,
    ): Promise<TypeOrmModuleOptions> => {
        const { host, port, user, password, name } = configService.database;
        return {
            type: 'postgres',
            host,
            port: Number(port),
            username: user,
            password,
            database: name,
            synchronize: false,
            autoLoadEntities: true,
        };
    },
};
