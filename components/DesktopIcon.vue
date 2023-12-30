<template>
  <div style="width: 60px; height: 90px; margin: 4px; border-radius: 4px; position: relative;" :class="{DesktopIcon: true, DesktopIconSelected: selected}" @dblclick="the" @keydown.delete="selected && $nuxt.$deleteIcon(key)">
    <div style="position: absolute; width:40px; height: 40px; left: 12px">
      <img :src="icon" style="width:40px; height: 40px; display:block; position: absolute">
      <img src="@/assets/WindowsIcons/imageres/Shortcut.ico" v-if="isShortcut" style="width:40px; height: 40px;display:block; position: relative">
    </div>
    <p style="top: 48px; position: absolute; width: 60px; display: -webkit-box; line-clamp: 2; -webkit-line-clamp: 2; -webkit-box-orient: vertical; margin:0; height: 50px; overflow:hidden; word-wrap:break-word; text-align: center">{{label}}</p>
  </div>
</template>
<script>
export default {
  props: {"icon":String, "label":String, "isShortcut": {type: Boolean, default: false}, "callback": {type: Function, default: ()=>{}}, key:String},
  data: () => {
    return {
      selected: false,
    }
  },
  methods: {
    the() {
      this.callback()
    }
  }
}
</script>
<style>
  .DesktopIcon {
    background-color: transparent;
    border-width: 3px;
  }
  .DesktopIcon:hover {
    background-color: rgba(145, 145, 145, 0.2);
    border-color: rgba(145, 145, 145, 0.4);
    cursor:pointer;
  }
  .DesktopIconSelected {
    background-color: rgba(145, 145, 145, 0.6);
    border-color: rgba(145, 145, 145, 0.4);
    cursor:pointer;
  }
</style>
