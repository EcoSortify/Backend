const ChatbotHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: "chatbot",
    version: "1.0.0",
    register: async (server) => {
        const handler = new ChatbotHandler();
        server.route(routes(handler));
    }
}