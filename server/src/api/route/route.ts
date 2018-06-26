import { Express } from "express";
import UserRoute from "./user.route";
import NotificationRoute from "./notification.route";

import * as ControllerFactory from "../../factory/controller.factory";

export default (express: Express) => {
    UserRoute(express, ControllerFactory.getUserController());
    NotificationRoute(express, ControllerFactory.getNotificationController());
}