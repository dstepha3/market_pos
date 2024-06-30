<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useDateAndTimeStore } from '@/stores/date_and_time'

const dateAndTimeStore = useDateAndTimeStore()

const formattedDate = computed(() => {
  return `${dateAndTimeStore.formattedDate()}`
})

formattedDate.value = formattedDate

const formattedTime = computed(() => {
  const pad = (num) => num.toString().padStart(2, '0')
  return `${dateAndTimeStore.formattedHours()}<span>:</span>${pad(dateAndTimeStore.minutes)}`
})

formattedTime.value = formattedTime

defineProps({
  username: {
    type: String,
    required: true
  },
  user_clocked_in: {
    type: Boolean,
    required: true
  },
  user_on_break: {
    type: Boolean,
    required: true
  },
  current_page: {
    type: String,
    required: true
  }
})

let timer

onMounted(() => {
  timer = setInterval(dateAndTimeStore.updateTime, 60000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <header>
    <div class="container">
      <div class="header-inner">
        <div id="return-btn" v-if="current_page != 'front_door'">
          <RouterLink
            v-if="current_page == 'waiting_room' || current_page == 'dashboard'"
            title="Exit"
            to="/"
            ><font-awesome-icon icon="fa-solid fa-right-from-bracket" /> Exit</RouterLink
          >
          <RouterLink v-if="current_page == 'dashboard'" title="Clock Out" to="/waiting_room"
            ><font-awesome-icon icon="fa-solid fa-clock-rotate-left" /> Clockout</RouterLink
          >
          <RouterLink
            v-if="current_page != 'dashboard' && user_clocked_in == true && user_on_break == false"
            to="/dashboard"
            ><font-awesome-icon icon="fa-solid fa-house" /> Dashboard</RouterLink
          >
        </div>
        <div class="date-container">
          <span class="date" v-html:="formattedDate"></span>
        </div>
        <div class="user-container" v-if="current_page != 'front_door'">
          <div v-if="current_page != 'waiting_room'" id="header-time">
            <font-awesome-icon icon="fa-solid fa-clock" />
            <span v-html:="formattedTime" class="time"></span> {{ dateAndTimeStore.period() }}
          </div>
          <span class="username">{{ username }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 10px 0;
  background-color: #0d0d0d;
  box-shadow: 5px 0px 8px 5px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 50;

  position: sticky;
  top: 0;
  width: 100%;
  min-height: 45px;
}
header .container {
  max-width: 1380px;
}
.header-inner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-inner > div {
  flex-basis: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#return-btn {
  justify-content: flex-start;
  column-gap: 50px;
}
#return-btn * {
  color: var(--color-text);
  text-decoration: none;
  transition: 0.3s all;

  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 12px;
  line-height: 16px;
}
#return-btn a {
  column-gap: 13px;
}

#return-btn #header-time svg,
#return-btn a svg {
  font-size: 15px;
  line-height: 16px;
}
#return-btn a:hover {
  color: #fff;
}
.header-inner .user-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 50px;
  font-size: 12px;
  line-height: 16px;
}
.header-inner .user-container * {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 10px;
}
.header-inner .user-container span.time {
  column-gap: 5px;
}
#header-time {
  min-width: 70px;
  max-width: 72px;
}
</style>
