import { ormDatabase, ormPassword, ormUsername } from "./src/configs";

export default {
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": ormUsername,
   "password": ormPassword,
   "database": ormDatabase,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entities/**/*.ts"
   ],
   "migrations": [
      "src/migrations/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entities",
      "migrationsDir": "src/migrations"
   }
}