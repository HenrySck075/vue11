<template>
  <div class="menulist">
    <div role="menu">
      <template v-for="i in items" v-if="items.length"> <!--what-->
        <fluent-menu-item icon="i.icon" :has-icons="hasIcons">{{i.text}}</fluent-menu-item>
      </template>
      <slot v-else></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
  const {items, hasIcons} = defineProps({
    "items": {type: Array<{text: string, icon?: string, type?: "string"}>, default: []},
    "hasIcons": {default: false}
  })
  console.log(!!items)
  const emit = defineEmits(["itemClicked"])
  onMounted(()=>{
    document.querySelectorAll("[role=menu] > .menuitem").forEach(e=>{
      e.addEventListener("click", ()=>{
        console.log(":D")
        emit("itemClicked")
      })
    })
  })
</script>
<style scoped>
  .menulist {
    border-radius: var(--borderRadiusMedium);
    padding-bottom: 4px;
    width: max-content;
    box-shadow: var(--shadow16);
    max-width: 300px;
    min-width: 128px;
    min-height: 48px;
    padding-top: 4px;
    padding-bottom: 4px;
    line-height: var(--lineHeightBase300);
    font-weight: var(--fontWeightRegular);
    font-size: var(--fontSizeBase300);
    font-family: var(--fontFamilyBase);
    text-align: left;
    color: var(--colorNeutralForeground1);
    background-color: var(--colorNeutralBackground1)
  }
  [role=menu] {
    row-gap: 2px;
    column-gap: 2px;
    flex-direction: column;
    display: flex;
  }
</style>
