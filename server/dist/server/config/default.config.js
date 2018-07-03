"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultConfig = {
    get env() {
        return process.env.NODE_ENV;
    },
    get port() {
        return '5000';
    },
    get mongoUrl() {
        return 'mongodb://localhost:27017';
    }
};
exports.default = defaultConfig;
//# sourceMappingURL=default.config.js.map