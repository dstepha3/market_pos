import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', () => {
  const orderNumber = ref(0);
  const products = ref([
    { sku: 1, name: 'Item 1', price: 9.99, tax_price: 0, quantity: 1, taxed: false, productGrandTotal: 9.99 },
    { sku: 2, name: 'Item 2', price: 9.99, tax_price: 0, quantity: 2, taxed: false, productGrandTotal: 19.98 },
    { sku: 3, name: 'Item 3', price: 9.99, tax_price: 0, quantity: 1, taxed: false, productGrandTotal: 9.99 },
    { sku: 4, name: 'Item 4', price: 9.99, tax_price: 0, quantity: 1, taxed: false, productGrandTotal: 9.99 },
    { sku: 6, name: 'Item 6', price: 9.99, tax_price: 0.99, quantity: 1, taxed: true, productGrandTotal: 10.98 },
    { sku: 7, name: 'Item 7', price: 9.99, tax_price: 0, quantity: 1, taxed: false, productGrandTotal: 9.99 }
  ]);

  const discount = ref(0)
  const paymentMethod = ref('')
  const orderPrePaid = ref(true)
  const orderPaid = ref(false)
  const orderOpen = ref(true)
  const orderName = ref('')

  const subtotal = computed(() => {
    return products.value.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  });

  const tax = computed(() => {
    return products.value.reduce((total, product) => {
      return total + product.tax_price * product.quantity;
    }, 0);
  });

  const grandTotal = computed(() => {
    return subtotal.value + tax.value - discount.value;
  });

  return {
    orderNumber,
    products,
    subtotal,
    tax,
    discount,
    grandTotal,
    paymentMethod,
    orderPrePaid,
    orderPaid,
    orderName
  };
});
