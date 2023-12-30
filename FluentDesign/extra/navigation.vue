<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
  import { useSlots } from 'vue';

  const pages = computed(()=>useSlots().default().)
  const s = useSlots()
</script>
