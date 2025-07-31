# Capstone Project: HIMTI Learning Group & HIMTIChat AI

[![Netlify Status]](https://app.netlify.com/sites/kelompok-belajar-himti/deploys)

Platform komunitas belajar modern untuk Himpunan Mahasiswa Teknik Informatika (HIMTI) UMT, yang terintegrasi penuh dengan **HIMTIChat**, asisten AI canggih yang didukung oleh model **IBM Granite**. Proyek ini adalah submission untuk **Capstone Project Hacktiv8 x IBM**.

**🚀 Demo Live:** [**kelompok-belajar-himti.netlify.app**](https://kelompok-belajar-himti.netlify.app/)

---

### ✨ Demo Fitur Unggulan

![Demo GIF HIMTIChat](link-ke-gif-baru-anda.gif)

---

### 🌟 Fitur Utama & Keunggulan Teknis

Aplikasi ini dibangun sebagai **Single Page Application (SPA)** yang modern dengan fokus pada *user experience* yang dinamis, fungsionalitas AI yang canggih, dan arsitektur yang solid.

**Fitur Platform & UI/UX:**
-   **Desain Modern & Interaktif:** Latar belakang partikel dinamis, animasi judul "mengetik", dan *smart navbar*.
-   **Scroll Reveal Animation:** Setiap bagian halaman muncul dengan animasi yang elegan saat di-*scroll*.
-   **Filter Mentor Dinamis:** Memungkinkan pengguna memfilter daftar mentor berdasarkan keahlian dengan animasi yang mulus.
-   **Navigasi Cepat:** Transisi halaman instan berkat *client-side routing* dari `react-router-dom`.
-   **PWA (Progressive Web App):**
    -   *Installable* di perangkat *mobile* maupun *desktop*.
    -   Akses *offline* dasar menggunakan *service worker*.
    -   Dilengkapi *banner* instalasi kustom untuk meningkatkan adopsi.

**Fitur HIMTIChat (AI Assistant):**
-   **Arsitektur Profesional:** Logika dan UI dipisahkan menggunakan *custom hook* (`useChat`) untuk *maintainability* maksimal.
-   **Sidebar Riwayat Canggih:** Kelola percakapan dengan mudah, lengkap dengan *search*, *delete*, dan pengelompokan riwayat berdasarkan waktu.
-   **Input Suara (Voice-to-Text):** Gunakan mikrofon untuk berbicara langsung dengan AI.
-   **Render Markdown & Kode:** Respons dari AI ditampilkan dengan format yang rapi, dan blok kode memiliki tombol "Salin" yang fungsional.
-   **Fitur UX Premium:** Ekspor percakapan (PDF/Markdown), notifikasi suara, *feedback* interaktif, dan mode layar penuh.

---

### 🏛️ Integrasi dengan Platform Eksternal (LMS)

Untuk menciptakan pengalaman pengguna yang mulus, landing page ini terintegrasi secara langsung dengan platform [HIMTI LMS](himti-lms.vercel.app). Beberapa tombol ajakan (Call-to-Action) utama dirancang untuk mengarahkan pengguna ke halaman yang relevan di LMS, menjadikan landing page ini sebagai "gerbang depan" yang efektif untuk ekosistem pembelajaran HIMTI.

**Integrasi ini mencakup:**
- Tombol Login: Mengarahkan langsung ke halaman login HIMTI LMS.
- Tombol Daftar Sekarang: Mengarahkan ke halaman registrasi di platform LMS.
- Tautan Materi & Program: Tombol seperti "Lihat Course" dan "Pelajari Lebih Lanjut" juga terhubung ke bagian spesifik di dalam LMS untuk menjaga alur pengguna tetap lancar.

### 🛠️ Arsitektur & Teknologi

#### **Tech Stack Utama**

| Kategori | Teknologi | Fungsi Utama |
| :--- | :--- | :--- |
| **UI Framework** | React JS | Library untuk membangun antarmuka berbasis komponen. |
| **Build Tool** | Vite | *Development server* cepat dengan HMR dan *bundler*. |
| **Styling** | Tailwind CSS | *Utility-first CSS framework* untuk desain yang cepat. |
| **Animasi** | Framer Motion | *Library* animasi deklaratif untuk React. |
| **Routing** | React Router | *Client-side routing* untuk SPA. |
| **PWA** | Vite PWA Plugin | Dukungan PWA via *service worker* & *manifest*. |
| **Backend** | Netlify Functions | *Serverless functions* sebagai perantara API yang aman. |
| **AI Model** | IBM Granite | Model AI yang diakses melalui Replicate. |
| **Icons** | React Icons | Komponen ikon populer. |

#### **Pemanfaatan React Hooks & Arsitektur**
-   **Pola Desain Atomik:** Struktur proyek diorganisir dengan jelas menjadi *Atoms*, *Molecules*, dan *Organisms*.
-   **`useState` & `useEffect`:** Digunakan secara ekstensif untuk mengelola *state* lokal dan *side effects*.
-   **`useRef`:** Untuk interaksi langsung dengan elemen DOM seperti *auto-scroll* dan *auto-resize textarea*.
-   **`useMemo`:** Mengoptimalkan performa dengan memoizing kalkulasi yang berat seperti pemfilteran dan pengelompokan data.
-   **`useContext`:** Digunakan untuk manajemen tema global (sebelum di-refactor).
-   **Custom Hooks (`useChat`):** Seluruh logika *stateful* dari HIMTIChat diekstraksi ke dalam *custom hook* untuk memisahkan logika dari tampilan, meningkatkan *maintainability* dan *testability*.

#### **Struktur Proyek**
```
├── public/
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── Atoms/        # Komponen terkecil (Button, dll)
│   │   ├── Molecules/    # Gabungan beberapa atom (Card, dll)
│   │   ├── Organisms/    # Gabungan dari molekul (Sections, dll)
│   │   └── Layout/       # Komponen layout (Navbar, Footer, MainLayout)
│   ├── Data/             # Data statis (courses, mentors, programs, dll)
│   ├── hooks/            # Custom hooks (e.g., useChat.js)
│   ├── Pages/            # Komponen untuk setiap halaman
│   ├── utils/            
│   ├── App.jsx
│   └── main.jsx
├── netlify/
│   └── functions/        # Serverless backend
├── .gitignore
├── netlify.toml
├── package.json
└── vite.config.js
```
---

### 🤖 Penjelasan Dukungan AI

Proyek ini mengintegrasikan model AI **IBM Granite** melalui platform Replicate. Integrasi ini tidak hanya sekadar memanggil API, tetapi juga melibatkan beberapa lapisan rekayasa:
-   **Backend Serverless:** Menggunakan **Netlify Functions** sebagai perantara yang aman untuk melindungi API Key agar tidak terekspos di sisi klien.
-   **Custom Hook (`useChat`):** Seluruh logika interaksi dengan AI—mulai dari *fetching data*, manajemen *state*, hingga penyimpanan di `localStorage`—dienkapsulasi dalam sebuah *custom hook* yang bersih dan bisa diuji.
-   **Prompt Engineering Lanjutan:** Sebuah **System Prompt** yang detail ditanamkan di *backend* untuk mengontrol kepribadian, struktur jawaban, dan batasan AI, mengubahnya dari model generik menjadi asisten yang dirancang khusus untuk HIMTI Learning Group.

---

### 셋 Setup & Instalasi Lokal

1.  **Prasyarat:** Node.js (v18.x atau lebih).
2.  **Clone repository ini:**
    ```bash
    git clone https://github.com/RifkiFrds/Himti-Learning-GroupApp.git
    cd Himti-Learning-GroupApp
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Siapkan API Key:**
    -   Buat file bernama `.env` di direktori utama.
    -   Tambahkan API key dari Replicate ke dalamnya:
      ```
      REPLICATE_API_TOKEN=r8_xxxxxxxxxxxxxxxxxxxx
      ```
5.  **Jalankan dengan Netlify CLI:**
    ```bash
    netlify dev
    ```
6.  Buka [http://localhost:8888](http://localhost:8888) di browser Anda.

---

### Referensi & Apresiasi
-   **Tailwind CSS**, **Preline UI**, dan **HyperUI** untuk inspirasi komponen UI.
-   Komunitas *open-source* di balik **Vite**, **React**, **Framer Motion**, **LottieFiles**, dan semua *library* luar biasa yang digunakan dalam proyek ini.



















