import * as express from 'express';
import { Express } from 'express';
import * as bodyParser from "body-parser";
import Routes from "./api/route/route";

const app = (): Express => {
    console.log("Should implement express");
    const app = express();

    const allowCrossDomain = function(req: any, res: any, next: any) {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    };

    app.use(allowCrossDomain);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    Routes(app);

    return app;
};

export default app();
