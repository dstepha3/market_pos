<script setup>
import Header from '../components/header/MainHeader.vue'
import { useUserStore } from '@/stores/user'

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
