<script setup>
import Header from '../components/header/MainHeader.vue'
import ProductView from '../components/funnel/ProductDisplay.vue'
import ItemDisplay from '../components/funnel/Cart.vue'
</script>

<template>
  <main>
    <Header current_page="order" page_lvl="lvl2" />

    <div class="body">
      <div class="container grid">
        <div class="order product-display">
          <ProductView />
        </div>
        <div class="order sidebar">
          <ItemDisplay parent_view='order' />
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
.sidebar{
  background-color: var(--color-white);
  color: var(--color-text-dark);
}
#app .body{
  padding: 0;
  background-image: unset;
}
</style>
