<template>
  <Window @close="$emit('close')" :width="300" :height="150">
    hello guys
  </Window>
</template>
<script>
export default {
  emits: ["close"],
}
</script>
