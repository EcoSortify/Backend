const routes = (handler) => [
    {
        method: 'POST',
        path: '/login',
        handler: handler.postUserLogin
    },
   
]

module.exports = routes