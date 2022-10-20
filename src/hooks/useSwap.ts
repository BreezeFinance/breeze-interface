import { ISwapOption } from './../apis/transaction/types'
import { useCallback } from 'react'
import { getSwapTransaction } from '../apis/transaction'
import useWallet from './useWallet'
import { getDexByPool } from '../utils/dex'
const words = ['zero', 'one', 'two', 'three', 'four', 'five']

const useSwap = () => {
  const { wallet } = useWallet()

  const registerCoin = async (coin) => {
    const trans = {
      function: '0x1::managed_coin::register',
      arguments: [],
      type: 'entry_function_payload',
      type_arguments: [
        coin
      ]
    }
    await wallet.signAndSubmitTransaction(trans)
  }

  const swap = useCallback(async (swapOption: ISwapOption) => {
    const pathLength = swapOption.path.length
    const swapFunction = `0x0566f39679e29ef58f9f2ace460e6ec4306acaded4d07f17985af7d09b98b142::Aggregation::swap_${words[pathLength]}`

    let directionMask: number = 0
    swapOption.path.forEach((item, index) => {
      directionMask += ((item.is_x_to_y ? 0 : 1) << index)
    })

    let dexType: number = 0
    swapOption.path.forEach((item, index) => {
      dexType += (getDexByPool(item.pool_address).valueOf() << index * 8)
    })

    const amountIn = swapOption.input_amount
    const amountOutMin = 0 // slip

    const curves: string[] = []
    swapOption.path.forEach(() => {
      curves.push('0x4e9fce03284c0ce0b86c88dd5a46f050cad2f4f33c4cdd29d98f501868558c81::curves::Uncorrelated')
    })

    let tokenPath: string[] = []
    swapOption.path.forEach((item, index) => {
      tokenPath.push(item.token_in)
      if (index === swapOption.path.length - 1) {
        tokenPath.push(item.token_out)
      }
    })
    tokenPath = tokenPath.concat(curves)

    const transaction = {
      function: swapFunction,
      type_arguments: tokenPath,
      arguments: [
        dexType,
        directionMask,
        amountIn,
        amountOutMin
      ]
    }
    // submit transaction
    await wallet.signAndSubmitTransaction(transaction)
  }, [])

  // request swap path
  const getSwapOptions = useCallback(async (from: string, to: string, amount: number) => {
    return await getSwapTransaction({
      from,
      to,
      amount
    })
  }, [])

  return { swap, getSwapOptions, registerCoin }
}

export default useSwap