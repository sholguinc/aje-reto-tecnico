import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { enviroments } from './config/environments';
import config from './config/config';
import configSchema from './config/configSchema';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: enviroments[process.env.NODE_ENV as keyof typeof enviroments] || enviroments.dev,
            load: [config],
            isGlobal: true,
            validationSchema: configSchema,
        })
    ]
})
export class CommonModule { }
