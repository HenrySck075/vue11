<template>
  <fluent-popover v-bind="{...p}" custom>
    <slot v-bind="attr" ></slot>
    <template v-slot:surface> <!--with this implemented, there must be a div with id "menus" somewhere-->
      <fluent-menu-list :items="items" class="menu" >
        <slot name="menuitem"></slot>
      </fluent-menu-list>
    </template>
  </fluent-popover>
</template>

<script setup lang="ts">
  defineOptions({
    inheritAttrs: false
  })
  const attr = useAttrs()
  const p = defineProps({
    items: {type: Array<{text: string, icon?: string, type?: "string"}>, default: []},
    open: {type: Boolean, default: false},
    openOnHover: {type: Boolean, default: false},
    openOnContext: {type: Boolean, default: false},
    placement: {default: "bottom"},
    persistOnItemClick: {type: Boolean, default: false}
  })
  const {items, open, placement, persistOnItemClick} = p
  
</script>

