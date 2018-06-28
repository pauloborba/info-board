"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("./app");
const config_1 = require("../config/config");
const database_factory_1 = require("./factory/database.factory");
const server = http.createServer(app_1.default);
database_factory_1.getDatabaseManager().openConnection(config_1.default.mongoUrl)
    .then(() => {
    server.listen(config_1.default.port);
    server.on("error", (error) => console.error(`Error starting  server ${error}`));
    server.on("listening", () => console.log(`Server started on port ${config_1.default.port}`));
})
    .catch(error => console.log(error));
process.on('SIGINT', () => database_factory_1.getDatabaseManager().closeConnection()
    .then(() => process.exit(0))
    .catch(() => process.exit(0)));
//# sourceMappingURL=index.js.map