<script setup>

import { computed } from 'vue'
import { useStoreStateStore } from '@/stores/store_state'

const store_state = useStoreStateStore()

const storeState = store_state.getStoreState()
const orderState = store_state.order_state
const orderEditEnabled = store_state.order_edit
const orderInfo = store_state.currentOrder


const grandSubtotal = computed(() => {
    let total = 0
    orderInfo.orderProducts.forEach(product => {
        total = total + product.price
  });

  orderInfo.orderSubtotal = total
  return total.toFixed(2)
})

const grandTax = computed(() => {
    let total = 0
    orderInfo.orderProducts.forEach(product => {
        total = total + product.tax_price
  });

  orderInfo.orderTax = total
  return total
})

const grandTotal = computed(() => {
  let total = 0
  total = orderInfo.orderSubtotal + orderInfo.orderTax

  orderInfo.orderGrandTotal = total
  return total.toFixed(2)
})

defineProps({
    parent_view: {
    type: String,
    required: true
  }
})

function toggleStoreState(){
    store_state.toggleStoreState();
}

</script>

<template>
    <div id="cart" :class="parent_view">
        <div class="cart-header">
            <div class="order-number">Order # {{ orderInfo.orderNumber }}</div>
            <div class="options">
                <div id="storeState" :class="storeState">{{ storeState }}</div>
                <div id="orderState" :class="orderState">{{ orderState }}</div>
            </div>
        </div>
        <div class="cart-list">
            <div class="cart-item" v-for="(cart_item, index) in orderInfo.orderProducts" :key="index">
                <div class="item-left">
                    <div class="remove-btn" v-if="orderEditEnabled"><font-awesome-icon icon="fa-solid fa-circle-xmark" /></div>
                    <div class="item-details">
                        <div class="title">{{ cart_item.name }}</div>
                        <div class="sku"># {{ cart_item.sku }}</div>
                    </div>
                </div>
                <div class="item-right">
                    <div class="taxed" v-if="cart_item.taxed"><font-awesome-icon icon="fa-solid fa-x" /></div>
                    <div class="quantity-selector">
                        <div class="qty__selector-module-controls">
                            <!-- <button id="decrease" @click="decreaseItem(cart_item)">&minus;</button> -->
                            <input class="qtySelector" id="qtySelector" type="text" name="qtySelector" v-model="cart_item.quantity" placeholder="" readonly="readonly"/>
                            <!-- <button id="increase" @click="increaseItem(cart_item)">&plus;</button> -->
                        </div>
                    </div>
                    <div class="price-container">
                        <div class="price">${{ cart_item.price * cart_item.quantity }}</div>
                        <div class="tax-price" v-if="cart_item.taxed">+ ${{ cart_item.tax_price }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cart-footer">
            <div class="cart-summary">
                <div class="discount summary-item"><div class="summary-title">Discount:</div><div>${{ orderInfo.orderDiscount }}</div></div>
                <div class="subtotal summary-item"><div class="summary-title">Subtotal:</div><div>${{ grandSubtotal }}</div></div>
                <div class="tax summary-item"><div class="summary-title">Tax:</div><div>${{ grandTax }}</div></div>
                <div class="grandtotal summary-item"><div class="summary-title">Total:</div><div>${{ grandTotal }}</div></div>
            </div>
            <div class="btn-row">
                <div id="send-btn" class="btn"><span>Send</span></div>
                <div id="pay-btn" class="btn"><span>Pay</span></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#cart{
    color: var(--text-color-dark);
}
.cart-header{
    background-color: #888888;
    height: 59px;
    padding: 10px 25px;
    border-bottom: 1px solid var(--color-black);

    display: flex;
    align-items: center;
    justify-content: space-between;
}
.cart-header > div{
    flex-basis: 50%;
}
.options{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 15px;
}
#storeState{
    width: 100px;
    padding: 2px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    border: thick double #000;
    cursor: pointer;
}
#storeState.open{
    background-color: var(--color-blue-light);
    color: rgba(255,255,255,0.7);
}
#storeState.closed{
    background-color: var(--color-red-light);
}
#orderState{
    width: 150px;
    padding: 2px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    border: thick double #000;
}
#orderState.ready{
    background-color: var(--color-green-light);
}
#orderState.connecting{
    background-color: var(--color-black);
    border-color: var(--color-blue-light);
    color: rgba(255,255,255,0.7);
}
#orderState.error{
    background-color: var(--color-red-light);
}
#orderState.off{
    background-color: #888888;
    opacity: 0.3;
}
.opt{
    cursor: pointer;
}
.order-number{
    font-weight: 700;
}
.cart-list{
    padding: 5px 25px;
    height: 61vh;
    border-bottom: 1px solid var(--color-black);
    overflow-y: scroll;
}
.cart-item{
    padding: 20px 0;
    border-bottom: 0.5px solid var(--color-black);

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.item-left{
    display: flex;
    column-gap: 30px;
    align-items: center;
    width: 100%;
    flex-basis: 60%;
}
.item-right{
    display: flex;
    column-gap: 10px;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    flex-basis: 40%;
}
.remove-btn{
    max-width: 24px;
    width: 100%;
    cursor: pointer;
}
.remove-btn svg{
    padding-top: 4px;
    font-size: 28px;
}
.remove-btn:hover svg{
    color: var(--color-red-dark);
}
.title{
    font-weight: 700;
    font-size: 14px;
}
.sku{
    font-size: 12px;
}
.taxed svg{
    font-size: 12px;
    padding-bottom: 1px;
}
.price-container{
    text-align: right;
    min-width: 40px;
}
.price{
    font-size: 14px;
}
.tax-price{
    font-size: 10px;
}
.cart-list > :last-child{
    border-bottom: none;
}
.qty__selector-module-controls {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.qty__selector-module-controls > * {
  height: 20px;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
  color: #333;
  border: 0;
  background-color: #fff;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
  outline: none;
  border-radius: 0;
}
.qty__selector-module-controls > *:hover {
  cursor: pointer;
  transform: scale(1.1);
}
.qty__selector-module-controls button {
  width: 20px;
  height: 20px;
  font-size: 14px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
  padding-bottom: 3px;
}
.qty__selector-module-controls button:hover {
  color: #fff;
}
#increase:hover{
    background-color: var(--color-blue-light);
}
#decrease:hover{
    background-color: var(--color-red-light);
}
.qty__selector-module-controls .qtySelector {
  height: 20px;
  width: 40px;
  padding: 6px;
  margin: 0 10px 0 10px;
  text-align: center;
  font-size: 12px;
  opacity: 0.7;
  transition: all 0.7s ease-in-out;
  user-select: none;
}
.qty__selector-module-controls .qtySelector:hover {
  background-color: #e3f2fd;
}
.cart-footer{
    padding: 19px 25px 25px;
}
.cart-footer .btn-row{
    display: flex;
    column-gap: 25px;
    margin-top: 25px;
    justify-content: space-between;
}
.cart-footer .btn span{
    height: 100%;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 800;
    cursor: pointer;
}
.cart-footer .btn:hover{
    box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.1);
}
.cart-footer #send-btn{
    display: block;
    width: 100%;
    background-color: var(--color-green-light);
    border: 1px solid var(--color-green-dark);
}
.cart-footer #pay-btn{
    display: block;
    width: 100%;
    background-color: var(--color-green-dark);
    border: 1px solid var(--color-black);
    color: #fff;
}
.cart-summary{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 25px;
}
.cart-footer .summary-item{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 6px;
}
.summary-title{
    font-weight: 700;
}
.grandtotal *{
    font-weight: 700;
}
.grandtotal{
    position: relative;
    background-color: yellow;
    font-size: 14px !important;
    border: 0.5px solid var(--color-black);
    color: #000 !important;

}
</style>
