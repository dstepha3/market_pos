<script setup>
defineProps({
  user_clocked_in: {
    type: Boolean,
    required: true
  },
  user_on_break: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div class="col-block">
    <div v-if="user_clocked_in == false" id="clockIn" class="btn">Clock In</div>
    <div v-else id="clockOut" class="btn" :class="{ disabled: user_on_break }">Clock Out</div>

    <div v-if="user_on_break == false" id="goBreak" class="btn">Break</div>
    <div v-else id="backBreak" class="btn">Return</div>
  </div>
</template>

<style scoped>
.col-block {
  padding: 60px;
}
.btn {
  display: block;
  padding: 20px;
  text-align: center;
  border: 6px solid #0d0d0d;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s all;
  font-size: 20px;
  color: #0d0d0d;
  text-transform: uppercase;
  font-weight: 700;

  margin: 0 0 20px;
}
#clockIn.btn {
  background-color: green;
}
#clockIn.btn:hover {
  background-color: darkgreen;
  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.2);
}
#clockOut.btn,
#backBreak.btn {
  background-color: red;
}
#clockOut.btn:hover,
#backBreak.btn:hover {
  background-color: maroon;
  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.2);
}
#clockOut.btn.disabled {
  background-color: gray;
  color: #333;
  border-color: #333;
  opacity: 0.7;
  cursor: default;
  pointer-events: none;
}
#goBreak.btn {
  background-color: blue;
}
#goBreak.btn:hover {
  background-color: navy;
  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.2);
}
</style>
