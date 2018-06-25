import { Response, Request } from "express";
import ReuniaoManager from "../manager/reuniao.manager";

export default class ReuniaoController {
    private reuniaoManager: ReuniaoManager;

    constructor(reuniaoManager: ReuniaoManager) {
        this.reuniaoManager = reuniaoManager;
    }

    async registerReuniao(req: Request, res: Response) {
        return this.reuniaoManager.saveReuniao(req.body)
            .then((result) => res.status(200).send(result))
            .catch((error) => console.log("Error")) //Treat error
    }

    async listReunioes(req: Request, res: Response) {
        return this.reuniaoManager.getReunioes()
            .then( (result) => res.status(200).send(result))
            .catch((error) => console.log("Error"))
    }

    async reuniaoById(req: Request, res: Response) {
        const reuniaoId = req.params.reuniaoId;
        return this.reuniaoManager.getReuniaoBydId(reuniaoId)
            .then( (result) => res.status(200).send(result))
            .catch((error) => console.log("Error"))
    }

}