import UserController from "../api/controller/user.controller";
import * as ManagerFactory from "./manager.factory";

let userController: UserController;

const getUserController = (): UserController => getController(
    userController, UserController, ManagerFactory.getUserManager());

const getController = (instance: any, controller: any, ...dependencies: any[]) => {
    if (!instance) {
        instance = new controller(...dependencies);
    }
    return instance;
};

export { getUserController }