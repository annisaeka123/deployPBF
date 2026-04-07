# PEMROGRAMAN BERBASIS FRAMEWORK  

# JOBSHEET 20  

# DEPLOYMENT APLIKASI NEXT.JS KE VERCEL  


```
Disusun oleh:
Nama: Annisa Eka Puspita
Kelas: TI-3D
Absen: 04
NIM: 2341720131


PRODI D-IV TEKNIK INFORMATIKA
JURUSAN TEKNOLOGI INFORMASI
POLITEKNIK NEGERI MALANG
2026
```

---

## A. Tujuan Pembelajaran  

Setelah mengikuti praktikum ini, mahasiswa mampu:

1. Membuat repository GitHub dan menghubungkannya dengan project lokal  
2. Melakukan deployment aplikasi Next.js ke Vercel  
3. Mengelola Environment Variables di Vercel  
4. Memahami perbedaan SSG dan SSR saat deployment  
5. Mengatasi error build akibat localhost API  
6. Menghubungkan Google OAuth ke domain production  
7. Melakukan redeploy setelah perubahan konfigurasi  
8. Menghubungkan custom domain ke Vercel  

---

## B. Persiapan  

Pastikan:

- Project Next.js sudah berjalan di lokal  
- Sudah menggunakan Git  
- Sudah memiliki akun GitHub  
- Sudah memiliki akun Vercel  
- Project sudah menggunakan Environment Variables  

---

## C. Langkah Praktikum  

### Praktikum 1 – Membuat Repository GitHub  

#### 1. Buat Repository Baru  

1. Login ke GitHub  
2. Klik New Repository  
3. Beri nama repository  
4. Pilih Private/Public  
5. Klik Create Repository  

<img width="880" height="853" alt="image" src="https://github.com/user-attachments/assets/da6aea04-0ed5-4c93-b483-5ac2a74db2ed" />

#### 2. Hubungkan Project Lokal ke GitHub  

- Cek konfigurasi Git:

```
git config --global user.name
git config --global user.email
```

- Jika belum ada:

```
git config --global user.name "username_github"
git config --global user.email "email_github"
```

#### 3. Tambahkan Remote Repository  

```
git remote add origin https://github.com/username/repository.git
git add .
git commit -m "Initial deployment"
git push origin main
```

- Pastikan repository di GitHub sudah terisi file project.  

<img width="1917" height="817" alt="image" src="https://github.com/user-attachments/assets/64dcd3ff-219a-4d31-baec-b359030d0896" />

---

### Praktikum 2 – Deployment ke Vercel  

#### 1. Login ke Vercel  

- Buka: https://vercel.com  
- Login menggunakan GitHub (kalau belum punya akun buat terlebih dahulu)  

#### 2. Import Project  

1. Klik Add New Project  

   <img width="1919" height="867" alt="image" src="https://github.com/user-attachments/assets/1681f0a1-643c-4f54-9761-d08059d749f5" />


2. Install terlebih dahulu githubnya  

   <img width="920" height="617" alt="image" src="https://github.com/user-attachments/assets/7f2497f7-4a84-4917-b68b-4573b8342a7f" />


3. Klik Import

   <img width="570" height="727" alt="image" src="https://github.com/user-attachments/assets/69d590ef-e4fc-4c47-8f7f-5325bc66eebf" />

   <img width="919" height="640" alt="image" src="https://github.com/user-attachments/assets/a172fe81-31b7-45e1-b7f1-48323c36c805" />



Note: sebelum diimport lakukan konfigurasi terlebih dahulu  

---

### Mengatasi Error Saat Deployment  

- Dikarenakan pada code masih terdapat code static-site generation  

#### Masalah: Static Site Generation Gagal  

- Hapus file static.tsx

  <img width="196" height="166" alt="image" src="https://github.com/user-attachments/assets/1cced07d-33a3-408b-9104-77c96d7ce656" />

- Comment pada line 33 pada file [produk].tsx yang berhubungan dengan static-site generation

  <img width="1202" height="871" alt="image" src="https://github.com/user-attachments/assets/2666aeba-b2de-4c1d-94e8-341344e26b2e" />


#### Solusi  

1. Gunakan SSR (Server Side Rendering)  

- SSR yang sebelumnya di comment dibuka commentnya pada file [produk].tsx

  <img width="1005" height="311" alt="image" src="https://github.com/user-attachments/assets/c6545618-984b-49cf-8a36-76e4b3473481" />


#### Gunakan Environment Variable  

