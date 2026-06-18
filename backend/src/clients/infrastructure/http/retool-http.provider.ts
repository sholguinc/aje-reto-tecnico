import { ConfigType } from '@nestjs/config';
import axios from 'axios';

import { AxiosHttpClient } from 'src/common/http/axios-http-client';

import config from 'src/common/config/config';

export const RETOOL_HTTP_KEY = Symbol('RETOOL_HTTP_PROVIDER');

export const retoolHttpProvider = {
    provide: RETOOL_HTTP_KEY,
    inject: [config.KEY],
    useFactory: (configService: ConfigType<typeof config>) => {
        const axiosInstance = axios.create({
            baseURL: configService.apis.retool,
            timeout: 5000,
        });

        return new AxiosHttpClient(axiosInstance);
    },
};
