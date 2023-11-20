<template>
    <vue-resizable
      class="window"
      ref="resizableComponent"
      :dragSelector="dragSelector"
      :active="handlers"
      :fit-parent="fit"
      :maximize="maximize"
      max-width="100vw"
      max-height="100vh"
      :min-width="checkEmpty(minW)"
      :min-height="checkEmpty(minH)"
      :width="width"
      :height="height"
      :left="left"
      :top="top"
      @resize.prevent="eHandler"
      @drag.prevent="eHandler"
      @maximize="eHandler"
      style="position: fixed; pointer-events: auto"
    >
      <div :style="{'border': '1px solid black', borderRadius: '4px', boxShadow: '2px 9px 9px 5px rgba(0,0,0,0.3)', width: '100%', height: '100%', overflow: 'hidden', backgroundColor: 'white'}">
        <slot name="titleBar">
          <div :style="{display: 'flex', justifyContent: 'center', 'width': '100%'}">
            <div style="margin: 8px; margin-top: auto; margin-bottom:auto; display: block; "><img :src="icon" style="width: 20px; height: 20px; z-index:2999"></div>
            <div class="drag-container-1" style="height: 34px; width:100%; display: flex; flex-shrink: 1">
              <p style="display: block; margin-top: auto; margin-bottom: auto; color: black">{{title}}</p>
            </div>
            <div style="height: 100%; width:54px; display:flex;justify-content:end">
              <div class="action otter" style="height:100%; padding: 8px; z-index:3000" @mousedown="()=>{maximize=!maximize}">
                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <rect style="stroke: rgb(0, 0, 0); fill: rgba(216, 216, 216, 0);" width="14" height="14" rx="2" ry="2" x="2" y="2"/>
                </svg>
              </div>
              <div class="action close" style="height: 100%; padding: 8px; z-index:3000" @mousedown="c()">
                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" >
                  <path style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" d="M 2 2 L 14 13.974" transform="matrix(1, 0, 0, 1.0000000000000002, 0, 1.7763568394002505e-15)"/>
                  <path style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" d="M 2 2 L 14 13.974" transform="matrix(1, 0, 0, 1.0000000000000002, 0, 1.7763568394002505e-15)"/>
                  <path style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0); transform-origin: 13.974px 8px;" d="M 7.974 8 L 19.974 19.974" transform="matrix(0, 0.999992012978, -1.000007987022, 0, -2.98804e-7, -0.00000211614)"/>
                </svg>
              </div>
            </div>
          </div>
        </slot>
        <div style="background-color: transparent; color: black"><slot></slot></div>
      </div>
    </vue-resizable>
</template>

<script>
import VueResizable from "vue-resizable";

export default {
  components: { VueResizable },
  props:{
    width: Number,
    height:Number,
    title:{
      type: String,
      default: "wefhuiohuow"
    },
    icon:{
      type: String,
      default: "_nuxt/assets/WindowsIcons/imageres/Executable.ico"
    },
    color:"#FFF"
  },
  data() {
    const tw=10
    const th=10
    return {
      handlers: ["r", "rb", "b", "lb", "l", "lt", "t", "rt"],
      left: `calc( 25% - ${tw / 2}px)`,
      top: `calc(25% - ${th / 2}px)`,
      minW: 300,
      minH: 150,
      fit: true,
      maximize: false,
      dragSelector: ".drag-container-1",
    };
  },
  methods: {
    eHandler(data) {
      this.width = data.width;
      this.height = data.height;
      this.left = data.left;
      this.top = data.top;
      if (data.eventName === "maximize") {
        this.maximize = data.state;
      }
    },
    checkEmpty(value) {
      return typeof value !== "number" ? 0 : value;
    },
    c() {
      this.$emit("close")
    }
  },
  emits: ["close"],
  filters: {
    checkEmpty(value) {
      return typeof value !== "number" ? 0 : value;
    },
  },
};
</script>

<style>

.container {
  width: 300px;
  height: 300px;
  display: inline-block;
  border: 1px solid #dddddd;
  background: #ffffff;
  color: #333333;
  float: left;
  margin: 10px;
}


.resizable {
  background-position: top left;
  width: 150px;
  height: 150px;
  padding: 0;
  border: 1px solid #003eff;
  background: #007fff;
  font-weight: normal;
  color: #ffffff;
  position: relative;
  display:inline
}
.action {
  transition: background-color 0.2s ease-in-out;
  width: 16px
}
.close:hover {
  background-color: red;
}
.otter:hover {
  background-color: rgba(160,160,160,0.4);
}
</style>
