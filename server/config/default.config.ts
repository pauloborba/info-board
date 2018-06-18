import { Config } from "./config.interface";
import { ENVIRONMENTS } from "./config";

const defaultConfig: Config = {
    get env() {
        return <string> process.env.NODE_ENV;
    },
    get port() {
        return '5000';
    },
    get mongoUrl() {
        return <string> process.env.DATABASE_URL
    }
};

export default defaultConfig