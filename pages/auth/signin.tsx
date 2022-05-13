import { signIn, getProviders } from 'next-auth/react'
import styles from '../../styles/Signin.module.css'

type Provider = {
  name: string,
  id: string
}

type Providers = {
  providers: Provider[]
}

function Signin({ providers }: Providers) {
  return (
    <section style={{ overflow: 'hidden', position: 'relative' }}>
      <div className={styles.wrapper} />

      <div className={styles.content}>
        <div className={styles.cardWrapper}>
          <div className={styles.cardContent}>
            {providers &&
              Object.values(providers).map(provider => (
                <button key={provider.name} onClick={() => signIn(provider.id)} >
                  Sign in with{' '} {provider.name}
                </button>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers
    },
  }
}

export default Signin
