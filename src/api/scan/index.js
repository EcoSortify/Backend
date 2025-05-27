const ScanHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: "scan",
    version: "1.0.0",
    register: async (server) => {
        const handler = new ScanHandler();
        server.route(routes(handler));
    }
}