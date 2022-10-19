import { useCallback, useEffect, useState } from 'react'
import './index.styl'
import { AptosClient } from 'aptos'

const client = new AptosClient('https://testnet.aptoslabs.com')

function Header () {
  const [address, setAddress] = useState<string | null>(null)
  // const [account, setAccount] = useState<Types.AccountData | null>(null)
  // const [coinClient, setCoinClient] = useState<CoinClient | null>(null)

  const connect = useCallback(() => {
    const connect = async () => {
      return await window.aptos.connect()
    }
    connect().then(() => {
      return window.aptos.isConnected()
    }).then(connected => {
      if (connected) {
        return window.aptos.account()
      }
    }).then((data: { address: string }) => {
      setAddress(data.address)
    })
  }, [])

  useEffect(() => {
    if (!address) return
    client.getAccountResources(address).then(coins => {
      console.log(coins)
      coins.forEach(coin => {
        if (coin.type.includes('coin')) {
          // const coinName = coin.type.split('::')[coin.type.split('::').length - 1]
          // console.log(`${coinName}: ${coin.data.coin.value}`)
        }
      })
    })
  }, [address])

  return (
    <div className="header">
      <div></div>
      <div className='right'>
        <div className='button' onClick={connect}>Connect</div>
      </div>

      <div style={{
        color: 'white'
      }}>{ address }</div>
    </div>
  )
}

export default Header
