"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("../database/schema/user.schema");
const UserDataController = {
    saveUser: function (user) {
        return new (user_schema_1.UserCollection())(user).save()
            .then((savedUser) => user_schema_1.UserCollection().findById(savedUser._id).lean().exec());
    },
    getUserById: function (userId) {
        return user_schema_1.UserCollection().findById(userId).lean().exec();
    },
    getUserByEmai: function (email) {
        return user_schema_1.UserCollection().findOne({ email: email }).exec();
    },
    getUsers: function () {
        return user_schema_1.UserCollection().find().lean().exec();
    },
};
exports.default = UserDataController;
//# sourceMappingURL=user.datacontroller.js.map