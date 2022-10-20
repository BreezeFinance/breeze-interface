// walletName: string
export const getWallet = () => {
  if ('aptos' in window) {
    return window.aptos
  } else {
    window.open('https://petra.app/', '_blank')
  }
}
