<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useDateAndTimeStore } from '@/stores/date_and_time'

const dateAndTimeStore = useDateAndTimeStore()

const formattedTime = computed(() => {
  const pad = (num) => num.toString().padStart(2, '0')
  return `${dateAndTimeStore.formattedHours()}<span style="padding-bottom:15px;">:</span>${pad(dateAndTimeStore.minutes)}<span style="padding-bottom:15px;">:</span>${pad(dateAndTimeStore.seconds)}`
})

formattedTime.value = formattedTime

defineProps({
  store_name: {
    type: String,
    required: false
  }
})

let timer

onMounted(() => {
  timer = setInterval(dateAndTimeStore.updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div id="time-banner">
    <div class="container">
      <div class="timeclock_time">
        <span class="time-container" v-html:="formattedTime"></span> {{ dateAndTimeStore.period() }}    
      </div>
      <div v-if="store_name" class="store-name">{{ store_name }}</div>
    </div>
  </div>
</template>

<style scoped>
#time-banner{
  width: 100%;
  padding-bottom: 20px;
  margin: 0 0 40px;
}
.timeclock_time{
  font-size: 62px;
  line-height: 1.2;
  border-bottom: 2.5px solid #0d0d0d;
  color: #efefef;
  text-align: center;
}
.container{
  width: 100%;

  background-color: rgba(255, 255, 255, 0.1);
  border: 3px solid #0d0d0d;
  border-radius: 10px;
  padding: 20px 30px 30px;
}
.time-container{
  display: inline-flex;
  min-width: 340px;
  margin-right: 0px;
  align-items: center;
  column-gap: 20px;
}
.store-name{
  text-align: center;
  color: #efefef;
  font: 400 24px/26px Times;
  margin-top: 20px;
}
</style>
