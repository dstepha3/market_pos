import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useStoreStateStore = defineStore('store', () => {
  const store_state = ref(true);
  const order_state = ref('ready');
  const order_edit = ref(false);

  const currentOrder = ref({
    orderNumber: 3,
    orderProducts: [
      { sku: 1, name: 'Item 1', price: 9.99, tax_price: 0, quantity: '1', taxed: false, productGrandTotal: '9.99' },
      { sku: 2, name: 'Item 2', price: 9.99, tax_price: 0, quantity: '2', taxed: false, productGrandTotal: '9.99' },
      { sku: 3, name: 'Item 3', price: 9.99, tax_price: 0, quantity: '1', taxed: false, productGrandTotal: '9.99' },
      { sku: 4, name: 'Item 4', price: 9.99, tax_price: 0, quantity: '1', taxed: false, productGrandTotal: '9.99' },
      { sku: 6, name: 'Item 6', price: 9.99, tax_price: 0.99, quantity: '1', taxed: true, productGrandTotal: '10.98' },
      { sku: 7, name: 'Item 7', price: 9.99, tax_price: 0, quantity: '1', taxed: false, productGrandTotal: '9.99' }
    ],
    orderSubtotal: 0.00,
    orderTax: 0.00,
    orderDiscount: 0.00,
    orderGrandTotal: 0.00,
    paymentMethod: '',
    orderPaid: false
  });

  const mode = ref('');

  const getStoreState = () => {
     return store_state ? 'open' : 'close'
  }

  const toggleStoreState = () => {

  }

  return { 
    store_state, 
    order_state, 
    order_edit, 
    currentOrder, 
    mode, 
    
    getStoreState,
    toggleStoreState 
  };
});
