import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userID = ref(0)
  const username = "Daniel Stephan"
  var user_clocked_in = false

  return { userID, username, user_clocked_in }
})
