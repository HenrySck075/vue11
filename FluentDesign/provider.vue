<template>
  <div :data-theme="theme">
    <slot></slot>
    <div id="popovers" style="width:100vw;height:100vh;position:absolute;top:0;left:0"></div>
  </div>
</template>
<script>
  export default {
    props: {"theme": {default: "dark"}}
  }
</script>
<style>
  #popovers {pointer-events: none;}
  #popovers > * {pointer-events: all;}
</style>
