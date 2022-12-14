import { ConnectKitProvider } from 'connectkit'
import { WagmiConfig } from 'wagmi'
import { client } from '../wagmi'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import * as React from 'react'
import Fonts from '../styles/Fonts'
import theme from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => 
    setMounted(true)
  , [])

  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={client}>
        <ConnectKitProvider >
          <NextHead>
            <title>NFTouring Minting Page</title>
            <link rel="icon" href="/favicon.ico" />
          </NextHead>
          <Fonts />
          {mounted && <Component {...pageProps} />}
        </ConnectKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  )
}

export default App
