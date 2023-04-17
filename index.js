import { System } from "@capi/polkadot-dev"

console.log(await System.Account.entryPage(10, null).run())
