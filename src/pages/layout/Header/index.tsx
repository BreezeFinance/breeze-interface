import { useCallback, useState } from 'react'
import './index.styl'
// import { Types, AptosClient } from 'aptos'

// const client = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1')

function Header () {
  const [address, setAddress] = useState<string | null>(null)
  // const [account, setAccount] = useState<Types.AccountData | null>(null)
  // const [modules, setModules] = useState<Types.MoveModuleBytecode[]>([])

  const connect = useCallback(() => {
    const connect = async () => {
      return await window.aptos.connect()
    }
    connect().then(result => {
      return window.aptos.isConnected()
    }).then(connected => {
      if (connected) {
        return window.aptos.account()
      }
    }).then((data: { address: string }) => {
      setAddress(data.address)
    })
  }, [])
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
