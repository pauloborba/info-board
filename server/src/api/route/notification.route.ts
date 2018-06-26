import { Express } from "express";
import NotificationController from "../controller/notification.controller";

export default (app: Express, notificationController: NotificationController) => {

    app.route("/api/notification")
        .post(notificationController.subscribe.bind(notificationController));

}