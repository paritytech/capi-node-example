import { polkadot } from "@capi/polkadot"

const result = await polkadot.System.Account
  .entries({ limit: 10 })
  .run()

console.log(result)
