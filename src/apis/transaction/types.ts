export interface IGetSwapTransactionParams {
  from: string
  to: string
  amount: number
}

export interface ISwapPath {
  pool_address: string
  token_in: string
  token_out: string
  is_x_to_y: boolean
}

export interface ISwapOption {
  _id: string
  path: ISwapPath[]
  input_amount: number
  output_amout: number
}
