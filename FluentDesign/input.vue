<template>
  <div>
    <label for="input"></label>
    <span :class=appearance style="width: inherit">
      <slot name="contentBefore" class="content_"><div></div></slot>
      <input :type="props.type" :id="props.id" :placeholder="props.placeholder" :value="props.value" @change="(...something)=>$emit('change',...something)">
      <slot name="contentAfter" class="content_"><div></div></slot>
    </span>
  </div>
</template>

<script setup>
  const props = defineProps({
    "size": {default: "medium"},
    "type": {default: "text"},
    "placeholder": {default: ""},
    "value": {default: ""},
    "appearance": {default:"outline"}
  })
  const appearance = computed(()=>[props.appearance])
  // defineOptions({inheritAttrs: false})
  
</script>

<style scoped>
  .content_ {
    box-sizing: border-box;
    color: var(--colorNeutralForeground3);
    display: flex;
  }
  div {
    max-width: 400px;
    row-gap: 2px;
    column-gap: 2px;
    flex-direction: column;
    display: flex;
  }
  span.underline {
    border-color: transparent;
    background-color: transparent;
    border-bottom-color: var(--colorNeutralStrokeAccessible);
  }
  span.filled-lighter {
    border-color: transparent;
  }
  span.filled-darker {
    border-color: transparent;
    background-color: var(--colorNeutralBackground3);
  }
  span.filled-darker:hover, span.filled-lighter:hover, span.filled-lighter:focus-within, span.filled-darker:focus-within {
    border-color:transparent;
  }
  span.underline:hover, span.underline:focus-within {
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
  }
  span {
    display: inline-flex;
    align-items: center;
    flex-wrap: nowrap;
    position: relative;
    box-sizing: border-box;
    min-height: 32px;
    font-size: var(--fontSizeBase300);
    font-weight: var(--fontWeightRegular);
    line-height: var(--lineHeightBase300);
    background-color: var(--colorNeutralBackground1);
    border-width: var(--strokeWidthThin);
    border-style: solid;
    border-color: var(--colorNeutralStroke1);
    border-bottom-color: var(--colorNeutralStrokeAccessible);
    gap: var(--spacingHorizontalXXS);
    border-radius: var(--borderRadiusMedium);
    padding: 0 var(--spacingHorizontalMNudge);
  }
  span:active, span:focus-within {
    border-top-color: var(--colorNeutralStroke1Pressed);
    border-right-color: var(--colorNeutralStroke1Pressed);
    border-left-color: var(--colorNeutralStroke1Pressed);
    border-bottom-color: var(--colorNeutralStrokeAccessiblePressed);
  }
  span:hover {
    border-bottom-color: var(--colorNeutralStrokeAccessibleHover);
    border-left-color: var(--colorNeutralStroke1Hover);
    border-right-color: var(--colorNeutralStroke1Hover);
    border-top-color: var(--colorNeutralStroke1Hover);
  }
  span::after {
    width: 100%;
    box-sizing: border-box;
    content: "";
    position: absolute;
    left: -1px;
    bottom: -1px;
    right: -1px;
    height: max(2px, var(--borderRadiusMedium));
    border-bottom-left-radius: var(--borderRadiusMedium);
    border-bottom-right-radius: var(--borderRadiusMedium);
    border-bottom: 2px solid var(--colorCompoundBrandStroke);
    clip-path: inset(calc(100% - 2px) 0px 0px);
    transform: scaleX(0);
    transition-property: transform;
    transition-duration: 0.01ms;
    transition-delay: 0.01ms;
  }
  span:focus-within::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: 0.01ms;
    transition-delay: 0.01ms;
  }
  input {
    box-sizing: border-box;
    flex-grow: 1;
    min-width: 0px;
    border-style: none;
    padding: 0 var(--spacingHorizontalXXS);
    color: var(--colorNeutralForeground1);
    background-color: transparent;
    outline-style: none;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
</style>
