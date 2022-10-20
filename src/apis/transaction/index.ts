import http from '../../utils/http'
import { IGetSwapTransactionParams, ISwapOption } from './types'

export const getSwapTransaction = async (params: IGetSwapTransactionParams) => {
  return http.get<ISwapOption[]>({
    url: `/path/${params.from}/${params.to}/${params.amount}`
  })
}
