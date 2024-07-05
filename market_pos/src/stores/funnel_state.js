import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { useStoreStateStore } from '@/stores/store_state'

const store_state = useStoreStateStore()

export const useFunnelStateStore = defineStore('funnelState', () => {
  
  // barcode_scanner: Int
  // * Barcode Scanner Device Status
  // * * -1: 'error'
  // * *  0: 'off'
  // * *  1: 'connecting'
  // * *  2: 'ready'
  const barcode_scanner = ref(0)
  const manager_edit_mode = ref(false)

    const getScannerState = computed(() => {
        switch(barcode_scanner.value){
            case -1:
                return 'error'
            case 0:
                return 'off';
            case 1:
                return 'connecting'
            case 2:
                return 'ready'
            case 3:
                return 'editing'
            case 4:
                return 'cash register'
            default:
                return 'unknown error'; 
        }
    })

    const activateScanner = () => {
      if(store_state.store_state){
        barcode_scanner.value = 1
        setTimeout(() => barcode_scanner.value = 2, 1500);
      } else {
        deactivateScanner()
      }

    }
    const deactivateScanner = () => {
      manager_edit_mode.value = false 
      setTimeout(() => barcode_scanner.value = 0, 1000);
    }

    const toggleManagerLock = () => {
        if (manager_edit_mode.value){
           manager_edit_mode.value = false 
           activateScanner()
        } else {
           manager_edit_mode.value = true;
           enableEditScanner();
        }
      }

      const enableEditScanner = () => {
        barcode_scanner.value = 3
      }

      const enableViewOnlyScanner = () => {
        barcode_scanner.value = 4
      }

  return { 
    barcode_scanner,
    manager_edit_mode,
    getScannerState,
    activateScanner,
    deactivateScanner,
    enableEditScanner,
    toggleManagerLock
  };
});
