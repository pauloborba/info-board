"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_manager_1 = require("../data/database/database.manager");
let databaseManagerInstance;
const getDatabaseManager = () => {
    if (!databaseManagerInstance) {
        databaseManagerInstance = new database_manager_1.default();
    }
    return databaseManagerInstance;
};
exports.getDatabaseManager = getDatabaseManager;
//# sourceMappingURL=database.factory.js.map