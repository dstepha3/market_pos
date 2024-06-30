import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userID = ref(0)
  const username = "Daniel Stephan"
  var user_clocked_in = true
  var user_on_break = false

  return { userID, username, user_clocked_in, user_on_break }
})
