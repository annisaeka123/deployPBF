import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Praktikum Next.js Pages Router</title>
      </Head>
      <div>
        <h1>Praktikum Next.js Pages Router</h1>
        <br />
        <p>Pengembangan Web</p>
        <Link href="/about">
          <button>About</button>
        </Link>
      </div>
    </>
  )
}