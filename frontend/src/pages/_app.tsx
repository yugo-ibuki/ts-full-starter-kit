import { AppProps } from 'next/app'
import { Test } from '@/components/Test'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      top page
      <Component {...pageProps} />
    </main>
  )
}
