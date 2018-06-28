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
const user_datacontroller_1 = require("../../data/datacontroller/user.datacontroller");
class UserManager {
    constructor() { } //In case we need some other service
    saveUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedUser = yield user_datacontroller_1.default.saveUser(body);
            return savedUser;
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_datacontroller_1.default.getUsers();
            return users;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_datacontroller_1.default.getUserByEmai(email);
            return user;
        });
    }
    getUserBydId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_datacontroller_1.default.getUserById(userId);
            return user;
        });
    }
}
exports.default = UserManager;
//# sourceMappingURL=user.manager.js.map