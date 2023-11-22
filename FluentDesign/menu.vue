<template>
  <div >
    <span @click.left.exact="()=>{open = !open}" @mouseenter="openOnHover?(()=>{open=true})():null" >
      <span ref="toggler"><slot v-bind="attr"></slot></span>
    </span>
    <Teleport to="#menus" v-if="open" > <!--with this implemented, there must be a div with id "menus" somewhere-->
      <fluent-menu-list :items="items" class="menu" :class="['placement-'+placement]" @item-clicked="!persistOnItemClick ? (()=>{open=false})() : null" >
        <slot name="menuitem"></slot>
      </fluent-menu-list>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    inheritAttrs: false
  })
  const attr = useAttrs()
  const {items, open, openOnContext, openOnHover, placement, persistOnItemClick} = defineProps({
    "items": {type: Array<{text: string, icon?: string, type?: "string"}>, default: []},
    open: {default: false},
    openOnHover: {default: false},
    openOnContext: {default: false},
    placement: {default: "bottom"},
    persistOnItemClick: {default: false}
  })
  const toggler = ref(null)
  const bcr = ref(new DOMRect(0,0,92,92)) // fake domrect
  const tw = computed(()=>bcr.value.width+"px")
  const th = computed(()=>"-"+bcr.value.height+"px")
  onMounted(()=>{
    // @ts-ignore
    bcr.value = toggler.value.querySelector("*").getBoundingClientRect()
  })
  
</script>
<style scoped>
  .menu {
    position: relative;
    margin: 0px;
    /**transform: translate3d(74.1257px, 588.156px, 0px);*/
    overflow-x: hidden;
    box-sizing: border-box;
    padding-top: 4px;
    min-width: 138px;
    box-shadow: var(--shadow16);
    width: max-content;
    padding-bottom: 4px;
    animation-name: move, opacity;
    animation-duration: var(--durationSlower);
    animation-composition: accumulate;
    animation-timing-function: var(--curveDecelerateMid);
    border: 1px solid transparent;
    border-radius: var(--borderRadiusMedium);
  }
  .menu.placement-bottom {
    left: 0px;
    top: 0px;
    --slide-distance-x: 0;
    --slide-distance-y: -10px
  }
  .menu.placement-top {
    left: 0px;
    bottom: v-bind(tw);
    --slide-distance-x: 0;
    --slide-distance-y: 10px
  }
  .menu.placement-left {
    right: 0px;
    top: v-bind(th);
    --slide-distance-y: 0;
    --slide-distance-x: -10px
  }
  .menu.placement-right {
    left: v-bind(tw);
    top: v-bind(th);
    --slide-distance-y: 0;
    --slide-distance-x: 10px
  }
  @keyframes move {
    0% {transform: translate(var(--slide-distance-x), var(--slide-distance-y))}
  }

  @keyframes opacity {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
</style>
