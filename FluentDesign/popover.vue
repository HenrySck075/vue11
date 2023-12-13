<template>
  <div>
    <span ref="toggler">
      <slot v-bind="attr" @click.left.exact="(e)=>{open = !open}" @mouseenter="openOnHover?(()=>{open=true})():null"></slot>
    </span>
    <Teleport to="#popovers">
      <div class="poppver" v-if="open" :class="['placement-'+placement]">
        <div v-if="custom">
          <slot name="surface"></slot>
        </div>
        <slot name="surface" v-else></slot>
      </div>
    </Teleport>
  </div>
</template>


<script setup lang="ts">
  defineOptions({
    inheritAttrs: false
  })
  const attr = useAttrs()
  const {open, openOnContext, openOnHover, placement, custom} = defineProps({
    "items": {type: Array<{text: string, icon?: string, type?: "string"}>, default: []},
    open: {default: false},
    openOnHover: {default: false},
    openOnContext: {default: false},
    placement: {default: "bottom"},
    custom: {default: false}
  })
  const bcr = ref(new DOMRect(0,0,92,92)) // fake domrect
  const tw = bcr.value.width
  const th = bcr.value.height
  let [tt,tb,tl,tr,tx,ty] = [bcr.value.top,bcr.value.bottom,bcr.value.left,bcr.value.right,bcr.value.x,bcr.value.y]
  onMounted(()=>{
    // @ts-ignore
    bcr.value = toggler.value.querySelector("*").getBoundingClientRect()
    // note: if there's unused params, delete it
    tt = bcr.value.top 
    tb = bcr.value.bottom
    tl = bcr.value.left
    tr = bcr.value.right 
    tx = bcr.value.x 
    ty = bcr.value.y
  })
</script>


<style>

  .popover.placement-bottom {
    left: v-bind(tl+"px");
    top: v-bind(tb+"px");
    --slide-distance-x: 0;
    --slide-distance-y: -10px
  }
  .popover.placement-top {
    left: v-bind(tl+"px");
    bottom: v-bind(tw+"px");
    --slide-distance-x: 0;
    --slide-distance-y: 10px
  }
  .popover.placement-left {
    right: 0px;
    top: v-bind(th);
    --slide-distance-y: 0;
    --slide-distance-x: 10px
  }
  .popover.placement-right {
    left: v-bind(tr+"px");
    top: v-bind(ty+"px");
    --slide-distance-y: 0;
    --slide-distance-x: -10px
  }
  .popover {
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
  @keyframes move {
    0% {transform: translate(var(--slide-distance-x), var(--slide-distance-y))}
  }

  @keyframes opacity {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
</style>
