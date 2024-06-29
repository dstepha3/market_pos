import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userID = ref(0)
  const username = "Daniel Stephan"
  const user_clocked_in = true

  return { userID, username, user_clocked_in }
})
