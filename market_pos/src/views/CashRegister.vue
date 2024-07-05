<script setup>

const page = 'cash-reg'
const page_lvl = 'lvl2'

//* *********************************** *//

import { onMounted } from 'vue'
import Header from '../components/header/MainHeader.vue'
import OrderView from '../components/funnel/OrderDisplay.vue'
import ItemDisplay from '../components/funnel/Cart.vue'

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
      <div class="container grid">
        <div class="cash-reg order-display">
          <OrderView /> 
        </div>
        <div class="cash-reg sidebar">
          <ItemDisplay />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  min-height: 95vh;
  max-width: 100%;
}
.container.grid{
  display: grid;
  grid-template-columns: 1fr 500px;
}
.sidebar{
  background-color: var(--color-white);
  color: var(--color-text-dark);
}
#app .body{
  padding: 0;
  background-image: unset;
}
</style>
