const debug = process.env.DEBUG

const config = {
  debug,
  contract: process.env.CONTRACT || (debug ? '0x9BC52FBcCcde8cEADAEde51a25dBeD489b201e53' : '0x476e14D956dca898C33262aecC81407242f8431A'),
  explorer: process.env.EXPLORER_URL || 'https://explorer.harmony.one/#/tx/{{txId}}',
  defaultRPC: process.env.DEFAULT_RPC || 'https://api.harmony.one',
  tld: process.env.TLD || '.1.country',
  chainParameters: process.env.CHAIN_PARAMETERS
    ? JSON.parse(process.env.CHAIN_PARAMETERS)
    : {
        chainId: '0x63564C40', // A 0x-prefixed hexadecimal string
        chainName: 'Harmony Mainnet Shard 0',
        nativeCurrency: {
          name: 'ONE',
          symbol: 'ONE',
          decimals: 18
        },
        rpcUrls: ['https://api.harmony.one'],
        blockExplorerUrls: ['https://explorer.harmony.one/']
      }
}

export default config
