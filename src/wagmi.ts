import { getDefaultClient } from 'connectkit'
import { createClient } from 'wagmi'

export const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: 'NFTouring Minting Page',
  }),
)
