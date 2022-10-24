import './index.styl'
import useWalletStore from '../../../store/useWalletStore'

function Header () {
  const isConnected = useWalletStore(state => state.isConnected)
  const address = useWalletStore(state => state.address)
  const openConnectModal = useWalletStore(state => state.openConnectModal)
  const disConnect = useWalletStore(state => state.disConnect)

  return (
    <div className="header">
      <div className='right'>
        <div className='button' onClick={isConnected ? disConnect : () => openConnectModal(true)}>
          { isConnected ? 'disConnect' : 'Connect' }
        </div>
        <div style={{
          color: 'white'
        }}>{ address }</div>
      </div>
    </div>
  )
}

export default Header
