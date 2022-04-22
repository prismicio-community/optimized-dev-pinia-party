<template>
  <li class="factoryListItem">
    <button
      class="nes-container is-rounded"
      @click="clicker.buyFactory(factory.id)"
      :disabled="!clicker.canBuyFactory(factory.id)"
    >
      <figure class="emoji">{{ factory.emoji }}</figure>
      <div class="info">
        <strong>{{ factory.name }}</strong>
        <small>
          <span>✨</span>{{ clicker.factoryPrice(factory.id) }}
        </small>
        <small>
          - {{ clicker.factoryConfettiPerSecond(factory.id) }}cps
        </small>
      </div>
      <span class="owned">{{ factory.owned }}</span>
    </button>
  </li>
</template>

<script setup>
import { useClicker } from '../stores/clicker'

defineProps({ factory: { type: Object, required: true } })

const clicker = useClicker()
</script>