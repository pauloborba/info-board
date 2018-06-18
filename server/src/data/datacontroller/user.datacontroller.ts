import { Model } from 'mongoose';
import { User } from "../model/user.model";
import { UserCollection, UserModel } from "../database/schema/user.schema";

const UserDataController = {

    saveUser: function (user: User): Promise<UserModel> {
        return new (UserCollection())(user).save()
            .then((savedUser) => UserCollection().findById(savedUser._id).lean().exec() as Promise<UserModel>)
    },

    getUserById: function (userId: string): Promise<UserModel> {
        return UserCollection().findById(userId).lean().exec() as Promise<UserModel>;
    },

    getUserByEmai: function (email: string): Promise<UserModel> {
        return UserCollection().findOne({email: email}).exec() as Promise<UserModel>;
    },

    getUsers: function (): Promise<UserModel[]> {
        return UserCollection().find().lean().exec() as Promise<UserModel[]>;
    },
};

export default UserDataController;