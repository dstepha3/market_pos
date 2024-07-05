<script setup>
import { ref } from 'vue'
import { useStoreStateStore } from '@/stores/store_state'
import { useFunnelStateStore } from '@/stores/funnel_state'

const store_state = useStoreStateStore()
const funnel_state = useFunnelStateStore()
const temp_tiles = ref(['meat', 'cheese', 'deli', 'trays', 'cookies', '6in pies', '9in pies', 'shelf'])

</script>

<template>
    <div id="order">
        <div class="product-grid" :class="[funnel_state.getScannerState, store_state.getStoreState]">
            <div class="grid-item"        
              :class="{ }" v-for="(tile, index) in temp_tiles" :key="index">
              {{ tile }}
            </div>
        </div>
    </div>
</template>

<style scoped>
    .product-display #order{
        min-height: 100%;
        border-right: 1px solid var(--color-black);
    }
    .product-grid{
        padding: 60px 25px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
        column-gap: 25px;
        row-gap: 25px;
    }
    .product-grid.closed{
        pointer-events: none;
        cursor: default;
        filter: grayscale(1);
    }
    .grid-item{
        background-color: var(--color-red);
        text-transform: uppercase;
        text-align: center;
        width: 100%;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-text-light);
        font-weight: 800;
        font-size: 18px;
        max-height: 100px;
        opacity: 0.9;
        transition: 0.2s all;
        cursor: pointer;
    }
    .grid-item:hover{
        opacity: 1;
        box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.2);
        color:rgba(255, 255, 255, 1);
    }
</style>
