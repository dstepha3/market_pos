<script setup>

defineProps({
  messages: {
    type: String,
    required: false
  }
})

</script>

<template>
    <div class="col-block">
        <div class="block-heading">Messages</div>
        <div class="all-message-container">
            <div class="message" v-if="messages" v-html="messages"></div>
        </div>
    </div>
</template>

<style scoped>
  .col-block{
    padding: 60px 40px;
  }
  .message{
    border-bottom: 1px solid #0d0d0d;
    padding-bottom: 20px;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
  }
  .all-message-container > .message:last-child{
    border-bottom: unset;
    padding-bottom: unset;
    margin-bottom: unset;
  }
</style>