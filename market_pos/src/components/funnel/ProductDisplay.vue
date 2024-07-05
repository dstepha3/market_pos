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
        <div class="order-header">
            <div class="header-left">
                <div id="coupons">Coupons</div>
                <div v-if="funnel_state.manager_edit_mode" class="manager-btns">
                    <div id="adjustOrder">Order Options</div>
                </div>
            </div>
            <div class="header-right">
                <!-- <div v-if="funnel_state.manager_edit_mode" id="orderLookUp">Order Options</div> -->
            </div>
        </div>
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
        padding: 25px 25px;
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
    .order-header{
        background-color: #888888;
        height: 59px;
        padding: 10px 25px;
        border-bottom: 1px solid var(--color-black);

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .order-header .header-left{
        display: flex;
        align-items: flex;
        column-gap: 15px;
    }
    #orderLookUp{
        width: 150px;
        padding: 2px;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        border: thick double #000;
        cursor: pointer;
        color: rgba(255,255,255,0.8);
        background-color: var(--color-black);
    }
    #orderLookUp:hover{
        background-color: rgba(0,0,0,0.6);
    }
    #adjustOrder{
        width: 150px;
        padding: 2px;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        border: thick double #000;
        cursor: pointer;
        color: rgba(255,255,255,0.8);
        background-color: var(--color-blue-dark);
    }
    #adjustOrder:hover{
        background-color: var(--color-blue-light);
    }
    #coupons{
        width: 150px;
        padding: 2px;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        border: thick double #000;
        cursor: pointer;
        color: rgba(255,255,255,0.8);
        background-color: var(--color-red-light);
    }
    #coupons:hover{
        background-color: var(--color-red-dark);
    }
</style>
