<template>
  <div>
    <span v-html="glyphMap[icon.toLowerCase()]" class="FontIcon">
    </span>
  </div>
</template>

<style>
  @font-face {
    font-family: 'Segoe Fluent Icons';
    src: url('/_nuxt/assets/Fonts/SegoeIcons.ttf');
  }
  .FontIcon {
    font-family: 'Segoe Fluent Icons';
    pointer-events: none;
    font-weight: var(--fontWeightRegular);
    font-size:14px
  }
</style>

<script setup>
  const {icon} = defineProps(['icon'])
  const glyphMap = useNuxtApp().$glyphMap
</script>
