<script setup>
import { ref } from 'vue'
import { useStoreStateStore } from '@/stores/store_state'
import { useFunnelStateStore } from '@/stores/funnel_state'

const store_state = useStoreStateStore()
const funnel_state = useFunnelStateStore()
const temp_tiles = ref(['Order # ', 'Order # ', 'Order # ', 'Order # ', 'Order # ', 'Order # ', 'Order # ', 'Order # '])

</script>

<template>
    <div id="order" :class="[funnel_state.getScannerState, store_state.getStoreState]">
        <div class="order-header">
            <div id="orderLookUp">Lookup Order</div>
        </div>
        <div class="order-list">
            <div class="list-item" :class="{ }" v-for="(tile, index) in temp_tiles" :key="index">
                <div class="order-indent">
                    <div class="order-number">
                        {{ tile }}{{ index }}00
                    </div>
                    <div class="order-name">
                        Jane Doe
                    </div>
                </div>
                <div class="order-meta">
                    <div class="order-time">10:00 AM</div>
                    <div class="order-total">$9.99</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .order-display #order{
        min-height: 100%;
    }
    #order.closed{
        pointer-events: none;
        cursor: default;
        filter: grayscale(1);
        opacity: 0.4;
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
    #orderLookUp{
        width: 150px;
        padding: 2px;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        border: thick double #000;
        color: rgba(255,255,255,0.8);
        background-color: var(--color-red-dark);
    }
    #orderLookUp:hover{
        background-color: var(--color-red-light);
    }
    .order-list{
        border-top: 1px solid var(--color-black);
        border-right: 1px solid var(--color-black);
        padding: 15px 25px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        row-gap: 15px;
    }
    .order-list.closed{
        pointer-events: none;
        cursor: default;
        filter: grayscale(1);
    }
    .list-item{
        width: 100%;
        background-color: rgba(255, 255, 255, 0.4);
        border: 3px solid var(--color-black);
        border-radius: 20px;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--color-text-dark);
        font-size: 14px;
        max-height: 100px;
        opacity: 0.9;
        transition: 0.2s all;
        cursor: pointer;
    }

    .list-item.selected,
    .list-item:hover{
        background-color: rgba(255, 255, 255, 0.9);
    }
    .list-item > div{
        padding: 15px 25px;
    }
    .list-item .order-indent{
        max-width: 325px;
        width: 100%;
        background-color: rgba(255,255,255,0.2);
        background-color: var(--color-red-dark);
        color: #fff;
        border-right: 3px solid var(--color-black);
        transition: 0.1s all;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        font-size: 16px;
        line-height: 16px;
        display: flex;
    }
    .list-item .order-number{
        display: flex;
        align-items: center;
        font-weight: 700;
        text-transform: uppercase;
        max-width: 50%;
        width: 100%;
    }
    .order-name{
        font-size: 14px;
        line-height: 14px;
        text-align: right;
    }
    .list-item.selected .order-indent,
    .list-item:hover .order-indent{
        background-color: var(--color-red-light);
    }
    .order-meta{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .grid-item:hover{
        opacity: 1;
        box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.2);
        color:rgba(255, 255, 255, 1);
    }
    .order-time,
    .order-total{
        font-weight: 600;
    }
</style>
