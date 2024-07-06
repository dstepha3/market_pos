<script setup>

const page = 'truck-import'
const page_lvl = 'lvl4'

//* *********************************** *//

import { onMounted } from 'vue'
import Header from '@/components/header/MainHeader.vue'
import { useStoreStateStore } from '@/stores/store_state'

const store_state = useStoreStateStore()

onMounted(() => {
  if (store_state){
   store_state.setCurrentView(page)
   store_state.setCurrentPageLvl(page_lvl)
  }
})

</script>

<template>
  <main>
    <Header />

    <div class="body">
      <div class="container">Truck Import</div>
    </div>
  </main>
</template>

<style scoped>
.body .container {
  min-height: 640px;
  max-width: 980px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
