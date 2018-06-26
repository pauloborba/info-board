import UserManager from "../api/manager/user.manager";
import NotificationManager from "../api/manager/notification.manager";

let userManager: UserManager;
let notificationManager: NotificationManager;

const getUserManager = (): UserManager => getManager(userManager, UserManager);

const getNotificationManager = (): NotificationManager => getManager(notificationManager, NotificationManager);

const getManager = (instance: any, manager: any, ...dependencies: any[]) => {
    if (!instance) {
        instance = new manager(...dependencies);
    }
    return instance;
};

export { getUserManager, getNotificationManager }