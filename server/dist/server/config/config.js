"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dev_config_1 = require("./dev.config");
const default_config_1 = require("./default.config");
var ENVIRONMENTS;
(function (ENVIRONMENTS) {
    ENVIRONMENTS["PRODUCTION"] = "production";
    ENVIRONMENTS["TEST"] = "test";
    ENVIRONMENTS["DEVELOPMENT"] = "dev";
})(ENVIRONMENTS = exports.ENVIRONMENTS || (exports.ENVIRONMENTS = {}));
const getConfig = () => {
    console.log("Getting configuration variables");
    return process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT
        ? dev_config_1.default
        : default_config_1.default;
};
exports.default = getConfig();
//# sourceMappingURL=config.js.map