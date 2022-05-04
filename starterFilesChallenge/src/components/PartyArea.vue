<template>
  <section class="partyArea">
    <!-- Party content -->
    <h1>Pinia's Party</h1>
    <!-- We display the balance from the state of our store -->
    <h2>{{ clicker.balance }} confetti</h2>
    <button>
      <div class="inner">✨</div>
    </button>
    <!-- Confetti canvas -->
    <canvas ref="canvas"></canvas>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Confetti from 'js-confetti'

// We import the `clicker` store
import { useClicker } from '../stores/clicker'

// We use it in our component
const clicker = useClicker()

// Setup confetti canvas
const canvas = ref(null)
let confetti = null
const addConfetti = (amount = 1) => {
  confetti?.addConfetti({
    emojis: ['✨'],
    emojiSize: 80,
    confettiNumber: amount
  })
}
onMounted(() => {
  confetti = new Confetti({
    canvas: canvas.value
  })
})
</script>