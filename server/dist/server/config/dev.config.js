"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const devConfig = {
    get env() {
        return config_1.ENVIRONMENTS.DEVELOPMENT;
    },
    get port() {
        return '5000';
    },
    get mongoUrl() {
        return 'mongodb://localhost:27017';
    }
};
exports.default = devConfig;
//# sourceMappingURL=dev.config.js.map