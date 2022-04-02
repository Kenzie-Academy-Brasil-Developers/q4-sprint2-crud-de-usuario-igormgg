import * as dotenv from 'dotenv';

dotenv.config();

const jwtSecret: any = process.env.JWT_SECRET;

const jwtTokenExpiration: any = process.env.JWT_TOKEN_EXPIRATION;

const ormUsername: any = process.env.ORM_USERNAME;

const ormPassword: any = process.env.ORM_PASSWORD;

const ormDatabase: any = process.env.ORM_DATABASE;

export {
    jwtSecret, 
    jwtTokenExpiration,
    ormUsername,
    ormPassword,
    ormDatabase
};