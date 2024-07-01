<script setup>
import Header from '../components/header/MainHeader.vue'
</script>

<template>
  <main>
    <Header
      current_page="dashboard"
    />

    <div class="body">
      <div class="container">
        <div class="dash-grid">
          <RouterLink class="dash-tile" to="cash-register">Cash Register</RouterLink>
          <RouterLink class="dash-tile" to="order">Order</RouterLink>
          <RouterLink class="dash-tile" to="inventory">Inventory</RouterLink>

          <RouterLink class="dash-tile" to="staff">Staff</RouterLink>
          <RouterLink class="dash-tile" to="reports">Reports</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .body .container{
    max-width: 980px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dash-grid{
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 40px;
    row-gap: 40px;
  }
  .dash-tile{
    display: block;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.55);
    color: #0d0d0d;
    opacity: 0.8;
    width: 100%;
    min-height: 300px;
    max-width: 300px;
    border: 3px solid #0d0d0d;
    border-radius: 10px;
    transition: 0.3s all;
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.35);


    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dash-tile:hover{
    background-color: rgba(255, 255, 255, 0.7);
    opacity: 1;
  }
</style>
