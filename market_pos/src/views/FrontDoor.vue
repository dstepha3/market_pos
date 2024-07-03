<script setup>
import Header from '../components/header/MainHeader.vue'
import Time from '../components/timeclock/TimeBlock.vue'
import LoginForm from '../components/timeclock/FormBlock.vue'
import { useStoreInfoStore } from '@/stores/store'

const store = useStoreInfoStore()
</script>

<template>
  <main>
    <Header current_page="front_door" />

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
