import { AptosClient } from 'aptos'

// class AptosUtil {
//   static client: AptosClient

//   static getAptosClient () {
//     if (!this.client) {
//       this.client = new AptosClient('https://testnet.aptoslabs.com')
//     }
//     return client
//   }
// }

// export default AptosUtil

export const clinet = new AptosClient('https://testnet.aptoslabs.com')
