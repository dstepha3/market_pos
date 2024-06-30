import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDateAndTimeStore = defineStore('date_and_time', () => {
  const hours = ref(new Date().getHours())
  const minutes = ref(new Date().getMinutes())
  const seconds = ref(new Date().getSeconds())

  const day_of_week = ref(new Date().getDay())
  const day = ref(new Date().getDate())
  const month = ref(new Date().getMonth() + 1)
  const year = ref(new Date().getFullYear())

  const updateTime = () => {
    const now = new Date()
    hours.value = now.getHours()
    minutes.value = now.getMinutes()
    seconds.value = now.getSeconds()

    day_of_week.value = now.getDay()
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

    var day_name = ''
    var month_name = ''

    switch (day_of_week.value) {
      case 0:
        day_name = 'Sunday'
        break
      case 1:
        day_name = 'Monday'
        break
      case 2:
        day_name = 'Tuesday'
        break
      case 3:
        day_name = 'Wednesday'
        break
      case 4:
        day_name = 'Thursday'
        break
      case 5:
        day_name = 'Friday'
        break
      case 6:
        day_name = 'Saturday'
        break
      default:
      // leave empty
    }

    switch (month.value) {
      case 1:
        month_name = 'January'
        break
      case 2:
        month_name = 'February'
        break
      case 3:
        month_name = 'March'
        break
      case 4:
        month_name = 'April'
        break
      case 5:
        month_name = 'May'
        break
      case 6:
        month_name = 'June'
        break
      case 7:
        month_name = 'July'
        break
      case 8:
        month_name = 'August'
        break
      case 9:
        month_name = 'September'
        break
      case 10:
        month_name = 'October'
        break
      case 11:
        month_name = 'November'
        break
      case 12:
        month_name = 'December'
        break
      default:
      // leave empty
    }

    return `${day_name}, ${month_name} ${pad(day.value)}, ${year.value}`
  }

  const period = () => {
    return hours.value >= 12 ? 'PM' : 'AM'
  }

  return {
    hours,
    minutes,
    seconds,
    day_of_week,
    day,
    month,
    year,
    updateTime,
    formattedHours,
    period,
    formattedDate
  }
})
