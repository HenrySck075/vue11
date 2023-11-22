<template>
  <fluent-menu placement="right" v-bind="menuProps">
    <fluent-menu-item v-bind="attr" :icon="icon" :hasIcons="hasIcons">
      <slot></slot>
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
  const {icon, hasIcons, menuProps} = defineProps({
    icon: {default: ""},
    hasIcons: {default: false},
    menuProps: {default: {}}
  })
  const attr = useAttrs()
</script>
