<template>
  <div :data-theme="config.theme">
    <Logonui style="z-index: 3000" @logindone="()=>{logindone = true}" />
    <div style="height: 100vh; max-height: 100vh" class="dwm" v-show="logindone" @click.self="moom()">
      <img :src="wallpaper" alt="Windows desktop wallpaper" style="position: fixed; position-anchor: 50% 0; top: 0; left: 0; width: 100%; height:100%; object-fit: cover; pointer-events: none;">
      <div style="position:fixed; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: start; flex-wrap: wrap; flex-direction: column;">
        <template v-for="v in desktopicons">
          <DesktopIcon :icon="v.icon" :label="v.label.slice(0,-5)" :callback="v.cb" :isShortcut="v.label.includes('.lnk')||v.label.includes('.url')"></DesktopIcon>
        </template>
      </div>
      <transition-group tag="div" name="win" class="ok" style="position: fixed; top: 0vw; left: 0vh; width: 100vw; height: 100vh; pointer-events: none;">
        <template v-for="(v,k) in windows" :key="k">
          <component :is="v.comp" v-bind="v.props" @close="closeWindow(k)" @mousedown="(e)=>setHigherZ(e.target)"></component>
        </template>
      </transition-group>
      <!--Start menu-->
      <StartMenu align="center" :toggled="startTog" /> <!--need to define like this because left align exists-->
      <!--Taskbar-->
      <micadiv style="width:100vw; height:52px;position:fixed;bottom:0;left:0;overflow:hidden">
        <div style="display: flex; justify-content: end; position: fixed; right: 0; margin-top: 9px">
          <div class="taskbaricon clock" style="width: 80px; padding-right: 8px; margin-bottom: 8px;">
            <p style="margin: 0; text-align: right; font-size: 14px">{{time}}</p>
            <p style="margin: 0; text-align: right; font-size: 14px">{{date}}</p>
          </div>
        </div>
        <div style="display: flex; justify-content:center; margin-top:9px">
          <TaskbarIcon @click="start">
            <svg viewBox="0 0 14 14" style="width: 29px" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com">
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" x1="24" y1="0" x2="24" y2="48" id="gradient-4" gradientTransform="matrix(0.099002, -0.098984, 0.291629, 0.291699, -2.375351, 2.375609)">
                  <stop offset="0" style="stop-color: rgb(80, 208, 253);"></stop>
                  <stop offset="1" style="stop-color: rgb(1, 121, 211);"></stop>
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" x1="24" y1="0" x2="24" y2="48" id="gradient-0" gradientTransform="matrix(0.099032, -0.098954, 0.29154, 0.291786, -2.371331, 2.36862)" spreadMethod="pad">
                  <stop offset="0" style="stop-color: rgb(31.373% 81.569% 99.216%)"></stop>
                  <stop offset="1" style="stop-color: rgb(1, 121, 211);"></stop>
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" x1="76" y1="0" x2="76" y2="48" id="gradient-5" gradientTransform="matrix(0.098996, -0.09899, 0.29165, 0.291685, -7.523335, 7.523174)">
                  <stop offset="0" style="stop-color: rgb(80, 208, 253);"></stop>
                  <stop offset="1" style="stop-color: rgb(1, 121, 211);"></stop>
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" x1="76" y1="0" x2="76" y2="48" id="gradient-1" spreadMethod="pad" gradientTransform="matrix(0.099002, -0.098985, 0.291651, 0.291716, -7.529024, 7.516853)">
                  <stop offset="0" style="stop-color: rgb(31.373% 81.569% 99.216%)"></stop>
                  <stop offset="1" style="stop-color: rgb(0% 48.198% 62.616%)"></stop>
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" x1="24" y1="52" x2="24" y2="100" id="gradient-7" gradientTransform="matrix(0.0995, -0.09886, 0.292642, 0.292334, -17.600703, -12.860789)">
                  <stop offset="0" style="stop-color: rgb(31.373% 81.569% 99.216%)"></stop>
                  <stop offset="1" style="stop-color: rgb(1, 121, 211);"></stop>
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" x1="24" y1="52" x2="24" y2="100" id="gradient-3" spreadMethod="pad" gradientTransform="matrix(0.099373, -0.098988, 0.292917, 0.291857, -17.621826, -12.80892)">
                  <stop offset="0" style="stop-color: rgb(31.373% 81.569% 99.216%)"></stop>
                  <stop offset="1" style="stop-color: rgb(0% 48.198% 62.616%)"></stop>
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" x1="76" y1="52" x2="76" y2="100" id="gradient-6" gradientTransform="matrix(0.099125, -0.09886, 0.29158, 0.292377, -22.69149, -7.72232)">
                  <stop offset="0" style="stop-color: rgb(31.373% 81.569% 99.216%)"></stop>
                  <stop offset="1" style="stop-color: rgb(1, 121, 211);"></stop>
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" x1="76" y1="52" x2="76" y2="100" id="gradient-2" spreadMethod="pad" gradientTransform="matrix(0.098997, -0.098989, 0.291769, 0.291807, -22.700229, -7.651325)">
                  <stop offset="0" style="stop-color: rgb(31.373% 81.569% 99.216%)"></stop>
                  <stop offset="1" style="stop-color: rgb(0% 48.198% 62.616%)"></stop>
                </linearGradient>
              </defs>
              <path style="fill-rule: nonzero; stroke-opacity: 0; stroke: url('#gradient-0'); paint-order: fill; fill: url('#gradient-4');" d="M 1 0 H 6.72 V 6.72 H 0 V 1 A 1 1 0 0 1 1 0 Z" bx:shape="rect 0 0 6.72 6.72 1 0 0 0 1@b3728ae6"></path>
              <path style="fill-rule: nonzero; stroke-opacity: 0; stroke: url('#gradient-1'); paint-order: fill; fill: url('#gradient-5');" d="M 7.28 0 H 13 A 1 1 0 0 1 14 1 V 6.72 H 7.28 V 0 Z" bx:shape="rect 7.28 0 6.72 6.72 0 1 0 0 1@5abe787d"></path>
              <path style="fill-rule: nonzero; stroke-opacity: 0; stroke: url('#gradient-3'); paint-order: fill; fill: url('#gradient-7');" d="M 0 7.28 H 6.746 V 14 H 1 A 1 1 0 0 1 0 13 V 7.28 Z" bx:shape="rect 0 7.28 6.746 6.72 0 0 0 1 1@a36e69b9"></path>
              <path style="fill-rule: nonzero; stroke-opacity: 0; stroke: url('#gradient-2'); paint-order: fill; fill: url('#gradient-6');" d="M 7.28 7.28 H 14 V 13 A 1 1 0 0 1 13 14 H 7.28 V 7.28 Z" bx:shape="rect 7.28 7.28 6.72 6.72 0 0 1 0 1@eb786105"></path>
            </svg>
          </TaskbarIcon>
        </div>
      </micadiv>
    </div>
  </div>
