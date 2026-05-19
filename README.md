# AI Learning Hub (Project Pancasila)

AI Learning Hub adalah sebuah platform edukasi berbasis web yang dirancang khusus untuk memperkenalkan kecerdasan buatan (AI) kepada anak-anak panti asuhan dengan cara yang menyenangkan, interaktif, dan mudah dipahami. Proyek ini mengusung gaya desain **Neo-Brutalist** yang modern, penuh warna (vibrant), dan ramah anak.

## 🌟 Fitur Utama

- **Desain Neo-Brutalist Ramah Anak:** Antarmuka pengguna yang cerah, interaktif, dan mudah dinavigasi, dirancang khusus untuk menarik minat belajar anak-anak dengan estetika modern.
- **Tutorial Interaktif:** Panduan langkah demi langkah yang modular untuk mempelajari konsep dasar AI tanpa harus berpindah halaman atau menggunakan link eksternal, dilengkapi dengan pelacakan progres belajar.
- **Prompt Library:** Kumpulan contoh *prompt* AI yang bisa langsung dicoba dan dipelajari oleh pengguna.
- **Why Learn AI:** Seksi edukatif yang menjelaskan pentingnya belajar AI untuk masa depan dengan bahasa dan ilustrasi yang sederhana dan ramah anak.
- **Animasi Interaktif:** Menggunakan Framer Motion untuk memberikan transisi, efek *hover*, dan interaksi visual yang menarik (mikro-animasi) guna meningkatkan interaksi pengguna.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan *stack* teknologi frontend modern untuk memastikan performa yang cepat dan pengalaman pengguna yang luar biasa:

- **[React 19](https://react.dev/):** Library JavaScript utama untuk membangun antarmuka pengguna berbasis komponen.
- **[Vite 8](https://vitejs.dev/):** *Build tool* generasi berikutnya yang sangat cepat untuk pengembangan frontend.
- **[Tailwind CSS 4](https://tailwindcss.com/):** Framework CSS *utility-first* untuk *styling* desain Neo-Brutalist dengan cepat dan responsif.
- **[Framer Motion](https://www.framer.com/motion/):** Library animasi yang kuat untuk React, digunakan untuk menghidupkan UI aplikasi.
- **[React Router 7](https://reactrouter.com/):** Digunakan untuk navigasi antar halaman (*routing*).
- **[Lucide React](https://lucide.dev/):** Kumpulan ikon SVG yang bersih, modern, dan konsisten.

## 🚀 Cara Menjalankan Proyek Secara Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan aplikasi AI Learning Hub di komputer lokal Anda.

### Prasyarat

Pastikan Anda sudah menginstal **Node.js** di komputer Anda. Anda bisa mengeceknya dengan menjalankan `node -v` dan `npm -v` di terminal. Jika belum, silakan unduh dan instal dari [nodejs.org](https://nodejs.org/).

### Instalasi dan Menjalankan Server Pengembangan

1. **Buka terminal dan masuk ke direktori proyek:**
   Pastikan Anda berada di dalam folder proyek Anda (misalnya `project pancasila`).

2. **Instal dependensi proyek:**
   Jalankan perintah berikut untuk mengunduh semua library yang dibutuhkan (seperti React, Vite, Tailwind, dll):
   ```bash
   npm install
   ```

3. **Jalankan aplikasi (Mode Pengembangan):**
   Setelah proses instalasi selesai, mulai server pengembangan dengan menjalankan:
   ```bash
   npm run dev
   ```

4. **Buka aplikasi di Browser Anda:**
   Biasanya, Vite akan menjalankan aplikasi di `http://localhost:5173`. Tekan `Ctrl + Klik` (atau `Cmd + Klik` di Mac) pada link yang muncul di terminal, atau buka browser Anda dan ketikkan alamat tersebut secara manual.

## 📦 Build untuk Produksi (Deployment)

Jika proyek sudah selesai dan Anda ingin mengunggahnya (*deploy*) ke platform *hosting* seperti Vercel, Netlify, atau GitHub Pages, jalankan perintah berikut untuk membuat versi produksinya:

```bash
npm run build
```

Perintah ini akan mengoptimasi kode aplikasi Anda dan menyimpannya di dalam folder `dist`. Folder `dist` inilah yang nantinya diunggah ke server *hosting*.

Anda juga bisa melihat *preview* (pratinjau) dari hasil build produksi secara lokal dengan menjalankan:

```bash
npm run preview
```

## 🤝 Kontribusi

Aplikasi ini dikembangkan untuk tujuan edukasi sosial. Jika ada saran perbaikan, bug, atau fitur baru yang ingin ditambahkan, jangan ragu untuk membuat *Pull Request* atau membuka *Issue* di repositori GitHub ini.

## 📄 Lisensi

Silakan sesuaikan dengan lisensi yang ingin Anda gunakan untuk proyek ini.
