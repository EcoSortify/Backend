

const routes = (handler) => [
    {
        method: 'GET',
        path: '/chatbot/{uid}',
        handler: handler.getChatbot,
    },
    {
        method: 'POST',
        path: '/chatbot/{uid}',
        handler: handler.postChatbot,
    },

]

module.exports = routes