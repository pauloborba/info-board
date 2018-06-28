"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app, notificationController) => {
    app.route("/api/notification")
        .post(notificationController.subscribe.bind(notificationController));
    app.route("/api/notifications/:userId")
        .get(notificationController.getNotifications.bind(notificationController));
    app.route("/api/notification/notificationId")
        .post(notificationController.setVisibility.bind(notificationController));
};
//# sourceMappingURL=notification.route.js.map