import { defineStore } from 'pinia'

export const useStoreInfoStore = defineStore('store', () => {
  const name = "Store Name"

  return { name }
})
