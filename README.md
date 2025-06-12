Halo! Selamat datang di file README EcoSortify Backend.
Di sini akan dijelaskan mengenai struktur proyek backend EcoSortify yang dibangun menggunakan Hapi.js — termasuk REST API untuk klasifikasi gambar dan chatbot QnA tentang sampah.

---

## 📦 EcoSortify - Capstone Project

EcoSortify Backend adalah layanan API yang melayani 3 fitur utama:

1. **API Klasifikasi Gambar Sampah** – Mengirim gambar dan mendapatkan prediksi jenis sampah.

2. **API Simpan Riwayat Chat Hasil Chatbot** – Menyimpan chat hasil chatbot seputar pengelolaan sampah ke databse.

3. **API Pengelola Authentikasi User** - Menerima dan mengirim token untuk mengelola authentikasi user

### 🗂️ Struktur Direktori

Berikut adalah deskripsi setiap file dan folder dalam repositori:

| Nama File/Folder             | Tipe       | Deskripsi                                                                                         |
| ---------------------------- | ---------- | ------------------------------------------------------------------------------------------------- |
| `README.md`                  | Markdown   | File ini berisi dokumentasi dan penjelasan proyek.                                                |
| `server.js`                  | Javascript | Entry point server Hapi.js.                                                                       |
| `src/`                       | Folder     | Folder utama yang berisi seluruh source code backend.                                             |
| `src/api/chatbot/`           | Folder     | Endpoint API untuk chatbot QnA tentang sampah.                                                    |
| `src/api/chatbot/index.js`   | JavaScript | Setup routing dan export handler chatbot. sampah.                                                 |
| `src/api/chatbot/routes.js`  | JavaScript | Definisi route (endpoint) untuk chatbot                                                           |
| `src/api/chatbot/handler.js` | JavaScript | Logic untuk menyimpan atau mengambil chat hasil chatbot di database                               |
| `src/api/scan/`              | Folder     | Endpoint API untuk klasifikasi gambar sampah.                                                     |
| `src/api/scan/index.js`      | JavaScript | Setup routing dan export handler klasifikasi gambar.                                              |
| `src/api/scan/routes.js`     | JavaScript | Definisi route (endpoint) untuk klasifikasi gambar. sampah.                                       |
| `src/api/scan/handler.js`    | JavaScript | Logic untuk menangani request klasifikasi gambar.                                                 |
| `src/api/scan/model.js`      | JavaScript | Script untuk memuat dan mengatur model machine learning yang digunakan untuk klasifikasi.         |
| `src/api/scan/inference.js`  | JavaScript | Script untuk menjalankan proses inference (prediksi gambar) dengan model machine learning.        |
| `src/api/user/`              | Folder     | Endpoint API untuk manajemen data user                                                            |
| `src/api/user/index.js`      | JavaScript | Setup routing dan export handler user. sampah.                                                    |
| `src/api/user/routes.js`     | JavaScript | Definisi route (endpoint) untuk user.                                                             |
| `src/api/user/handler.js`    | JavaScript | Logic untuk manajemen data user.                                                                  |
| `src/model/`                 | Folder     | Folder tempat menyimpan model machine learning yang digunakan untuk klasifikasi sampah. learning. |
| `ml_model/`                  | Folder     | Folder berisi model yang dipisahkan untuk inference atau data training tambahan.                  |
| `package.json`               | JSON       | File konfigurasi project dan daftar dependensi NPM sampah.                                        |
| `package-lock.json`          | JSON       | File yang mengunci versi dependensi project.                                                      |
| `.gitignore`                 | File       | File konfigurasi untuk mengecualikan file/folder tertentu dari Git tracking.                      |
| `.eslint.config.mjs`         | JavaScript | Konfigurasi linter untuk menjaga konsistensi penulisan kode JavaScript                            |

---

### Cara Menjalankan

#### 1. Clone project ini:

```
git clone https://github.com/EcoSortify/backend.git
cd backend
```

#### 2. Install dependensi:

```
npm install
```

#### 3. Jalankan server:

```
npm start-dev
```

#### 4. Server akan berjalan di:

```
http://localhost:8080 || http://localhost:ENV
```

---

## API Documentation

### Endpoint

Base URL: https://ecosortify-backend-838338694702.asia-southeast2.run.app

## 💁 Login

- URL
  - `/login`
- Method
  - POST
- Request Body
  - `token` as `string`
- Response
  - ```
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

- URL
  - `/scan`
- Method
  - POST
- Headers
  - `Content-Type`: `multipart/form-data`
  - `Authorization`: `Bearer <token>`
- Request Body
  - `photo` as `file` max size 10mb
- Response
  - ```
    {
       "status": "success",
       "message": "Berhasil memproses gambar",
       "data": {
           "response": "Organik"
       }
    }
    ```

## 📰 Get All Riwayat Chat

- URL
  - `/chatbot/:uid`
- Method
  - GET
- Headers
  - `Authorization`: `Bearer <token>`
- Response

  - ```
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
                "type": "text"
              }
            ],
            "role": "user"
          },
          {
            "id": "msg-XoVNYSmRVVGBlw8........",
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

- URL
  - `/chatbot/:uid`
- Method
  - POST
- Headers
  - `Authorization`: `Bearer <token>`
- Request Body
  - `chat` as `string`
- Response
- ```
     {
       "status": "success",
       "message": "Chat berhasil di simpan",
    }
  ```
=======
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
                      "id": "msg-XoVNYSmRVVGBlw8........",
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

