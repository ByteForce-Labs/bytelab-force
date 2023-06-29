import { useEffect } from 'react'
import '@/styles/globals.css'


const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

export default function App({ Component, pageProps }) {
  useEffect(() => {
    new WOW().init();
  }, []);

  return <Component {...pageProps} />
}
