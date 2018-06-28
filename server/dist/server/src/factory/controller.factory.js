"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../api/controller/user.controller");
const notification_controller_1 = require("../api/controller/notification.controller");
const ManagerFactory = require("./manager.factory");
let userController;
let notificationController;
const getUserController = () => getController(userController, user_controller_1.default, ManagerFactory.getUserManager());
exports.getUserController = getUserController;
const getNotificationController = () => getController(notificationController, notification_controller_1.default, ManagerFactory.getNotificationManager());
exports.getNotificationController = getNotificationController;
const getController = (instance, controller, ...dependencies) => {
    if (!instance) {
        instance = new controller(...dependencies);
    }
    return instance;
};
//# sourceMappingURL=controller.factory.js.map