<template>
  <fluent-popover v-bind="p" custom>
    <slot v-bind="attr" ></slot>
    <template v-slot:surface> <!--with this implemented, there must be a div with id "menus" somewhere-->
      <fluent-menu-list :items="items" class="menu" :class="['placement-'+placement]" @item-clicked="!persistOnItemClick ? (()=>{open=false})() : null" >
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
<style scoped>
  .menu {
    position: fixed;
    margin: 0px;
    /**transform: translate3d(74.1257px, 588.156px, 0px);*/
    overflow-x: hidden;
    box-sizing: border-box;
    padding-top: 4px;
    min-width: 138px;
    box-shadow: var(--shadow16);
    width: max-content;
    /**padding-bottom: 4px;*/
    animation-name: move, opacity;
    animation-duration: var(--durationSlower);
    animation-composition: accumulate;
    animation-timing-function: var(--curveDecelerateMid);
    border: 1px solid transparent;
    border-radius: var(--borderRadiusMedium);
  }
</style>
