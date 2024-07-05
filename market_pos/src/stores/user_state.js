import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()

  const userID = ref('0316')
  const userLevel = ref(2)
  const username = ref('Daniel Stephan')
  var user_clocked_in = ref(true)
  var user_on_break = ref(false)

  // var form_input = ref()

  // const setUser = (id, username) => {
  //   userID = id
  //   username = username
  // }

  const userClockIn = () => {
    const passed = validateUser()

    if (passed) {
      user_clocked_in.value = true
      router.push({ name: 'dashboard' })
    } else {
      return
    }
  }

  const userClockOut = () => {
    user_clocked_in.value = false
    router.push({ name: 'front_door' })
  }

  const userGoBreak = () => {
    user_on_break.value = true
  }

  const userBackBreak = () => {
    user_on_break.value = false
  }

  const validateUser = () => {
    if (userID) {
      return true
    }
  }

  return {
    userID,
    userLevel,
    username,
    user_clocked_in,
    user_on_break,

    userClockIn,
    userClockOut,
    userGoBreak,
    userBackBreak
  }
})
