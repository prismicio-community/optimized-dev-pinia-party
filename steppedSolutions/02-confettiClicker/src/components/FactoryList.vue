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
import FactoryListItem from './FactoryListItem.vue'

const factories = []
</script>