This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Live App

Open [https://tracking-nib.vercel.app/](https://tracking-nib.vercel.app/)

## API Doc

POST https://tracking-nib.vercel.app/api/nib

Request example
```json
{
    "nib":"123123123",
    "date":"01-12-2020"
}
```
Response 
```json
{
    "status": "OK",
    "message": "Data Ditemukan",
    "data": {
        "nib": "123123213213",
        "tanggal_terbit_oss": "2020-12-30",
        "nama_perusahaan": null,
        "jenis_nib": null,
        "stat_nib": "Aktif",
        "stat_izin": "Penerbitan NIB dan Izin Dasar",
        "kepabeanan": "Tidak",
        "ekspor": "Tidak",
        "impor": "Tidak"
    }
}
```
