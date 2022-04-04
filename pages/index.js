import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>gam-.ther-</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="gam-.ther-" />
        <p className="description">
          The website is on its way and is expected to be launched shortly
        </p>
      </main>

      <Footer />
    </div>
  )
}
