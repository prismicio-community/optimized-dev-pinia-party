<template>
  <li class="factoryListItem">
    <button
      class="nes-container is-rounded"
    >
      <figure class="emoji">{{ factory.emoji }}</figure>
      <div class="info">
        <strong>{{ factory.name }}</strong>
        <small>
          <span>✨</span><!-- TODO:PRICE -->
        </small>
        <small>
          - <!-- TODO:CPS -->cps
        </small>
      </div>
      <span class="owned">{{ factory.owned }}</span>
    </button>
  </li>
</template>

<script setup>
defineProps({ factory: { type: Object, required: true } })
</script>