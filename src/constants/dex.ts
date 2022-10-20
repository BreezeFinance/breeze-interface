export enum DexEnum {
  APTOS_SWAP = 1,
  ANIME_SWAP = 2,
  LIQUID_SWAP = 3
}

export const DexPoolMap: Map<string, DexEnum> = new Map([
  ['pool::Pool', DexEnum.APTOS_SWAP]
])

export const getDex = (pool: string) => {
  const keys = [...DexPoolMap.keys()]
  for (let i = 0; i < keys.length; i++) {
    if (pool.includes(keys[i])) return DexPoolMap.get(keys[i])
  }
}
