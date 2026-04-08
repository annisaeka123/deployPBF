import Script from 'next/dist/client/script'
import styles from './footer.module.css'
import { useSession } from "next-auth/react"

const Footer = () => {
  const { data }: any = useSession()

  return (
    <footer className={styles.footer} data-testid="footer">
      {/* Brand / Title */}
      <div className={styles.footer__brand} id="footer-title"></div>
      <Script id="footer-title-script" strategy="lazyOnload">
        {`document.getElementById('footer-title').textContent = 'MyApp © ' + new Date().getFullYear();`}
      </Script>

      {/* Info */}
      <div className={styles.footer__info}>
        <p>All rights reserved.</p>

        {data && (
          <p className={styles.footer__user}>
            Logged in as: {data.user?.fullname}
          </p>
        )}
      </div>
    </footer>
  )
}

export default Footer