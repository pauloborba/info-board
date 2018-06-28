"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DatabaseManager {
    constructor() {
        mongoose.Promise = global.Promise;
    }
    openConnection(mongoUrl) {
        return new Promise((resolve, reject) => {
            if (!this.dbConnection) {
                this.dbConnection = mongoose.createConnection(mongoUrl);
                this.dbConnection.on('connected', () => {
                    console.log('Mongoose default connection open to ' + mongoUrl);
                    resolve();
                });
                this.dbConnection.on('error', function (err) {
                    console.log('Mongoose default connection error: ' + err);
                    reject(err);
                });
                this.dbConnection.on('disconnected', function () {
                    console.log('Mongoose default connection disconnected');
                });
            }
            else {
                resolve();
            }
        });
    }
    closeConnection() {
        return new Promise((resolve, reject) => {
            if (this.dbConnection) {
                this.dbConnection.close(() => {
                    console.log('Mongoose default connection disconnected through app termination');
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    }
    createCollection(dbName, modelName, schema) {
        return this.dbConnection.useDb(dbName).model(modelName, schema);
    }
}
exports.default = DatabaseManager;
//# sourceMappingURL=database.manager.js.map