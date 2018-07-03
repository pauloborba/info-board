import { Model } from 'mongoose';
import { Notification } from "../model/notification.model";
import { NotificationCollection, NotificationModel } from "../database/schema/notification.schema";
import { UserModel, UserCollection } from "../database/schema/user.schema";

const NotificationDataController = {
    saveNotification: function (notification: Notification): Promise<NotificationModel> {
        return new (NotificationCollection())(notification).save()
            .then((savedNotification) => NotificationCollection()
            .findById(savedNotification._id).lean().exec() as Promise<NotificationModel>)
    },

    getNotifications: function(userId: String): Promise<NotificationModel[]> {
        return NotificationCollection().find({ userId: userId}).lean().exec() as Promise<NotificationModel[]>
    },

    updateVisibility: function (notificationId: String): Promise<NotificationModel> {
        return NotificationCollection().findOneAndUpdate({_id: notificationId}, { wasSeen: true }, { new: true })
            .lean().exec() as Promise<NotificationModel>;
    },

    subscribe: function(userId: String, token: String): Promise<UserModel> {
        return UserCollection().findOneAndUpdate({_id: userId}, { notificationToken: token }, {new: true })
            .lean().exec() as Promise<UserModel>;
    }

};

export default NotificationDataController;