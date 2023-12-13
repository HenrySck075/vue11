<template>
  <micadiv style="width: 500px; height: 520px; max-height: 520px; overflow: hidden;" :style="{'bottom': toggled ? '320px' : 'calc(-100vh + 320px)', 'left':centerAligned ? '50%': '12px', 'transform': 'translate('+(centerAligned?'-50%':'0')+', 50%)', 'transition': 'bottom 0.2s '+(toggled ?'cubic-bezier(0.5, 1, 0.89, 1)' : 'cubic-bezier(0.01, 0, 0.5, 0)' )} " >
    <micadiv style="background-color: rgba(0,0,0,0.02); width: 100%; height: 55px; bottom: 0; left: 0; border-top-color: gray"></micadiv>
    <div style="padding: 36px;">
      <fluent-input style="width:428px" placeholder="Type here to search">
        <template v-slot:contentBefore>
          <fluent-icon icon="search"></fluent-icon>
        </template>
      </fluent-input>
      <div style="padding-top:12px">
        <div style="display:flex">
          <p style="width: 290px; font-weight: bold; margin-left:20px">Pinned</p>
          <fluent-button style="height:30px; margin-top: auto; margin-bottom: auto; font-size:12px"  icon="ChevronRight" icon-position="after">All apps</fluent-button>
        </div>
        <div style="display: flex; flex-wrap: wrap">
          <StartMenuPinnedItem label="holy" />
          <StartMenuPinnedItem label="hell" />
          <StartMenuPinnedItem label="new" />
          <StartMenuPinnedItem label="response" />
          <StartMenuPinnedItem label="just" />
          <StartMenuPinnedItem label="dropped" />
          <StartMenuPinnedItem label="actual" />
          <StartMenuPinnedItem label="zombie" />
        </div>
      </div>
    </div>
  </micadiv>
</template>

<script setup>
  const {align,toggled} = defineProps(["align","toggled"])
  const centerAligned = computed(()=>align == "center")
</script>
