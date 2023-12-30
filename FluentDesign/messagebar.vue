<template>
  <component :is="as" role="group" id="messagebar">
    <div id="msgIcon">
      <fluent-icon icon="info"></fluent-icon>
    </div>
    <div id="msgBody">
      <span id="msgBody__title">{{title}}</span>
      {{content}}
    </div>
    <div id="msgClose"></div>
    <div id="msgActions">
      <slot></slot>
    </div>
  </component>
</template>
<script setup>
  const {title,content,as,icon} = defineProps({
    icon: String,
    as: "div",
    title: String,
    content: String
  })
</script>
<style>
  #messagebar {
    grid-template-areas: "icon body actions" "secondaryActions secondaryActions secondaryActions";
    grid-template-columns: auto 1fr auto;
    padding-top: var(--spacingVerticalMNudge);
    align-items: start;
    white-space: normal;
    grid-template: "icon body secondaryActions actions" 1fr / auto 1fr auto auto;
    display: grid;
    padding-left: var(--spacingHorizontalM);
    border: var(--strokeWidthThin) solid var(--colorNeutralStroke1);
    border-radius: var(--borderRadiusMedium);
    min-height: 36px;
    box-sizing: border-box;
    background-color: var(--colorNeutralBackground3);
  }
  #msgIcon {
    grid-area: icon / icon / icon / icon;
    font-size: var(--fontSizeBase500);
    margin-right: var(--spacingHorizontalS);
    color: var(--colorNeutralForeground3);
    display: flex;
    align-items: center;
  }
  #msgBody {
    font-family: var(--fontFamilyBase);
    font-size: var(--fontSizeBase300);
    font-weight: var(--fontWeightRegular);
    line-height: var(--lineHeightBase300);
    grid-area: body / body / body / body;
    padding-right: var(--spacingHorizontalM);
  }
  #msgBody__title {
    font-family: var(--fontFamilyBase);
    font-size: var(--fontSizeBase300);
    font-weight: var(--fontWeightSemibold);
    line-height: var(--lineHeightBase300);
  }
  #msgClose {
    grid-area: actions / actions / actions / actions;
    padding-right: var(--spacingHorizontalM);
  }
  #msgActions {
    grid-area: secondaryActions / secondaryActions / secondaryActions / secondaryActions;
    display: flex;
    justify-content: center;
    column-gap: var(--spacingHorizontalM);
    padding-right: var(--spacingVerticalM);
    margin-top: var(--spacingVerticalMNudge);
    margin-bottom: var(--spacingVerticalS);
  }
</style>
