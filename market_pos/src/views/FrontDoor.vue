<script setup>
import Header from '../components/header/Header.vue'
import Time from '../components/header/parts/DateAndTime.vue'
import LoginForm from '../components/timeclock/Login.vue'
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
        <div class="login-page">
          <Time :store_name="store.name" />
          <LoginForm />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.login-page{
  display: flex;
  column-gap: 80px;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  /* background-color: rgba(255,255,255,0.4);
  padding: 60px 80px;
  border-radius: 20px; */
}
</style>