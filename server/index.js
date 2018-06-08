"use strict";
exports.__esModule = true;
var http = require("http");
var app_1 = require("./src/app");
var server = http.createServer(app_1["default"]);
server.listen(5000, function () {
    console.log("Server listening to the port 5000");
});
