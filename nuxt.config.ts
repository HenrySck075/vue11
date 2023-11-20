export default defineNuxtConfig({
  css: ["~/assets/FluentDesign.css"],
  components: {
    "dirs": [
      {
        "path": "~/components/apps",
        "global": true
      },
      {"path": "~/FluentDesign", prefix:"fluent-"},
      "~/components",
    ]
  },
  ssr: false,
  devtools: { enabled: false },
})
