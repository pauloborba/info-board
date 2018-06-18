import { Express } from "express";
import UserController from "../controller/user.controller";

export default (app: Express, userController: UserController) => {

    app.route("/api/user")
        .post(userController.registerUser.bind(userController));

    app.route("/api/users")
        .get(userController.listUsers.bind(userController));

    app.route("/api/user/email/:email")
        .get(userController.userByEmail.bind(userController));

    app.route("/api/user/:userId")
        .get(userController.userById.bind(userController));
}