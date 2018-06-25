import { Config } from "./config.interface";
import { ENVIRONMENTS } from "./config";

const defaultConfig: Config = {
    get env() {
        return <string>process.env.NODE_ENV;
    },
    get port() {
        return '5000';
    },
    get mongoUrl() {
        return 'mongodb://localhost:27017'
    }
};

export default defaultConfig