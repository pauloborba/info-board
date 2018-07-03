"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const notification_datacontroller_1 = require("../../data/datacontroller/notification.datacontroller");
const notification_model_1 = require("../../data/model/notification.model");
class NotificationManager {
    constructor(userManager) {
        this.userManager = userManager;
    } //In case we need some other service
    listNotification(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return notification_datacontroller_1.default.getNotifications(userId);
        });
    }
    subscribe(userId, token) {
        return __awaiter(this, void 0, void 0, function* () {
            return notification_datacontroller_1.default.subscribe(userId, token);
        });
    }
    createNotification(body, userId, senderId) {
        return __awaiter(this, void 0, void 0, function* () {
            let notification;
            if (userId.length) { //Notification to a specific user, then its a chat
                notification = this.createChatNotification(userId, senderId, body.mensagem);
                return notification_datacontroller_1.default.saveNotification(notification);
            }
            else {
                const users = yield this.userManager.getUsers();
                const userIds = users.map(u => u['_id']);
            }
        });
    }
    createChatNotification(userId, senderId, mensagem) {
        let notification = { title: "Mensagem", subtitle: "Alguem mandou mensagem para você",
            userid: userId, senderId: senderId, wasSeen: false, type: notification_model_1.NotificationType.Chat,
            body: { mensagem: mensagem }
        };
        return notification;
    }
    creatPostNotification(userId, title) {
        let notification = { title: "Post", subtitle: "Você tem uma nova postagem no seu mural",
            userid: userId, senderId: "InfoBoard-Bot", wasSeen: false, type: notification_model_1.NotificationType.Post,
            body: { title: title }
        };
        return notification;
    }
    setVisibility(notificationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const notification = yield notification_datacontroller_1.default.updateVisibility(notificationId);
            return notification;
        });
    }
}
exports.default = NotificationManager;
/*
    title: string;
    subtitle: string;
    userid: string;
    senderId: string;
    wasSeen: boolean;
    body: any;
    */ 
//# sourceMappingURL=notification.manager.js.map