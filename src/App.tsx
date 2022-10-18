import './App.css'
import Header from './layout/Header'

function App () {
  // const [address, setAddress] = useState<string | null>(null)
  // const [account, setAccount] = useState<Types.AccountData | null>(null)
  // const [modules, setModules] = useState<Types.MoveModuleBytecode[]>([])

  // useEffect(() => {
  //   if (!address) return
  //   client.getAccount(address).then(setAccount)

  //   client.getAccountModules(address).then(setModules)

  //   client.getAccountResources(address).then(data => {
  //     console.log(data)
  //   })
  // }, [address])

  // // const hasModule = modules.some(m => m.abi?.name === 'Message')

  // useEffect(() => {
  //   const connect = async () => {
  //     return await window.aptos.connect()
  //   }
  //   connect().then(result => {
  //     return window.aptos.isConnected()
  //   }).then(connected => {
  //     if (connected) {
  //       return window.aptos.account()
  //     }
  //   }).then((data: { address: string }) => {
  //     setAddress(data.address)
  //   })
  // }, [])

  return (
    <div className="App">
      {/* <p><code>{ address }</code></p>
      <span>{ JSON.stringify(account) }</span>
      <p>{ JSON.stringify(modules) }</p>
      <p><code>{ account?.sequence_number }</code></p> */}

      <Header></Header>
    </div>
  )
}

export default App
