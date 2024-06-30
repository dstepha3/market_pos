<script setup>
import Header from '../components/header/MainHeader.vue'
import Time from '../components/timeclock/TimeBlock.vue'
import LoginForm from '../components/timeclock/FormBlock.vue'
import { useUserStore } from '@/stores/user'
import { useStoreInfoStore } from '@/stores/store'

const store = useStoreInfoStore()
const user = useUserStore()

</script>

<template>
  <main>
    <Header :username="user.username" :user_clocked_in='user.user_clocked_in' current_page="front_door" />

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