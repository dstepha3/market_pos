<script setup>
import Header from '../components/Header.vue'
import { useUserStore } from '@/stores/user'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
const user = useUserStore()
</script>

<template>
  <main>
    <Header :username="user.username" :user_clocked_in='user.user_clocked_in' current_page="dashboard" />

    <div class="body">
      <div class="container">
        dashboard
      </div>
    </div>
  </main>
</template>
