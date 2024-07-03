import { defineStore } from 'pinia'
import { ref } from 'vue'
import { MessageEntry } from '../models/MessageClass'

export const useMessageStore = defineStore('message', () => {
  const messages = ref([])

  function addMessage(message, date, author, level) {
    const newMessage = new MessageEntry(message, date, author, level)
    if (messages.value.length < 3) {
      messages.value.push(newMessage)
    }
  }

  return { messages, addMessage }
})
