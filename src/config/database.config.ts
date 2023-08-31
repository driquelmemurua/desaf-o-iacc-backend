import { registerAs } from "@nestjs/config";
import entities from "src/typeorm";

export default registerAs('database', () => ({
    type: 'postgres',
    host: process.env.DB_HOST || 'docker.host.internal',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'iacc_db',
    entities: entities,
    synchronize: true,
}));
