import { defineStore } from 'pinia'

export const useStoreInfoStore = defineStore('store', () => {
  const name = 'Market POS'

  return { name }
})
