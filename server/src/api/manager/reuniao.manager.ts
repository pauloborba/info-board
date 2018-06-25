
import ReuniaoDataController from "../../data/datacontroller/reuniao.datacontroller";

export default class ReuniaoManager {

    constructor() { } //In case we need some other service

    async saveReuniao(body: any) {
        const savedReuniao = await ReuniaoDataController.saveReuniao(body);
        return savedReuniao;
    }

    async getReunioes() {
        const reunioes = await ReuniaoDataController.getReunioes();
        return reunioes;
    }

    async getReuniaoBydId(reuniaoId: string) {
        const reuniao = await ReuniaoDataController.getReuniaoById(reuniaoId);
        return reuniao;
    }
}