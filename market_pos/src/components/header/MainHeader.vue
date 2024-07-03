<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useDateAndTimeStore } from '@/stores/date_and_time'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
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
          <RouterLink v-if="current_page == 'dashboard'" title="Timeclock" to="timeclock"
            ><font-awesome-icon icon="fa-solid fa-clock-rotate-left" /> Timeclock</RouterLink
          >
          <RouterLink
            v-if="current_page != 'dashboard' && user.user_clocked_in == true && user.user_on_break == false"
            to="dashboard"
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
          <RouterLink to="employee"><span class="username">{{ user.username }}</span></RouterLink>
          <RouterLink v-if="user.userLevel" to="settings" class="settingsBtn" title="System Settings"><font-awesome-icon icon="fa-sold fa-gear" /></RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 10px 0;
  background-color: var(--color-black);;
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
  color: var(--color-text-light);
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

.header-inner svg{
  font-size: 15px;
  line-height: 16px;
}
a{
  color: var(--color-text-light);
  text-decoration: none;
}
a:hover {
  color: #fff !important;
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
}
</style>
