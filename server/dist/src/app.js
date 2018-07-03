"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const route_1 = require("./api/route/route");
const app = () => {
    console.log("Should implement express");
    const app = express();
    const allowCrossDomain = function (req, res, next) {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    };
    app.use(allowCrossDomain);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    route_1.default(app);
    return app;
};
exports.default = app();
//# sourceMappingURL=app.js.map