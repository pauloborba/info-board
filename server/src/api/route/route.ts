import { Express } from "express";
import UserRoute from "./user.route";

import * as ControllerFactory from "../../factory/controller.factory";

export default (express: Express) => {
    UserRoute(express, ControllerFactory.getUserController());

}