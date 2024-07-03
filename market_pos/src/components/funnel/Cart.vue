<script setup>

import { ref } from 'vue'

defineProps({
    parent_view: {
    type: String,
    required: true
  }
})

const items = ref([
  { id: 1, name: 'Item 1', price: '9.99', quantity: '0' },
  { id: 2, name: 'Item 2', price: '9.99', quantity: '0' },
  { id: 3, name: 'Item 3', price: '9.99', quantity: '0' },
  { id: 4, name: 'Item 4', price: '9.99', quantity: '0' },
  { id: 5, name: 'Item 5', price: '9.99', quantity: '0' },
  { id: 6, name: 'Item 6', price: '9.99', quantity: '0' },
  { id: 7, name: 'Item 7', price: '9.99', quantity: '0' }
])

function decreaseItem(x){
    x.quantity--;

    if(x.quantity == '0'){
        // removeItem();
    }
}

function increaseItem(x){
    x.quantity++;
}

</script>

<template>
    <div id="cart" :class="parent_view">
        <div class="cart-header">
            <div class="order-number">Order # 24</div>
            <div class="options">
                <div class="opt"><font-awesome-icon icon="fa-solid fa-lock" /></div>
                <div class="opt" style="display: none;"><font-awesome-icon icon="fa-solid fa-lock-open" /></div>
            </div>
        </div>
        <div class="cart-list">
            <div class="cart-item" v-for="(cart_item, index) in items" :key="index">
                <div class="item-left">
                    <div class="remove-btn"><font-awesome-icon icon="fa-solid fa-circle-xmark" /></div>
                    <div class="item-details">
                        <div class="title">{{ cart_item.name }}</div>
                        <div class="quantity-selector">
                            <div class="qty__selector-module-controls">
                                <button id="decrease" @click="decreaseItem(cart_item)">&minus;</button>
                                <input class="qtySelector" id="qtySelector" type="text" name="qtySelector" v-model="cart_item.quantity" placeholder="" readonly="readonly"/>
                                <button id="increase" @click="increaseItem(cart_item)">&plus;</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-right">
                    <div class="price">${{ cart_item.price }}</div>
                </div>
            </div>
        </div>
        <div class="cart-footer">
            <div class="cart-summary">
                <div class="discount summary-item"><div class="summary-title">Discount:</div><div>$0.00</div></div>
                <div class="subtotal summary-item"><div class="summary-title">Subtotal:</div><div>$12.00</div></div>
                <div class="tax summary-item"><div class="summary-title">Tax:</div><div>$0.99</div></div>
                <div class="grandtotal summary-item"><div class="summary-title">Total:</div><div>$12.99</div></div>
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
    font-size: 18px;
}
.price{
    font-size: 16px;
}
.cart-list > :last-child{
    border-bottom: none;
}
.quantity-selector{
    margin-top: 8px;
}
.qty__selector-module-controls {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.qty__selector-module-controls > * {
  height: 48px;
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
  width: 25px;
  height: 25px;
  font-size: 16px;
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
  height: 30px;
  width: 50px;
  padding: 6px;
  margin: 0 12px 0 12px;
  text-align: center;
  font-size: 16px;
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
    border: 0.5px solid var(--color-black);
    
}
</style>
