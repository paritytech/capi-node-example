import { bins, net } from "capi/nets"

const bin = bins({
  polkadot: ["polkadot-fast", "v0.9.40"],
})

export const polkadot = net.ws({
  url: "wss://rpc.polkadot.io/",
  version: "v0.9.40",
  targets: {
    dev: net.dev({
      bin: bin.polkadot,
      chain: "polkadot-dev",
    }),
  },
})
