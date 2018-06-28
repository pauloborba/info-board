import { Model } from 'mongoose';
import { Reuniao } from "../../../../gui/info-board/src/app/model/reuniao";
import { ReuniaoCollection } from "../database/schema/reuniao.schema";

const ReuniaoDataController = {

    saveReuniao: function (reuniao: Reuniao): Promise<Reuniao> {
        return new (ReuniaoCollection())(reuniao).save()
            .then((savedReuniao) => ReuniaoCollection().findById(savedReuniao._id).lean().exec() as Promise<Reuniao>)
    },

    getReuniaoById: function (reuniaoId: string): Promise<Reuniao> {
        return ReuniaoCollection().findById(reuniaoId).lean().exec() as Promise<Reuniao>;
    },

    getReunioes: function (): Promise<Reuniao[]> {
        return ReuniaoCollection().find().lean().exec() as Promise<Reuniao[]>;
    },
};

export default ReuniaoDataController;