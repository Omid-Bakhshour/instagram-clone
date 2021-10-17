import Head from 'next/head'
import Feed from '../components/feed/Feed'
import Header from '../components/header/Header'
import Modal from '../components/modal/Modal'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide ">
      <Head>
        <title>Instagram-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal />

      <Header />
      <Feed />
    </div>
  )
}
