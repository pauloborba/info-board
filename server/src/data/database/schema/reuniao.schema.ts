import { Connection, Document, Model, Schema } from "mongoose";
import { getDatabaseManager } from "../../../factory/database.factory"
import { Reuniao } from "../../../../../gui/info-board/src/app/model/reuniao";

let ReuniaoSchema = new Schema({
    titulo: {required: true, type: String},
    data: {required: false, type: Date},
    pauta: {required: false, type: String}
}, {versionKey: false, collection: "reunioes"});

ReuniaoSchema.plugin(require('mongoose-bcrypt'));

const ReuniaoCollection = (): Model<Reuniao> => getDatabaseManager().createCollection<Reuniao>(
    "info-board", "Reuniao", ReuniaoSchema);

export { ReuniaoCollection, Reuniao };