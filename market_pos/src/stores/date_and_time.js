import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDateAndTimeStore = defineStore('date_and_time', () => {
  const hours = ref(new Date().getHours())
  const minutes = ref(new Date().getMinutes())
  const seconds = ref(new Date().getSeconds())

  const day = ref(new Date().getDate())
  const month = ref(new Date().getMonth() + 1)
  const year = ref(new Date().getFullYear())

  const updateTime = () => {
    const now = new Date()
    hours.value = now.getHours()
    minutes.value = now.getMinutes()
    seconds.value = now.getSeconds()

    day.value = now.getDate()
    month.value = now.getMonth() + 1
    year.value = now.getFullYear()
  }

  const formattedHours = () => {
    const hour = hours.value % 12 || 12
    return hour.toString().padStart(2, '0')
  }

  const formattedDate = () => {
    const pad = (num) => num.toString().padStart(2, '0')
    return `${pad(month.value)}/${pad(day.value)}/${year.value}`
  }

  const period = () => {
    return hours.value >= 12 ? 'PM' : 'AM'
  }


  return { 
    hours, 
    minutes, 
    seconds, 
    day, 
    month, 
    year, 
    updateTime, 
    formattedHours, 
    period, 
    formattedDate 
  }
})