- Buat di .env.local:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:
   ```

   <img width="268" height="503" alt="image" src="https://github.com/user-attachments/assets/98f51310-a179-47d9-ba78-0e2be912959b" />


- Ganti semua hardcoded URL:

   ```
   process.env.NEXT_PUBLIC_API_URL
   ```

   - Contoh:

      ```
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`)
      ```

   - pada file [produk].tsx

     <img width="1050" height="343" alt="image" src="https://github.com/user-attachments/assets/b9ff65f3-2b9e-49b4-b852-09b7e74b0ee5" />

   - pada file server.tsx

     <img width="1072" height="694" alt="image" src="https://github.com/user-attachments/assets/c4e6c7ae-fe87-4d77-97f7-273d4bbbd71e" />


- Commit dan push kembali  

- Selanjutnya import lakukan pengaturannya

  <img width="635" height="820" alt="image" src="https://github.com/user-attachments/assets/cb857ca8-b66c-423b-a477-8f09ae32142a" />



- Setelah itu klik deploy dan jika berhasil maka akan muncul

  <img width="1540" height="559" alt="image" src="https://github.com/user-attachments/assets/f7589208-74ae-4f07-b0ec-26aee33c9b40" />



  <img width="960" height="664" alt="image" src="https://github.com/user-attachments/assets/c62ad3d6-3957-4780-a085-be5fec63c78a" />



---

### Praktikum 3 – Menambahkan Environment Variable di Vercel  

#### 1. Buka Project di Vercel  

Settings → Environment Variables  

#### 2. Import dari .env.local  

Klik Import .env dan setting NEXT_PUBLIC_API_URL sesuai dengan url vercel project  

Atau isi manual:

```
NEXT_PUBLIC_API_URL=https://namaproject.vercel.app
```

<img width="890" height="797" alt="image" src="https://github.com/user-attachments/assets/e62b114c-4c8c-4ccf-bc7f-a5f904dac701" />



Note: tanpa tanda / dibelakang url  

#### 3. Redeploy  

- Deployment → Redeploy

  <img width="1917" height="720" alt="image" src="https://github.com/user-attachments/assets/aa5fdc7c-e10e-4bbf-94aa-8094a529471e" />


---

### Praktikum 4 – Konfigurasi Google OAuth Production  

#### 1. Masuk ke Google Cloud Console  

- Buka google developer console  
- Credentials  
- Pilih OAuth Client  

<img width="1919" height="740" alt="image" src="https://github.com/user-attachments/assets/e5e12cb0-8147-4500-96b4-2414075bc3c2" />

#### 2. Tambahkan Authorized Origins  

<img width="660" height="345" alt="image" src="https://github.com/user-attachments/assets/9cef7e6e-18c0-44db-a409-6a759ba3bb43" />

#### 3. Tambahkan Redirect URI  

<img width="671" height="352" alt="image" src="https://github.com/user-attachments/assets/df541c1b-24c5-49e7-92c6-238c5ecc31c7" />


- Save perubahan  

**Note: ada kesalahan pada code index.tsx pada folder views/auth/login  **

- Code sebelumnya

  <img width="1064" height="634" alt="image" src="https://github.com/user-attachments/assets/59e44e8b-8b90-4807-a01f-aabfa2c9fddc" />

- Code dimodifikasi

  <img width="1022" height="475" alt="image" src="https://github.com/user-attachments/assets/4cc12481-1194-41f2-86bc-cedc2d34472d" />


#### Redeploy Vercel  

- Agar environment terbaru terbaca  

---

### Praktikum 5 – Pengujian Setelah Deployment  

Coba akses:

- /

  <img width="959" height="576" alt="image" src="https://github.com/user-attachments/assets/ab3b90cf-ec91-4bb9-b486-935e0ac4ef32" />

- /about

  <img width="946" height="661" alt="image" src="https://github.com/user-attachments/assets/92864c67-024b-48ae-935d-20be22afe3b6" />


- /produk

  <img width="961" height="970" alt="image" src="https://github.com/user-attachments/assets/e4e8dd7a-7d62-458b-82fd-fe7dc5382dbb" />

- /profile

  <img width="951" height="753" alt="image" src="https://github.com/user-attachments/assets/f2623c15-9e05-4ee2-bf85-92798ec15f74" />

- Login Google

  <img width="959" height="481" alt="image" src="https://github.com/user-attachments/assets/cf0ebb53-621a-4b1f-892c-2cbc551fd036" />

- Login credential biasa

  <img width="955" height="960" alt="image" src="https://github.com/user-attachments/assets/ee71831b-60ff-42f7-9270-c7d0c08538ed" />

  <img width="955" height="528" alt="image" src="https://github.com/user-attachments/assets/85ff7dbc-4411-41b3-b4f7-738b0acc40ea" />



