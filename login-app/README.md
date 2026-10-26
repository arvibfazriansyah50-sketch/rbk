# ARB Login

Halaman login ARB berbasis Next.js App Router. Form menyediakan input username, password dengan tombol tampil/sembunyi, persetujuan kebijakan, serta panel panduan.

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

Halaman ini juga bisa dipublikasikan sebagai static export karena autentikasi belum menggunakan API server:

```bash
npm run cf:pages:preview
npm run cf:pages:deploy
```

Atur build command Pages ke `npm run cf:pages:build` dan output directory ke `out`.

Konfigurasi Workers ada di `wrangler.jsonc`. Form saat ini masih berupa UI demo dan belum terhubung ke layanan autentikasi.
