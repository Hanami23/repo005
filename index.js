const jsonServe = require("json-server");
const server = jsonServe.create();
const router = jsonServe.router("almacen.json");
const middleware = jsonServe.defaults();
const port = process.env.PORT || 10000;

server.use(middleware);
server.use(router);
server.listen(port);
