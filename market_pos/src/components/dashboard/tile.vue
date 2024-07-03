<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon_key: {
    type: String,
    required: false
  }
})

const fa_ico = computed(() => `fa-solid fa-${props.icon_key}`)
</script>

<template>
  <div class="tile-inner">
    <div class="icon-container">
      <font-awesome-icon :icon="fa_ico" />
    </div>
    <div class="tile-title">{{ props.title }}</div>
  </div>
</template>

<style scoped>
.tile-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.icon-container {
  height: 95px;
  width: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.icon-container svg {
  height: 100%;
  width: 100%;
}
.tile-title {
  font-size: 24px;
  font-weight: 800;
}
.icon-container .svg-inline--fa.fa-cash-register {
  width: 85%;
}
.icon-container .svg-inline--fa.fa-file-invoice-dollar {
  width: 70%;
}
</style>
