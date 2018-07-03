import { Response, Request } from "express";
import NotificationManager from "../manager/notification.manager";

export default class UserController {
    private notificationManager: NotificationManager;

    constructor(notificationManager: NotificationManager) {
        this.notificationManager = notificationManager;
    }

    async subscribe(req: Request, res: Response) {
        const userId = req.body.userId;
        const token = req.body.token;
        return this.notificationManager.subscribe(userId, token)
            .then( result => res.status(200).send(result))
            .catch(err => console.log("Error in subscribe to notification"));
    }

    async getNotifications(req: Request, res: Response) {
        const userId = req.body.userId;
        return this.notificationManager.listNotification(userId)
            .then( result => res.status(200).send(result))
            .catch(err => console.log("Error in get notifications"));
    }

    async setVisibility(req: Request, res: Response) {
        const notificationId = req.params.notificationId;
        return this.notificationManager.setVisibility(notificationId)
            .then( result => res.status(200).send(result))
            .catch(err => console.log("Error in change visibility"));
    }

    //TODO: This feature should be removed as soon as the others implement and use the NotificationManager to send notifications
    //This is only to garantee that there are notifications that can be fetched
    // async notification(req: Request, res: Response) {
    //     return this.notificationManager.creatPostNotification()
    //         .then( result => res.status(200).send(result))
    //         .catch(err => console.log("Error request a notification"));
    // }

}