</template>
<script setup>
  /**
  instructions:
  - closed windows will be changed to div
  - when a new window is created, find the first div and replace it there
  */  
  const logindone = ref(useRoute().query.skiplogonui ?? false)
  const startTog = ref(false)
  const d = useNuxtApp()
  const ns = d.$ns

  function start() {
    startTog.value = !startTog.value
  }
  const wallpaper = ref(ns.getData("config").desktopWallpaper)
  
  const padS = (s,a)=>s.toString().padStart(a, "0")
  const c = new Date()
  const time = ref(padS(c.getHours(), 2)+":"+padS(c.getMinutes(),2)+":"+padS(c.getSeconds(),2))
  const date = ref(padS(c.getDate(), 2)+"/"+padS(c.getMonth(),2)+"/"+c.getFullYear())

  setInterval(()=>{
    const c = new Date()
    time.value=padS(c.getHours(), 2)+":"+padS(c.getMinutes(), 2)+":"+padS(c.getSeconds(),2)
    if (c.getHours() == 0) {date.value=padS(c.getDate(), 2)+"/"+padS(c.getMonth(),2)+"/"+c.getFullYear()}
  },1000)

  /**@type {string[]}*/
  const windows = ref({})
  let occupiedKeys = {"windows":[], "icons":[]}
  const desktopicons = ref({})

  function moom() {
    for (let i of desktopicons.value.values()) {
      i.ref.value.pageRef.selected = false
    }
  }

  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  /**@param {HTMLDivElement} el*/
  function setHigherZ(el) {
    let target = el
    while (!target.classList.contains("resizable-component") && !target.classList.contains("window")) {
      target = target.parentElement
    }
    try {document.querySelector(".dwm .ok .window:last-child").style.zIndex-=1} catch {}
    target.style.zIndex=3000
  }
  function genkey(a,category) {
    let key;
    do {
      key = makeid(a)
    } while (occupiedKeys[category].includes(key))
    occupiedKeys[category].push(key)
    return key
  }
  const h = ns.getData("icons")
  /**
  @param {string} name
  @param {Record<string, any>} props
  */
  function addWindow(name, props={}) {
    const key = genkey(9,"windows");
    windows.value[key]={comp: resolveComponent((()=>`${name}`)()), "props": {...props, "class": key}}//comps[name] || comps[camelize(name)] || comps[capitalize(camelize(name))], props})
  }
  function closeWindow(key) {
    delete windows.value[key]
    occupiedKeys.windows.splice(occupiedKeys.windows.indexOf(key),1)
  }
  function addIcon(label, icon="", cb=()=>{}) {
    const key = genkey(9,"icons");
    desktopicons.value[key]={"label": label, "icon": icon?icon:(h[label.slice(-4)]?h[label.slice(-4)]:h[""]), "ref": ref(), "cb": cb}
  }
  function deleteIcon(key) {
    delete desktopicons.value[key]
    occupiedKeys.icons.splice(occupiedKeys.icons.indexOf(key),1)
  }
  addIcon("iefjjife", "", ()=>addWindow('whatthehell'))
  const config = reactive({
    theme: "dark"
  })
  try {
    d.provide("winconfig",config)
    d.provide("addWindow", addWindow)
    d.provide("closeWindow", closeWindow)
    d.provide("addIcon", addIcon)
    d.provide("deleteIcon", deleteIcon)
  } catch {}



</script>
<style>
  body {
    overflow: hidden;
  }

  .win-enter-from, .win-leave-to {
    opacity: 0;
    scale: 0.8;
  }
  .win-enter-to, .win-leave-from {
    opacity: 1;
    scale: 1;
  }

  .win-enter-active {
    transition: opacity 0.2s ease-out, scale 0.2s ease-out;
  }
  .win-leave-active {
    transition: opacity 0.2s ease-in, scale 0.2s ease-in;
  }
   
  .logonui-leave-to {
    opacity: 0
  }
  .logonui-leave-from {
    opacity: 1
  }
  .logonui-leave-active {
    transition: opacity 0.2s ease-out
  }
</style>
