<script setup>
import Header from '../components/header/MainHeader.vue'
import Time from '../components/timeclock/TimeBlock.vue'
import ButtonBlock from '../components/timeclock/ButtonBlock.vue'
import MessageBlock from '../components/timeclock/MessageBlock.vue'
import ActivityBlock from '../components/timeclock/ActivityBlock.vue'
import { useUserStore } from '@/stores/user'
import { useStoreInfoStore } from '@/stores/store'

const store = useStoreInfoStore()
const user = useUserStore()

</script>

<template>
  <main>
    <Header :username="user.username" :user_clocked_in='user.user_clocked_in' :user_on_break='user.user_on_break' current_page="waiting_room" />

    <div class="body">
      <div class="container">
        <div class="two-col-entry-layout">
          <div class="left-col">
            <Time :store_name="store.name" />
            <MessageBlock messages="hi" />
          </div>
          <div class="right-col">
            <ButtonBlock :user_clocked_in='user.user_clocked_in' :user_on_break='user.user_on_break' />
            <ActivityBlock />
          </div>
        </div>
      </div>
    </div>
    
  </main>
</template>
