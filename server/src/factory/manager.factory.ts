import UserManager from "../api/manager/user.manager";
import NotificationManager from "../api/manager/notification.manager";
import ReuniaoManager from "../api/manager/reuniao.manager";

let userManager: UserManager;
let notificationManager: NotificationManager;
let reuniaoManager: ReuniaoManager;

const getUserManager = (): UserManager => getManager(userManager, UserManager);

const getNotificationManager = (): NotificationManager => getManager(notificationManager, NotificationManager);

const getReuniaoManager = (): ReuniaoManager => getManager(reuniaoManager, ReuniaoManager);

const getManager = (instance: any, manager: any, ...dependencies: any[]) => {
    if (!instance) {
        instance = new manager(...dependencies);
    }
    return instance;
};

export { getUserManager, getNotificationManager, getReuniaoManager }