"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const database_factory_1 = require("../../../factory/database.factory");
exports.UserSchema = new mongoose_1.Schema({
    firstName: { required: true, type: String, index: true },
    lastName: { required: true, type: String, index: true },
    email: { required: true, type: String, index: { unique: true } },
    pictureUrl: { required: false, type: String },
    admin: { required: true, type: Boolean, select: false, default: false },
    notificationToken: { required: false, type: String, index: false },
    password: { type: String, required: true, bcrypt: true, select: false },
}, { versionKey: false, collection: "users" });
exports.UserSchema.plugin(require('mongoose-bcrypt'));
const UserCollection = () => database_factory_1.getDatabaseManager().createCollection("info-board", "User", exports.UserSchema);
exports.UserCollection = UserCollection;
//# sourceMappingURL=user.schema.js.map