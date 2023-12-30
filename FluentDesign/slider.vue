<template>
  <div id="fluent-slider" :style="{'--fui-Slider--progress':value+'%'}">
    <input id="fs-core" type="range" min="1" max="100" :value="value" @input="(e)=>{console.log(e); value = e.target.value; emit('input', e)}">
    <div id="fs-rail"></div>
    <div id="fs-button"></div>
  </div>
</template>
<script setup>
  const {value} = defineProps({
    value: {type: Number, default: 30}
  })
  const emit = defineEmits(["input"])
</script>
<style>
  #fluent-slider {
    --fui-Slider__thumb--color: var(--colorCompoundBrandBackground);
    --fui-Slider__progress--color: var(--colorCompoundBrandBackground);
    --fui-Slider__rail--color: var(--colorNeutralStrokeAccessible);
    --fui-Slider__rail--size: 4px;
    --fui-Slider__thumb--size: 20px;
    --fui-Slider--direction: 90deg;
    grid-template-columns: 1fr calc(100% - var(--fui-Slider__thumb--size)) 1fr;
    grid-template-rows: 1fr var(--fui-Slider__thumb--size) 1fr;
    min-width: 120px;
    justify-items: center;
    touch-action: none;
    min-height: 32px;
    align-items: center;
    position: relative;
    display: inline-grid;
  }
  #fluent-slider:hover {
    --fui-Slider__thumb--color: var(--colorCompoundBrandBackgroundHover);
    --fui-Slider__progress--color: var(--colorCompoundBrandBackgroundHover);
  }
  #fs-core {
    margin: 0;
    padding: 0;
    grid-column-end: -1;
    grid-column-start: 1;
    grid-row-end: -1;
    grid-row-start: 1;
    opacity: 0;
    height: 20px;
    cursor: pointer;
  }
  #fs-rail {
    height: var(--fui-Slider__thumb--size);
    outline: 1px solid var(--colorTransparentStroke);
    background-image: linear-gradient(var(--fui-Slider--direction),var(--fui-Slider__progress--color) 0%,var(--fui-Slider__progress--color) var(--fui-Slider--progress),var(--fui-Slider__rail--color) var(--fui-Slider--progress));
    forced-color-adjust: none;
    grid-column-end: 2;
    grid-column-start: 2;
    grid-row-end: 2;
    grid-row-start: 2;
    pointer-events: none;
    border-radius: var(--borderRadiusXLarge);
  }
  #fs-button {
    left: var(--fui-Slider--progress);
    box-shadow: 0 0 0 calc(var(--fui-Slider__thumb--size) * .2) var(--colorNeutralBackground1) inset;
    transform: translateX(-50%);
    background-color: var(--fui-Slider__thumb--color);
    width: var(--fui-Slider__thumb--size);
    height: var(--fui-Slider__thumb--size);
    outline-style: none;
    position: absolute;
    forced-color-adjust: none;
    grid-column-end: 2;
    grid-column-start: 2;
    grid-row-end: 2;
    grid-row-start: 2;
    pointer-events: none;
    border-radius: var(--borderRadiusCircular);
  }
</style>
