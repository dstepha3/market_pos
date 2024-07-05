
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';


export const useStoreStateStore = defineStore('storeState', () => {

  const store_state = ref(false);

  const getStoreState = computed(() => {
    return store_state.value ? 'open' : 'closed';
  })

  const toggleStoreState = () => {
    if (store_state.value){
       store_state.value = false 
    } else {
       store_state.value = true;
    }
  }

  return { 
    store_state,
    getStoreState,
    toggleStoreState
  };
});
