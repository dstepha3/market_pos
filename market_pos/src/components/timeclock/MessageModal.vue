<script setup>
defineProps({
  messages: {
    type: Array,
    required: false
  }
})

function closeModal() {
  let modal = document.getElementById('messageModal')
  let overlay = document.getElementById('modalOverlay')

  if (modal) {
    let authorPlaceholder = messageModal.querySelector('.authorPlaceholder')
    let datePlaceholder = messageModal.querySelector('.datePlaceholder')
    let messagePlaceholder = messageModal.querySelector('.message-text')
    let messageCard = messageModal.querySelector('.message')

    if (overlay) {
      overlay.style.display = 'none'
      overlay.style.opacity = '0'
    }

    authorPlaceholder.innerHTML = ''
    datePlaceholder.innerHTML = ''
    messagePlaceholder.innerHTML = ''

    messageCard.classList.remove('important')
    modal.style.display = 'none'
  }
}
</script>

<template>
  <div id="messageModal">
    <div class="message">
      <div class="message-meta">
        <div class="message-meta-inner">
          <div class="posted-by">By <strong class="authorPlaceholder"></strong></div>
        </div>
        <div class="posted-on">Posted on <strong class="datePlaceholder"></strong></div>
      </div>
      <div class="message-text"></div>
    </div>
    <div class="closeContainer">
      <div @click="closeModal()" id="closeBtn"><font-awesome-icon icon="fa-solid fa-x" /></div>
    </div>
  </div>
</template>

<style scoped>
#messageModal {
  display: none;

  position: absolute;
  z-index: 99;
  width: 750px;
  top: 20%;
  left: 0;
  right: 0;
  margin: auto auto;
}
.message {
  font-size: 16px;
  line-height: 18px;
  color: #fff;
  border: 3px solid var(--color-black);
  border-right-width: 8px;
  border-left-width: 8px;
  border-bottom-width: 10px;
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
  padding: 20px;
  font-size: 14px;
  line-height: 16px;
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
.message.important .message-meta-inner {
  display: flex;
  align-items: center;
}
.message.important .message-meta-inner::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--%3E%3Cpath fill='%23ffffff' d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  content: '';
  height: 16px;
  width: 16px;
  display: inline-block;
  margin-right: 10px;
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
  background-color: rgba(255, 255, 255, 0.8);
  opacity: 1;
  overflow: hidden;
  border-radius: 6px;
  color: var(--color-black);
  padding: 20px;

  min-height: 150px;
}
.closeContainer {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#closeBtn {
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 999px;
  height: 50px;
  width: 50px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s all;

  color: rgba(255, 255, 255, 0.5);
  font-size: 24px;
  text-align: center;
}
#closeBtn:hover {
  border: 2px solid rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.35);
}
#important-icon-container {
  text-align: center;
  margin-top: -80px;
  margin-bottom: -80px;
  font-size: 150px;
  color: #fff;
}
</style>
