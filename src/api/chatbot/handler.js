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

        if (!uid) {
            return h.response({
                status: 'fail',
                message: 'Missing id',
            }).code(401);
        }
        if (!chat) {
            return h.response({
                status: 'fail',
                message: 'Missing chat',
            }).code(401);
        }

        const token = authHeader.replace('Bearer ', '');

        try {
            await checkToken(token);
            /*

            DISINI FETCH GENERATIVE AI

            */
            const chatToStore = {
                msg1: {
                    sender: "user",
                    time: Date.now(),
                    chat: chat
                },
                msg2: {
                    sender: "Ecosortify",
                    time: Date.now(),
                    chat: "Anggap ini balasan dari ai"
                }
            }
            await saveChatHistory(uid, chatToStore);

            return h.response({
                status: "success",
                message: "Chat berhasil di simpan",
                data: chatToStore
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