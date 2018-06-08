import * as express from 'express';
import { Express } from 'express';
import * as bodyParser from "body-parser";
import * as path from "path";

const app = (): Express => {
  console.log("Should implement express");
  const app = express();

  var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  }

  app.use(allowCrossDomain);
  app.use(bodyParser.json());
  

  return app;
}

export default app();
