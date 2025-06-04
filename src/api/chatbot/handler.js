const { checkToken, getChatHistory, saveChatHistory } = require('../../model/firebase');

class ChatbotHandler {
    getChatbot = async (request, h) => {

        const authHeader = request.headers.authorization;
        const { uid } = request.params;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return h.response({
                status: 'fail',
                message: 'Missing token',
            }).code(401);
        }

        if (!uid) {
            return h.response({
                status: 'fail',
                message: 'Missing id',
            }).code(401);
        }

        const token = authHeader.replace('Bearer ', '');

        try {
            await checkToken(token);
            const result = await getChatHistory(uid);

            return h.response({
                status: "success",
                data: result,
            });
        } catch (err) {
            return h.response({
                status: 'error',
                message: err.message
            }).code(401)
        }

    }
    postChatbot = async (request, h) => {
        const authHeader = request.headers.authorization;
        const { uid } = request.params;
        const { chat } = request.payload;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return h.response({
                status: 'fail',
                message: 'Missing token',
            }).code(401);
        }

        if (!uid || !request.payload) {
            return h.response({
                status: 'fail',
                message: 'Missing id',
            }).code(401);
        }
        if (!chat || !request.payload) {
            return h.response({
                status: 'fail',
                message: 'Missing chat',
            }).code(401);
        }

        const token = authHeader.replace('Bearer ', '');

        try {
            await checkToken(token);
            await saveChatHistory(uid, chat);

            return h.response({
                status: "success",
                message: "Chat berhasil di simpan",
            });
        } catch (err) {
            return h.response({
                status: 'error',
                message: err.message
            }).code(401)
        }
    }

}

module.exports = ChatbotHandler;