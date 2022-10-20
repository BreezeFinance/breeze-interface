import './index.styl'
import useConnect from '../../../hooks/useConnect'

function Header () {
  const { connect, disConnect, address } = useConnect()

  return (
    <div className="header">
      <div></div>
      <div className='right'>
        <div className='button' onClick={address ? disConnect : connect}>
          { address ? 'disConnect' : 'Connect' }
        </div>
        <div style={{
          color: 'white'
        }}>{ address }</div>
      </div>

    </div>
  )
}

export default Header
