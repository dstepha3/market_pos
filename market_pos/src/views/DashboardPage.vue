<script setup>
import Header from '../components/header/MainHeader.vue'
import Tile from '../components/dashboard/tile.vue'
</script>

<template>
  <main>
    <Header current_page="dashboard" page_lvl="lvl1" />

    <div class="body">
      <div class="container">
        <div class="dash-grid">
          <RouterLink class="dash-tile" to="cash-register">
            <Tile title="Cash Register" icon_key="cash-register" />
          </RouterLink>
          <RouterLink class="dash-tile" to="order">
            <Tile title="Order" icon_key="bell-concierge" />
          </RouterLink>
          <RouterLink class="dash-tile" to="inventory">
            <Tile title="Inventory" icon_key="truck" />
          </RouterLink>

          <RouterLink class="dash-tile" to="staff">
            <Tile title="Staff" icon_key="users" />
          </RouterLink>
          <RouterLink class="dash-tile" to="reports">
            <Tile title="Reports" icon_key="file-invoice-dollar" />
          </RouterLink>
        </div>
      </div>
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
.dash-grid {
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 40px;
  row-gap: 40px;
}
.dash-tile {
  display: block;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.55);
  color: var(--color-black);
  opacity: 0.8;
  width: 100%;
  min-height: 300px;
  max-width: 300px;
  border: 3px solid var(--color-black);
  border-radius: 10px;
  transition: 0.3s all;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.35);

  display: flex;
  justify-content: center;
  align-items: center;
}
.dash-tile:hover {
  background-color: rgba(255, 255, 255, 0.7);
  opacity: 1;
}
</style>