#### Pastikan:

- SSR berjalan  
- API tidak lagi localhost
- Database terkoneksi  
- Google login berhasil  

---

## D. Analisis Konsep  

| Konsep | Penjelasan |
|--------|-----------|
| SSG | Data diambil saat build |
| SSR | Data diambil saat request |
| CSR | Data diambil di browser |
| Environment Variable | Variabel rahasia/configuration |
| Redeploy | Build ulang setelah perubahan |
| OAuth Production | Harus update origin & callback |

---

## E. Tugas Praktikum  

1. Deploy project Next.js ke Vercel  
2. Pastikan API tidak menggunakan localhost  
3. Konfigurasikan Google OAuth production  
4. Lakukan minimal 1 redeploy  
5. Dokumentasikan:  
   - Screenshot dashboard Vercel  
   - URL hasil deployment  
   - Screenshot login Google berhasil  

---

## F. Refleksi & Diskusi  

**1. Mengapa localhost tidak boleh digunakan di production?** 

Localhost (`127.0.0.1` atau `http://localhost`) merujuk pada perangkat komputer atau server itu sendiri. Jika *localhost* digunakan dalam kode yang telah di-*deploy* ke *production*, saat pengguna akhir membuka website tersebut, *browser* mereka akan mencoba mencari server API atau database di dalam komputer/HP mereka sendiri, bukan di server aslinya. Hal ini akan menyebabkan koneksi gagal (error fetch) karena sistem *backend* tidak berada di perangkat pengguna.

**2. Mengapa SSG bisa gagal saat build?** 

SSG (Static Site Generation) melakukan *rendering* halaman dan penarikan data (seperti *fetching API* atau *query* ke database) pada saat *build time* (proses perakitan aplikasi di server *deployment*), bukan saat halaman diakses. Jika saat proses *build* tersebut API eksternal gagal dihubungi, koneksi database terputus, atau *Environment Variables* belum dikonfigurasi di *dashboard hosting* (seperti Vercel), maka proses pembuatan halaman HTML statis akan gagal dan menyebabkan *build error*.

**3. Apa perbedaan SSR dan SSG saat deployment?** 

* **SSG (Static Site Generation):** Halaman HTML di-*render* secara utuh hanya satu kali pada saat proses *build*. Hasil *deployment*-nya berupa sekumpulan file statis yang dapat didistribusikan melalui CDN (Content Delivery Network). Keuntungannya adalah kecepatan *loading* yang sangat tinggi dan beban server yang minim.
* **SSR (Server-Side Rendering):** Halaman HTML di-*render* secara dinamis di sisi server setiap kali ada pengguna yang melakukan *request*. Saat di-*deploy*, SSR membutuhkan fungsi server aktif (seperti *Serverless Functions* di Vercel) untuk merakit halaman baru. SSR memastikan data yang ditampilkan selalu *real-time*, namun membutuhkan waktu komputasi yang lebih lama dibandingkan SSG.

**4. Mengapa perlu redeploy setelah menambahkan environment?** 

*Environment Variables* (seperti *API Key*, *Secret Token*, atau URL konfigurasi) disuntikkan (*injected*) ke dalam kode aplikasi pada masa *build time* atau saat fungsi *serverless* dikonfigurasi pertama kali. Jika variabel baru hanya ditambahkan ke dalam *dashboard hosting* tanpa melakukan *redeploy*, aplikasi yang sedang berjalan (*live*) tidak akan mengetahui perubahan tersebut dan tetap menggunakan memori konfigurasi yang lama (atau kosong). *Redeploy* memaksa mesin *hosting* untuk memproses ulang kode dan membaca nilai variabel yang baru.

**5. Apa fungsi redirect URI pada OAuth?** 

*Redirect URI* (URI Pengalihan) berfungsi sebagai alamat tujuan ke mana penyedia layanan (seperti Google atau GitHub) akan mengembalikan pengguna setelah mereka berhasil login. Fungsi utamanya adalah mekanisme keamanan (*whitelist*); penyedia OAuth hanya akan mengirimkan kode otorisasi atau token pengguna ke URL yang sebelumnya sudah didaftarkan secara eksplisit oleh *developer*. Hal ini mencegah serangan di mana peretas mencoba memanipulasi alur login untuk mencuri token sesi ke URL palsu milik mereka.

---

## G. Kesimpulan  

Pada praktikum ini mahasiswa telah:

- Menghubungkan project dengan GitHub  
- Melakukan deployment ke Vercel  
- Mengelola environment variable  
- Mengatasi error SSG  
- Mengkonfigurasi OAuth production  
- Menguji aplikasi hasil deployment  
