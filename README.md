# **HIMTI Learning Group**

Ini adalah dokumentasi teknis untuk proyek landing page **HIMTI Learning Group**. Proyek ini dikembangkan sebagai sebuah **Single Page Application (SPA)** yang modern, responsif, dan dapat di-install (installable) berkat teknologi **Progressive Web App (PWA)**.

Dokumen ini bertujuan memberikan pemahaman menyeluruh mengenai arsitektur, teknologi yang digunakan, pola desain, dan alur kerja proyek.

🔗 **Live Demo**: [https://kelompok-belajar-himti.netlify.app](https://kelompok-belajar-himti.netlify.app)

---

## **1. Fitur Utama & Keunggulan Teknis**

- **Desain Responsif (Mobile-First)**  
  Menggunakan **Tailwind CSS** untuk memastikan tampilan optimal di semua perangkat.

- **Progressive Web App (PWA)**  
  - Installable di perangkat mobile maupun desktop.  
  - Akses offline menggunakan **service worker**.  
  - **Manifest file** tersedia untuk pengaturan ikon dan tema aplikasi.

- **Pencarian Kursus Dinamis & Reaktif**  
  Pencarian real-time menggunakan **React Hooks** tanpa reload halaman.

- **Navigasi Cepat dengan Client-Side Routing**  
  Menggunakan **react-router-dom** untuk transisi halaman yang instan.

- **Animasi & Transisi Halus**  
  Animasi fade-in-up sederhana pada elemen UI.

---

## **2. Arsitektur & Teknologi**

### **2.1. Tech Stack**

| **Kategori**   | **Teknologi**         | **Fungsi Utama**                                |
|----------------|-----------------------|-------------------------------------------------|
| UI Framework   | React JS (v19)        | Library untuk membangun antarmuka berbasis komponen |
| Build Tool     | Vite                  | Development server cepat dengan HMR dan bundler |
| Styling        | Tailwind CSS v3       | Utility-first CSS framework                     |
| Routing        | React Router v6       | Client-side routing                             |
| PWA            | Vite PWA Plugin       | PWA support via service worker & manifest       |
| Icons          | React Icons           | Ikon populer dalam bentuk komponen React        |

### **2.2. Pemanfaatan React Hooks**

- **useState**  
  Mengelola state lokal.  

- **useEffect**  
  Menangani efek samping, contoh pencarian reaktif.

- **useLocation**
Digunakan untuk memantau perubahan URL.

### **2.3. Struktur Project**
```
├── public/
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── Atoms/       # Komponen terkecil (Button, dll)
│   │   ├── Molecules/   # Gabungan beberapa atom (Card, dll)
│   │   ├── Organisms/   # Gabungan dari molekul (Sections, dll)
│   │   └── Layout/      # Komponen layout (Navbar, Footer, MainLayout)
│   ├── Data/            # Data statis (courses, mentors, programs)
│   ├── Pages/           # Komponen untuk setiap halaman
│   ├── utils/           # Utilitas (contoh: ScrollToTop)
│   ├── App.jsx          # Komponen utama & routing
│   ├── main.jsx         # Titik masuk aplikasi
│   └── index.css        # Konfigurasi utama Tailwind CSS
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## **3. Panduan Menjalankan Proyek**

### **3.1. Prasyarat**

- **Node.js** (versi 18.x atau lebih)
- **npm** / **yarn** / **pnpm**

### **3.2. Instalasi & Menjalankan**

```bash
git clone https://github.com/rifkifrds/himti-learning-groupapp.git
cd himti-learning-groupapp

npm install
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

### **3.3. Skrip Tersedia**

- `npm run dev` : Mode pengembangan
- `npm run build` : Build produksi (`/dist`)
- `npm run lint` : Cek kualitas kode dengan **ESLint**
- `npm run preview` : Preview hasil build

---

## **4. Referensi & Apresiasi**

- **Tailwind CSS**
- **Preline UI**
- **HyperUI**  
  Sebagian besar ide komponen UI diadaptasi dari HyperUI.
- **Vite**, **React**, **React Icons**  
  Terima kasih kepada komunitas open-source yang telah membangun ekosistem ini.
