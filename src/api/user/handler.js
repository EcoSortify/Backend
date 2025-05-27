const { loginUser } = require('../../model/firebase');

class UserHandler {

    postUserLogin = async (request, h) => {

        if (!request.payload || !request.payload.token) {
            return h.response({
                status: "fail",
                message: "Missing token"
            }).code(400);
        }
        const token = request.payload.token;

        try {

            const data = await loginUser(token);
            return h.response({
                status: 'success',
                message: "Login berhasil",
                data
            });

        } catch (err) {
            return h.response({
                status: 'error',
                message: err.message
            }).code(401)
        }
    }

    
}

module.exports = UserHandler;