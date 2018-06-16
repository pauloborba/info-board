import devConfig from "./dev.config";
import defaultConfig from "./default.config";
import { Config } from "./config.interface";

export enum ENVIRONMENTS {
    PRODUCTION = "production",
    TEST = "test",
    DEVELOPMENT = "dev",
}

const getConfig = (): Config => {
    console.log("Getting configuration variables");
    return process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT
        ? devConfig
        : defaultConfig
};

export default getConfig();