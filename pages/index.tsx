import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import Head from 'next/head'
import Button from '@mui/material/Button'
import styles from '../styles/Home.module.css'
import { GetServerSidePropsContext } from 'next'

function Home() {
  const { status, data: session } = useSession()

  return (
    <section className={styles.container}>
      <Head>
        <title>Aurene Dashboard</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Aurene Dashboard
        </h1>

        <p>Status: {status}</p>

        {session ? (
          <>
            <p>
              Singed in as {session.user?.email}
            </p>

            <Button variant="contained" color="primary" onClick={() => signOut()}>
              Sign Out
            </Button>
          </>
          ) : (
          <Button variant="contained" color="primary" onClick={() => signIn()}>
            Sign In
          </Button>
          )
        }
      </main>

      <footer className={styles.footer}>
        Made by me :)
      </footer>
    </section>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      session: await getSession(context),
    },
  }
}

export default Home
