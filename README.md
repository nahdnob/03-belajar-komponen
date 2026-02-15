# W03 – Belajar Komponen (Next.js)

## Hasil Tampilan
Berikut adalah hasil implementasi komponen Profile pada halaman utama:

![Hasil Tampilan](./ss-soal-1.png)
![Hasil Tampilan](./ss-soal-2.png)

## Apa yang Saya Pelajari
Pada tugas ini saya mempelajari:
    Soal 1:
        - Cara membuat komponen React menggunakan function
        - Cara menggunakan komponen Image dari Next.js
        - Cara melakukan import komponen ke page.tsx
        - Cara menampilkan beberapa komponen dalam satu halaman
        - Pengaturan layout menggunakan flexbox
    Soal 2:
        - Cara membuat Named Export Components {Gallery}
        - Cara menggunakan komponen Gallery pada Page.tsx

## Error yang Ditemui dan Solusinya
Soal 1: Saya sempat mengalami error saat menampilkan gambar dari URL eksternal.
Error tersebut disebabkan karena Next.js memerlukan konfigurasi khusus
untuk mengizinkan gambar dari domain luar.

Solusi:
- Menambahkan konfigurasi `images.remotePatterns`
  pada file `next.config.ts`
- Menyesuaikan hostname sesuai domain gambar (i.imgur.com)

Setelah konfigurasi ditambahkan dan server di-restart,
gambar dapat ditampilkan dengan normal.

## Kesimpulan
Dengan tugas ini, saya memahami konsep dasar komponen di Next.js
dan cara menggunakannya kembali (reusable component).