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
            .catch(err => console.log("Error in subscribe to notification"));
    }

}