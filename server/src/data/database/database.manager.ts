import * as mongoose from 'mongoose';
import { Document, Model, Schema } from 'mongoose';

export default class DatabaseManager {
    private dbConnection: mongoose.Connection;

    constructor() {
        (mongoose as any).Promise = global.Promise;
    }

    public openConnection(mongoUrl: string): Promise<any> {
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
            } else {
                resolve();
            }
        });
    }

    public closeConnection(): Promise<any> {
        return new Promise((resolve, reject) => {
                if (this.dbConnection) {
                    this.dbConnection.close(() => {
                        console.log('Mongoose default connection disconnected through app termination');
                        resolve();
                    })
                } else {
                    resolve();
                }
            }
        );
    }

    public createCollection<T extends Document>(dbName: string, modelName: string, schema: Schema): Model<T> {
        return this.dbConnection.useDb(dbName).model<T>(modelName, schema);
    }
}