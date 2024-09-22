import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import ReactQueryProvider from "../provider/reactQueryProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" user-scalable="no" />
        <title>eLoLa Point of Sales</title>
        <meta name="description" content="Best PWA app in the world!" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/icons/mask-icon.svg" color="#FFFFFF" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="elola" />
        <meta name="twitter:description" content="elola POS" />
        <meta name="twitter:image" content="/icons/logo-1.png" />
        <meta name="twitter:creator" content="elola-team" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="elola" />
        <meta property="og:description" content="elola pos" />
        <meta property="og:site_name" content="elola pos" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="/icons/logo-1.png" />
        {/* add the following only if you want to add a startup image for Apple devices. */}
        <link
          rel="apple-touch-startup-image"
          href="/icons/logo-1.png"
          sizes="2048x2732"
        />
        <link rel="icon" href="/icons/logo-1.png" />
      </Head>
        <ReactQueryProvider>
          <Component {...pageProps} />
        </ReactQueryProvider>
    </>
    
  )
}
