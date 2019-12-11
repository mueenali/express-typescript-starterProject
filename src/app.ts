import * as express from 'express'
import * as bodyParser from 'body-parser'
import {MongoConfig} from './db/mongoConfig'

class App {
    public app: express.Application;
    private readonly mongoConfig: MongoConfig = new MongoConfig();

    constructor() {
        this.config();
    }

    private config() {
        this.app = express();
        this.mongoConfig.connect().then(result => console.log('Mongodb is connected'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
