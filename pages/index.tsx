import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import Head from 'next/head'
import Button from '@mui/material/Button'
import styles from '../styles/Home.module.css'
import { GetServerSidePropsContext } from 'next'
import { Avatar, IconButton } from '@mui/material'
import Nick from '../components/configuration/nick'
import { ExitToApp } from '@mui/icons-material'

function Home() {
  const { data: session } = useSession()

  return (
    <section>
      <Head>
        <title>Aurene Dashboard</title>
      </Head>

      <main>
        <h1 className={styles.title}>
          Aurene Dashboard
        </h1>

        {session ? (
          <>
            <div className={styles.something}>
              <Avatar alt="kek" src={session.user?.image as string} />

              <span>
                {session.user?.name}
              </span>

              <IconButton aria-label="logout" title="Logout" onClick={() => signOut()}>
                <ExitToApp />
              </IconButton>
            </div>

            <Nick />
          </>
          ) : (
          <Button variant="contained" color="primary" onClick={() => signIn()}>
            Sign In
          </Button>
          )
        }
      </main>

      <footer>
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
