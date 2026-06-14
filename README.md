# 🌸 CIPHERSLAB - Kamui Design System

Selamat datang di repositori resmi **Kamui Website Experience**. Ini adalah proyek website agensi digital premium yang menggabungkan estetika desain Jepang modern dengan teknologi web mutakhir. Proyek ini dirancang untuk memberikan impresi visual "Wah" yang sinematik, interaktif, dan berorientasi pada performa bisnis.

## 🚀 Filosofi Desain: "Kamui" (神威)
Nama **Kamui** diambil dari bahasa Ainu yang berarti "kekuatan ilahi dalam alam". Website ini merefleksikan filosofi tersebut melalui:
- **Visual Sinematik**: Perpaduan pemandangan gunung, sakura, dan arsitektur zen.
- **Motion Fluid**: Animasi sekelas Apple/Stripe yang responsif dan organik.
- **Glassmorphism**: Lapisan antarmuka transparan yang memberikan kesan kedalaman 3D.

---

## 📂 Struktur Proyek & Fungsi File

Berikut adalah panduan mendalam mengenai struktur file dalam folder `src/`:

### 🏗️ Inti Aplikasi
- **`App.tsx`**: Entry point utama aplikasi. Mengatur urutan section (storytelling flow) dan membungkus seluruh komponen dalam tata letak global.
- **`main.tsx`**: Menghubungkan React ke DOM dan memuat file CSS global.
- **`index.css`**: Jantung dari visual website. Berisi variabel tema Tailwind 4.0, kustomisasi scrollbar, definisi keyframes animasi (sakura, float, shine), dan utility classes premium.

### 🧩 Komponen UI (`src/components/`)

#### 1. Navigasi & Utility
- **`Navbar.tsx`**: Navigasi adaptif dengan efek glassmorphism. Mendukung menu mobile interaktif dan deteksi scroll untuk transisi transparan ke solid.
- **`ScrollProgress.tsx`**: Bar kemajuan di bagian atas layar yang menunjukkan seberapa jauh pengunjung telah membaca halaman.
- **`PresentationRail.tsx`**: Navigasi samping (dot navigation) khusus mode desktop 2XL untuk akses cepat antar section (Intro, Work, Demo, dll).
- **`SakuraParticles.tsx`**: Sistem partikel SVG yang mensimulasikan gugurnya bunga sakura dengan gerak acak berbasis angin.

#### 2. Visual & Media
- **`TiltMedia.tsx`**: Komponen reusable tingkat tinggi yang memberikan efek **3D Tilt** dan **Dynamic Glare (pantulan cahaya)** pada gambar saat didekati kursor mouse.
- **`BeforeAfterShowcase.tsx`**: Lab demo interaktif dengan slider geser (compare mode) untuk memamerkan kualitas transformasi visual (redesign).

#### 3. Section Storytelling
- **`Hero.tsx`**: Section pembuka dengan judul besar (KAMUI), efek parallax mouse 3D, dan **Animated Counter** untuk statistik kredibilitas perusahaan.
- **`Clients.tsx`**: Logo slider (marquee) yang bergerak tanpa henti untuk menunjukkan daftar partner/klien perusahaan secara profesional.
- **`About.tsx`**: Menjelaskan filosofi brand dengan layout grid asimetris dan kartu fitur interaktif.
- **`Services.tsx`**: Daftar layanan agensi dalam format grid premium dengan efek *Shine Sweep* dan stagger animasi.
- **`Portfolio.tsx`**: Etalase karya terbaik dengan kartu visual 3D dan detail teknologi yang digunakan.
- **`CaseStudy.tsx`**: Analisis mendalam satu proyek unggulan lengkap dengan metrik kesuksesan bisnis (Conversion rate, Bounce rate, dll).
- **`Process.tsx`**: Visualisasi alur kerja (fase 01-04) menggunakan simbol Kanji Jepang dan timeline yang saling terhubung.
- **`Testimonials.tsx`**: Ulasan klien dalam format kartu glassmorphism untuk membangun trust.
- **`DealSuite.tsx`**: Section paket harga dan kickoff timeline. Dirancang khusus untuk mempermudah negosiasi/closing dengan klien.
- **`CTA.tsx`**: Ajakan bertindak terakhir dengan visual gunung yang dramatis sebelum masuk ke footer.
- **`Contact.tsx`**: Formulir kontak lengkap dengan integrasi peta lokasi, info email, dan validasi input.
- **`Footer.tsx`**: Penutup website dengan peta situs (sitemap) dan hak cipta.

### 🛠️ Hooks & Helpers
- **`useInView.ts`**: Custom hook berbasis *Intersection Observer API* untuk memicu animasi hanya saat elemen masuk ke dalam layar (viewport), sehingga menghemat performa.

---

## ✨ Fitur Animasi Utama
- **Parallax 3D**: Latar belakang dan teks bergerak dengan kecepatan berbeda memberikan ilusi ruang.
- **Premium Easing**: Menggunakan kurva `cubic-bezier(0.16, 1, 0.3, 1)` untuk gerakan yang responsif namun elegan.
- **Staggered Reveal**: Elemen-elemen muncul satu per satu dengan penundaan mikro (cascade effect).
- **Masking Reveal**: Judul utama muncul dari balik "clipping mask" transparan untuk kesan modern.

---

## 🛠️ Teknologi yang Digunakan
1. **React 19**: Framework UI paling mutakhir.
2. **Vite**: Build tool super cepat untuk pengembangan modern.
3. **Tailwind CSS 4.0**: Styling berbasis utility-first dengan sistem tema variabel baru.
4. **Framer Motion**: Engine utama untuk seluruh animasi kompleks dan interaksi 3D.
5. **Lucide React**: Set ikon vektor yang bersih dan konsisten.

---

## 💻 Cara Menjalankan
1. Pastikan Node.js terinstal.
2. Jalankan `npm install` untuk mengunduh library.
3. Jalankan `npm run dev` untuk preview pengembangan.
4. Jalankan `npm run build` untuk menghasilkan file production yang super optimal di folder `dist/`.

---

© 2025 **CIPHERSLAB**. Dibuat dengan 💖 untuk standar digital dunia.
