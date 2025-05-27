const routes = (handler) => [
    {
        method: 'POST',
        path: '/scan',
        handler: handler.postScan,
        options: {
            payload: {
                output: 'stream',             
                parse: true,
                multipart: true,               
                maxBytes: 10 * 1024 * 1024 
            }
        }
    },

]

module.exports = routes