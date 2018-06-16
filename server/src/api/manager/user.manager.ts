
import UserDataController from "../../data/datacontroller/user.datacontroller";

export default class UserManager {

    constructor() { } //In case we need some other service

    async saveUser(body: any) {
        const savedUser = await UserDataController.saveUser(body);
        return savedUser;
    }

    async getUsers() {
        const users = await UserDataController.getUsers();
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await UserDataController.getUserByEmai(email);
        return user;
    }

    async getUserBydId(userId: string) {
        const user = await UserDataController.getUserById(userId);
        return user;
    }
}