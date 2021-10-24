import Head from 'next/head'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>The Green Genie</title>
        <meta name="description" content="HackGT 8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            <span className="font-bold">The Green <span className="text-green-600">Genie!</span></span>
          </h1>
          <p className="px-2 text-lg text-gray-500">
            Go green with your investment. Find your Genie!
          </p>
          <Button onClick={() => window.location.href='/getstarted'}>Get Started!</Button>
        </div>
      </main>
      <footer className={styles.footer}>
        <a className="px-2 text-green-600 underline" href="https://www.linkedin.com/in/tejas-bhuwania/" target="_blank">Tejas Bhuwania</a> and <a className="px-2 text-green-600 underline" href="https://www.linkedin.com/in/saloni-yadav/" target="_blank">Saloni Yadav</a> ©
      </footer>
    </div>
  )
}
