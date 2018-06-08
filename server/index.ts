import bodyParser = require("body-parser");
import * as http from "http";
import app from './src/app';

const server: http.Server = http.createServer(app);

server.listen(5000, () => {
  console.log("Server listening to the port 5000");
});
