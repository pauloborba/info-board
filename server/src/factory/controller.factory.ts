import UserController from "../api/controller/user.controller";
import NotificationController from "../api/controller/notification.controller";
import ReuniaoController from "../api/controller/reuniao.controller";
import * as ManagerFactory from "./manager.factory";

let userController: UserController;
let notificationController: NotificationController;
let reuniaoController: ReuniaoController;

const getUserController = (): UserController => getController(
    userController, UserController, ManagerFactory.getUserManager());

const getNotificationController = (): NotificationController => getController(
    notificationController, NotificationController, ManagerFactory.getNotificationManager());

const getReuniaoController = (): ReuniaoController => getController(
    reuniaoController, ReuniaoController, ManagerFactory.getReuniaoManager());

const getController = (instance: any, controller: any, ...dependencies: any[]) => {
    if (!instance) {
        instance = new controller(...dependencies);
    }
    return instance;
};

export { getUserController, getNotificationController, getReuniaoController }