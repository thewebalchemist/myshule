import '../styles/globals.css'
import { useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('preline')
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
