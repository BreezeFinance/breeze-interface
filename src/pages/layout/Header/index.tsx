import './index.styl'
import useConnect from '../../../hooks/useConnect'
import Connect from '../../../components/Connect'
import { useRef } from 'react'

function Header () {
  const { disConnect, address, isConnected } = useConnect()
  const childRef = useRef()

  const showConnectModal = () => {
    childRef!.current!.showConnectModal()
  }

  return (
    <div className="header">
      <div></div>
      <div className='right'>
        <div className='button' onClick={address ? disConnect : showConnectModal}>
          { isConnected ? 'disConnect' : 'Connect' }
        </div>
        <div style={{
          color: 'white'
        }}>{ address }</div>
      </div>
      {
        console.log('wasdasdjwkhkjh')
      }
      <Connect ref={childRef}></Connect>
    </div>
  )
}

export default Header
