/**aqui corre todo el codigo que se ejecuta en todas las paginas  */
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('estoy en el app')
  return <Component {...pageProps} />
}

export default MyApp
