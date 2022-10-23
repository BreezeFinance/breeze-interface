import create from 'zustand'
import { getWallet } from '../utils/wallet'

const wallet = getWallet()

export interface IWalletState {
  address: string
  isConnected: boolean
  isOpenConnectModal: boolean
  connect: () => Promise<void>
  disConnect: () => Promise<void>
  openConnectModal: (open: boolean) => void
}

const useWalletStore = create<IWalletState>(set => ({
  address: '',
  isConnected: false,
  isOpenConnectModal: false,
  openConnectModal: (open = false) => {
    set({
      isOpenConnectModal: open
    })
  },
  connect: async () => {
    await wallet.connect()
    const isConnected = await wallet.isConnected()
    if (isConnected) {
      const account = await wallet.account()

      set({
        isConnected: true,
        address: account.address
      })
    }
  },
  disConnect: async () => {
    await wallet.disconnect()
    set({
      isConnected: false,
      address: ''
    })
  }
}))

export default useWalletStore
