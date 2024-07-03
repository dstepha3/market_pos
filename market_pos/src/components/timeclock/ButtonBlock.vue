<script setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
</script>

<template>
  <div class="col-block">
    <div v-if="user.user_clocked_in == false" @click="user.userClockIn()" id="clockIn" class="btn">
      Clock In
    </div>
    <div
      v-else
      id="clockOut"
      @click="user.userClockOut()"
      class="btn"
      :class="{ disabled: user.user_on_break }"
    >
      Clock Out
    </div>

    <div
      v-if="user.user_on_break == false"
      @click="user.userGoBreak()"
      id="goBreak"
      class="btn"
      :class="{ disabled: !user.user_clocked_in }"
    >
      Break
    </div>
    <div v-else id="backBreak" @click="user.userBackBreak()" class="btn">Return</div>
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
  border: 6px solid var(--color-black);
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s all;
  font-size: 20px;
  color: var(--color-black);
  text-transform: uppercase;
  font-weight: 700;

  margin: 0 0 20px;
}
#clockIn.btn {
  background-color: var(--color-green);
}
#clockIn.btn:hover {
  background-color: var(--color-green-dark);
  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.2);
}
#clockOut.btn,
#backBreak.btn {
  background-color: var(--color-red);
}
#clockOut.btn:hover,
#backBreak.btn:hover {
  background-color: var(--color-red-light);
  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.2);
}
#goBreak.btn {
  background-color: var(--color-blue);
}
#goBreak.btn:hover {
  background-color: var(--color-blue-light);
  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.2);
}
.btn.disabled {
  background-color: gray !important;
  color: #333;
  border-color: #333;
  opacity: 0.7;
  cursor: default;
  pointer-events: none;
}
</style>
