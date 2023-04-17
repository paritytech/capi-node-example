import { binary, CapiConfig } from "capi"

export const config: CapiConfig = {
  server: "https://capi.dev/@v0.1.0-beta.33/",
  chains: {
    polkadot: {
      url: "wss://rpc.polkadot.io/",
      version: "v0.9.40",
    },
    polkadotDev: {
      binary: binary("polkadot", "v0.9.38"),
      chain: "polkadot-dev",
    },
  }
}
