import { Express } from "express";
import ReuniaoController from "../controller/reuniao.controller";

export default (app: Express, reuniaoController: ReuniaoController) => {

    app.route("/api/reuniao")
        .post(reuniaoController.registerReuniao.bind(reuniaoController));

    app.route("/api/reunioes")
        .get(reuniaoController.listReunioes.bind(reuniaoController));

    app.route("/api/reuniao/:reuniaoId")
        .get(reuniaoController.reuniaoById.bind(reuniaoController));
}