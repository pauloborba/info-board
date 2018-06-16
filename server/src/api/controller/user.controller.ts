import { Response, Request } from "express";
import UserManager from "../manager/user.manager";

export default class UserController {
    private userManager: UserManager;

    constructor(userManager: UserManager) {
        this.userManager = userManager;
    }

    async registerUser(req: Request, res: Response) {
        return this.userManager.saveUser(req.body)
            .then((result) => res.status(200).send(result))
            .catch((err) => console.log("Error")) //Treat error
    }

    async listUsers(req: Request, res: Response) {
        return this.userManager.getUsers()
            .then( (result) => res.status(200).send(result))
            .catch((error) => console.log("Error"))
    }

    async userByEmail(req: Request, res: Response) {
        const email = req.params.email;
        return this.userManager.getUserByEmail(email)
            .then( (result) => res.status(200).send(result))
            .catch((error) => console.log("Error"))
    }

    async userById(req: Request, res: Response) {
        const userId = req.params.userId;
        return this.userManager.getUserBydId(userId)
            .then( (result) => res.status(200).send(result))
            .catch((error) => console.log("Error"))
    }

}