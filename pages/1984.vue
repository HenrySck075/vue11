<template>
  <div :data-theme="theme" style="position: fixed; left: 0; top: 0;width: 100vw; height: 100vh" :style="{backgroundColor:bg}">
    <button @click="c" style="color:black">Toggle dark theme</button>
    <div style="width: 100%; height: 100%">
      <fluent-button>drren</fluent-button>
      <fluent-button appearance="primary">drren</fluent-button>
      <fluent-button appearance="outline">drren</fluent-button>
      <fluent-button appearance="subtle" icon-position="after" icon="wifi">drren</fluent-button>
      <fluent-button appearance="transparent" icon-position="before" icon="wifi">drren</fluent-button>
      <div style="height:48px"></div>
      <fluent-button icon-position="after" icon="calendar">Icon before label</fluent-button>
      <fluent-button icon-position="before" icon="calendar">Icon after label</fluent-button>
      <fluent-button icon="calendar"></fluent-button>
    </div>
  </div>
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
