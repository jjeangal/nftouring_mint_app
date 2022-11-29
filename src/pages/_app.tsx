import { ConnectKitProvider } from 'connectkit'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'
import { client } from '../wagmi'
import '../styles/_app.css'

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => 
    setMounted(true)
  , [])
  
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <NextHead>
          <title>NFTouring Minting Page</title>
        </NextHead>
        {mounted && <Component {...pageProps} />}
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default App
