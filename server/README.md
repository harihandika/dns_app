# Cara menjalankan

### File server

1. Download code / clone dari github
2. buka xampp dan buat tabel test_dns. opsi lain bisa dengan import file sql di xampp dengan nama test_dns
3. Buka file server
4. jalankan perintah npm install
5. jalankan perintah npm run migrate
6. jalankan perintah npm start, ingat untuk install nodemon, saya intsall nodemon secara global. bila belum install jalankan perintah node app.js

### File Client

1. Download code / clone dari github
2. Buka file client
3. Jalankan perintah npm install
4. jalankan perintah npm start

### Catatan

##### username : admin

##### password : admin

1. untuk login bila anda menggunakan file tes_dns.sql maka anda bisa langsung login dengan username dan password diatas
2. anda bisa juga hit dengan postman / extension Rest Client dengan alamat http://localhost:3001/register
