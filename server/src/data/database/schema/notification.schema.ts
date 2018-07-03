import { Connection, Document, Model, Schema } from "mongoose";
import { getDatabaseManager } from "../../../factory/database.factory"
import { Notification, NotificationType } from "../../model/notification.model";

let NotificationSchema = new Schema({
    title: { required: true, type: String, index: true },
    subtitle: { required: true, type: String, index: true },
    wasSeen: { required: true, type: Boolean, index: true, default: false },
    userId: { required: true, type: String, index: true},
    senderId: { required: true, type: String, index: true },
    body: { required: true, type: Object, index: true },
    type: { required: true, type: NotificationType, index: true }
}, {versionKey: false, collection: "notifications"});

interface NotificationModel extends Notification, Document { }

const NotificationCollection = (): Model<NotificationModel> => getDatabaseManager().createCollection<NotificationModel>(
    "info-board", "Notification", NotificationSchema
);

export { NotificationCollection, NotificationModel };
