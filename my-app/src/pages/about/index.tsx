import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <main className={inter.className}>
      <div>
        <h1 data-testid="title">About Page</h1>
      </div>
      <h1>About Annisa</h1> <br />
      <p>Nama Mahasiswa: Annisa Eka Puspita</p>
      <p>NIM: 2341720131</p>
      <p>Program Studi: Teknik Informatika</p>
    </main>
  )
}