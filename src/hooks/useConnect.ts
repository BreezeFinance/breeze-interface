import { AptosClient, Types } from 'aptos'
import { useCallback, useEffect, useState } from 'react'
import { getWallet } from '../utils/wallet'
// import useWallet from './useWallet'

const client = new AptosClient('https://testnet.aptoslabs.com')

const useConnect = () => {
  const [address, setAddress] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  const [account, setAccount] = useState<Types.AccountData | null>(null)

  const wallet = getWallet()

  const connect = useCallback(() => {
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
      console.log('get address:', data.address)
      setAddress(data.address)
    })
  }, [])

  useEffect(() => {
    if (!address) return
    client.getAccount(address).then(setAccount)
  }, [address])

  const disConnect = useCallback(() => {
    const disConnect = async () => {
      return await wallet.disconnect()
    }
    disConnect().then(() => {
      setIsConnected(false)
      setAddress(null)
    })
  }, [])

  return { connect, disConnect, isConnected, address, account }
}

export default useConnect
