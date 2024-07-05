
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';


export const useStoreStateStore = defineStore('storeState', () => {

  const store_state = ref(false);
  const current_view = ref('')
  const current_page_lvl = ref('')

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

  const setCurrentView = (view) => {
    current_view.value = view
  }

  const setCurrentPageLvl = (val) => {
    current_page_lvl.value = val
  }

  return { 
    store_state,
    current_view,
    getStoreState,
    current_page_lvl,
    toggleStoreState,
    setCurrentView,
    setCurrentPageLvl
  };
});
