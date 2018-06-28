"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor(notificationManager) {
        this.notificationManager = notificationManager;
    }
    subscribe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.body.userId;
            const token = req.body.token;
            return this.notificationManager.subscribe(userId, token)
                .then(result => res.status(200).send(result))
                .catch(err => console.log("Error in subscribe to notification"));
        });
    }
    getNotifications(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.body.userId;
            return this.notificationManager.listNotification(userId)
                .then(result => res.status(200).send(result))
                .catch(err => console.log("Error in get notifications"));
        });
    }
    setVisibility(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const notificationId = req.params.notificationId;
            return this.notificationManager.setVisibility(notificationId)
                .then(result => res.status(200).send(result))
                .catch(err => console.log("Error in change visibility"));
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=notification.controller.js.map