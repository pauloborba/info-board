
import NotificationDataController from "../../data/datacontroller/notification.datacontroller";

export default class NotificationManager {

    constructor() { } //In case we need some other service


    async listNotification(userId: String) {
        return NotificationDataController.getNotifications(userId);
    }

    async subscribe(userId: String, token: String) {
        return NotificationDataController.subscribe(userId, token);
    }
    
    async createNotification(body: Object, userId: String, senderId: String) {
        
    }
}