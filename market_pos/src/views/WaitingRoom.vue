<script setup>
import { onMounted } from 'vue'

import Header from '../components/header/MainHeader.vue'
import Time from '../components/timeclock/TimeBlock.vue'
import ButtonBlock from '../components/timeclock/ButtonBlock.vue'
import MessageBlock from '../components/timeclock/MessageBlock.vue'
import ActivityBlock from '../components/timeclock/ActivityBlock.vue'
import MessageModal from '../components/timeclock/MessageModal.vue'

import { useStoreInfoStore } from '@/stores/store'
import { useMessageStore } from '@/stores/message'

const store = useStoreInfoStore()
const { messages, addMessage } = useMessageStore()

function addNewMessage() {
  addMessage(
    'Guys &mdash; whoever keeps stealing my standwich is going to die.',
    new Date(),
    'Jessica Hartzell',
    0
  )
  addMessage('Thanks for chilling', new Date(), 'Daniel Stephan', 1)
  addMessage(
    '<span class="message-heading">Uniform Time!</span> Click <a target="_blank" href="https://google.com/">HERE</a> to submit your order. Due Oct 31',
    new Date(),
    'Daniel Stephan',
    0
  )
}

onMounted(() => {
  addNewMessage()
})
</script>

<template>
  <main>
    <Header current_page="waiting_room" />

    <div class="body">
      <div class="container">
        <div class="two-col-entry-layout">
          <div class="left-col">
            <Time :store_name="store.name" />
            <MessageBlock :messages="messages" />
          </div>
          <div class="right-col">
            <ButtonBlock />
            <ActivityBlock />
          </div>
        </div>
      </div>
    </div>

    <MessageModal />
    <div id="modalOverlay"></div>
  </main>
</template>
