<template>
  <VDropdown class="fp" :placement="placement" ref="drop" :arrow-padding="0" strategy="fixed" :container="sh()">
    <slot v-bind="attr" ></slot>
    <template #popper>
      <div :class="['bpopover', custom?'':'popover']" >
        <slot name="surface"></slot>
      </div>
    </template>
  </VDropdown>
</template>


<script setup lang="ts">
  //import {PopperWrapper} from "floating-vue"
  defineOptions({
    inheritAttrs: false
  })

  function tocss(jq){
    let el = jq[0]
    return el.tagName+(el.id?"#":"")+el.id+(el.className?".":"")+el.className.replaceAll(" ",".")+":nth-child("+jq.index()+")"
  }
  function toCSS(jqueryObject){
    let j = [tocss(jqueryObject)]
    jqueryObject.parents().each(function(){
      j.push(tocss(window.jQuery(this)))
    })
    return j.reverse().join(" > ")
  }
  const attr = useAttrs()
  const {open: iniOpen, openOnContext, openOnHover, placement, custom} = defineProps({
    "items": {type: Array<{text: string, icon?: string, type?: "string"}>, default: []},
    open: {default: false},
    openOnHover: {default: false},
    openOnContext: {default: false},
    placement: {default: "bottom"},
    custom: {type:Boolean, default: false}
  })
  const drop = ref()
  //:3
  let sh = ()=>"#popovers"
  const a = watch(drop,(e)=>{
  console.log(e)
    sh=()=>toCSS(window.jQuery(e.$el).parents('#fluent-provider'))
    a()
  })
  if (placement.startsWith("auto")) {
    throw new Error('"auto", "auto-start", "auto-end" will NEVER be the supported options')
  }
  const open = ref(iniOpen)
</script>


<style>

  [data-popper-placement^=bottom] {
    --slide-distance-x: 0;
    --slide-distance-y: -10px
  }
  [data-popper-placement^=top] {
    --slide-distance-x: 0;
    --slide-distance-y: 10px
  }
  [data-popper-placement^=left] {
    --slide-distance-y: 0;
    --slide-distance-x: 10px
  }
  [data-popper-placement^=right] {
    --slide-distance-y: 0;
    --slide-distance-x: -10px
  }

  .popover {
    overflow-x: hidden;
    box-sizing: border-box;
    padding-top: 4px;
    min-width: 138px;
    box-shadow: var(--shadow16);
    width: max-content;
    /**padding-bottom: 4px;*/
    border: 1px solid transparent;
    border-radius: var(--borderRadiusMedium);
    background-color: var(--colorNeutralBackground1)
  }
  .v-popper__popper.v-popper__popper--shown {
    transition-property: transform;
    transition-duration: var(--durationSlower) !important; /**fuck*/
    transition-timing-function: var(--curveDecelerateMid)! important; /**off */
  }
  .v-popper__popper.v-popper__popper--shown.v_popper__popper--show-from, .v-popper__popper.v-popper__popper--shown.v_popper__popper--hide-to {
    transform: translate(var(--slide-distance-x), var(--slide-distance-y));
    opacity: 0;
  }
  .v-popper__popper.v-popper__popper--shown.v_popper__popper--show-to, .v-popper__popper.v-popper__popper--shown.v_popper__popper--hide-from {
    transform: translate(0,0);
    opacity: 1;
  }
  .v-popper__popper--hide-from {
    transition-property: none;
  }

</style>
