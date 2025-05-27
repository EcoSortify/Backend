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
            "response": "anggap ini balasan model"
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
            "msg1": {
                "chat": "anggap ini adalah sebuah chat dari user",
                "sender": "user",
                "time": 1748381512978
            },
            "msg2": {
                "chat": "Anggap ini balasan dari ai",
                "sender": "Ecosortify",
                "time": 1748381512978
            }
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
        "data": {
            "msg1": {
                "sender": "user",
                "time": 1748381512978,
                "chat": "anggap ini adalah sebuah chat dari user"
            },
            "msg2": {
                "sender": "Ecosortify",
                "time": 1748381512978,
                "chat": "Anggap ini balasan dari ai"
            }
        }
     }
     ```
