import { polkadot } from "@capi/polkadot"

console.log( await polkadot.System.Account.entries({limit:10}).run() )
