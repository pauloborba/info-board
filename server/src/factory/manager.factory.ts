import UserManager from "../api/manager/user.manager";

let userManager: UserManager;

const getUserManager = (): UserManager => getManager(userManager, UserManager);

const getManager = (instance: any, manager: any, ...dependencies: any[]) => {
    if (!instance) {
        instance = new manager(...dependencies);
    }
    return instance;
};

export { getUserManager }