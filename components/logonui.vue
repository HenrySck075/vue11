<template>
    <div class="logonui" style="width:100%; height:100%; overflow:hidden; pointer-events: none" v-if="!logindone" @keydown.esc="cc">
      <img :src="wallpaper" class="w" style="position: fixed; position-anchor: 50% 0; top: 0; left: 0; width: 100%; height:100%; object-fit: cover; pointer-events: none; z-index:100">
      <div class="lock" style="width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:200" >
        <div style="position:relative;top:25%; left:50%;transform: translate(-50%,-50%);display:flex;justify-content:center;flex-wrap: wrap; width:250px"  @click="c">
          <h2 style="font-size: 80px; margin:0">{{time}}</h2>
          <p style="font-size:23px; margin:0">{{date}}</p>
        </div>
        <div style="display:flex; justify-content: end; position: absolute; bottom: 16px; right: 16px;" id="deviceStatus">
          <!--<template v-if="batteryStatus.dischargingTime !== Infinity">-->
            <fluent-icon :icon='"Battery"+(batteryStatus.charging?"Charging":"")+batteryStatus.level*10' />
          <!--</template>-->
          <fluent-icon :icon='connection.type ?? (connection.effectiveType == "4g"?"wifi":connection.effectiveType=="3g"?"wifi3":connection.effectiveType=="2g"?"wifi2":"wifi1")' />
        </div>
      </div>
      <div class="login" data-theme="dark"> 
        <fluent-button @click="cc" appearance="subtle" icon="LeftArrowKeyTime0"></fluent-button>
        <div style="display:flex;position:fixed;top:50%;left:50%;transform: translate(-50%, -70%); width: 200px; flex-wrap: wrap;justify-content:center">
          <div>
            <img src="@/assets/defaultprofile.png" style="border-radius: 50%; width: 150px; height: 150px">
            <p style="text-align: center; font-weight: 600; font-size:20px">User</p>
          </div>
          <fluent-input style="--colorNeutralBackground1:rgba(41,41,41,0.5)">
            <template v-slot:contentAfter >
              <fluent-icon icon="RightArrowKeyTime0"  @click="login"/>
            </template>
          </fluent-input>
        </div>
        <div style="display:flex; justify-content: end; position: fixed; bottom: 16px; right: 16px;" id="deviceStatus">
          <fluent-menu>
            <fluent-button icon="powerbutton"></fluent-button>
            <template v-slot:menuitem>
              <fluent-menu-item icon="powerbutton" @click="$nuxt.$shutdown">Shut down</fluent-menu-item>
              <fluent-menu-item icon="refresh">Restart</fluent-menu-item>
            </template>
          </fluent-menu>
        </div>
      </div>
    </div>
</template>

<script setup>
  const logindone = ref(false)
  const emit = defineEmits(["logindone"])
  function login() {
    emit("logindone")
    document.querySelector(".logonui").style.opacity = 0
    setTimeout(()=>{
      logindone.value = true
    },1000)
  }
  
  const connection = navigator.connection
  const batteryStatus = await navigator.getBattery()
  const ns = useNuxtApp().$ns
  const wallpaper = ns.getData("config").lockscreenWallpaper 

  const padS = (s,a)=>s.toString().padStart(a, "0")
  const d = new Date()
  const f = Intl.DateTimeFormat(navigator.language,{month:"long",day:"numeric",weekday:"long"}) 
  const h = {} 
  f.formatToParts(d).forEach(v=>{h[v.type]=v.value})

  const time = ref(padS(d.getHours(),2)+":"+padS(d.getMinutes(),2))
  const date = ref(h.weekday+", "+h.month+" "+h.day)

  setTimeout(()=>setInterval(() => {
    const d = new Date()
    const h = {} 
    f.formatToParts(d).forEach(v=>{h[v.type]=v.value})
    time.value = padS(d.getHours(),2)+":"+padS(d.getMinutes(),2)
    date.value = h.weekday+", "+h.month+" "+h.day
  }, 60000),(60-d.getSeconds())*1000)

  let timeoutID = 0

  function c() {
    document.querySelector(".lock").style.top = "-100vh"
    document.querySelector(".w").classList.add("pan")
    document.querySelector(".login").style.opacity=1
    timeoutID = setTimeout(cc, 60000)
  }
  function cc() {
    document.querySelector(".lock").style.top = "0vh"
    document.querySelector(".w").classList.remove("pan")
    document.querySelector(".login").style.opacity=0
    clearTimeout(timeoutID) 
  }
</script>

<style>
  #deviceStatus > * {
    margin-left: 8px;
    margin-right: 8px
  }
  .logonui > * {pointer-events:auto}
  .logonui {
    transition: opacity 1s ease-out;
    opacity: 1
  }
  div >* {
    color: white
  }
  .login {
    opacity:0;
    transition: opacity 0.3s ease-out;
    z-index: 2000;
    position:fixed;top:0;left:0
  }
  .lock {
    transition: top 0.3s ease-out
  }
  .w {
    transition: scale 0.3s ease-out, filter 0.3s ease-out;
    scale:1;
    filter: none
  }
  .w.pan {
    scale:1.05;
    filter: brightness(90%) blur(1rem)
  }
</style>
