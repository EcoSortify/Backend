const { checkToken } = require('../../model/firebase');
const FormData = require('form-data');
const axios = require('axios');
class ScanHandler {

    postScan = async (request, h) => {
        const authHeader = request.headers.authorization;
        const { file } = request.payload;

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
            }).code(401);
        }

        const token = authHeader.replace('Bearer ', '');

        try {
            await checkToken(token);


            const filename = file.hapi.filename;
            const contentType = file.hapi.headers['content-type'];

            const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
            if (!allowedTypes.includes(contentType)) {
                return h.response({ status: 'fail', message: 'Tipe gambar tidak didukung' }).code(400);
            }


            const form = new FormData();
            form.append('file', file, {
                filename,
                contentType
            });



            /*
            DISINI FETCH GENERATIVE AI
            const response = await axios.post('(url Model)', form, {
                headers: {
                    ...form.getHeaders(),
                    Authorization: `Bearer ${token}` 
                },
                responseType: 'text', 
            });

            const resultText = response.data;
            */



            return h.response({
                status: "success",
                message: "Berhasil memproses gambar",
                data: {
                    response: "anggap ini balasan model"
                }
            });
        } catch (err) {
            return h.response({
                status: 'error',
                message: err.message
            }).code(401)
        }
    }


}

module.exports = ScanHandler;