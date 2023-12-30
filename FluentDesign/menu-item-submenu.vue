<template>
  <fluent-menu v-bind="menuProps" placement="right" :items="items" id="menuitem-submenu">
    <fluent-menu-item v-bind="attr" :icon="icon" :hasIcons="hasIcons">
      <slot></slot>
      <fluent-icon icon="chevron_right" class="submenu-icon"></fluent-icon>
    </fluent-menu-item>
    <template v-slot:menuitem>
      <slot name="menuitem"></slot>
    </template>
  </fluent-menu>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

  defineOptions({
    inheritAttrs: false
  })
  const {icon, hasIcons, menuProps,items} = defineProps({
    icon: {default: ""},
    hasIcons: {default: false},
    "items": {type: Array<{text: string, icon?: string, type?: "string"}>, default: []},
    menuProps: {default: {}}
  })
  const attr = useAttrs()
</script>
<style>
  .submenu-icon {
    padding: 2px;
    margin-top: 4px;
    font-size: 20px;
    line-height: 0;
    align-items: center;
    display: inline;
    justify-content: center;
    height: 25px;
  }
</style>
