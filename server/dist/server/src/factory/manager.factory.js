"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_manager_1 = require("../api/manager/user.manager");
const notification_manager_1 = require("../api/manager/notification.manager");
let userManager;
let notificationManager;
const getUserManager = () => getManager(userManager, user_manager_1.default);
exports.getUserManager = getUserManager;
const getNotificationManager = () => getManager(notificationManager, notification_manager_1.default);
exports.getNotificationManager = getNotificationManager;
const getManager = (instance, manager, ...dependencies) => {
    if (!instance) {
        instance = new manager(...dependencies);
    }
    return instance;
};
//# sourceMappingURL=manager.factory.js.map