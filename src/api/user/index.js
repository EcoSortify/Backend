const UserHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: "user",
    version: "1.0.0",
    register: async (server) => {
        const handler = new UserHandler();
        server.route(routes(handler));
    }
}