import { getDefaultClient } from 'connectkit'
import { createClient, chain } from 'wagmi'

const chains = [chain.mainnet];

export const client = createClient(
  getDefaultClient({
    appName: "NFTouring Minting Page",
    autoConnect: true,
    chains
  })
)
