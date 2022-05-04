// We import `defineStore`
import { defineStore } from 'pinia'

// We use it to define a `clicker` store
export const useClicker = defineStore('clicker', {
  // Default state / config
  state: () => {
    // We init state with a `balance` property starting at 0
    return {
      balance: 0
    }
  }
})