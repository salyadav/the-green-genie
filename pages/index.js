import Head from 'next/head'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Finding Aladdin</title>
        <meta name="description" content="HackGT 8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            Finding <span>Aladdin!</span>
          </h1>

          <p className={styles.description}>
            Get started with your ESG Profiling
          </p>
          <Button onClick={() => window.location.href='/esgprofile'}>Get Started!</Button>
        </div>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
