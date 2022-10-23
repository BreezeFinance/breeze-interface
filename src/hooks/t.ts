// const NODE_URL = "https://fullnode.testnet.aptoslabs.com";
//   const client = new AptosClient(NODE_URL);

//   const alice = new AptosAccount(Buffer.from(process.env.KEY, 'hex'))
//   console.log(`Alice:`, alice.accountAddress.toString())

//   const apt = "0x1::aptos_coin::AptosCoin"
//   const usdt = "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::devnet_coins::DevnetUSDT"
//   const move_coin = "0xe4497a32bf4a9fd5601b27661aa0b933a923191bf403bd08669ab2468d43b379::move_coin::MoveCoin"
//   const curve = "0x4e9fce03284c0ce0b86c88dd5a46f050cad2f4f33c4cdd29d98f501868558c81::curves::Uncorrelated"
  
//   const coinClient = new CoinClient(client)
//   const balance = await coinClient.checkBalance(alice, {
//     coinType: apt,
//   })
//   console.log('balance', balance)

// const ENUM_DEX_APTOS_SWAP = 1;
//  const ENUM_DEX_ANIME_SWAP = 2;
//  const ENUM_DEX_LIQUID_SWAP = 3;

//   const dex_type = ENUM_DEX_LIQUID_SWAP + (ENUM_DEX_LIQUID_SWAP << 8) + (ENUM_DEX_LIQUID_SWAP << 16)
//   // (is_x_to_y: true => 0) < 1
//   const direction_mask = 0 + (0 < 1) + (1 < 2)
//   const amount_in = Math.floor(Number(balance)/100)
//   const amount_out_min = 0.995 * 1367948180

//   const tx = await client.generateTransaction(alice.accountAddress, {
//     function: "0x0566f39679e29ef58f9f2ace460e6ec4306acaded4d07f17985af7d09b98b142::Aggregation::swap_three",
//     type_arguments: [
//       usdt,
//       apt,
//       move_coin,
//       apt,
//       curve,
//       curve,
//       curve,
//     ],
//     arguments: [
//       dex_type,
//       direction_mask,
//       amount_in,
//       amount_out_min,
//     ]
//   })

export {}
