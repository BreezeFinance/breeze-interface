import { DexPoolMap } from './../constants/dex'

export const getDexByPool = (pool: string) => {
  const keys = [...DexPoolMap.keys()]
  for (let i = 0; i < keys.length; i++) {
    if (pool.includes(keys[i])) return DexPoolMap.get(keys[i])
  }
}
