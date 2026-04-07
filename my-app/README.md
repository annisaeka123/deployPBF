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

#### Buat Repository Baru  

1. Login ke GitHub  
2. Klik New Repository  
3. Beri nama repository  
4. Pilih Private/Public  
5. Klik Create Repository  

#### Hubungkan Project Lokal ke GitHub  

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

#### Tambahkan Remote Repository  

```
git remote add origin https://github.com/username/repository.git
git add .
git commit -m "Initial deployment"
git push origin main
```

- Pastikan repository di GitHub sudah terisi file project.  

---

### Praktikum 2 – Deployment ke Vercel  

#### Login ke Vercel  

- Buka: https://vercel.com  
- Login menggunakan GitHub (kalau belum punya akun buat terlebih dahulu)  

#### Import Project  

1. Klik Add New Project  
2. Install terlebih dahulu githubnya  
3. Klik Import  

Note: sebelum diimport lakukan konfigurasi terlebih dahulu  

---

### Mengatasi Error Saat Deployment  

- Dikarenakan pada code masih terdapat code static-site generation  

#### Masalah: Static Site Generation Gagal  

- Hapus file static.tsx  
- Comment pada line 46 pada file [produk].tsx yang berhubungan dengan static-site generation  

#### Solusi  

1. Gunakan SSR (Server Side Rendering)  

- SSR yang sebelumnya di comment dibuka commentnya pada file [produk].tsx  

#### Gunakan Environment Variable  

- Buat di .env.local:

```
NEXT_PUBLIC_API_URL=http://localhost:
```

- Ganti semua hardcoded URL:

```
process.env.NEXT_PUBLIC_API_URL
```

- Contoh:

```
fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`)
```

- pada file [produk].tsx  

```
o pada file server.tsx
```

- Commit dan push kembali  

- Selanjutnya import lakukan pengaturannya  

- Setelah itu klik deploy dan jika berhasil maka akan muncul  

---

### Praktikum 3 – Menambahkan Environment Variable di Vercel  

#### Buka Project di Vercel  

Settings → Environment Variables  

2. Import dari .env.local  

- Klik Import .env dan setting NEXT_PUBLIC_API_URL sesuai dengan url vercel project  

Atau isi manual:

```
NEXT_PUBLIC_API_URL=https://namaproject.vercel.app
```

Note: tanpa tanda / dibelakang url  

#### Redeploy  

- Deployment → Redeploy  

---

### Praktikum 4 – Konfigurasi Google OAuth Production  

#### Masuk ke Google Cloud Console  

- Buka google developer console  
- Credentials  
- Pilih OAuth Client  

#### Tambahkan Authorized Origins  

#### Tambahkan Redirect URI  

- Save perubahan  

Note: ada kesalahan pada code index.tsx pada folder views/auth/login  

- Code sebelumnya  
- Code dimodifikasi  

#### Redeploy Vercel  

- Agar environment terbaru terbaca  

---

### Praktikum 5 – Pengujian Setelah Deployment  

Coba akses:

- /  
- /about  
- /product  
- /profile  
- Login Google  
- Login credential biasa  

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

1. Mengapa localhost tidak boleh digunakan di production?  
2. Mengapa SSG bisa gagal saat build?  
3. Apa perbedaan SSR dan SSG saat deployment?  
4. Mengapa perlu redeploy setelah menambahkan environment?  
5. Apa fungsi redirect URI pada OAuth?  

---

## G. Kesimpulan  

Pada praktikum ini mahasiswa telah:

- Menghubungkan project dengan GitHub  
- Melakukan deployment ke Vercel  
- Mengelola environment variable  
- Mengatasi error SSG  
- Mengkonfigurasi OAuth production  
- Menguji aplikasi hasil deployment  