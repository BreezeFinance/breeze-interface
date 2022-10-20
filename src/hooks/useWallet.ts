import { useEffect, useState } from 'react'

// TODO: add walletName: string
const useWallet = () => {
  const [wallet, setWallet] = useState<any>(null)
  useEffect(() => {
    if ('aptos' in window) {
      setWallet(window.aptos)
    } else {
      window.open('https://petra.app/', '_blank')
    }
  }, [])

  // useCallback

  return { wallet }
}

export default useWallet
