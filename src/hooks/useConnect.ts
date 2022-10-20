import { AptosClient, Types } from 'aptos'
import { useCallback, useEffect, useState } from 'react'
import { getWallet } from '../utils/wallet'
// import useWallet from './useWallet'

const client = new AptosClient('https://testnet.aptoslabs.com')

const useConnect = () => {
  const [address, setAddress] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  const [account, setAccount] = useState<Types.AccountData | null>(null)

  const connect = useCallback(() => {
    const wallet = getWallet()
    const connect = async () => {
      return await wallet.connect()
    }
    connect().then(() => {
      return wallet.isConnected()
    }).then(connected => {
      if (connected) {
        setIsConnected(true)
        return wallet.account()
      }
    }).then((data: { address: string }) => {
      setAddress(data.address)
    })
  }, [])

  useEffect(() => {
    if (!address) return
    client.getAccount(address).then(setAccount)
  }, [address])

  const disConnect = useCallback(() => {
    const wallet = getWallet()
    const disConnect = async () => {
      return await wallet.disconnect()
    }
    disConnect().then(() => {
      setIsConnected(false)
      setAddress(null)
    })
  }, [])

  // const getResources = async () => {
  //   if (!address) return
  //   await client.getAccountResource('0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68', '0x1::coin::CoinInfo<0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::devnet_coins::DevnetBTC>').then(data => {
  //     console.log(data)
  //   })
  // }

  return { connect, disConnect, isConnected, address, account }
}

export default useConnect
