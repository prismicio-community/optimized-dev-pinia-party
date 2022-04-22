<template>
  <li class="factoryListItem">
    <button
      class="nes-container is-rounded"
    >
      <figure class="emoji"><!-- TODO:EMOJI --></figure>
      <div class="info">
        <strong><!-- TODO:NAME --></strong>
        <small>
          <span>✨</span><!-- TODO:PRICE -->
        </small>
        <small>
          - <!-- TODO:CPS -->cps
        </small>
      </div>
      <span class="owned"><!-- TODO:OWNED --></span>
    </button>
  </li>
</template>

<script setup>
defineProps({ factory: { type: Object, required: true } })
</script>