import * as Joi from 'joi';

const configSchema = Joi.object({
    NODE_ENV: Joi.string().required(),
    PORT: Joi.number().required(),
    POSTGRES_HOST: Joi.string().required(),
    POSTGRES_PORT: Joi.number().required(),
    POSTGRES_USER: Joi.string().required(),
    POSTGRES_PASSWORD: Joi.string().required(),
    POSTGRES_DB: Joi.string().required(),
    RETOOL_API_URL: Joi.string().required(),
});

export default configSchema;
