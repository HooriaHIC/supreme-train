import '../styles/globals.css'
import type { AppProps } from 'next/app'

import NextNProgress from "nextjs-progressbar"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress 
        color="var(--contrast-color)"
        startPosition={0.2}
        stopDelayMs={300}
        height={2}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
