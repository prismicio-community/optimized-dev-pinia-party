<template>
  <ul class="factoryList" aria-live="polite">
    <FactoryListItem
      v-for="factory in factories"
      :key="factory.id"
      :factory="factory"
    />
  </ul>
</template>

<script setup>
import { computed } from 'vue'

import { useClicker } from '../stores/clicker'

import FactoryListItem from './FactoryListItem.vue'

const clicker = useClicker()

const factories = computed(() => Object.values(clicker.factories))
</script>