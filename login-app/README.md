# Morrow Login

Halaman login dan registrasi berbasis Next.js App Router, disiapkan untuk Cloudflare Workers menggunakan OpenNext.

## Pengembangan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Preview Cloudflare Workers

```bash
npm run cf:preview
```

## Deploy Cloudflare Workers

Login dengan Wrangler terlebih dahulu, lalu jalankan:

```bash
npm run cf:deploy
```

## Deploy Cloudflare Pages

Halaman ini juga bisa dipublikasikan sebagai static export karena form belum menggunakan API server:

```bash
npm run cf:pages:preview
npm run cf:pages:deploy
```

Atur build command Pages ke `npm run cf:pages:build` dan output directory ke `out`.

Konfigurasi Workers ada di `wrangler.jsonc`. Form masih berupa UI demo; hubungkan handler submit dan tombol social ke layanan autentikasi sebelum digunakan dengan akun sungguhan.
