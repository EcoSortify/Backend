const { checkToken } = require('../../model/firebase');
const tfjs = require('@tensorflow/tfjs-node');
const { predict } = require('./inference');
const { getModel } = require('./model');
// const FormData = require('form-data');
// const axios = require('axios');
class ScanHandler {
    postScan = async (request, h) => {
        const authHeader = request.headers.authorization;
        const file = request.payload?.photo;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return h.response({
                status: 'fail',
                message: 'Missing token',
            }).code(401);
        }

        if (!file) {
            return h.response({
                status: 'fail',
                message: 'Missing image',
            }).code(400);
        }

        const token = authHeader.replace('Bearer ', '');

        try {
            await checkToken(token);

            const contentType = file.hapi.headers['content-type'];
            const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg', 'image/heic', 'image/heif', 'image/avif'];

            if (!allowedTypes.includes(contentType)) {
                return h.response({
                    status: 'fail',
                    message: 'Tipe gambar tidak didukung'
                }).code(400);
            }

            const model = getModel();
            const prediction = await predict(model, file._data);
            const classResult = tfjs.argMax(prediction, 1).dataSync()[0];

            const classes = ['Anorganik', 'Elektronik', 'Organik', 'Residu-B3'];
            const label = classes[classResult];

            return h.response({
                status: "success",
                message: "Berhasil memproses gambar",
                data: {
                    response: label
                }
            });
        } catch (err) {
            return h.response({
                status: 'error',
                message: err.message
            }).code(401);
        }
    }
}

module.exports = ScanHandler;