"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const database_factory_1 = require("../../../factory/database.factory");
const notification_model_1 = require("../../model/notification.model");
let NotificationSchema = new mongoose_1.Schema({
    title: { required: true, type: String, index: true },
    subtitle: { required: true, type: String, index: true },
    wasSeen: { required: true, type: Boolean, index: true, default: false },
    userId: { required: true, type: String, index: true },
    senderId: { required: true, type: String, index: true },
    body: { required: true, type: Object, index: true },
    type: { required: true, type: notification_model_1.NotificationType, index: true }
}, { versionKey: false, collection: "notifications" });
const NotificationCollection = () => database_factory_1.getDatabaseManager().createCollection("info-board", "Notification", NotificationSchema);
exports.NotificationCollection = NotificationCollection;
//# sourceMappingURL=notification.schema.js.map