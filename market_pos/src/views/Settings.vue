<script setup>
import Header from '../components/header/MainHeader.vue'
import Tile from '../components/dashboard/tile.vue'
</script>

<template>
  <main>
    <Header current_page="cash_register" page_lvl="lvl2" />

    <div class="body">
      <div class="container">Settings</div>
    </div>
  </main>
</template>

<style scoped>
.body .container {
  min-height: 640px;
  max-width: 980px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
