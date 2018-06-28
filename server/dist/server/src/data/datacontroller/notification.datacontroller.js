"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notification_schema_1 = require("../database/schema/notification.schema");
const user_schema_1 = require("../database/schema/user.schema");
const NotificationDataController = {
    saveNotification: function (notification) {
        return new (notification_schema_1.NotificationCollection())(notification).save()
            .then((savedNotification) => notification_schema_1.NotificationCollection()
            .findById(savedNotification._id).lean().exec());
    },
    getNotifications: function (userId) {
        return notification_schema_1.NotificationCollection().find({ userId: userId }).lean().exec();
    },
    updateVisibility: function (notificationId) {
        return notification_schema_1.NotificationCollection().findOneAndUpdate({ _id: notificationId }, { wasSeen: true }, { new: true })
            .lean().exec();
    },
    subscribe: function (userId, token) {
        return user_schema_1.UserCollection().findOneAndUpdate({ _id: userId }, { notificationToken: token }, { new: true })
            .lean().exec();
    }
};
exports.default = NotificationDataController;
//# sourceMappingURL=notification.datacontroller.js.map