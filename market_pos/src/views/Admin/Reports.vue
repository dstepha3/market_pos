<script setup>

const page = 'reports'
const page_lvl = 'lvl2'

//* *********************************** *//

import { onMounted } from 'vue'
import Header from '@/components/header/MainHeader.vue'
import Tile from '@/components/dashboard/tile.vue'

import { useStoreStateStore } from '@/stores/store_state'

const store_state = useStoreStateStore()

onMounted(() => {
  if (store_state){
   store_state.setCurrentView(page)
   store_state.setCurrentPageLvl(page_lvl)
  }
})

</script>

<template>
  <main>
    <Header />

    <div class="body">
      <div class="container">
        <div class="dash-grid">
          <RouterLink class="dash-tile" to="cash-register">
            <Tile title="Payroll" icon_key="money-check-dollar" />
          </RouterLink>
          <RouterLink class="dash-tile" to="order">
            <Tile title="Orders" icon_key="receipt" />
          </RouterLink>
          <RouterLink class="dash-tile" to="inventory">
            <Tile title="Inventory" icon_key="truck-ramp-box" />
          </RouterLink>

          <RouterLink class="dash-tile" to="staff">
            <Tile title="Day in Detail" icon_key="calendar-day" />
          </RouterLink>
          <RouterLink class="dash-tile" to="reports">
            <Tile title="Sales" icon_key="file-invoice-dollar" />
          </RouterLink>
          <RouterLink class="dash-tile" to="/reports/store-state">
            <Tile title="Store State" icon_key="chart-pie" />
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
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 1;
}
.dash-tile[href='/reports/store-state']{
  background-color: rgba(128, 0, 0,0.9);
}
.dash-tile[href='/reports/store-state']:hover{
  background-color: var(--color-red-light);
}
.dash-tile[href='/reports/store-state'].active{
  background-color: rgba(0, 128, 0,0.9);
}
.dash-tile[href='/reports/store-state'].active:hover{
  background-color: var(--color-green-light);
}
</style>
