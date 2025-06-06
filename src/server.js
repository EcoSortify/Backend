const Hapi = require('@hapi/hapi');
const userPlugin = require("./api/user/index");
const chatbotPlugin = require("./api/chatbot/index");
const scanPlugin = require("./api/scan/index");
const { loadModel } = require('./api/scan/inference');
const { setModel } = require('./api/scan/model');

const init = async () => {
    const model = await loadModel();
    setModel(model);
    console.log('model loaded!');

    const server = Hapi.server({
        port: 8080,
        host: '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            }
        }
    });

    await server.register([userPlugin, chatbotPlugin, scanPlugin]);

    await server.start();

    console.log(`Server running in ${server.info.uri}`);
}

init();