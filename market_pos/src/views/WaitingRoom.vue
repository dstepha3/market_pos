<script setup>
import Header from '../components/header/MainHeader.vue'
import Time from '../components/timeclock/TimeBlock.vue'
import WaitingRoomBlock from '../components/timeclock/WaitingRoomBlock.vue'
import { useUserStore } from '@/stores/user'
import { useStoreInfoStore } from '@/stores/store'

const store = useStoreInfoStore()
const user = useUserStore()

</script>

<template>
  <main>
    <Header :username="user.username" :user_clocked_in='user.user_clocked_in' current_page="waiting_room" />

    <div class="body">
      <div class="container">
        <div class="waiting-room">
          <Time :store_name="store.name" />
          <WaitingRoomBlock />
        </div>
      </div>
    </div>
    
  </main>
</template>

<style scoped>
.waiting-room{
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
