import "@/styles/globals.css"
import type { AppProps } from "next/app"
import AppShell from "@/components/layouts/Appshell"
import { SessionProvider } from "next-auth/react"
import Script from "next/script"

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VM4M076CNZ"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          console.log("GA Loaded ✅");

          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){window.dataLayer.push(arguments);};

          window.gtag('js', new Date());
          window.gtag('config', 'G-VM4M076CNZ');
        `}
      </Script>

      <SessionProvider session={session}>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </SessionProvider>
    </>
  )
}