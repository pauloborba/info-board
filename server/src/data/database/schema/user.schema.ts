import { Connection, Document, Model, Schema } from "mongoose";
import { getDatabaseManager } from "../../../factory/database.factory"
import { User } from "../../model/user.model";

let UserSchema = new Schema({
    firstName: { required: true, type: String, index: true },
    lastName: { required: true, type: String, index: true },
    email: {required: true, type: String, index: {unique: true}},
    pictureUrl: {required: false, type: String},
    admin: {required: true, type: Boolean, select: false, default: false},
    password: {type: String, required: true, bcrypt: true, select: false},
}, {versionKey: false, collection: "users"});

UserSchema.plugin(require('mongoose-bcrypt'));

interface UserModel extends User, Document {
    verifyPasswordSync(rec_password: string): boolean
}

const UserCollection = (): Model<UserModel> => getDatabaseManager().createCollection<UserModel>(
    "info-board", "User", UserSchema);

export { UserCollection, UserModel };