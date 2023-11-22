<template>
  <component :is="href ? 'a' : 'div'" class="menuitem">
    <fluent-icon :icon="icon" v-if="icon"></fluent-icon>
    <fluent-icon v-if="hasIcons" empty></fluent-icon>
    <span class="milabel">
      <slot></slot>
    </span>
  </component>
</template>
<script setup lang="ts">
  const {icon, href, hasIcons} = defineProps({
    icon: {default: ""},
    href: {default: ""},
    hasIcons: {default: false}
  })
</script>
<style>
  .menuitem {
    border-radius: var(--borderRadiusMedium);
    position: relative;
    color: var(--colorNeutralForeground2);
    background-color: var(--colorNeutralBackground1);
    padding-right: var(--spacingVerticalSNudge);
    padding-left: var(--spacingVerticalSNudge);
    padding-top: var(--spacingVerticalSNudge);
    box-sizing: border-box;
    max-width: 290px;
    min-height: 32px;
    flex-shrink: 0;
    display: flex;
    align-items: start;
    font-size: var(--fontSizeBase300);
    cursor: pointer;
    gap: 4px;
    user-select: none;
  }
  .menuitem:hover {
    background-color: var(--colorNeutralBackground1Hover);
    color: var(--colorNeutralForeground2Hover);
  }
  .milabel {
    padding-left: 2px;
    padding-right: 2px;
    background-color: transparent;
    flex-grow: 1;
  }
</style>
