import Swap from './Swap'
import Header from './layout/Header'
import { Box } from '@chakra-ui/react'
import ConnectModal from '../components/ConnectModal'

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
      <Header></Header>

      <Box w='771px' height='267px' position='absolute' bg='rgba(251, 132, 132, 0.2);' left='50%' transform='translate(-50%, 0)' top='130px' filter='blur(144px)'></Box>
      <ConnectModal></ConnectModal>
      <Swap></Swap>
    </div>
  )
}

export default App
