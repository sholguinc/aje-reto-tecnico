import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
    return {
        database: {
            host: process.env.POSTGRES_HOST,
            port: process.env.POSTGRES_PORT,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            name: process.env.POSTGRES_DB,
        },
        apis: {
            retool: process.env.RETOOL_API_URL,
        }
    };
});
