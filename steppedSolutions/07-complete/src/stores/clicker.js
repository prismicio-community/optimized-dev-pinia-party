import { defineStore } from 'pinia'

const formatNumber = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short'
}).format

export const useClicker = defineStore('clicker', {
  // Default state / config
  state: () => {
    return {
      balance: 0,
      tickDurationMs: 250,
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
        firework: {
          id: 'firework',
          name: 'Firework',
          emoji: '🎆',
          basePrice: 1000,
          confettiPerSecond: 25,
          owned: 0
        },
        carouselHorse: {
          id: 'carouselHorse',
          name: 'Carousel Horse',
          emoji: '🎠',
          basePrice: 10000,
          confettiPerSecond: 250,
          owned: 0
        },
        bouncyCastle: {
          id: 'bouncyCastle',
          name: 'Bouncy Castle',
          emoji: '🏰',
          basePrice: 100000,
          confettiPerSecond: 2500,
          owned: 0
        },
        circus: {
          id: 'circus',
          name: 'Circus',
          emoji: '🎪',
          basePrice: 1000000,
          confettiPerSecond: 25000,
          owned: 0
        },
        dinosaur: {
          id: 'dinosaur',
          name: 'Dinosaur',
          emoji: '🦕',
          basePrice: 10000000,
          confettiPerSecond: 250000,
          owned: 0
        }
      }
    }
  },
  getters: {
    formattedBalance: state => {
      return formatNumber(state.balance.toFixed())
    },
    factoryPrice: (state) => (factoryID) => {
      // factoryPrice = basePrice * (factoryPriceMultiplier ** owned)
      return state.factories[factoryID].basePrice * (state.factoryPriceMultiplier ** state.factories[factoryID].owned)
    },
    formattedFactoryPrice() {
      return (factoryID) => formatNumber(this.factoryPrice(factoryID))
    },
    confettiPerSecond: (state) => {
      return Object.keys(state.factories).reduce((confettiPerSecond, factoryID) => {
        return confettiPerSecond + (state.factories[factoryID].confettiPerSecond * state.factories[factoryID].owned)
      }, 0)
    },
    formattedConfettiPerSecond() {
      return formatNumber(this.confettiPerSecond)
    },
    factoryConfettiPerSecond: (state) => (factoryID) => {
      // factoryConfettiPerSecond = confettiPerSecond * owned
      return state.factories[factoryID].confettiPerSecond * state.factories[factoryID].owned
    },
    formattedFactoryConfettiPerSecond() {
      return (factoryID) => formatNumber(this.factoryConfettiPerSecond(factoryID))
    },
    canBuyFactory(state) { 
      return (factoryID) => state.balance >= this.factoryPrice(factoryID)
    }
  },
  actions: {
    buyFactory(factoryID) {
      if (!this.canBuyFactory(factoryID)) {
        throw new Error('Not enough money')
      }

      this.balance -= this.factoryPrice(factoryID)
      this.factories[factoryID].owned++
    },
    click() {
      this.balance += 1 + (this.confettiPerSecond / 25)
    },
    tick() {
      this.balance += this.confettiPerSecond * this.tickDurationMs / 1000
    }
  }
})