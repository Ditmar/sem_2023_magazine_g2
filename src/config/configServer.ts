import * as bodyParser from 'body-parser';
import {Express} from 'express';
// config;
const configServer = (server: Express) => {
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
}
export default configServer;