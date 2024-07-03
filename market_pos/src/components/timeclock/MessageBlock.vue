<script setup>
defineProps({
  messages: {
    type: Array,
    required: false
  }
})

function openModal(x) {
  let modal = document.getElementById('messageModal')
  let app = document.getElementById('app')
  let overlay = document.getElementById('modalOverlay')

  if (modal) {
    let authorPlaceholder = messageModal.querySelector('.authorPlaceholder')
    let datePlaceholder = messageModal.querySelector('.datePlaceholder')
    let messagePlaceholder = messageModal.querySelector('.message-text')
    let messageCard = messageModal.querySelector('.message')

    if (overlay) {
      overlay.style.display = 'block'
      overlay.style.opacity = '1'
    }

    authorPlaceholder.innerHTML = x.author
    datePlaceholder.innerHTML = x.date
    messagePlaceholder.innerHTML = x.message

    if (x.level == 1) {
      messageCard.classList.add('important')
    }

    modal.style.display = 'block'
  }
}
</script>

<template>
  <div class="col-block">
    <div class="block-heading">
      Messages
      <div><RouterLink to="/messages">See All Messages</RouterLink></div>
    </div>
    <div class="all-message-container">
      <div
        class="message"
        :class="{ important: message.level }"
        v-for="(message, index) in messages"
        :key="index"
      >
        <div class="message-meta">
          <div class="posted-by">By <strong v-html="message.author"></strong></div>
          <div class="posted-on">Posted on <strong v-html="message.date"></strong></div>
        </div>
        <div
          class="message-text"
          @click="openModal(message)"
          v-if="message.message"
          v-html="message.message"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-block {
  padding: 60px 40px;
}
.block-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.block-heading a {
  font-family: 'Open Sans', sans-serif;
  color: var(--color-text-light);
  font-size: 12px;
  text-decoration: none;
  transition: 0.3s all;
}
.block-heading a:hover {
  color: #fff;
}
.message {
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  border: 3px solid var(--color-black);
  border-right-width: 8px;
  border-left-width: 8px;
  border-bottom-width: 8px;
  border-radius: 6px;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.35);
  order: 2;
}
.message.important {
  border-color: #600000;
  order: 1 !important;
}
.message-meta {
  border-bottom: 1px solid var(--color-black);
  display: flex;
  justify-content: space-between;
  background-color: var(--color-black);
  padding: 10px;
  font-size: 12px;
  line-height: 14px;
  margin: 0;
  color: var(--color-text-light);

  font-weight: 700;
  opacity: 1;
}
.message.important .message-meta {
  border-color: #600000;
  background-color: #600000;
  color: var(--color-text-light);
  font-weight: 900;
  opacity: 1;
}
.message-meta strong {
  font-weight: 900;
  color: #fff;
  opacity: 0.85;
  display: inline-block;
  margin-left: 3px;
}
.message.important .message-meta strong {
  color: #fff;
  font-weight: 900;
}
.message-text {
  background-color: rgba(255, 255, 255, 0.7);
  opacity: 0.8;
  overflow: hidden;
  border-radius: 6px;
  color: var(--color-black);
  padding: 15px 10px;
  cursor: pointer;
  transition: 0.3s all;
  max-height: 47px;
}
.message.important .message-text {
  display: flex;
  align-items: center;
}
.message-text a {
  pointer-events: none;
}
.message.important .message-text::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--%3E%3Cpath fill='%0d0d0d0d' d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z'/%3E%3C/svg%3E");
  content: '';
  height: 16px;
  width: 16px;
  display: inline-block;
  margin-right: 10px;
}
.message-text:hover {
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 1;
}
.all-message-container {
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  max-height: 220px;
  overflow-y: scroll;
}
</style>
