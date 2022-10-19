import { Token } from '../../types/token'

import ETHIcon from '../../assets/images/currency/eth.png'
import DAIIcon from '../../assets/images/currency/dai.png'
import USDCIcon from '../../assets/images/currency/usdc.png'
import USDTIcon from '../../assets/images/currency/usdt.png'
import WBTCIcon from '../../assets/images/currency/wbtc.png'
import WETHIcon from '../../assets/images/currency/weth.png'

export const tokens: Token[] = [
  { name: 'ETH', symbol: 'ETH', address: '', icon: ETHIcon },
  { name: 'DAI', symbol: 'DAI', address: '', icon: DAIIcon },
  { name: 'USDC', symbol: 'USDC', address: '', icon: USDCIcon },
  { name: 'USDT', symbol: 'USDT', address: '', icon: USDTIcon },
  { name: 'WBTC', symbol: 'WBTC', address: '', icon: WBTCIcon },
  { name: 'WETH', symbol: 'WETH', address: '', icon: WETHIcon }
]
