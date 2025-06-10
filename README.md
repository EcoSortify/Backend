# Ecosortify Backend

## Endpoint
https://ecosortify-backend-838338694702.asia-southeast2.run.app

## 💁 Login
* URL
    * `/login`
* Method
   * POST
* Request Body
   * `token` as `string`
* Response
   * ```
     {
        "status": "success",
        "message": "Login berhasil",
        "data": {
            "user": {
                "uid": "SfZn6kSb6Pb9KxAk",
                "name": "Bubu Imuts",
                "picture": "https://lh3.googleusercontent.com/a",
                "email": "bubuImutz@gmail.com",
                "email_verified": true,
                "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiO"
            }
        }
     }
     ```

## 📷 Scan Gambar
* URL
    * `/scan`
* Method
   * POST
* Headers
    * `Content-Type`: `multipart/form-data`
    * `Authorization`: `Bearer <token>`
* Request Body
   * `photo` as `file` max size 10mb
* Response
   * ```
     {
        "status": "success",
        "message": "Berhasil memproses gambar",
        "data": {
            "response": "Organik"
        }
     }
     ```
## 📰 Get All Riwayat Chat
* URL
    * `/chatbot/:uid`
* Method
   * GET
* Headers
    * `Authorization`: `Bearer <token>`
* Response
   * ```
     {
        "status": "success",
        "data": {
            "chat": [
                     {
                          "content": "Bagusnya diapakan sampah itu?",
                          "createdAt": "2025-06-09T09:55:03.228Z",
                          "parts": [
                              {
                           "text": "Bagusnya diapakan sampah itu?",
                           "type" :"text"
                             }
                          ],
                          "role": "user"
                     },
                    {
                      "id": "msg-XoVNYSmRVVGBlw8JO4ATFrf4",
                      "content": "Karena biasanya sampah residu ini susah diolah, sebaiknya di tempatkan di TPS (Tempat Penampungan Sementara), selanjutnya dibawa ke TPA (tempat sampah akhir) untuk dibuang dan diolah oleh petugas di sana.",
                      "createdAt": "2025-06-09T09:55:05.489Z",
                      "parts": [0, 1],
                      "revisionId": "fGvs2HnOcLDhxLCj",
                      "role": "assistant"
                  }
                                ]
                          }
                       }
     ```
## 📧 Kirim chat ke chatbot
* URL
    * `/chatbot/:uid`
* Method
   * POST
* Headers
    * `Authorization`: `Bearer <token>`
* Request Body
   * `chat` as `string`
* Response
   * ```
      {
        "status": "success",
        "message": "Chat berhasil di simpan",
     }
     ```
