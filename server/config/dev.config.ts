import { Config } from "./config.interface";
import { ENVIRONMENTS } from "./config";

const devConfig: Config = {
    get env() {
        return ENVIRONMENTS.DEVELOPMENT
    },
    get port() {
        return '5000';
    },
    get mongoUrl() {
        return 'mongodb://localhost:27017'
    }
};

export default devConfig