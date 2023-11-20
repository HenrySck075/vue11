<template>
  <div class="startmenupinned">
    {{label}}
  </div>
</template>

<script setup>
  const {label} = defineProps(["label"])
</script>

<style>
  .startmenupinned {
    width: 63px;
    height: 50px;
    margin: 4px;
    text-align: center;
    background-color: transparent;
    transition: background-color 0.2s ease-out;
    border-radius: 4px;
  }
  .startmenupinned:hover {
    background-color: rgba(0,0,0,0.1);
  }
  [data-theme=dark] .startmenupinned:hover {
    background-color: rgba(255,255,255,0.1);
  }
</style>
