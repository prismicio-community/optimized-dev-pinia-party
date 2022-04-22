<template>
  <main class="app">
    <PartyArea />
    <FactoryList />
  </main>
</template>

<script setup>
import { onUnmounted } from 'vue'

import { useClicker } from './stores/clicker'

import PartyArea from './components/PartyArea.vue'
import FactoryList from './components/FactoryList.vue'

const clicker = useClicker()

// Tick every tick duration
let timeout
const run = (durationMs = clicker.tickDurationMs) => {
  timeout = setTimeout(() => {
    clicker.tick()
    run()
  }, durationMs)
}
run()

// Clear timeout on unmount
onUnmounted(() => {
  clearTimeout(timeout)
})
</script>
