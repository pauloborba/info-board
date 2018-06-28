"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = require("./user.route");
const notification_route_1 = require("./notification.route");
const ControllerFactory = require("../../factory/controller.factory");
exports.default = (express) => {
    user_route_1.default(express, ControllerFactory.getUserController());
    notification_route_1.default(express, ControllerFactory.getNotificationController());
};
//# sourceMappingURL=route.js.map