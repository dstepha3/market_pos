<script setup>

const page = 'front_door'
const page_lvl = ''

//* *********************************** *//

import { onMounted } from 'vue'
import Header from '../components/header/MainHeader.vue'
import Time from '../components/timeclock/TimeBlock.vue'
import LoginForm from '../components/timeclock/FormBlock.vue'
import { useStoreInfoStore } from '@/stores/store'
import { useStoreStateStore } from '@/stores/store_state'

const store_state = useStoreStateStore()
const store = useStoreInfoStore()

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
      <div class="container">
        <div class="two-col-entry-layout">
          <div class="left-col">
            <Time :store_name="store.name" />
          </div>
          <div class="right-col">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
