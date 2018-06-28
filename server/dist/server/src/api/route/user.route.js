"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app, userController) => {
    app.route("/api/user")
        .post(userController.registerUser.bind(userController));
    app.route("/api/users")
        .get(userController.listUsers.bind(userController));
    app.route("/api/user/email/:email")
        .get(userController.userByEmail.bind(userController));
    app.route("/api/user/:userId")
        .get(userController.userById.bind(userController));
};
//# sourceMappingURL=user.route.js.map