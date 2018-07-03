
import NotificationDataController from "../../data/datacontroller/notification.datacontroller";
import UserManager from "./user.manager";
import { NotificationType } from "../../data/model/notification.model";
import { UserModel } from "../../data/database/schema/user.schema";

export default class NotificationManager {
    private userManager: UserManager;

    constructor(userManager: UserManager ) { 
        this.userManager = userManager;
    } //In case we need some other service


    async listNotification(userId: String) {
        return NotificationDataController.getNotifications(userId);
    }

    async subscribe(userId: String, token: String) {
        return NotificationDataController.subscribe(userId, token);
    }
    
    async createNotification(body: any, userId: String, senderId: String) {
        let notification;
        if (userId.length) { //Notification to a specific user, then its a chat
            notification = this.createChatNotification(userId, senderId, body.mensagem);
            return NotificationDataController.saveNotification(notification);
        } else{
            const users = await this.userManager.getUsers();
            const userIds = users.map( u => u['_id'] );

        }
    }

    createChatNotification(userId: String, senderId: String, mensagem: String):  any {
        let notification = { title: "Mensagem", subtitle: "Alguem mandou mensagem para você",
            userid: userId, senderId: senderId, wasSeen: false, type: NotificationType.Chat,
            body: { mensagem: mensagem }
        }
        return notification;
    } 

    creatPostNotification(userId: String, title: String): any {
        let notification = { title: "Post", subtitle: "Você tem uma nova postagem no seu mural",
            userid: userId, senderId: "InfoBoard-Bot", wasSeen: false, type: NotificationType.Post,
            body: { title: title }
        }
        return notification;
    }

    async setVisibility(notificationId: String) {
        const notification = await NotificationDataController.updateVisibility(notificationId);
        return notification;
    }

    async notification(body: any) {

    }

}
