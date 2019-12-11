import {createConnection, Connection} from "typeorm";

export class MongoConfig {

    public async connect(): Promise<Connection> {
       return await createConnection({
            type: "mongodb",
            host: "localhost",
            port: 27017,
            database: "advanceNode"
        });
    }
}
