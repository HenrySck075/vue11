<template>
  <fluent-provider :theme="theme" style="position: fixed; left: 0; top: 0;width: 100vw; height: 100vh" :style="{backgroundColor:bg}">
    <button @click="c" style="color:black">Toggle dark theme</button>
    <div style="width: 100%; height: 100%">
      <fluent-slider></fluent-slider>
      <fluent-menu-list :items="[{text: 'insert cash', icon:'cellular_3g'}, {text:'or select'}, {text: 'payment type'}]"></fluent-menu-list>
      <fluent-menu >
        <fluent-button>Click now</fluent-button>
        <template v-slot:menuitem>
          <fluent-menu-item>insert cash</fluent-menu-item>
          <fluent-menu-item icon="search">or select</fluent-menu-item>
          <fluent-menu-item-submenu :hasIcons="true" :items="[{text:'check steam'}]">payment type</fluent-menu-item-submenu>
        </template>
      </fluent-menu>
    </div>
  </fluent-provider>
</template>
<script setup>
  const theme = ref("light")
  const bg = ref("white")
  function c() {
    theme.value = (theme.value == "light") ? "dark" : "light"
    bg.value = (theme.value == "light") ? "white" : "rgb(31,31,31)"
  }

  useHead({title:"Vue11 Playground"})
</script>
