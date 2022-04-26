import { defineStore } from 'pinia'

export const useClicker = defineStore('clicker', {
  // Default state / config
  state: () => {
    return {
      balance: 0,
      factoryPriceMultiplier: 1.05,
      factories: {
        partyPopper: {
          id: 'partyPopper',
          name: 'Party Popper',
          emoji: '🎉',
          basePrice: 10,
          confettiPerSecond: .25,
          owned: 0,
        },
        balloon: {
          id: 'balloon',
          name: 'Balloon',
          emoji: '🎈',
          basePrice: 100,
          confettiPerSecond: 2.5,
          owned: 0
        },
      }
    }
  },
  getters: {
    factoryPrice: (state) => (factoryID) => {
      // factoryPrice = basePrice * (factoryPriceMultiplier ** owned)
      return state.factories[factoryID].basePrice * (state.factoryPriceMultiplier ** state.factories[factoryID].owned)
    },
    factoryConfettiPerSecond: (state) => (factoryID) => {
      // factoryConfettiPerSecond = confettiPerSecond * owned
      return state.factories[factoryID].confettiPerSecond * state.factories[factoryID].owned
    },
  }
})