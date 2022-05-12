import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '@mui/material/Button'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aurene Dashboard</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Button variant="contained" color="primary">Material UI!</Button>
      </main>

      <footer className={styles.footer}>
        Made by me :)
      </footer>
    </div>
  )
}

export default Home
