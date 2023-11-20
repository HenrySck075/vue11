<template>
    <button :class="[shape, appearance, hasLabel?'':'iconOnly']" :aria-disabled="disabledFocusable">
      <fluent-icon v-if="iconPosition=='before' && icon" :icon="icon" id="icon" class="before"></fluent-icon>
      <slot />
      <fluent-icon v-if="iconPosition=='after' && icon" :icon="icon" id="icon" class="after"></fluent-icon>
    </button>
</template>

<script setup>
  const {appearance, shape, icon, iconPosition, disabledFocusable} = defineProps({
    "appearance":{default: "secondary"}, 
    "shape":{default:"rounded"},
    "icon":{default:""},
    "iconPosition":{default:"before"},
    "disabledFocusable":{default:"false"}
  })

  const hasLabel = !!useSlots().default
</script>

<style scoped>
  .iconOnly {
    max-width:32px;
    min-width:32px;
  }
  .iconOnly > #icon {
    margin: 0;
  }
  #icon {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    font-size: 20px;
    height: 20px;
    width: 20px;
    color: var(--colorNeutralForeground1);
  }
  .before {
    margin-right: var(--spacingHorizontalSNudge);
  }
  .after {
    margin-left: var(--spacingHorizontalSNudge);
  }
  button.subtle:hover > #icon, button.transparent:hover > #icon {
    color: var(--colorNeutralForeground2BrandHover);
  }
  /** shape*/
  button.square {
    border-radius: var(--borderRadiusNone);
  }
  button.circular {
    border-radius: var(--borderRadiusCircular);
  }
  /** appearance */
  button.primary {
    background-color: var(--colorBrandBackground);
    border-color: transparent;
  }
  button.primary:hover {
    background-color: var(--colorBrandBackgroundHover);
  }
  button.primary:hover:active {
    background-color: var(--colorBrandBackgroundPressed);
  }
  button.outline, button.outline:hover, button.outline:hover:active{
    background-color:transparent;
  }
  button.subtle, button.transparent {
    color: var(--colorNeutralForeground2);
    background-color: transparent;
    border-color: transparent;
  }
  button.subtle:hover, button.transparent:hover{
    background-color: var(--colorSubtleBackgroundHover);
    border-color: transparent;
  }
  button.transparent:hover {
    color: var(--colorNeutralForeground2BrandHover)
  }
  /**default style*/
  button {
    align-items: center;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    text-decoration-line: none;
    vertical-align: middle;
    margin: 0px;
    overflow: hidden;
    background-color: var(--colorNeutralBackground1);
    color: var(--colorNeutralForeground1);
    border: var(--strokeWidthThin) solid var(--colorNeutralStroke1);
    font-family: var(--fontFamilyBase);
    outline-style: none;
    padding: 5px var(--spacingHorizontalM);
    min-width: 96px;
    border-radius: var(--borderRadiusMedium);
    font-size: var(--fontSizeBase300);
    font-weight: var(--fontWeightSemibold);
    line-height: var(--lineHeightBase300);
    transition-duration: var(--durationFaster);
    transition-property: background, border, color;
    transition-timing-function: var(--curveEasyEase);
  }
  button:hover {
    background-color: var(--colorNeutralBackground1Hover);
    border-color: var(--colorNeutralStroke1Hover);
    color: var(--colorNeutralForeground1Hover);
    cursor: pointer;
  }
  button:hover:active {
    background-color: var(--colorNeutralBackground1Pressed);
    border-color: var(--colorNeutralStroke1Pressed);
    color: var(--colorNeutralForeground1Pressed);
    outline-style: none;
  }
</style>
