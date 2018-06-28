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
    constructor(userManager) {
        this.userManager = userManager;
    }
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userManager.saveUser(req.body)
                .then((result) => res.status(200).send(result))
                .catch((err) => console.log("Error")); //Treat error
        });
    }
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userManager.getUsers()
                .then((result) => res.status(200).send(result))
                .catch((error) => console.log("Error"));
        });
    }
    userByEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.params.email;
            return this.userManager.getUserByEmail(email)
                .then((result) => res.status(200).send(result))
                .catch((error) => console.log("Error"));
        });
    }
    userById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.userId;
            return this.userManager.getUserBydId(userId)
                .then((result) => res.status(200).send(result))
                .catch((error) => console.log("Error"));
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map