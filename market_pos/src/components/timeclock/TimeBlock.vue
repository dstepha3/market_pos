<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useDateAndTimeStore } from '@/stores/date_and_time'

const dateAndTimeStore = useDateAndTimeStore()

const formattedTime = computed(() => {
  const pad = (num) => num.toString().padStart(2, '0')
  return `${dateAndTimeStore.formattedHours()}<span style="padding-bottom:10px;">:</span>${pad(dateAndTimeStore.minutes)}<span style="padding-bottom:10px;">:</span>${pad(dateAndTimeStore.seconds)}`
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
  <div class="col-block">
    <div class="timeclock_time">
      <span class="time-container" v-html:="formattedTime"></span> {{ dateAndTimeStore.period() }}
    </div>
    <div v-if="store_name" class="store-name block-heading">{{ store_name }}</div>
  </div>
</template>

<style scoped>
.col-block {
  padding: 20px 40px 30px;
}
.timeclock_time {
  font-size: 62px;
  line-height: 1.2;
  border-bottom: 2.5px solid var(--color-black);
  padding-bottom: 15px;
  color: #efefef;
  text-align: center;
}
.time-container {
  display: inline-flex;
  min-width: 340px;
  margin-right: 0px;
  align-items: center;
  column-gap: 20px;
}
.store-name {
  text-align: center;
  margin-top: 20px;
  padding-bottom: 0 !important;
  border-bottom: unset !important;
}
</style>
