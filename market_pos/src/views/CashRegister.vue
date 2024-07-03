<script setup>
import Header from '../components/header/MainHeader.vue'
import Tile from '../components/dashboard/tile.vue'
</script>

<template>
  <main>
    <Header current_page="cash_register" page_lvl="lvl2" />

    <div class="body">
      <div class="container grid">
        <div class="cash-register product-display">
          Cash Register
        </div>
        <div class="cash-register sidebar">
          Sidebar
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  min-height: 100vh;
  max-width: 100%;
}
.container.grid{
  display: grid;
  grid-template-columns: 1fr 500px;
}
#app .body{
  padding: 0;
  background-image: unset;
}
</style>
