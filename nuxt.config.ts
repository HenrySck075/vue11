export default defineNuxtConfig({
  css: ["~/assets/FluentDesign.css"],
  components: {
    "dirs": [
      {
        "path": "~/components/apps",
        "global": true
      },
      {"path": "~/FluentDesign", prefix:"fluent-"},
      {"path": "~/FluentDesign/extra", prefix:"fluent-"},
      "~/components",
    ]
  },
  modules: ["floating-vue/nuxt", "@vueuse/nuxt"],
  ssr: false,
  plugins: ["~/plugins/jquery.js"],
  devtools: { enabled: true },
})
