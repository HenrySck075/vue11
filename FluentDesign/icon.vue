<template>
  <div>
    <span v-html="glyphMap[icon.toLowerCase()]" class="FontIcon" v-if="!empty && icon">
    </span>
    <span class="FontIcon empty" v-else>&#xe769;</span>
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
  .empty {
    color: transparent
  }
</style>

<script setup>
  const {icon, empty} = defineProps({'icon':{default: ''},'empty':{default: false}})
  const glyphMap = useNuxtApp().$glyphMap
</script>
