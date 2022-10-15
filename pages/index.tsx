import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Layout/Header/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zoftify assesment task</title>
        <meta name="description" content="Zoftify assesment task" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <Navbar/>

      <main>

      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
