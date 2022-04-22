import { defineStore } from 'pinia'

export const useClicker = defineStore('clicker', {
  // Default state / config
  state: () => {
    return {
      balance: 0,
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
  }
})