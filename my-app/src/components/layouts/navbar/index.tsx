import Script from 'next/dist/client/script'
import styles from './navbar.module.css'
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"

const Navbar = () => {
  const { data }: any = useSession()

  return (
    <div className={styles.navbar} data-testid="navbar">
      {/* <div className={styles.navbar__brand}>
        MyApp
      </div> */}

      <div className={styles.navbar__brand} id="title"></div>
      <Script id="title-script" strategy="lazyOnload">
        {`document.getElementById('title').textContent = 'MyApp';`}
      </Script>

      <div className={styles.navbar__right}>
        {data ? (
          <>
            <div className={styles.navbar__user}>
              Welcome, {data.user?.fullname}

              <Image
                src={data.user?.image || "/default-avatar.png"}
                alt={data.user?.fullname || "User Avatar"}
                width={50}
                height={50}
                className={styles.navbar__user__image}
              />
            </div>

            <button
              className={`${styles.navbar__button} ${styles["navbar__button--danger"]}`}
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            className={`${styles.navbar__button} ${styles["navbar__button--primary"]}`}
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar