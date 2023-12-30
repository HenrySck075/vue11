<!--This is not in the guideline but it's needed more than 2 times so-->

<template>
  <div>
    <span v-html="s" id="fluent-icon" v-if="icon"></span>
  </div>
</template>

<style>
  [data-theme=dark] #fluent-icon {
    filter: invert(100%) sepia(91%) saturate(38%) hue-rotate(321deg) brightness(110%) contrast(110%);
  }
  
  .empty {
    color: transparent
  }
</style>

<script setup>
  const {icon, empty, size} = defineProps({'icon':{default: ''},'empty':{default: false},size:{default:20}})
  const s=icon?await fetch("http://cdn.jsdelivr.net/npm/@fluentui/svg-icons/icons/"+icon.replace(/[A-Z]/g, s=>`_${s.toLowerCase()}`)+"_"+size+"_regular.svg").then(v=>v.blob()).then(v=>v.text()):null
</script>
